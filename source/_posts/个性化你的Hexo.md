title: "个性化你的Hexo"
date: 2015-05-08 22:09:02
categories: Hexo
toc: true
tags:
---
注意：
1.修改配置文件时注意`YAML语法`，参数`冒号:`后一定要留`空格`
2.若出现中文乱码请修改文件编码格式为`UTF-8`

#hexo目录介绍
默认目录结构：

	.
	├── .deploy #执行hexo deploy命令部署到GitHub上的内容目录
	├── public #执行hexo generate命令，输出的静态网页内容目录
	├── scaffolds #layout模板文件目录，其中的md文件可以添加编辑
	├── scripts #扩展脚本目录，这里可以自定义一些javascript脚本
	├── source #文章源码目录，该目录下的markdown和html文件均会被hexo处理。该页面对应repo的根目录，404文件、favicon.ico文件，CNAME文件等都应该放这里，该目录下可新建页面目录。
	|   ├── _drafts #草稿文章
	|   └── _posts #发布文章
	├── themes #主题文件目录
	├── _config.yml #全局配置文件，大多数的设置都在这里
	└── package.json #应用程序数据，指明hexo的版本等信息，类似于一般软件中的关于按钮


#插件plugins
[Hexo插件](http://hexo.io/plugins/)

##安装插件

	$ npm install <plugin-name> --save
	$ npm update
##启用插件
修改hexo目录下的`_config.yml`，添加：

	plugins:
	- plugin-name
##升级插件
	npm update
##卸载插件
	npm uninstall <plugin-name>
##常用插件安装与配置

首页文章数量，存档，分类，本地服务器代理，发布器，更新，rss等插件

	npm install hexo-generator-index --save
	npm install hexo-generator-archive --save
	npm install hexo-generator-category --save
	npm install hexo-generator-tag --save
	npm install hexo-server --save
	npm install hexo-deployer-git --save
	npm install hexo-deployer-heroku --save
	npm install hexo-deployer-rsync --save
	npm install hexo-deployer-openshift --save
	npm install hexo-renderer-marked@0.2 --save
	npm install hexo-renderer-stylus@0.2 --save
	npm install hexo-generator-feed --save
	npm install hexo-generator-sitemap --save
装完之后去全局配置文件 `\hexo\_config.yml` 修改参数

	index_generator:
	  per_page: 10 ##首页默认10篇文章标题 如果值为0不分页

	archive_generator:
	  per_page: 10 ##归档页面默认10篇文章标题
	  yearly: true  ##生成年视图
	  monthly: true ##生成月视图

	tag_generator:
	  per_page: 10 ##标签分类页面默认10篇文章

	category_generator: 
	   per_page: 10 ###分类页面默认10篇文章

	feed:
	  type: atom ##feed类型 atom或者rss2
	  path: atom.xml ##feed路径
	  limit: 20  ##feed文章最小数量
-多部署

	deploy:
	  type: git
	  message: update  ##git message建议默认字段update 可以自定义
	  repository: 
	  github: <repository url>,[branch] ##github 仓库地址和分支
	  gitcafe: <repository url>,[branch] ##gitcafe 仓库地址和分支

#README文件
在`\hexo\source`新建`README`文件（注意不要带后缀），用文本编辑器打开编辑内容。

#404页面
在`hexo\source`下新建`404`文件（不要带后缀），插入代码即可。
[腾讯公益](http://www.qq.com/404/)

#整站配置

##编辑`\hexo\_config.yml`文件

	# Hexo Configuration
	## Docs: http://zespia.tw/hexo/docs/configure.html
	## Source: https://github.com/tommy351/hexo/

	# Site #整站的基本信息
	title: bubble sky #网站标题，站点左上角
	subtitle: Coding world, changing world ^_^ #副标题，站点左上角
	description: Coding world, changing world ^_^ #给搜索引擎看的，对站点的描述，可以自定义，在生成html中的head->meta中可看到
	author: bubble #网站作者，在站点左下角可以看到
	email: #你的联系邮箱
	language: zh-CN #中文

	# URL #这项暂不配置，绑定域名后，欲创建sitemap.xml需要配置该项
	## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
	url: http://codingbubble.github.io  #你的域名
	root: /
	permalink: :year/:month/:day/:title/
	tag_dir: tags
	archive_dir: archives
	category_dir: categories

	# Writing 文章布局、写作格式的定义，不修改
	new_post_name: :title.md # File name of new posts
	default_layout: post
	auto_spacing: false # Add spaces between asian characters and western characters
	titlecase: false # Transform title into titlecase
	max_open_file: 100
	filename_case: 0
	highlight: #代码高亮
	  enable: true #是否启用
	  backtick_code_block: true
	  line_number: true #是否显示行号
	  tab_replace:

	# Category & Tag
	default_category: uncategorized
	category_map:
	tag_map:

	# Archives 默认值为2，这里都修改为1，相应页面就只会列出标题，而非全文
	## 2: Enable pagination
	## 1: Disable pagination
	## 0: Fully Disable
	archive: 1
	category: 1
	tag: 1

	# Server 不修改
	## Hexo uses Connect as a server
	## You can customize the logger format as defined in
	## http://www.senchalabs.org/connect/logger.html
	port: 4000
	logger: false
	logger_format:

	# Date / Time format 日期格式
	## Hexo uses Moment.js to parse and display date
	## You can customize the date format as defined in
	## http://momentjs.com/docs/#/displaying/format/
	date_format: MMM D YYYY #文章发表时间的显示格式，可在上面链接里按照格式修改
	time_format: H:mm:ss

	# Pagination #每页显示文章数，可以自定义
	## Set per_page to 0 to disable pagination
	per_page: 10 #每页显示10篇文章
	pagination_dir: page

	# Disqus 社会化评论disqus，我使用多说，在主题中配置
	disqus_shortname:

	# Extensions 这里配置站点所用主题和插件，暂默认，后面会介绍怎么修改
	## Plugins: https://github.com/tommy351/hexo/wiki/Plugins
	## Themes: https://github.com/tommy351/hexo/wiki/Themes
	theme: light
	exclude_generator:
	plugins:
	- hexo-generator-feed
	- hexo-generator-sitemap

	# Deployment 站点部署到github要配置
	## Docs: http://zespia.tw/hexo/docs/deploy.html
	deploy:
	  type: git
	  repository: git@github.com:username/username.github.io.git
	  branch: master
执行命令`hexo g`，`hexo s`，打开`localhost:4000`查看效果。

##新建文章时默认生成categories项
在`hexo\scaffolds\post.md`中，添加一行`categories: `。同理可应用在`page.md`和`photo.md`。
##win7中新建文章后自动打开文件
参考了几个博主的方法，但貌似都是苹果机的，本人对脚本语言完全不懂，琢磨尝试了几次，竟然成功了~
[hexo作者给出的代码](https://github.com/hexojs/hexo/issues/1007)：

	var spawn = require('child_process').spawn;

	// Hexo 2.x
	hexo.on('new', function(path){
	  spawn('vi', [path]);
	});

	// Hexo 3
	hexo.on('new', function(data){
	  spawn('vi', [data.path]);
	});
稍加修改即可，如下：

- 在`hexo\scripts`目录新建文件`open_new.js`，在其中捕获new事件，若scripts文件夹不存在可手动创建。
- 添加代码：

		//hexo new "post"后自动用默认编辑器打开文件
		var exec = require('child_process').exec;

		/* Hexo 2.x
		hexo.on('new', function(path){
		  exec('start' + path);
		});
		*/

		// Hexo 3
		hexo.on('new', function(data){
		  exec('start ' + data.path);
		});
我是Hexo 3版本，测试成功~但2.x版本尚未测试，猜想可能代码差不多是这样吧，安装2.x版本的朋友可以试试。

#主题theme
[Hexo主题](http://hexo.io/themes/)
##下载主题
	
		$ git clone <repository> themes/<theme-name>
如：

		$ git clone https://github.com/hexojs/hexo-theme-light.git themes/light

##启用主题
修改hexo目录下的`_config.yml`，启用主题：

		theme: theme-name
如：

		theme: light

##主题配置
编辑文件`\hexo\themes\light\_config.yml`

		menu: #站点右上角导航栏，暂时默认，后面介绍修改
		  首页: /
		  存档: /archives
		  关于: /about
		  ToDo: /todolist
		  
		widgets: #站点右边栏，暂时默认，后面介绍修改和添加
		- search
		- category
		- tagcloud
		- weibo
		- blogroll

		excerpt_link: 阅读全文 #替换为中文

		plugins: 

		twitter: #右边栏要显示twitter展示的话，需要在此设置
		  username: moxie198
		  show_replies: false
		  tweet_count: 5

		addthis: #SNS分享，暂时默认，后面会介绍
		  enable: true
		  pubid:
		  facebook: true
		  twitter: true
		  google: true
		  pinterest: true

		fancybox: true #图片效果，默认

		google_analytics: #要使用google_analytics进行统计的话，这里需要配置ID，暂时默认，后面介绍
		rss:  #生成RSS，需要配置路径，暂时默认，后面介绍

###修改局部页面
页面展现的全部逻辑都在每个主题中控制，源代码在`hexo\themes\themename\`中

		.
		├── languages  #多语言
		|   ├── default.yml #默认语言
		|   └── zh-CN.yml  #中文语言
		├── layout #布局，根目录下的*.ejs文件是对主页，分页，存档等的控制
		|   ├── _partial   #局部的布局，此目录下的*.ejs是对头尾等局部的控制
		|   └── _widget #小挂件的布局，页面下方小挂件的控制
		├── source #源码
		|   ├── css #css源码 
		|   |   ├── _base  #*.styl基础css
		|   |   ├── _partial   #*.styl局部css
		|   |   ├── fonts  #字体
		|   |   ├── images #图片
		|   |   └── style.styl #*.styl引入需要的css源码
		|   ├── fancybox   #fancybox效果源码
		|   └── js #javascript源代码
		├── _config.yml #主题配置文件
		└── README.md  #用GitHub的都知道
如果你需要修改头部，直接修改`hexo\themes\themename\layout\_partial\header.ejs`，比如头上加个搜索框：

		<div>
		<form class="search" action="//google.com/search" method="get" accept-charset="utf-8">
		 <input type="search" name="q" id="search" autocomplete="off" autocorrect="off" autocapitalize="off" maxlength="20" placeholder="Search" />
		 <input type="hidden" name="q" value="site:<%- config.url.replace(/^https?:\/\//, '') %>">
		</form>
		</div>
将如上代码加入即可，您需要修改css以便这个搜索框比较美观。
再如，你要修改页脚版权信息，直接编辑`hexo\themes\themename\layout\_partial\footer.ejs`。同理，你需要修改css，直接去修改对应位置的styl文件。

###社会化评论系统——多说
hexo默认使用国外比较流行的disqus，国内多使用“多说”。步骤非常简单：
1. 在[多说](http://duoshuo.com/)进行注册，获得通用代码。
2. 将通用代码粘贴到`themes\themename\layout\_partial\comment.ejs`里面，如下：

		<% if ( page.comments){ %>
			<section id="comment">
				#通用代码
			</section>
		<% } %>
其中`<div class="ds-thread" data-thread-key="请将此处替换成文章在你的站点中的ID" data-title="请替换成文章的标题" data-url="请替换成文章的网址"></div>`替换为`<div class="ds-thread" data-thread-key="<%- config.root %><%- item.path%>" data-title="<%- item.title %>" data-url="<%- item.permalink %>"></div>`
3. 在`hexo\_config.yml`中添加多说的配置：

	duoshuo_shortname: 你站点的short_name(通用代码中可查看)

###页面导航
在`themes\themename\layout\_partial\comment.ejs`文件中，加入一段代码，如下：

		<% if ( page.comments){ %>

		 <nav id="pagination" >
		    <% if (page.prev) { %>
		    <a href="<%- config.root %><%- page.prev.path %>" class="alignleft prev" ><%= __('prev') %></a>
		    <% } %>
		    <% if (page.next) { %>
		    <a href="<%- config.root %><%- page.next.path %>" class="alignright next" ><%= __('next') %></a>
		    <% } %>
		    <div class="clearfix"></div>
		</nav>

		<section id="comment">
light主题默认显示为“上一页”“下一页”，若想更改显示的文字，在`hexo\themes\light\languages`中你选择的语言包内修改：

		prev: 上一篇
		next: 下一篇

###百度分享
到[百度分享](http://share.baidu.com/)获得代码，在`themes/themename/layout/_partial/article.ejs`中，将`<%-partial('post/share')%>`删掉，替换为百度分享的代码。

###添加网站图标
在`themes/themename/layout/_partial/head.ejs`里将`<link href="<%- config.root %>favicon.png" rel="icon">`替换为`<link href="<%- config.root %>favicon.ico" rel="icon" type="image/x-ico">`。将`favicon.ico`图标文件放在`hexo\source`目录下。
制作图标的网站：[faviconer](http://www.faviconer.com)。

###添加分类、标签云widget
在`themes/themename/_config.yml`中，添加如下：

	widgets:
	- category
	- tagcloud

###添加友情链接widget
在`themes/themename/layout/_widget`中新建名为`blogroll.ejs`的文件，编辑内容如下：

	<div class="widget tag">
		<h3 class="title">友情链接</h3>
		<ul class="entry"> #以下为添加友情链接时要修改的地方
		<li><a href="网站地址" title="网站名">你想显示的名字</a></li>
		</ul>
	</div>
每次更改友链时编辑`<ul></ul>`之间的内容即可，其中`<li><a href="网站地址" title="网站名">你想显示的名字</a></li>`为添加友情链接的格式，如

	<li><a href="http://codingbubble.github.io/" title="bubble sky">bubble's blog</a></li>
一个链接一行。
然后在`themes/themename/_config.yml`中，添加如下：

	widgets:
	- blogroll

###添加统计
[百度统计](http://tongji.baidu.com/web/welcome/login)，[谷歌统计](http://www.google.com/analytics/)
以百度统计、modernist主题为例，介绍如何添加。
编辑文件`hexo\themes\modernist\_config.yml`，增加配置选项：

	baidu_tongji: true
新建文件`hexo\themes\modernist\layout\_partial\baidu_tongji.ejs`，内容如下：

	<% if (theme.baidu_tongji){ %>
	<script type="text/javascript">
	#你的百度统计代码
	</script>
	<% } %>
注册并登录百度统计获取你的统计代码。

编辑文件`hexo\themes\modernist\layout\_partial\head.ejs`，在`/head`之前增加：

	<%- partial('baidu_tongji') %>
重新生成并部署你的站点。

###自定义挂件
除了默认已提供的挂件外，你还可以自定义自己的小挂件，在`hexo\themes\modernist\layout\_widget\`下，新建自己的ejs文件，如`myWidget.ejs`，然后在配置文件`hexo\themes\modernist\_config.yml`中配置。

	widgets:
	  - myWidget
用上述方法可以添加新浪微博小挂件。

- 生成自己的[微博组件](http://app.weibo.com/tool/weiboshow)。
- 新建`hexo\themes\themename\layout\_widget\weibo.ejs`文件。
- 配置`hexo\themes\themename\_config.yml`：

		widgets:
		- weibo

###导航栏添加“About”
执行命令：

	hexo new page "About"
1. 到`source\About\index.md`编辑内容。
2. 在`themes\light\_config.yml`中，添加如下：

		menu:
		  About: /about

上述步骤，也可以手工生成，在`hexo\source\`下手工新建`About`和`index.md`也是完全等价的。

###添加`fork me on github`
[github官方教程](https://github.com/blog/273-github-ribbons)，把代码插入到任意一个全局的模板文件中就行，比如layout.ejs的末尾。

###添加RSS
hexo提供了RSS的生成插件，需要手动安装和设置。步骤如下：
1. 安装RSS插件到本地：`npm install hexo-generator-feed`
2. 开启RSS功能：编辑`hexo/_config.yml`，添加如下代码：

		plugins:
		- hexo-generator-feed
3. 在站点添加链接：
在`themes\light\_config.yml`中，编辑 `rss: /atom.xml`
在`themes\light\layout\_partial\header.ejs`中，`<ul>` `</ul>`之间，添加一行代码`<li> <a href="/atom.xml">RSS</a> </li>`
启动服务器，用浏览器打开`http://localhost:4000/atom.xml`，就可以看到RSS已经生效了。

###添加sitemap
1. 安装sitemap到本地：`npm install hexo-generator-sitemap`
2. 开启sitemap功能：编辑`hexo/_config.yml`，添加如下代码：

		plugins:
		- hexo-generator-sitemap

不过，sitemap的初衷是给搜索引擎看的，为了提高搜索引擎对自己站点的收录效果，我们最好手动到google和百度等搜索引擎提交sitemap.xml。
启动服务器，用浏览器打开`http://localhost:4000/sitemap.xml`，就可以看到sitemap已经生效了。

###添加站内搜索
- 百度搜索
Hexo默认使用Google搜索，可设置为百度搜索。
打开`themes/themename/layout/_widget/search.ejs`文件，里面内容替换为：

		<div class="search">
		  <form action="//baidu.com/baidu" method="get" accept-charset="utf-8">
		    <input type="search" name="word" results="0" placeholder="<%= __('search') %>">
		    <input type="hidden" name="si" value="<%- config.url.replace(/^https?:\/\//, '') %>">
		    <input name=tn type=hidden value="bds">
			<input name=cl type=hidden value="3">
			<input name=ct type=hidden value="2097152">
			<input name=s type=hidden value="on">
		  </form>
		</div>
- Swiftype搜索
1. 去[Swiftype](https://swiftype.com/)注册
2. `CREATE SEARCH ENGINE`创建一个站内搜索
3. 填上相应的信息后，Swiftype就开始抓取了
4. 点`INSTALL`安装，根据自己的喜好设置。
5. 选择左侧的`SWIFTYPE INSTALL CODE`，复制生成的代码，覆盖`themes/themename/layout/_widget/search.ejs`文件即可。

###添加返回顶部按钮
1. 添加html代码
在`/themes/themename/layout/_partial`文件夹新建文件`totop.ejs`，并向其中加入如下代码：

	<div id="totop" style="position:fixed;bottom:150px;right:50px;cursor: pointer;">
	<a title="返回顶部"><img src="/img/scrollup.png"/></a>
	</div>
2. 添加js代码
在`/themes/themename/source/js`文件夹新建文件`totop.js`，将如下代码复制其中：

		(function($) {
			// When to show the scroll link
			// higher number = scroll link appears further down the page
			var upperLimit = 1000;

			// Our scroll link element
			var scrollElem = $('#totop');

			// Scroll to top speed
			var scrollSpeed = 500;

			// Show and hide the scroll to top link based on scroll position
			scrollElem.hide();
			$(window).scroll(function () {
				var scrollTop = $(document).scrollTop();
				if ( scrollTop > upperLimit ) {
					$(scrollElem).stop().fadeTo(300, 1); // fade back in
				}else{
					$(scrollElem).stop().fadeTo(300, 0); // fade out
				}
			});

			// Scroll to top animation on click
			$(scrollElem).click(function(){
				$('html, body').animate({scrollTop:0}, scrollSpeed); return false;
			});
		})(jQuery);
可以对upperLimit和scrollSpeed参数进行修改，控制显示位置和回滚速度。
3. 添加文件引用
在文件`/themes/themename/layout/_partial/after_footer.ejs`末尾添加以下两行代码：

		<%- partial('totop') %>
		<script src="<%- config.root %>js/totop.js"></script>
4. 添加按钮图片
将图片![](http://ww3.sinaimg.cn/large/0067jhJ4gw1erz8cbug7wj301e01e3y9.jpg)复制到`\themes\themename\source\img`目录下，文件名为`scrollup.png`，页面足够长时，就看到按钮出现了。

###添加文章目录
1. 修改主题的ejs文件
我们首先要编辑文章显示页面的模板，也就是`themes/themename/layout/_partial/article.ejs`文件。为了将目录生成在正文之前，我们首先在这个文件中找到`<%- post.content %>`类似代码，并在这一行之前加入如下代码：

		<!-- Table of Contents -->
		<% if (!index && post.toc){ %>
		  <div id="toc" class="toc-article">
		    <strong class="toc-title">文章目录</strong>
		    <%- toc(post.content) %>
		  </div>
		<% } %>
if语句中有两个条件，!index是为了不在首页的文章摘要中生成目录，post.toc确保了只在显式地标记了toc: true的文章中生成目录。若这两个条件满足，则创建一个目录的`<div>`。
2. 为目录编写CSS文件
要指定目录的样式，修改文件`themes/themename/source/css/_partial/article.styl`。在文件的最后，添加如下代码：

		/*toc*/
		.toc-article
		  background #eee
		  border 1px solid #bbb
		  border-radius 10px
		  margin 1.5em 0 0.3em 1.5em
		  padding 1.2em 1em 0 1em
		  max-width 28%
		.toc-title
		  font-size 120%
		#toc
		  line-height 1em
		  font-size 0.9em
		  float right
		  .toc
		    padding 0
		    margin 1em
		    line-height 1.8em
		    li
		      list-style-type none
		  .toc-child 
		    margin-left 1em
- 第一段的`toc-article`指定了目录整个`<div>`的背景色、边框色、倒角半径、各种间距以及最大的宽度。注意这里最好指定目录的最大宽度，我将其设为了28%，也就是文章正文那个框的宽度的28%，也可以设为一个固定的长度，比如在笔记本电脑上16em就是个不错的宽度，但为了能适配各种不同尺寸的屏幕，最好还是设置为百分比。如果不指定最大宽度，遇到比较长的标题时，生成的目录会非常难看。这个最大宽度的设置是我在网上其他添加目录的方法中没有见到的。
- 第二段的`toc-title`指的就是`文章目录`那四个字，这四个字要比其他字大一些，将其字号设为其他字的120%。
- 第三段的`#toc.toc`指定了目录列表的一些细节，将font-size设为0.9em会让目录的字比文章的字稍小一些。最后的`.toc-child`指定了二级目录的缩进量。

再次生成页面，应该已经可以显示比较美观的目录了。
此后，只需在你想要显示目录的文章.md开头加上`toc: true`即可。

#速度优化
由于 Google 被大陆屏蔽，Github 从大陆访问也比较慢，且不太稳定。所以一方面可以把 Blog 迁移到国内，比如Gitcafe提供的免费Page服务，又快又好用，可以参考[托管博客到gitcafe](http://zipperary.com/2013/11/23/hexo-to-gitcafe/)。
1. 把 google 提供的`jquery`和`fonts api`全换掉。由于不同的主题其位置不同，最好是搜索一下。
Unix/Linux 用户在 shell 中切换到自己的主题目录下面；Windows 用户用 Git Bash 切换到主题目录下面。然后用`grep 'jquery' -r ./`搜索使用 jquery 的位置，如果是用的 google 的，则替换成国内的相应版本，我用的是百度，`//libs.baidu.com/jquery/2.0.3/jquery.min.js`，`//libs.baidu.com/jquery/1.8.0/jquery.min.js`。
2. 替换google fonts，同样的方法，`grep 'fonts' -r ./`，找到后替换为`//fonts.useso.com/css?family=Lato:400,400italic`即可。

#参考资料
- [hexo系列教程：（三）hexo博客的配置、使用](http://zipperary.com/2013/05/29/hexo-guide-3/)
- [hexo系列教程：（四）hexo博客的优化技巧](http://zipperary.com/2013/05/30/hexo-guide-4/)
- [hexo系列教程：（五）hexo博客的优化技巧续](http://zipperary.com/2013/06/02/hexo-guide-5/)
- [为hexo添加scroll to top功能](http://www.winterland.me/2013/11/hexo-scroll2top/)
- [如何搭建一个独立博客——简明Github Pages与Hexo教程](http://cnfeat.com/2014/05/10/2014-05-11-how-to-build-a-blog/)
- [使用hexo搭建博客](http://yangjian.me/workspace/building-blog-with-hexo/)
- [Hexo在github上构建免费的Web应用](http://blog.fens.me/hexo-blog-github/)
- [hexo你的博客](http://ibruce.info/2013/11/22/hexo-your-blog/)
- [Hexo使用攻略：（九）为Hexo添加百度搜索](http://ijiaober.github.io/2014/08/07/hexo/hexo-09/)
- [为Light主题添加Swiftype搜索](http://erona.me/2015/02/11/%E4%B8%BALight%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0Swiftype%E6%90%9C%E7%B4%A2/)
- [Hexo，添加返回顶部按钮](http://www.yehbeats.com/2015/04/06/hexo-topmenu/)
- [为Hexo博客添加目录](http://kuangqi.me/tricks/enable-table-of-contents-on-hexo/)
- [在为Hexo博客添加文章时自动打开编辑器](http://kuangqi.me/tricks/open-macdown-when-add-a-new-post/)
- [Open markdown file after running hexo new?](https://github.com/hexojs/hexo/issues/1007)