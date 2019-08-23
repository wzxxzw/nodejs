const {getList, getDetail, newBlog,updataBlog, delBlog} = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleBlogRouter = (req,res) => {
		const method = req.method // GET POST
		const id = req.query.id


		// 获取博客列表
		if(method === 'GET' && req.path === '/api/blog/list') {
				let author = req.query.author || ''
				let keyword = req.query.keywor || ''
				const listData = getList(author, keyword)
				return new SuccessModel(listData)
		}

		// 获取博客详情
		if(method ==='GET' && req.path ==='/api/blog/detail') {
			const data = getDetail(id) 
			return new SuccessModel(data)
		}

		// 新建博客列表
		if(method === 'POST' && req.path ==='/api/blog/new') {
			const data = newBlog(req.body)
			return new SuccessModel(data)
		}
	 // 更新博客列表
	 if(method === 'POST' && req.path === '/api/blog/update') {
			const data = updataBlog(id,req.body)
			return new SuccessModel(data)
	 }
		// 删除博客列表
		if(method === 'POST' && req.path === '/api/blog/del') {
			const data = delBlog(id)
			return new SuccessModel(data)
		}
}

module.exports = handleBlogRouter