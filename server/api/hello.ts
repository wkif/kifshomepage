export default defineEventHandler((event) => {
  const hour = new Date().getHours();
  let length: number = 0;
  let type = '';
  if (hour >= 18 || hour <= 6) {
    length = 109;
    type = 'night';
  } else {
    length = 184;
    type = 'light';
  }

  // 1-184随机数
  const random = Math.floor(Math.random() * length + 1);
  const url = `https://kifimg.oss-cn-beijing.aliyuncs.com/bg/${type}/kif-bg-${type}-${random}.jpg`;
  return {
    code: 0,
    message: "ok!",
    data: url,
  };
});
