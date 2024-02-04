export default defineEventHandler(async (event) => {
  const params = getQuery(event);
  const keyword = params.keyword as string;
  const baseUrl = `https://api.52vmy.cn/api/wl/word/bing?msg=${keyword}`;
  const repo = await $fetch(baseUrl);
  return repo as {
    code: number;
    message: string;
    data: string[];
  };
});
