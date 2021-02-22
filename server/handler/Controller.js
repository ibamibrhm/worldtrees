const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

module.exports = {
  getTree: async (socket) => {
    try {
      const [tree] = await prisma.$queryRaw('SELECT total_tree, updated_at FROM tree ORDER BY id DESC LIMIT 1');
      tree.total_tree = tree.total_tree.toString();
      socket.emit('tree', tree);
    } catch (error) {
      console.log(error);
    }
  },
  cron: async function (socket) {
    try {
      /**
       * cutDownTreePerYear = 15000000000
       * replantTreePerYear = 5000000000
       * marginTreePerYear = cutDownTreePerYear - replantTreePerYear
       * treeCutPerSecond = Math.round(marginTreePerYear / 365 / 86400)
       * treeCutperminute = treeCutPerSecond: 317 * 60 => 19020
      */
      await prisma.$executeRaw('UPDATE tree SET total_tree = total_tree - 19020, updated_at = UTC_TIMESTAMP ORDER BY id DESC LIMIT 1');
      this.getTree(socket);
    } catch (error) {
      console.log(error);
    }
  },
};
