const handleBlogRouter = require('./src/router/blog')
const handleUserRouter = require('./src/router/user')
const querystring = require('querystring');

// 用于处理 post data
const getPostData = (req) => {
	const promise = new Promise((resolve, reject) => {
			if (req.method !== 'POST') {
					resolve({})
					return
			}
			if (req.headers['content-type'] !== 'application/json') {
					resolve({})
					return
			}
			let postData = ''
			req.on('data', chunk => {
					postData += chunk.toString()
			})
			req.on('end', () => {
					if (!postData) {
							resolve({})
							return
					}
					resolve(
							JSON.parse(postData)
					)
			})
	})
	return promise
}
const serverHandle = (req, res) => {
    // 设置返回格式JSON
    res.setHeader('Content-type', 'application/json')
    // 获取 path
    const url = req.url
    req.path = url.split('?')[0]
    // 获取get参数
    req.query = querystring.parse(url.split('?')[1])


		// 处理post Data
		getPostData(req).then(postData =>{
			req.body = postData
    // 处理blog路由
			const blogData = handleBlogRouter(req, res)
			if(blogData) {
					res.end(
							JSON.stringify(blogData)
					)
					return
			}
			// 处理user路由
			const userResut = handleUserRouter(req, res)
			if(userResut) {
				res.end(
						JSON.stringify(blogData)
				)
			}
			// 未命中的路由 返回404
			res.writeHead(404, {"Content-type":"text/plain"})
			res.write("404 Not Found\n")
			res.end()
		})
}

module.exports = serverHandle