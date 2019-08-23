const fs = require('fs')
const path = require('path')

// callback 方式获取一个文件内容
function getFileContent(fileName, callback) {
    const fullFileName = path.resolve(__dirname, 'files', fileName)
    fs.readFile(fullFileName, (err, data) => {
      if(err) {
          console.log(err)
          return
      }
      callback(
          JSON.parse(data.toString())
      )
    })
}
// 测试callback-hell
getFileContent('a.json', aData =>{
    console.log('a data', aData)
    getFileContent(aData.next, bData => {
        console.log('b data', bData)
        getFileContent(bData.next, cData => {
            console.log('c data', cData)
        })
    })
})

// 用promise获取文件内容
function getFileContent(fileName) {
    const promise = new Promise((resolve, reject) =>{
        const fullFileName = path.resolve(__dirname, 'files', fileName)
        fs.readFile(fullFileName, (err, data) => {
            if(err) {
                console.log(err)
                return
            }
            callback(
                JSON.parse(data.toString())
            )
          })
    })
    return promise
}