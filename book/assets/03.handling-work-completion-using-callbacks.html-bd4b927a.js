import{_ as n,Y as a,Z as s,a3 as e}from"./framework-3d290349.js";const o={},t=e(`<h1 id="使用回调完成工作" tabindex="-1"><a class="header-anchor" href="#使用回调完成工作" aria-hidden="true">#</a> 使用回调完成工作</h1><p>在所有异步编程机制中，回调是最常用的。它是封装了供其他人可以稍后执行的对象，例如在特定任务完成时。这类似于在现实生活中，你要求某人在完成你分配给他的任务时通过某种方式通知你一样。当使用回调时，那种方式类似于要执行的代码，并且要执行的代码是非阻塞的。</p><p>如何将一些代码放入对象中进行传递呢？ 其中一种方法是使用接口。 你可以通过以下方式创建接口：</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">interface</span> OnUploadCallback <span class="token punctuation">{</span>
    <span class="token keyword">fun</span> <span class="token function">onUploadCompleted</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了这个接口，你可以将接口的实现对象传递给正在执行长时间运行任务的函数。当长时间运行的任务完成时，将调用实现对象的 <code>onUploadCompleted</code> 函数。该函数不知道实现对象的逻辑是什么，并且它也不应该知道。</p><p>在支持函数式编程特性的现代编程语言（如 Kotlin）中，你可以使用 lambda 表达式来做同样的事情。在前面的示例中，你可以将 lambda 作为回调传递给图片上传函数。lambda 将包含图片上传任务完成时要执行的代码：</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">uploadImage</span><span class="token punctuation">(</span>image<span class="token operator">:</span> Image<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">showLoadingSpinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    uploadService<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">hideLoadingSpinner</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>回顾第一个片段，代码逻辑上并没有太大变化。仍然是显示进度条，调用图片上传任务以及上传完成是隐藏进度条。主要的区别在于，你不会在调用图片上传任务后立即调用 <code>hideLoadingSpinner</code>。该函数现在是 lambda 块的一部分，而 lambda 块作为参数传递给图片上传函数，并在图片上传完成是执行。相关联的任务在任何时候完成时，你都可以调用包装函数。并且 lambda 块里可以做很多事情，不仅仅是隐藏进度条。</p><p>在这种情况下，如何函数返回某个值，它会被传递到 lambda 块中，这样你就可以在 lambda 块中使用它。当然，<code>uploadService</code> 的内部实现取决于你使用的服务和库。通常每个库都有自己的回调类型。尽管回调是处理异步最常用的方式之一，但是多年来回调已经变得“臭名昭著”了。你将在下一节中了解原因。</p>`,9),p=[t];function c(l,i){return a(),s("div",null,p)}const u=n(o,[["render",c],["__file","03.handling-work-completion-using-callbacks.html.vue"]]);export{u as default};
