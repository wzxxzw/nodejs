const getList = (author, keywor) => {
    return [
      {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1566454209720,
        author: 'zhangsan'
      },
      {
        id: 2,
        title: '标题A',
        content: '内容A',
        createTime: 1566454209720,
        author: 'lisi'
      }
    ]
}
 const getDetail =(id) =>{
   return [
    {
      id: 3
    }     
  ]
 }
 const newBlog =(blogData={}) => {
   // blogData是个博客对象，包含title， content属性
   console.log('newblogdata', blogData)
   return [{
     id: 3 // 表示新建博客，插入到数据表中 ID
   }]
 }
 const updataBlog =(id,blogData) => {
   return true
 }
 const delBlog =(id) => {
   return true
 }
module.exports = {
  getList,
  getDetail,
  newBlog,
  updataBlog,
  delBlog
}