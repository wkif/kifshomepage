export default defineEventHandler(async (event) => {
  const params = getQuery(event);
  const res = {
    code: 200,
    message: "ok",
    data: {},
  };
  const moyuLink = `https://api.52vmy.cn/api/wl/moyu`;
  const repo = await $fetch(moyuLink);
  const buffer = Buffer.from(await repo.arrayBuffer());
  const base64Str = buffer.toString("base64");
  console.log("repo", base64Str);
  return res;
});
