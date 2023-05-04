import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.938a25b9.js";const t={},o=e(`<h2 id="\u5EF6\u8FDF\u503C" tabindex="-1"><a class="header-anchor" href="#\u5EF6\u8FDF\u503C" aria-hidden="true">#</a> \u5EF6\u8FDF\u503C</h2><p>\u6BCF\u4E2A <code>async</code> \u4EE3\u7801\u5757\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A <code>Deferred&lt;T&gt; </code>\u3002\u5B83\u662F\u534F\u7A0B API \u7684\u6838\u5FC3\u539F\u7406\uFF0C\u4E86\u89E3\u5B83\u7684\u5DE5\u4F5C\u539F\u7406\u975E\u5E38\u91CD\u8981\u3002</p><p><code>async </code> \u4F1A\u521B\u5EFA\u4E00\u4E2A <code>DeferredCoroutine</code> \u6216\u8005\u4E00\u4E2A <code>LazyDeferredCoroutine</code>\u3002\u8FD9\u4E9B\u534F\u7A0B\u90FD\u6709\u4E00\u4E2A\u516C\u5171\u7684\u7279\u70B9\uFF1A\u5B9E\u73B0\u4E86 <code>Continuation&lt;T&gt;</code> \u63A5\u53E3\uFF0C\u5141\u8BB8\u62E6\u622A\u6267\u884C\u6D41\u7A0B\u5E76\u53EF\u4EE5\u5C06\u503C\u4E00\u76F4\u4F20\u9012\u5230\u8C03\u7528\u5904\uFF0C\u5C31\u50CF <code>suspendCoroutine</code> \u4E00\u6837\u3002\u8FD9\u770B\u6765\u4E0E\u4E4B\u524D\u7684 <strong>future pattern</strong> \u7684\u5DE5\u4F5C\u65B9\u5F0F\u7C7B\u4F3C\u3002</p><p>\u4E00\u65E6\u534F\u7A0B\u88AB\u521B\u5EFA\uFF0C\u9664\u975E\u6307\u5B9A\u4E86 <code>CoroutineStart</code> \u4E3A <code>CoroutineStart.LAZY</code>\uFF0C\u5426\u5219\u5B83\u5C06\u4F1A\u7ACB\u5373\u542F\u52A8\u3002\u4EE3\u7801\u5C06\u5728\u901A\u8FC7 <code>context</code> \u53C2\u6570\u4F20\u5165\u7684 <code>Dispatchers</code> \u58F0\u660E\u7684\u7EBF\u7A0B\u4E2D\u6267\u884C\u3002\u5F53\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u5E76\u4EA7\u751F\u4E00\u4E2A\u503C\u540E\uFF0C\u8FD9\u4E2A\u503C\u5C06\u88AB\u5B58\u50A8\u5728\u534F\u7A0B\u5185\u90E8\u3002\u5982\u679C\u5728\u4EFB\u610F\u65F6\u523B\u8C03\u7528 <code>await</code>\uFF0C\u5B83\u5C06\u4F1A\u662F\u4E00\u8D77\u6302\u65AD\u8C03\u7528\uFF0C\u540C\u65F6\u5B83\u4E5F\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7EED\u4F53\u548C\u6267\u884C\u6D41\u7A0B\uFF0C\u76F4\u5230 <code>await</code> \u8FD4\u56DE\u503C\u3002\u5982\u679C\u534F\u7A0B\u8FD8\u6CA1\u6709\u51C6\u5907\u597D\u503C\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u51FD\u6570\u5FC5\u987B\u7B49\u5F85\u3002\u5982\u679C\u534F\u7A0B\u5DF2\u7ECF\u51C6\u5907\u597D\u503C\uFF0C\u90A3\u4E48\u5C06\u4F1A\u7ACB\u5373\u5F97\u5230\u503C\u3002</p><p>\u540C\u65F6\u6211\u4EEC\u8FD8\u53EF\u4EE5\u68C0\u67E5 deferred value \u7684\u72B6\u6001\uFF0C\u56E0\u4E3A\u5B83\u4E5F\u5B9E\u73B0\u4E86 <code>Job</code> \u63A5\u53E3\u3002\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 <code>isActive</code> \u548C <code>isCompleted</code> \u6765\u4E86\u89E3\u5B83\u5F53\u524D\u751F\u547D\u5468\u671F\u7684\u72B6\u6001\u3002\u6211\u4EEC\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u7684\u51FD\u6570\u6765\u83B7\u53D6\u534F\u7A0B\u7684\u503C\uFF0C\u5982\u679C\u534F\u7A0B\u88AB\u53D6\u6D88\uFF0C\u90A3\u4E48\u5C06\u4F1A\u5F97\u5230\u5F02\u5E38\u3002<code>getCompleted</code> \u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u534F\u7A0B\u7684\u503C\uFF0C\u6216\u8005\u534F\u7A0B\u88AB\u53D6\u6D88\uFF0C\u5B83\u5C06\u8FD4\u56DE\u4E00\u4E2A\u5F02\u5E38\u3002<code>getCompletionExceptionOrNull</code> \u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE <code>CancellationException</code> \u5F02\u5E38\uFF0C\u5982\u4F55\u534F\u7A0B\u6CA1\u6709\u88AB\u53D6\u6D88\uFF0C\u5B83\u5C06\u8FD4\u56DE <code>null</code>\u3002\u901A\u8FC7\u4E0A\u8FF0\u51FD\u6570\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4E86\u89E3 deferred value \u5B8C\u6210\u72B6\u6001\u7684\u8BE6\u7EC6\u4FE1\u606F\u3002</p><p>\u6240\u4EE5\uFF0C\u4EC0\u4E48\u662F <code>Deferred</code> \u7684\u6700\u597D\u8BE0\u91CA\uFF1A\u5B83\u662F\u4E00\u4E2A\u5E26\u6709\u8FD4\u56DE\u7ED3\u679C\u7684 <code>Job</code>\u3002\u5B83\u53EF\u4EE5\u5E76\u884C\u8FD0\u884C\uFF0C\u5B83\u53EF\u80FD\u4F1A\uFF0C\u4E5F\u53EF\u80FD\u4E0D\u4F1A\u751F\u6210\u7ED3\u679C\u503C\uFF0C\u5E76\u4E14\u5B83\u53EF\u4EE5\u88AB\u53D6\u6D88\u4EE5\u53CA\u8FDE\u63A5\u5176\u5B83\u7684 <code>Job</code>\u3002\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5F3A\u5927\u7684 API\uFF0C\u6211\u4EEC\u53EF\u4EE5\u968F\u5FC3\u6240\u6B32\u7684\u8C03\u7528\u3002\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u5EF6\u8FDF\u503C\u7684\u7279\u6027\uFF1A\u5C06\u5EF6\u8FDF\u503C\u7EC4\u5408\u5728\u4E00\u4E2A\u5177\u6709\u591A\u4E2A\u53C2\u6570\u7684\u51FD\u6570\u4E2D\u3002</p><h2 id="\u7EC4\u5408\u591A\u4E2A\u5EF6\u8FDF\u503C" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u5408\u591A\u4E2A\u5EF6\u8FDF\u503C" aria-hidden="true">#</a> \u7EC4\u5408\u591A\u4E2A\u5EF6\u8FDF\u503C</h2><p>\u80FD\u591F\u5C06\u591A\u4E2A\u5728\u540E\u53F0\u6784\u5EFA\u7684\u5EF6\u8FDF\u503C\u5728\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u4E2D\uFF0C\u5E76\u4E14\u53EF\u4EE5\u5728\u4E3B\u7EBF\u7A0B\u8BBF\u95EE\uFF0C\u8FD9\u662F\u4E00\u4EF6\u4E86\u4E0D\u8D77\u7684\u4E8B\u60C5\u3002\u4F46\u662F <code>async</code> \u7684\u771F\u6B63\u5F3A\u5927\u4E4B\u5904\u5728\u4E8E\u80FD\u591F\u5C06\u4E24\u4E2A\u6216\u591A\u4E2A\u5EF6\u8FDF\u503C\u7EC4\u5408\u5230\u4E00\u4E2A\u51FD\u6570\u8C03\u7528\u4E2D\u3002\u8BA9\u6211\u4EEC\u770B\u770B\u5982\u4F55\u5B9E\u73B0\u3002</p><p>\u5230\u76EE\u524D\u4E3A\u6B62\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5B66\u4E60\u4E86\u4E00\u4E2A\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42\u7684\u793A\u4F8B\uFF0C\u4F46\u73B0\u5728\u662F\u65F6\u5019\u4E86\u6269\u5C55\u4E0B\u8BE5\u793A\u4F8B\u4E86\u3002\u5728\u9879\u76EE\u4E2D\u6709\u4E00\u4E2A 13,000 \u884C\u6587\u672C\u7684\u540D\u4E3A <strong>users.txt</strong> \u7684\u6587\u4EF6\u3002\u5927\u591A\u6570\u884C\u7684\u4FE1\u606F\u5305\u542B\u6709\u4E00\u4E2A <code>id</code>\uFF0C\u4E00\u4E2A <code>name</code> \u4EE5\u53CA\u4E00\u4E2A <code>last name</code>\uFF0C\u8FD9\u4E9B\u4FE1\u606F\u53EF\u4EE5\u6784\u5EFA <code>Users</code> \u7C7B\u3002\u6709\u4E9B\u662F\u7A7A\u884C\uFF0C\u8FD8\u6709\u4E9B\u884C\u6CA1\u6709\u5305\u542B\u5B8C\u6574\u7684\u4E0A\u8FF0\u4E09\u4E2A\u4FE1\u606F\uFF0C\u751A\u81F3\u6709\u4E9B\u884C\u662F\u810F\u6570\u636E\u3002\u6211\u4EEC\u7684\u60F3\u6CD5\u662F\u8BFB\u53D6\u6574\u4E2A\u6587\u4EF6\uFF0C\u89E3\u6790\u548C\u62C6\u5206\u6BCF\u4E00\u884C\u5E76\u4ECE\u4E2D\u521B\u5EFA\u7528\u6237\u3002\u5728\u8FD9\u4E4B\u540E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A <code>User</code> \u7684\u96C6\u5408\uFF0C\u6700\u540E\u6211\u4EEC\u68C0\u67E5\u901A\u8FC7\u6A21\u62DF\u7F51\u7EDC\u8BF7\u6C42\u5F97\u5230\u7684 <code>User</code> \u662F\u5426\u5B58\u50A8\u5728\u6587\u4EF6\u4E2D\u3002</p><p>\u901A\u8FC7\u8FD9\u4E2A\u60F3\u6CD5\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u770B\u5230\u5982\u4F55\u5728\u5355\u4E2A\u51FD\u6570\u8C03\u7528\u4E2D\u542F\u52A8\u548C\u4F7F\u7528\u4E24\u4E2A\u5EF6\u8FDF\u503C\u3002\u73B0\u5728\u6211\u4EEC\u6253\u5F00 <strong>AsyncAwait.kt</strong> \u3002\u5728\u90A3\u91CC\uFF0C\u5C06\u4EE5\u4E0B\u4EE3\u7801\u6DFB\u52A0\u5230\u6587\u4EF6\u4E2D\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">private</span> <span class="token keyword">fun</span> <span class="token function">readUsersFromFile</span><span class="token punctuation">(</span>filePath<span class="token operator">:</span> String<span class="token punctuation">)</span> <span class="token operator">=</span>
	GlobalScope<span class="token punctuation">.</span><span class="token function">async</span> <span class="token punctuation">{</span>
	    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Reading the file of users&quot;</span></span><span class="token punctuation">)</span>
	    <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
	    <span class="token function">File</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span>
	    <span class="token punctuation">.</span><span class="token function">readLines</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	    <span class="token punctuation">.</span><span class="token function">asSequence</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	    <span class="token punctuation">.</span><span class="token function">filter</span> <span class="token punctuation">{</span> it<span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
	    <span class="token punctuation">.</span><span class="token function">map</span> <span class="token punctuation">{</span>
	        <span class="token keyword">val</span> <span class="token keyword">data</span> <span class="token operator">=</span> it<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot; &quot;</span></span><span class="token punctuation">)</span> <span class="token comment">// [id, name, lastName]</span>
	        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">data</span><span class="token punctuation">.</span>size <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">data</span> <span class="token keyword">else</span> <span class="token function">emptyList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	    <span class="token punctuation">}</span>
	    <span class="token punctuation">.</span><span class="token function">filter</span> <span class="token punctuation">{</span>
	        it<span class="token punctuation">.</span><span class="token function">isNotEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	    <span class="token punctuation">}</span>
	    <span class="token punctuation">.</span><span class="token function">map</span> <span class="token punctuation">{</span>
	        <span class="token keyword">val</span> userId <span class="token operator">=</span> it<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">toInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	        <span class="token keyword">val</span> name <span class="token operator">=</span> it<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
	        <span class="token keyword">val</span> lastName <span class="token operator">=</span> it<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
	        <span class="token function">User</span><span class="token punctuation">(</span>userId<span class="token punctuation">,</span> name<span class="token punctuation">,</span> lastName<span class="token punctuation">)</span>
	    <span class="token punctuation">}</span>
	    <span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token keyword">private</span> <span class="token keyword">fun</span> <span class="token function">checkUserExists</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">,</span> users<span class="token operator">:</span> List<span class="token operator">&lt;</span>User<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Boolean <span class="token punctuation">{</span>
    <span class="token keyword">return</span> user <span class="token keyword">in</span> users
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u522B\u5FD8\u8BB0\u4E0B\u9762\u7684\u5BFC\u5305\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>io<span class="token punctuation">.</span>File
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B64\u51FD\u6570\u4EE5\u5F02\u6B65\u65B9\u5F0F\u6267\u884C\u4E0A\u8FF0\u6240\u6709\u64CD\u4F5C\uFF0C\u5E76\u5C06\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u7528\u6237\u5217\u8868\u7684 <code>Deferred</code>\u3002 \u73B0\u5728\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5C06 <code>main</code> \u51FD\u6570\u4E2D\u7684\u4EE3\u7801\u8C03\u6574\u4E3A\u5982\u4E0B\u6240\u793A\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> userId <span class="token operator">=</span> <span class="token number">992</span>
    GlobalScope<span class="token punctuation">.</span><span class="token function">launch</span> <span class="token punctuation">{</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Finding user&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">val</span> userDeferred <span class="token operator">=</span> <span class="token function">getUserByIdFromNetwork</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span>
        <span class="token keyword">val</span> usersFromFileDeferred <span class="token operator">=</span> <span class="token function">readUsersFromFile</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;users.txt&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">val</span> userStoredInFile <span class="token operator">=</span> <span class="token function">checkUserExists</span><span class="token punctuation">(</span>
            userDeferred<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> usersFromFileDeferred<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>userStoredInFile<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Found user in file!&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u4E0A\u9762\u7684\u4EE3\u7801\u4E2D\uFF1A</p><ul><li>\u901A\u8FC7\u8C03\u7528 <code>getUserByIdFromNetwork</code> \u521B\u5EFA\u4E86\u4E00\u4E2A <code>userDeferred</code> \u53D8\u91CF\u3002<code>getUserByIdFromNetwork</code> \u51FD\u6570\u5C06\u4F1A\u5EF6\u8FDF 3\u79D2\u8FD4\u56DE\u4E00\u4E2A <code>User</code>\u3002</li><li>\u7136\u540E\u5C06\u5B58\u50A8\u5728 <strong>users.txt</strong> \u6587\u4EF6\u4E2D\u7684\u7528\u6237\u5217\u8868\u8BFB\u53D6\u5230 <code>usersFromFileDeferred</code> \u53D8\u91CF\u3002</li><li>\u5F53\u4E0A\u8FF0\u4E24\u4E2A\u53D8\u91CF\u90FD\u51C6\u5907\u597D\u540E\uFF0C\u5C31\u53EF\u4EE5\u8C03\u7528 <code>checkUserExists</code> \u51FD\u6570\u6765\u68C0\u67E5\u4ECE\u7F51\u7EDC\u83B7\u53D6\u5230\u7684 <code>user</code> \u662F\u5426\u5B58\u50A8\u5728\u6587\u4EF6\u4E2D\u3002</li><li><code>checkUserExists</code> \u51FD\u6570\u9700\u8981\u4E24\u4E2A\u53C2\u6570\uFF1A\u5176\u4E2D\u4E00\u4E2A\u662F\u9700\u8981\u88AB\u68C0\u67E5\u7684 <code>user</code>\uFF0C\u53E6\u5916\u4E00\u4E2A\u662F\u68C0\u67E5 <code>user</code> \u662F\u5426\u5728\u5176\u4E2D\u7684 <code>User</code> \u96C6\u5408\u3002</li><li>\u8981\u4F20\u5165\u4E0A\u8FF0\u4E24\u4E2A\u53C2\u6570\u503C\uFF0C\u5FC5\u987B\u8981\u7B49\u5F85 <code>Deferred</code> \u7684\u7ED3\u679C\u3002</li><li>\u6700\u540E\uFF0C\u5982\u679C <code>user</code> \u5B58\u50A8\u5728\u6587\u4EF6\u4E2D\uFF0C\u90A3\u4E48\u5C31\u8F93\u51FA\uFF1A\u201CFound user in file!\u201D \u3002</li></ul><p>\u6211\u4EEC\u4F20\u5165 <code>checkUserExists</code> \u51FD\u6570\u7684\u53C2\u6570\u662F\u4E4B\u524D\u51C6\u5907\u7684\u4E24\u4E2A\u5EF6\u8FDF\u503C\u7684\u7B49\u5F85\u7ED3\u679C\uFF0C\u5E76\u4E14\u53EA\u901A\u8FC7\u4E00\u884C\u4EE3\u7801\uFF1A\u6302\u8D77\u51FD\u6570\u5E76\u83B7\u53D6\u4E86\u4E24\u4E2A\u503C\u3002</p><p>\u8FD9\u662F\u4F7F\u7528\u591A\u4E2A\u5EF6\u8FDF\u503C\u7684\u6B63\u786E\u65B9\u6CD5\u3002\u6211\u4EEC\u53EA\u521B\u5EFA\u4E86\u4E00\u4E2A\u6302\u8D77\u70B9\uFF0C\u4F46\u662F\u5B83\u6302\u8D77\u4E86\u4E24\u4E2A\u51FD\u6570\u3002\u53E6\u4E00\u79CD\u65B9\u5F0F\u662F\u628A <code>checkUserExists</code> \u53D8\u6210\u6302\u8D77\u51FD\u6570\uFF0C\u7136\u540E\u5728\u5176\u5185\u90E8\u7B49\u5F85\u5EF6\u8FDF\u503C\uFF0C\u4F46\u662F\u5C06\u5EF6\u8FDF\u503C\u8FDB\u4E00\u6B65\u4F20\u9012\u7ED9\u5176\u4ED6\u51FD\u6570\u4E4B\u524D\u5C31\u5F97\u5230\u503C\u66F4\u52A0\u7684\u7B80\u5355\u660E\u4E86\u3002</p><p>\u8FD0\u884C\u4E0A\u8FF0\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0B\u8F93\u51FA\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Finding user
Retrieving user from network
Reading the <span class="token function">file</span> of <span class="token function">users</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5927\u6982 3\u79D2\u540E\uFF0C\u6211\u4EEC\u8FD8\u53EF\u4EE5\u770B\u5230 <code>Found user in file!</code>\u3002\u8FD9\u662F\u56E0\u4E3A\u901A\u8FC7 <code>Deferred</code> \u521B\u5EFA\u7684\u534F\u7A0B\u4E0D\u662F\u60F0\u6027\u7684\uFF0C\u5B83\u4EEC\u4F1A\u7ACB\u5373\u542F\u52A8\u2014\u2014\u53EA\u6709\u5F53\u8C03\u7528 <code>await</code> \u65F6\uFF0C\u624D\u4F1A\u6302\u8D77\u4EE3\u7801\u3002\u8C03\u7528 <code>await</code> \u4E4B\u540E\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230 <code>checkUserExists</code> \u7684\u8FD4\u56DE\u503C\uFF0C\u5E76\u4E14\u8F93\u51FA <code>user</code> \u5728\u6587\u4EF6\u4E2D\u5B58\u5728\u3002</p><p>\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u53EF\u4EE5\u7EC4\u5408\u4EFB\u610F\u6570\u91CF\u7684\u5EF6\u8FDF\u503C\u5E76\u5B9E\u73B0\u667A\u80FD\u548C\u7B80\u5355\u7684\u5E76\u884C\u6027\uFF0C\u4F46\u5B83\u4E0D\u662F\u57FA\u4E8E\u6570\u636E\u6D41\u548C\u56DE\u8C03\u7684\u6982\u5FF5\u3002\u57FA\u4E8E\u5230\u8FD9\u4E00\u70B9\uFF0C\u4EE3\u7801\u975E\u5E38\u5BB9\u6613\u7406\u89E3\uFF0C\u56E0\u4E3A\u5B83\u7C7B\u4F3C\u4E8E\u987A\u5E8F\u7684\u540C\u6B65\u4EE3\u7801\uFF0C\u5373\u4F7F\u5728\u80CC\u540E\u5B83\u53EF\u80FD\u5B8C\u5168\u662F\u5F02\u6B65\u7684\u3002\u8FD9\u5C31\u662F\u534F\u7A0B\u548C\u5F02\u6B65/\u7B49\u5F85\u6A21\u5F0F\u7684\u771F\u6B63\u529B\u91CF\u3002</p><p>\u5728\u4E0A\u4E00\u7AE0\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528 <code>withContext</code> \u5B9E\u73B0\u4E86\u76F8\u540C\u7684\u884C\u4E3A\uFF0C\u4F46\u662F\u53EA\u80FD\u8FD4\u56DE\u4E00\u4E2A\u503C\u3002\u8FD9\u662F\u4E24\u79CD\u6A21\u5F0F\u4E4B\u95F4\u7684\u4E3B\u8981\u533A\u522B \u2014\u2014 <code>withContext</code> \u6700\u9002\u7528\u4E8E\u9700\u8981\u4ECE\u4E00\u6BB5\u53EF\u6302\u8D77\u7684\u4EE3\u7801\u4E2D\u8FD4\u56DE\u5355\u4E2A\u503C\u7684\u573A\u666F\uFF0C\u800C <code>async/await</code> \u6700\u9002\u7528\u4E8E\u5E76\u884C\u8FD0\u884C\u7684\u591A\u4E2A\u51FD\u6570\u7EC4\u5408\u4EA7\u751F\u4E00\u4E2A\u7ED3\u679C\u7684\u573A\u666F\u3002</p><p>\u7136\u800C\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u6709\u4E00\u70B9\u5E76\u4E0D\u7406\u60F3\uFF1A\u4E8B\u5B9E\u4E0A\uFF0C\u5728\u53D6\u6D88\u548C\u8D44\u6E90\u7BA1\u7406\u65B9\u9762\uFF0C\u8FD9\u6BB5\u4EE3\u7801\u7684\u7ED3\u6784\u4E0D\u662F\u5F88\u597D\u3002\u8BA9\u6211\u4EEC\u770B\u770B\u5982\u4F55\u6309\u7167 <strong>Jetbrain&#39;s</strong> \u7684\u7406\u5FF5\u5C06\u4EE3\u7801\u6253\u78E8\u81F3\u5B8C\u7F8E\u3002</p>`,25),p=[o];function c(i,l){return s(),a("div",null,p)}var r=n(t,[["render",c],["__file","03.deferring-values.html.vue"]]);export{r as default};
