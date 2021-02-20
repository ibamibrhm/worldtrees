const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

module.exports = {
  init: async (socket, updatedTree) => {
    try {
      if (updatedTree) {
        socket.emit('tree', updatedTree);
      } else {
        const tree = await prisma.tree.findFirst({
          orderBy: {
            id: 'desc'
          },
          select: {
            total_tree: true
          }
        })
        tree.total_tree = tree.total_tree.toString()
        socket.emit('tree', tree);
      }
    } catch (error) {
      console.log(error)
    }
  },
  cron: async function (socket) {
    try {
      const latestData = await prisma.tree.findFirst({
        orderBy: {
          id: 'desc'
        },
        select: {
          id: true
        }
      })

      const updatedTree = await prisma.tree.update({
        where: {
          id: latestData.id
        },
        data: {
          total_tree: {
            /**
             * cutDownTreePerYear = 15000000000
             * replantTreePerYear = 5000000000
             * marginTreePerYear = cutDownTreePerYear - replantTreePerYear
             * 
             * treeCutPerSecond = Math.round(marginTreePerYear / 365 / 86400)
            */
            decrement: 19020 // tree cut perminute = treeCutPerSecond: 317 * 60
          }
        },
        select: {
          total_tree: true
        }
      })
      updatedTree.total_tree = updatedTree.total_tree.toString()

      this.init(socket, updatedTree)
    } catch (error) {
      console.log(error)
      res.status(500).json(error)
    }
  }
}