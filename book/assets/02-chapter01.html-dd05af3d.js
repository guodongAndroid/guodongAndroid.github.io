import{_ as o,Y as p,Z as r,$ as e,a0 as i,a1 as s,a3 as t,E as n}from"./framework-3d290349.js";const l="/book/assets/chapter01-01-52357b63.png",c="/book/assets/chapter01-02-aeeb43d8.png",m="/book/assets/chapter01-03-fb2b5bf0.png",h="/book/assets/chapter01-04-c0f5c2ab.png",d="/book/assets/chapter01-05-bfe25dc0.png",_={},b=t('<p>如果您之前没有在命令行上做太多工作，那么开始使用命令行 Git 可能会有点挑战。由于您将在本书中通过命令行与 Git 进行交互，因此本章将带您快速的了解如何操作它。</p><p>有一个通用的工作流程是您与 Git 进行的大多数交互的基础：</p><ul><li>创建现有存储库的分支。</li><li>将远程仓库复制到您自己的计算机</li><li>在存储库中创建一个单独的工作区，您可以在其中进行更改而不会影响其他任何人。</li><li>标记这些更改以保存到存储库的本地副本。</li><li>将这些更改保存在存储库的本地副本中。</li><li>将这些更改与远程仓库同步。</li><li>或者，通知存储库所有者您的更改已准备好进行审核。</li></ul><p>本章将带您完成上述所有操作，以帮助您熟悉通过命令行使用 Git 的基础知识。</p><p>尽管本章不会详细解释所有内容，但它会让您对 Git 存储库和基本的 Git 工作流程有足够的了解，以便更好地理解接下来的章节。</p><h2 id="什么是远程仓库" tabindex="-1"><a class="header-anchor" href="#什么是远程仓库" aria-hidden="true">#</a> 什么是远程仓库？</h2><p>远程仓库只是项目所有文件的集合，托管在本地计算机以外的其他地方。它们可以在您的网络内部托管，但更多时候，您将使用托管在 GitHub 和 GitLab 等云服务上的远程仓库。</p><p>拥有一个中央远程仓库使共享和为项目做出贡献变得容易。您无需将文件发送给感兴趣的人，只需将它们指向托管的远程仓库，以使它们尽快启动并运行。</p><p>第一步是创建您自己的远程仓库的个人在线副本或分支。这为您提供了一个在线工作的场所，并让您按照本章中的说明进行操作，而不会影响阅读本书和跟随操作的其他人。</p><h2 id="fork-远程仓库" tabindex="-1"><a class="header-anchor" href="#fork-远程仓库" aria-hidden="true">#</a> Fork 远程仓库</h2><p>在浏览器中打开下面的 URL 地址：</p>',11),g={href:"https://github.com/raywenderlich/programmer-jokes",target:"_blank",rel:"noopener noreferrer"},u=t('<p>您将看到如下所示的内容：</p><p><img src="'+l+'" alt="github" loading="lazy"></p><p>这是您将在本书中使用项目的 GitHub 主页面。稍后将为您介绍有关 GitHub 的所有详细信息。</p><p>确保您使用自己的 GitHub 账号登录，然后单击页面右上角的 Fork 按钮：</p><p><img src="'+c+'" alt="fork" loading="lazy"></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您在 GitHub 上加入了多个组织，您可能会看到一个类似于下图的对话框，询问您将 <em>programmer-jokes</em> 仓库 fork 到哪里：</p><p><img src="'+m+'" alt="dialog" loading="lazy"></p><p>在这种情况下，GitHub 询问您要在哪个帐户下创建 fork。此时，选择您自己的用户名即可。</p></div><p>当 GitHub 在您的帐户下创建仓库分支时，您将在屏幕上看到一个创建进度。当 GitHub 完成分支创建后，您会看到另一个屏幕内容，它看起来与原始仓库页面很像，但是您已经在自己的仓库位置了。</p><p><img src="'+h+'" alt="own" loading="lazy"></p><p>这正是您想要的。这是原始 <em>programmer-jokes</em> 仓库的完整副本，但是此副本位于您自己的帐户下。这意味着您可以对此仓库做任何事情，甚至删除它，而不会影响在 <em>raywenderlich</em> 组织下的原始仓库。</p><p>在开始之前，您需要复制或克隆这个远程仓库到您本地的工作站。要做到这一点，您需要知道这个远程仓库的 URL。这个 URL 很容易就可以知道 —— 只需在当前页面上简单的单击 <em>Code</em> 按钮，然后在弹出的对话框中单击 https://github.com/username... URL 旁边的小剪贴板图标：</p><p><img src="'+d+'" alt="clone" loading="lazy"></p><p>现在，在您的剪贴板上已经有此远程仓库的 URL 了。</p><p>您已经完成了该网页的一些操作 —— 您现在可以开始在命令行上使用 Git。</p><p>在您的系统上打开终端、<em>PowerShell</em> 或适当的控制台提示符，并准备好继续操作。</p>',14);function k(f,G){const a=n("ExternalLinkIcon");return p(),r("div",null,[b,e("ul",null,[e("li",null,[e("a",g,[i("https://github.com/raywenderlich/programmer-jokes"),s(a)])])]),u])}const y=o(_,[["render",k],["__file","02-chapter01.html.vue"]]);export{y as default};
