const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');
const Controller = require('./handler/Controller');
const CronJob = require('cron').CronJob;

const treeHandler = require('./handler/tree');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

if (!dev) {
  require('newrelic');
}

io.on('connection', socket => {
  console.log('connected', socket.id);
  Controller.getTree(socket);
});

const job = new CronJob('* * * * *', () => {
  Controller.cron(io);
}, null, true, 'Asia/Jakarta');

job.start();

nextApp.prepare().then(() => {
  app.disable('x-powered-by');

  app.use('/tree', (req, res, next) => {
    if (req.headers.authorization !== process.env.MASTER_TOKEN) {
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
    next();
  }, treeHandler);

  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
