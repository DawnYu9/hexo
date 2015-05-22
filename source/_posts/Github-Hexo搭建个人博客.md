title: "GitHub+Hexo搭建个人博客"
date: 2015-05-07 23:30:17
categories: Hexo
toc: true
tags:
---
刚入驻GitHub的菜鸟一枚，第一篇博文就用来做搭建博客的笔记吧~

本文针对`windows`平台和`Hexo 3.x`
#环境准备，搭建本地博客

##安装Node.js
[Node.js官网下载](https://nodejs.org/download/)
##安装Git
[Git官网下载](http://git-scm.com/downloads)

1. cmd下使用Git命令
	配置系统环境变量Path，添加如下2个路径，路径之间用英文分号";"隔开
	- git安装路径中bin的位置，如：`D:\Program Files\Git\bin`
	- git安装路径中git-core的位置，如：`D:\Program Files\Git\libexec\git-core`
2. Git Bash下使用Git命令(本文使用此方法)
	- 双击桌面上的"Git Bash"
	- 在桌面或文件夹任意空白处点击鼠标右键，选择"Git Bash"

##安装Hexo，搭建本地博客
打开Git Bash，执行如下命令

	npm install -g hexo

1. 创建hexo文件夹
安装完成后，根据自己的喜好建立hexo目录（如H:\hexo），在此目录空白处右键打开Git Bash执行以下命令，Hexo即会自动在此目录建立网站所需要的所有文件。

		hexo init
2. 安装依赖包
		npm install
3. 本地查看
现在我们已经搭建起本地的hexo博客了，在hexo目录执行以下命令

		hexo generate
		hexo server
然后到浏览器输入`localhost:4000`查看博客。

#配置SSH keys
[官方教程](https://help.github.com/articles/generating-ssh-keys/)

1. 检查SSH keys的设置
		$ cd ~/.ssh
如果显示`No such file or directory`说明你是第一次使用git，跳到第3步，否则继续。
2. 备份和移除原来的SSH Key设置
因为已经存在key文件，所以需要备份旧的数据并删除：

		$ ls
		config  id_rsa  id_rsa.pub  known_hosts
		$ mkdir key_backup
		$ cp id_rsa* key_backup
		$ rm id_rsa*
3. 生成新的SSH Key
执行如下命令，邮箱地址为自己的邮箱地址（经常使用的，不一定是github的），需要输入文件名的时候，回车即可。

		$ ssh-keygen -t rsa -C "邮件地址@youremail.com"
		Generating public/private rsa key pair.
		Enter file in which to save the key (/Users/your_user_directory/.ssh/id_rsa):<回车>
系统提示你输入加密串，这个密码会在你提交项目时使用，如果为空的话提交项目时则不用输入。这个设置是防止别人往你的项目里提交内容。
注意：输入密码的时候没有*星号的，直接输入就可以了。

		Enter passphrase (empty for no passphrase):<输入加密串>
		Enter same passphrase again:<再次输入加密串>
最后看到这样的界面，SSH Key就设置成功了。
![](http://ww4.sinaimg.cn/large/6b52694dgw1erw5pja0wpj20f70843zu.jpg)
4. 添加SSH Key到GitHub
在本机设置SSH Key之后，需要添加到GitHub上。
用文本编辑工具打开`id_rsa.pub`文件（路径在第3步里`Enter file in which to save the key `可以查看），如果看不到这个文件，你需要设置显示隐藏文件(若找不到，可用文件搜索功能搜索)。
在GitHub的主页右上角上点击设置按钮，选择`SSH Keys`项，把`id_rsa.pub`文件的内容复制进去，点击`Add Key`按钮即可。
5. 测试
执行如下命令，看看设置是否成功，`git@github.com`的部分不要修改：

		$ ssh -T git@github.com
如果出现如下提示

		The authenticity of host 'github.com (207.97.227.239)' can't be established.
		RSA key fingerprint is 16:27:ac:a5:76:28:2d:36:63:1b:56:4d:eb:df:a6:48.
		Are you sure you want to continue connecting (yes/no)?
输入yes，然后会看到

		Hi cnfeat! You've successfully authenticated, but GitHub does not provide shell access.
现在你已经可以通过SSH链接到GitHub了。

6. 设置用户信息
Git会根据用户名和邮箱来记录提交。GitHub也是用这些信息来做权限的处理，执行如下命令设置个人信息，把`username`和`邮箱`替换成你的用户名和邮箱。

		$ git config --global user.name "username"
		$ git config --global user.email "your_email@youremail.com"
SSH Key配置成功，本机已成功连接到GitHub。


#部署到GitHub
与GitHub建立好链接之后，就可以方便的使用它提供的Pages服务，GitHub Pages分两种，一种是你的GitHub用户名建立的username.github.io这样的用户&组织页（站），另一种是依附项目的pages。
想建立个人博客是用的第一种，形如username.github.io这样的可访问的站，每个用户名下面只能建立一个。
1. 创建repository
在自己GitHub主页右下角，创建一个新的repository，名为`username.github.io`，其中username替换为你的GitHub用户名
![](http://ww4.sinaimg.cn/large/6b52694dgw1erw4iiu31hj208z03lmxh.jpg)
![](http://ww3.sinaimg.cn/large/6b52694dgw1erw4iu112xj20a901wt8u.jpg)
2. 生成pages
创建好repository后，点击repository右侧的`Settings`，下拉，点击`Automatic page generator`
![](http://ww4.sinaimg.cn/large/6b52694dgw1erw4l8hhy0j20jn04z75b.jpg)
点击![](http://ww4.sinaimg.cn/large/96e8f43agw1erx03f4170j204100y3yc.jpg)
选择合适的主题，点击![](http://ww1.sinaimg.cn/large/6b52694dgw1erw4o1fm0aj202z00vt8i.jpg)
好了，在浏览器打开你的"username.github.io"，页面已生成。
3. 配置`hexo\_config.yml`文件
打开`hexo\_config.yml`文件，底部编辑

		deploy:
			type: git
			repository: git@github.com:username/username.github.com.git
			branch: master
其中username替换为你的GitHub用户名。
Git Bash执行以下命令即可完成部署，注意部署会覆盖掉你之前在版本库中存放的文件。

		hexo clean
		hexo generate
		hexo deploy
此时，在博客的根目录下会生成一个文件夹：`.deploy`。
或可加入`—generate`选项，在部署前自动生成文件。

		hexo deploy --generate
简写：

		hexo d --g
其原理就是hexo在执行hexo generate时会在本地先把博客生成的一套静态站点放到public文件夹中，在执行hexo deploy时将其复制到.deploy文件夹中。
至此，我们的博客已经完全搭建起来了，在浏览器访问username.github.io就能看到你的成就了！

>记住：每次修改本地文件后，需要hexo generate才能保存。每次使用命令时，都要在H:\hexo目录下。

#Tips
1. 若右键菜单中没有`git bash`选项，可以进入开始菜单找到git bash，然后通过cd进入相应目录执行命令。
2. 在github部署完成之后，马上访问可能出现`404错误`，这是正常的，（最多）等待十分钟左右就可以访问了。如果还不行，那很可能是你没有验证Github发给你的邮件。
3. 如果在hexo d之后出现`fatal: 'username.github.io' does not appear to be a git repository`，一是检查 repo 的名字是否合乎规范、是否含有大写字母、config.yml 中的 deploy 配置是否正确，二是把 git bash 关掉，重新打开再执行命令。
4. 在要求输入密码时，你输入之后密码是不显示的，这是为了安全，并非是你没输上。
5. 出现乱码的，推荐使用 sublime text或者Notepad++编辑文件，记住将文件编码转为`UTF-8`。
6. 安装 hexo 时卡在那儿不动，很可能是网络不给力，能全局 break wall 就好了。
7. 遇到什么其他的问题，不妨删除`.deploy`和`db.json`再重新生成试一试。
8. 有的时候当你修改页面或更改配置后发现并没有立即生效，可以执行`hexo clean`然后再启动`hexo server`。
9. `hexo deploy`时，有时会出现这个提示信息`warning: LF will be replaced by CRLF`，虽然看起来挺乱糟糟的，但不影响使用，可以忽略不计。若想不提示，可以使用如下方法：
	- 切换到博客的根目录，执行如下命令：`git config --global core.autocrlf false`
	- 删除掉该目录下的`.git`文件夹（可能是隐藏的），命令：`rm -rf .git`
	- 重新`git init` `hexo deploy`即可~
10. `hexo deploy`没反应，主要问题出在config.yml的deploy配置上。注意缩进，同时注意冒号后面要有一个空格。
11. `hexo update -g`升级错误，hexo命令失效，可执行`npm install -g hexo`重新安装一遍hexo，效果跟升级一样。
12. 搜索框进行搜索：没有结果。点击搜索后进入的google页面，搜索框里面若显示`site:yoursite.com`，这说明有个地方没有设置，打开hexo目录下的config文件，填写URL。
13. 代码块中不显示行号，使用四个空格的方式标志代码块的确没行号，需要行号的要使用反引号的方式。

#开启你的hexo旅程
##命令
###常用命令

	hexo new "postName" #新建文章
	hexo new page "pageName" #新建页面
	hexo generate #生成静态页面至public目录
	hexo server #开启本地预览访问端口（默认端口4000，'ctrl + c'关闭server）
	hexo deploy #将.deploy目录部署到GitHub
###常用复合命令

	hexo deploy -g
	hexo server -g
###简写

	hexo n == hexo new
	hexo g == hexo generate
	hexo s == hexo server
	hexo d == hexo deploy

##发表文章
在Git Bash中执行如下命令

	hexo n "文章标题"
在`\hexo\source\_posts`中打开同名文件，编辑开头。

	title: 文章标题 #自定义
	date: 2015-05-08 07:56:29 #发表日期，一般不改动
	categories: hexo #文章分类
	tags: [tag1,tag2] #文章标签，多于一项时用这种格式
	---
	#这里开始使用markdown格式输入你的正文。

多个tag也可以这样写：

	tags:
	- tag1
	- tag2

##文章摘要
在需要显示摘要的地方添加如下代码即可：

	#摘要
	<!--more-->
	#余下全文
more以上的部分会已摘要的形式显示，more以下内容查看全文时才显示。也可以在md文件中定义description。

##文章中插入图片
使用markdown写文章，插入图片的格式为`![图片名称](链接地址)`。
这里的链接地址，对于hexo，有两种方式：
- 使用本地路径：在`hexo/source`目录下新建一个`img`文件夹，将图片放入该文件夹下，插入图片时链接即为`\img\图片名称`。
- 使用图床，获取外链地址。比如[微博图床](http://weibotuchuang.sinaapp.com/)，将图片拖入区域中，会生成图片的URL，这就是链接地址。

#参考资料
- [使用Github Pages建独立博客](http://beiyuu.com/github-pages/)
- [如何搭建一个独立博客——简明Github Pages与Hexo教程](http://cnfeat.com/2014/05/10/2014-05-11-how-to-build-a-blog/)
- [hexo系列教程：（二）搭建hexo博客](http://zipperary.com/2013/05/28/hexo-guide-2/)
- [使用hexo搭建博客](http://yangjian.me/workspace/building-blog-with-hexo/)