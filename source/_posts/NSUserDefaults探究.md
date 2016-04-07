title: NSUserDefaults 探究
date: 2016-04-07 10:40:50
tags:
- iOS
- NSUserDefaults
categories:
- 编程
---

> NSUserDefaults 搜索顺序：
NSArgumentDomain -> Application -> NSGlobalDomain -> Languages -> NSRegistrationDomain

<!-- more -->
# NSUserDefaults 探究

## NSUserDefaults 常用场景

```
NSUserDefaults.standardUserDefaults().setBool(true, forKey: "isLogin")
```
取值时：
```
NSUserDefaults.standardUserDefaults().boolForKey("isLogin")
```
不推荐这样使用，因为`isLogin`如果不存在，会返回`false`，这在某些时候是有悖业务逻辑的，
推荐：
```
NSUserDefaults.standardUserDefaults().objectForKey("isLogin")
if let isLogin = NSUserDefaults.standardUserDefaults().objectForKey("isLogin") as? Bool {

} else {

}
```
同样的问题还存在于其他字段类型， 比如 `integerForKey` 方法。 默认情况下，如果所访问的 *key* 不存在的话 `integerForKey` 的返回值是 **0**， 这也会有可能会对我们真正的逻辑造成干扰。

## registerDefaults
有一种情况，我们虽然要分辨 key 所对应的值为空的情况，但只需要在它为空的时候指定一个我们自己的默认值即可。 这时候我们就可以使用 registerDefaults 方法了：
```
NSUserDefaults.standardUserDefaults().registerDefaults(["maxCount": 3])
NSUserDefaults.standardUserDefaults().integerForKey("maxCount") // 3
```
这个特性大家应该并不常见。还有一点要注意的，就是 `registerDefaults` 设置的默认值是 `不会持久化存储` 的，也就是说我们 `每次启动 APP 的时候，都需要这样设置一遍 `。

## 原理
NSUserDefaults 还有一个 Domain 的概念，当我们调用 NSUserDefaults.standardUserDefaults() 方法时，就会初始化 NSUserDefaults， 并且它默认会包含 5 个 Domain， 分别是：
- NSArgumentDomain
- Application
- NSGlobalDomain
- Languages
- NSRegistrationDomain

在我们调用的类似这样的方法时：
```
NSUserDefaults.standardUserDefaults().setBool(true, forKey: "isLogin")
```
都是在 Application 这个域上面存储的，但 NSUserDefaults 还包括了其他 4 个域，那么为什么要有域这样的设计呢。这可以从 registerDefaults 方法说起。 registerDefaults 方法我们刚刚看到了，可以为指定的 key 注册默认值。
其实 registerDefaults 所做的事情非常简单，只是将我们传递给它的参数都设置到了 NSRegistrationDomain 这个域中。 然后我们每次调用
```
NSUserDefaults.standardUserDefaults().integerForKey("maxCount")
```
这样的读取数据的方法时，实际上会在底层的存储结构中进行一次搜索，属性就是这样：
> NSArgumentDomain -> Application -> NSGlobalDomain -> Languages -> NSRegistrationDomain

比如我们例子中的 `maxCount`， 由于我们之前使用 registerDefaults 将它设置到了 NSRegistrationDomain 域中，并且由于我们没有调用 setInteger 方法将它设置到 Application 域中。
所以按照 NSUserDefaults 的默认搜索顺序，就会找到最后 NSRegistrationDomain 域中的那个 maxCount， 也就是我们所谓的默认值 3 了。

## 应用 - Debug
为什么 NSUserDefaults 会用 Domain 这样的设计方式呢？主要原因是它不只是用作简单的信息存储，还有更多的设计用途。

比如 NSArgumentDomain 这个域代表的是命令行参数，并且它的优先级最高。
我们可以在 Xcode 中为调试的应用设置命令行参数，进入任何一个项目，点击 Edit Scheme：
![Edit Scheme](/images/NSUserDefaults探究/1.png)
然后在 Scheme 管理界面中的 Arguments Passed On Launch 选项卡中添加命令行参数：
![Arguments Passed On Launch](/images/NSUserDefaults探究/2.png)
在应用启动的时候，我们可以使用 NSUserDefaults 来取得这个参数：
```
NSUserDefaults.standardUserDefaults().objectForKey("aString")
```

## 应用 - i18n
NSUserDefaults 给我们提供了一个更加快捷的方式，还记得我们前面提到的 NSUSerDefaults 的 5 个默认域么？ 其中一个域叫做 `Languages`。
其实 NSLocalizedString 函数是通过 NSUserDefaults 的 Languages 域中的信息来确定当前设备语言环境的。也就是我们每次修改设备的语言设置，系统都会在 Languages 设置相应的字段， 这个字段的 key 就是 `AppleLanguages`。
回想一下 NSUserDefaults 的搜索顺序，Languages 其实是在 NSArgumentDomain 的后面，那么是不是就意味着只要在命令行参数中指定了语言设置，就会覆盖原有的语言信息呢？

在一个当前语言配置为英文的设备上，打开 APP 设置，然后设置 AppleLanguages 命令行参数为 (zh-Hans) ：
![i18n](/images/NSUserDefaults探究/3.png)
这样即使设备本身的语言环境是英文，但我们应用中的语言环境也是中文了。

## 待续 - 帮助实现更多便捷操作
