export default defineEventHandler((event) => {
  // 1-131随机数
  const random = Math.floor(Math.random() * 131 + 1)
  const url = "https://kifimg.oss-cn-beijing.aliyuncs.com/bg/kif_bg_" + random + ".jpg"
  return {
    code: 0,
    message: 'ok!',
    data: url
  }
})
