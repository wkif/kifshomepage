export default defineEventHandler(e=>{
	console.log('New Request Access');
	console.log(e.req.url);
})