const router = require('koa-router')()
let db = require('../controller/db.js')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  // ctx.body = {
  //   name: 123
  // }
  let db = require('../controller/db.js')
})
router.get('/getError', async (ctx, next) => {
  console.log(ctx.req);
  if (ctx.query.type) {
    ctx.body = {
      code: 200,
      // data:ctx.query,
      msg: 'success'
    }
    db(ctx)
  } else {
    ctx.body = {
      code: 200,
      msg: '错误上报失败,缺少关键参数'
    }
  }


})

module.exports = router
