const Koa = require('koa');
const path = require('path');
const static = require('koa-static');
const Router = require('koa-router');

const apiRouter = require('./server/router');

const app = new Koa();

const staticPath = './dist';
app.use(static(
  path.join(__dirname, staticPath)
));

const router = new Router();
router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
app.use(router.routes(), router.allowedMethods());

const port = process.env.PORT || 1337;
app.listen(port, () => {
  console.log("Server running at http://localhost:%d", port);
});
