title: Xcode7.1菜单选项
date: 2016-03-21 16:30:49
tags:
- iOS
- Xcode
categories:
- 编程
---

下面划了删除线的选项是太基础的选项可以忽略，`加粗的选项是需要注意的`。

| File: |     |
| -------- | ----- |
| New : 可以新建tap,窗口，新文件，playground，workspace，target等等。 <br><br> Add Files to XX: 为这个项目中引入文件 <br><br> ~~Open ：打开文件~~ <br><br> Open Recent  ：打开最近的打开的项目或者工作组 <br><br> Open Quickly  ：通过搜索文件名快速打开一个文件 <br><br> Close ：这几个选项的都是关闭操作。 <br><br> ~~Save ：保存~~ <br><br> ~~Duplicate：复制~~ <br><br> **Revert  to Saved：将此文件的修改直接回退到上次保存时** <br><br> Unlock ：要对第三方库或系统文件进行修改时解锁 <br><br> ~~Show in Finder ：在Finder 中展示~~ <br><br> Open with External Editor  ：使用外部编辑器打开 <br><br> Save As Workspace： 另存为工作组 <br><br> Page Setup ：页面设置，为打印而生 <br><br> Print… ：用打印机打印当前文件 | ![File](/images/Xcode7.1 菜单选项/1.png) |

| Edit: |     |
| -------- | ----- |
| Undo: 撤销 <br><br> Redo ：反撤销 <br><br> ~~Cut ：剪切~~ <br><br> ~~Copy ：拷贝~~ <br><br> ~~Paste ：粘贴~~ <br><br> Special Paste ：特殊粘贴 ?? <br><br> Paste and Preserve formatter ：粘贴并匹配样式 <br><br> ~~Duplicate :复制~~ <br><br> ~~Delete :删除~~ <br><br> ~~Select All :全选~~ <br><br> Filter : 筛选，可以选择在导航栏中筛选和在库中筛选 <br><br> Sort：排序 (还不知道怎么用) <br><br> Format ：格式 <br><br> Font ：可以打开字体和颜色的设置框，可以copy样式。 <br><br> Text ：可以设置编码的页面左右对齐，**显示顶部标尺**。 <br><br> Spelling and Grammar ：拼写提示和语法提示。 <br><br> Substitutions：会出来个仪表盘，提供微操。 <br><br> **Transformations ：可以将英文转成全大写，全小写，首字母大写。** <br><br> Speech ：开始说话结束说话。 <br><br> Refactor: 重构 <br><br> Rename 重命名 <br><br> Extract 提取 <br><br> Create Superclass  创建超类 <br><br> Move Up 上移 <br><br> Move Down 下移 <br><br> Convert：转换成ARC,swift等 <br><br> Encapsulate 封装 <br><br> Start Dictation: 开始听写 <br><br> **Emoji & symbols：emoji表情和特殊符号** | ![Edit](/images/Xcode7.1 菜单选项/2.png) |

| View: |     |
| -------- | ----- |
| Standard Editor ：标准模块 <br><br> Assistant Editor ：助理模块 <br><br> Version Editor： 版本模块 <br><br> Navigators：里面包含了xcode左边8个导航模块的切换。 <br><br> Debug Area：中下部的调试框和打印输出框。 <br><br> Untilities: xcode右边的上面两个选项和下面的四个选项。 <br><br> Show File Inspector：显示文件检查 <br><br> Show Quick Help Inspector：显示快速帮助 <br><br> File Template Library  文件模板库 <br><br> Code Snippet Library  代码片段库 <br><br> Object Library  对象库 <br><br> Media Library  媒体库 <br><br> Hide Utilities  隐藏实体工具 <br><br> **Hide Toolbar  隐藏工具栏（XCode顶部）** <br><br> **Hide Tab Bar  隐藏标签栏（用了cmd+T出来的tab切换）** <br><br> ~~Enter Full Screen：全屏~~ | ![View](/images/Xcode7.1 菜单选项/3.png) |

| Find: |     |
| -------- | ----- |
| Find in Workspace… 在工作组中查找 <br><br> Find and Replace in Workspace… 在工作组中查找和替换 <br><br> … <br><br> 上面4个是在哪地方查找或替换，中间4个是在你几个选中的文件或组中查找， <br><br> 再下面4个是查找或替换，然后是替换。 <br><br> **Find Call Hierarchy：查找到调用层级。** <br><br> Hide Find Bar：隐藏查找栏 <br><br> Use Selection for Find ：使用选择的地方去查找 <br><br> Use Selection for Replace：使用选择的地方去替换 | ![Find](/images/Xcode7.1 菜单选项/4.png) |

| Navigate: |     |
| -------- | ----- |
| **Reveal in Project Navigator ：在项目导航中揭示出此文件** <br><br> Reveal in Symbol Navigator  ：在符号导航中揭示出某方法 <br><br> Open in Assistant Editor：用分屏助理打开 <br><br> **Open in ..   你想怎么打开** <br><br> Move Focus To Next Area  将焦点移动到下一个区域 <br><br> Move Focus To Editor   将焦点移动到编辑器 <br><br> Go Forward  前进，相当于两个手指左划右划 <br><br> Go back  后退 <br><br> Jump to Selection 跳转到选择 <br><br> Jump to Definition 跳转到定义 <br><br> Jump to OriginalSource 跳到源文件 <br><br> Jump to Next Issue  跳转到下一个问题 <br><br> Jump to Previous Issue  跳转到上一个问题 <br><br> Jump to Next Counterpart  ：?? <br><br> Jump to Previous Counterpart : ?? <br><br> Jump to Line in xxx.m ：跳到这个文件的第几行。 <br><br> Jump to Next Placeholder ：?? <br><br> Jump to Previous Placeholder：?? | ![Navigate](/images/Xcode7.1 菜单选项/5.png) |

| Editor:(选中文件状态下): |     |
| -------- | ----- |
| Show Completions : 显示自动补全 <br><br> Edit All in Scope: 在当前文件全文修改选中的一个变量或单词 <br><br> **Fix All in Scope: 在当前文件自动处理他能解决的error，相当于点![error](/images/Xcode7.1 菜单选项/6.png)** <br><br> **Show issue: 展示错误和隐藏错误，相当于点左边的按钮![error](/images/Xcode7.1 菜单选项/7.png)** <br><br> Issues: 可以控制展示全部错误警告，还是仅仅展示警告。 <br><br> Structure: 构造 <br><br> Balance Delimiter：直接选中光标所在的整个大括号 <br><br> **Re-Indent : 将格式缩进整理一下** <br><br> 这里还有四个，分别是往前或往后移一个tab，往上往下移一行 <br><br> Code Folding: 提供各种折叠和取消折叠 <br><br> **Focus Follow Selection：高亮聚焦你光标所在的模块** <br><br> Syntax Coloring: 设置各个语法的高亮配色 <br><br> **Show Invisibles: 显示所有隐藏的东西，比如空格。** <br><br> Show Blame for Line: 显示选中的行的修改者和log。 <br><br> Show Code Coverage: 展示代码的覆盖范围 | ![Editor:(选中文件状态下)](/images/Xcode7.1 菜单选项/8.png) |

| Editor:(选中xib状态下): |     |
| -------- | ----- |
| Canvas 画布 <br><br> **Show Selection Highlights: 显示选中控件的高亮** <br><br> Show Resize Knobs：显示约束旁边的小方块 <br><br> Show Constraints ：显示约束 <br><br> **Show Involved Views For Selected Constraints：显示约束涉及到的视图** <br><br> **Show Layout Rectangles  布局矩形** <br><br> Size Class: 屏幕布局相关，相当于点xib下面的按钮 <br><br> Show Bounds Rectangles  显示边界矩形 <br><br> Hide Document Outline：隐藏或显示左边的层级图 <br><br> Reveal in Document Outline：在左边的层级图中揭示出来 <br><br> Align  对准 <br><br> ~~Align Left Edges  左边缘对齐~~ <br><br> ~~Align Right Edges  右边缘对齐~~ <br><br> ~~Align Top Edges  顶部边缘对齐~~ <br><br> ~~Align Bottom Edges  底部边缘对齐~~ <br><br> ~~Align Horizontal Centers  横向中心对齐~~ <br><br> ~~Align Vertical Centers  竖向中心对齐~~ <br><br> Align Baselines  基线对齐 <br><br> Align Horizontal Center In Container   对齐容器中的水平中心 <br><br> Align Vertical Center In Container   对齐容器中的垂直中心 <br><br> Arrange : 可以上移下移或移到背景等 <br><br> Embed ： 嵌入，可以嵌nav，tabbar，scrollView <br><br> Unembed   解除嵌入 <br><br> Size to Fit ：大小以适合 <br><br> **Snap to Guides：让引导线具有吸附功能，让控件靠近就自动对齐** <br><br> Guides：设置引导标尺线 <br><br> Add Horizontal Guide ： 添加横向标尺线 <br><br> Add Vertical Guide ： 添加垂直标尺线 <br><br> Automatically Refresh Views：自动刷新视图 <br><br> Refresh All Views：刷新所有视图 <br><br> Debug Selected Views：调试选中的视图？ <br><br> Resolve Auto Layout issues：解决自动布局的问题，类似于点![align](/images/Xcode7.1 菜单选项/9.png) <br><br> Refactor to Storyboard：把VC重构成SB？ | ![Editor:(选中xib状态下)](/images/Xcode7.1 菜单选项/10.png) |

| Product: |     |
| -------- | ----- |
| ~~Run：运行~~ <br><br> Test：?? <br><br> Profile：打开instrument之类的 <br><br> **Analyze：进行代码分析，可以检测一些不规范的OC语法** <br><br> Archive：归档 <br><br> Build for：和上面的功能相似。 <br><br> Perform Action：?? <br><br> ~~Build：编译~~ <br><br> ~~Clean：清一下之前编译的缓存~~ <br><br> ~~Stop：停止~~ | ![Product](/images/Xcode7.1 菜单选项/11.png) |

| Debug: |     |
| -------- | ----- |
| Pause : 暂停 会 切换成继续 <br><br> **Continue to Current Line：走到你光标选中的这行** <br><br> Step Over ： 跨越 <br><br> Step Into ：步入 <br><br> Step Out ：走出 <br><br> Step Over Instruction： 跨过指示 <br><br> Step Over Thread ：单步执行在线程 <br><br> Step Into Instruction ：步入指示 <br><br> Step Into Thread ：单步执行线程 <br><br> Capture GPU Frame: 捕获GPU位置 <br><br> Simulate Location: 模拟模拟器的位置 <br><br> Simulate Background Fetch: 让模拟器去后台 <br><br> iCloud: 苹果云相关 <br><br> View Debugging: 关于视图的调试 <br><br> Take Screenshot of Active Device：截图 <br><br> **Capture View Hierarchy: 用3D图 来捕获视图层次** <br><br> **Show View Frame: 在模拟器上显示各个控件的尺寸大小** <br><br> Show Alignment Rectangles: 显示对齐矩形 <br><br> Show View Drawing: 显示查看绘图 <br><br> Show Responsive Scrolling Status: 显示响应滚动状态 <br><br> Deactivate Breakpoints  停用中断点。 <br><br> Breakpoints: 相当于左下角的加号，增加各种断点。 <br><br> Debug Workflow：可以显示内存和清除打印等操作。 <br><br> Always Show Disassembly: 这要是勾上就只显示堆栈信息不看代码 <br><br> Attach to Process by PID or Name: 设置权限id或name <br><br> Attach to Progress: 附加到进程 <br><br> Detach: 跳过所有的断点 | ![Debug](/images/Xcode7.1 菜单选项/12.png) |

| Source Control: |     |
| -------- | ----- |
| 第一行是分支管理，可以创建分支合并分支，配置分支的源等等。 <br><br> **Create Working Copy：项目中如果有地方是引用的那就copy一下。** <br><br> Checkout：可以选择切换分支。 <br><br> ~~Commit  ：提交~~ <br><br> ~~Push ： 上传代码~~ <br><br> ~~Pull ：拉代码~~ <br><br> Refresh Status：刷新状态 <br><br> **Discard Changes ：放弃所有修改。** <br><br> **Add Selected Files : 将选中的这些问号文件add一下。** <br><br> **Discard Changes  in selected Files : 将选中的这些文件放弃修改。** <br><br> Mark Selected  Files as Resolved: 相当于合并或rebase过程中的解决。 <br><br> History：可以看当前分支的log历史。 | ![Source Control](/images/Xcode7.1 菜单选项/13.png) |

| Window: |     |
| -------- | ----- |
| Minimize: 最小化 <br><br> Zoom：相当于windows的“还原” <br><br> Show next tab: 如果你有两个tab的话这个就是切换tab <br><br> Show previous tab: 同上 <br><br> Documentation and API Reference：打开xcode文档 <br><br> welcome to xcode: 来到开始页面 <br><br> Device：硬件，能看到MAC ，模拟器和手机 <br><br> Organizer：打开可以看到Archives 和 Crashes <br><br> **Project：查看最近项目，也可以在这里删除Derived Data** <br><br> **Bring all to Front：把所有xcode打开的都置顶。** | ![Window](/images/Xcode7.1 菜单选项/14.png) |

| Help: |     |
| -------- | ----- |
| Search : 在目录中搜索功能。 <br><br> Documentation and API Reference：打开xcode文档 <br><br> Xcode OverView：打开xcode综述 <br><br> Release Notes：打开xcode各版本更新迭代的log。 <br><br> What’s New in Xcode：有什么新特性 <br><br> Quick help for selected Item：快速帮助，相当于按着option点。 <br><br> **Search Documentation for Selected  Text：详细帮助，直接在文档里找到这个。** | ![Help](/images/Xcode7.1 菜单选项/15.png) |
