title: "Swift-沙盒常用目录"
date: 2016-03-24 21:30:29
tags:
- Swift
- iOS
categories:
- 编程
---

项目开发中常用到的 目录结构：

```
/**
 *  1. Home目录  ./
 *  整个应用程序各文档所在的目录
 */
let homeDirectory: String = NSHomeDirectory()
print("Home path: \(homeDirectory)")

/**
 *  2. Documnets目录  ./Documents
 *  用户文档目录，苹果建议将程序中建立的或在程序中浏览到的文件数据保存在该目录下，iTunes备份和恢复的时候会包括此目录
 */

let documnetPath1: String? = NSSearchPathForDirectoriesInDomains(NSSearchPathDirectory.DocumentDirectory, NSSearchPathDomainMask.UserDomainMask, true).first

let documnetPath2: String = NSHomeDirectory() + "/Documents"

print("Document path: \(documnetPath1)")
print(documnetPath2)

/**
 *  3. Library目录  ./Library
 *  这个目录下有两个子目录：Caches 和 Preferences
 *  Library/Preferences目录，包含应用程序的偏好设置文件。不应该直接创建偏好设置文件，而是应该使用NSUserDefaults类来取得和设置应用程序的偏好。
 *  Library/Caches目录，主要存放缓存文件，iTunes不会备份此目录，此目录下文件不会再应用退出时删除
 */
 //Library目录－方法1
let libraryPath1: String? = NSSearchPathForDirectoriesInDomains(NSSearchPathDirectory.LibraryDirectory,
    NSSearchPathDomainMask.UserDomainMask, true).first

//Library目录－方法2
let libraryPath2: String = NSHomeDirectory() + "/Library"

print("Library path: \(libraryPath1)")
print(libraryPath2)


//Cache目录－方法1
let cachePath1: String? = NSSearchPathForDirectoriesInDomains(NSSearchPathDirectory.CachesDirectory,
    NSSearchPathDomainMask.UserDomainMask, true).first

//Cache目录－方法2
let cachePath2: String = NSHomeDirectory() + "/Library/Caches"

print("Library/Caches path: \(cachePath1)")
print(cachePath2)

/**
*  4. tmp目录  ./tmp
*  用于存放临时文件，保存应用程序再次启动过程中不需要的信息，重启后清空。
*/
 //方法1
let tmpDir: String = NSTemporaryDirectory()

//方法2
let tmpDir2: String = NSHomeDirectory() + "/tmp"

print("tmp dir: \(tmpDir)")
print(tmpDir2)

/**
*  5. 程序打包安装的目录 NSBundle.mainBundle()
*  工程打包安装后会在NSBundle.mainBundle()路径下，该路径是只读的，不允许修改。
*  所以当我们工程中有一个SQLite数据库要使用，在程序启动时，我们可以把该路径下的数据库拷贝一份到Documents路径下，以后整个工程都将操作Documents路径下的数据库。
*/
//声明一个Documents下的路径
let dbPath: String = NSHomeDirectory() + "/Documents/DB.sqlite"
//判断数据库文件是否存在
if !NSFileManager.defaultManager().fileExistsAtPath(dbPath){
    //获取安装包内数据库路径
    let bundleDBPath:String? = NSBundle.mainBundle().pathForResource("DB", ofType: "sqlite")
    //将安装包内数据库拷贝到Documents目录下
    do {
        try NSFileManager.defaultManager().copyItemAtPath(bundleDBPath!, toPath: dbPath)
    } catch _ {
        print("Couldn't copy!")
    }
}
```
