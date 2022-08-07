import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as o,a as n,b as p,w as c,e as i,d as s,r as l}from"./app.81a6908b.js";const u={},d=i(`<h2 id="\u5206\u6790\u534F\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u534F\u7A0B" aria-hidden="true">#</a> \u5206\u6790\u534F\u7A0B</h2><p>\u76EE\u524D\u4E3A\u6B62\uFF0C\u60A8\u5DF2\u7ECF\u4E86\u89E3\u5230\uFF1A\u6BCF\u6B21\u542F\u52A8\u534F\u7A0B\u65F6\uFF0C\u60A8\u90FD\u5C06\u83B7\u5F97 Job \u5F15\u7528\u3002\u60A8\u4E5F\u53EF\u4EE5\u5728\u4E24\u4E2A\u4E0D\u540C\u7684 Job \u4E4B\u95F4\u5EFA\u7ACB\u4F9D\u8D56\u5173\u7CFB \u2014 \u5982\u4F55\u5B9E\u73B0\u5462\uFF1F\u60A8\u53EA\u9700\u8981\u5C06\u524D\u9762<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>\u7684\u4EE3\u7801\u66FF\u6362\u6210\u4E0B\u9762\u8FD9\u6837\u5373\u53EF\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> job1 <span class="token operator">=</span> GlobalScope<span class="token punctuation">.</span><span class="token function">launch</span><span class="token punctuation">(</span>start <span class="token operator">=</span> CoroutineStart<span class="token punctuation">.</span>LAZY<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Pong&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    GlobalScope<span class="token punctuation">.</span><span class="token function">launch</span> <span class="token punctuation">{</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Ping&quot;</span></span><span class="token punctuation">)</span>
        job1<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Ping&quot;</span></span><span class="token punctuation">)</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E76\u5BFC\u5165 <code>CoroutineStart</code> \u3002\u6D4F\u89C8\u4E0A\u9762\u7684\u4EE3\u7801\uFF1A</p><ul><li>\u60A8\u542F\u52A8\u7684\u7B2C\u4E00\u4E2A\u534F\u7A0B\u5305\u542B\u4E00\u4E9B\u5EF6\u8FDF\u4EE3\u7801\u5E76\u4E14\u8F93\u51FA <code>Pong</code> \u5B57\u7B26\uFF0C\u5C06\u521B\u5EFA\u7684 Job \u5BF9\u8C61\u8D4B\u503C\u7ED9 job1 \u5F15\u7528\u3002</li><li>\u60A8\u542F\u52A8\u7684\u7B2C\u4E8C\u4E2A\u534F\u7A0B\u540C\u6837\u5305\u542B\u4E00\u4E9B <code>println</code> \u8F93\u51FA\uFF0C\u540C\u65F6\u4E5F\u5C06\u8C03\u7528 job1 \u7684 <code>join</code> \u51FD\u6570\u3002</li></ul><p>\u4E0A\u9762\u4EE3\u7801\u7684\u9884\u671F\u8F93\u51FA\u662F\u4EC0\u4E48\u5462\uFF1F\u5982\u679C\u60A8\u7684\u9884\u671F\u662F\u5148\u8F93\u51FA <code>Pong</code> \u518D\u8F93\u51FA\u4E24\u6B21 <code>Ping</code> \uFF0C\u4F46\u662F\uFF0C\u5B9E\u9645\u4E0A\u5E76\u975E\u5982\u6B64\u3002\u5982\u60A8\u6240\u89C1\uFF0C\u5728\u7B2C\u4E00\u4E2A\u534F\u7A0B\u4E2D\u60A8\u4F20\u5165\u4E86 <code>CoroutineStart.LAZY</code> \uFF0C\u8FD9\u610F\u5473\u7740\u5176\u76F8\u5173\u7684\u4EE3\u7801\u5C06\u5728\u60A8\u5B9E\u9645\u9700\u8981\u5B83\u65F6\u88AB\u6267\u884C\u3002</p><p>\u5B83\u4F1A\u5728\u7B2C\u4E8C\u4E2A\u534F\u7A0B\u8C03\u7528 job1 \u7684 <code>join</code> \u51FD\u6570\u65F6\u6267\u884C\u3002\u8FD9\u5C31\u662F\u4E3A\u4EC0\u4E48\u4E0A\u9762\u4EE3\u7801\u5B9E\u9645\u4E0A\u5148\u8F93\u51FA <code>Ping</code>\uFF0C\u7136\u540E\u8F93\u51FA <code>Pong</code>\uFF0C\u6700\u540E\u518D\u8F93\u51FA <code>Ping</code>\u3002</p><h2 id="\u6784\u5EFA-job-\u5C42\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u6784\u5EFA-job-\u5C42\u7EA7" aria-hidden="true">#</a> \u6784\u5EFA Job \u5C42\u7EA7</h2><p>\u5728\u524D\u9762\u7684\u4EE3\u7801\u4E2D\uFF0C\u60A8\u5728\u4E0D\u540C\u7684 Job \u5B9E\u4F8B\u4E4B\u95F4\u5EFA\u7ACB\u4E86\u4F9D\u8D56\u5173\u7CFB\uFF0C\u4F46\u662F\u8FD9\u5E76\u4E0D\u662F\u60A8\u8BA4\u4E3A\u7684\u90A3\u79CD\u7236\u5B50\u5173\u7CFB\u3002 \u8BF7\u518D\u4E00\u6B21\u7528\u4E0B\u9762\u7684\u4EE3\u7801\u66FF\u6362\u524D\u9762\u7684\u4EE3\u7801\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528 with \u6765\u907F\u514D\u91CD\u590D\u4F7F\u7528 GlobalScope \u63A5\u6536\u5668\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">with</span><span class="token punctuation">(</span>GlobalScope<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">val</span> parentJob <span class="token operator">=</span> launch <span class="token punctuation">{</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;I\u2019m the parent&quot;</span></span><span class="token punctuation">)</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token function">launch</span><span class="token punctuation">(</span>context <span class="token operator">=</span> parentJob<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;I\u2019m a child&quot;</span></span><span class="token punctuation">)</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>parentJob<span class="token punctuation">.</span>children<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;The Job has children!&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;The Job has NO children&quot;</span></span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F9D\u6B21\u6D4F\u89C8\u4E0A\u9762\u7684\u4EE3\u7801\uFF1A</p><ul><li>\u9996\u5148\uFF0C\u60A8\u542F\u52A8\u4E86\u4E00\u4E2A\u534F\u7A0B\uFF0C\u5E76\u628A\u521B\u5EFA\u7684 Job \u5BF9\u8C61\u8D4B\u503C\u7ED9\u4E86 parentJob \u5F15\u7528\u3002</li><li>\u7136\u540E\uFF0C\u60A8\u4F7F\u7528\u524D\u9762\u7684 Job \u4F5C\u4E3A\u534F\u7A0B\u7684 <code>CoroutineContext</code> \u542F\u52A8\u4E86\u53E6\u4E00\u4E2A\u534F\u7A0B\u3002\u56E0\u4E3A Job \u62BD\u8C61\u5B9E\u73B0\u4E86 <code>CoroutineContext</code>\u3002\u6B64\u65F6\uFF0C\u60A8\u4F20\u9012\u7684 <code>CoroutineContext</code> \u4E0E\u5F53\u524D\u6D3B\u8DC3\u7684 <code>CoroutineScope EmptyCoroutineContext</code> \u4E2D\u7684\u4E00\u4E2A\u5408\u5E76\u3002</li></ul><p>\u5982\u679C\u60A8\u8FD0\u884C\u4E0A\u9762\u7684\u4EE3\u7801\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230 parentJob \u662F\u6709\u5B50\u8282\u70B9\u7684\u3002\u5982\u679C\u60A8\u5220\u9664\u7B2C\u4E8C\u4E2A\u534F\u7A0B\u6784\u5EFA\u5668\u7684\u4E0A\u4E0B\u6587\uFF0C\u518D\u8FD0\u884C\u76F8\u540C\u7684\u4EE3\u7801\uFF0C\u60A8\u53EF\u4EE5\u770B\u5230\u7236\u5B50\u5173\u7CFB\u6CA1\u6709\u5EFA\u7ACB\u5E76\u4E14\u5B50\u8282\u70B9\u4E0D\u5B58\u5728\u3002</p><h2 id="\u4F7F\u7528\u534F\u7A0B\u6807\u51C6\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u534F\u7A0B\u6807\u51C6\u51FD\u6570" aria-hidden="true">#</a> \u4F7F\u7528\u534F\u7A0B\u6807\u51C6\u51FD\u6570</h2><p>\u60A8\u53EF\u4EE5\u4F7F\u7528\u534F\u7A0B\u505A\u7684\u53E6\u4E00\u4EF6\u4E8B\u662F\u6784\u5EFA\u91CD\u8BD5\u903B\u8F91\u673A\u5236\u3002\u6807\u51C6\u5E93\u4E2D\u7684 <code>repeat</code> \u51FD\u6570\uFF0C\u4E0E\u60A8\u5728\u524D\u9762\u5B66\u5230\u7684 <code>delay</code> \u51FD\u6570\u914D\u5408\u4F7F\u7528\uFF0C\u60A8\u53EF\u4EE5\u521B\u5EFA\u5C1D\u8BD5\u5728\u5EF6\u8FDF\u65F6\u95F4\u6BB5\u5185\u8FD0\u884C\u5DE5\u4F5C\u7684\u4EE3\u7801\u3002\u63A5\u4E0B\u6765\uFF0C\u518D\u6B21\u5C06 Main.kt \u4EE3\u7801\u66FF\u6362\u4E3A\u4EE5\u4E0B\u4EE3\u7801\uFF1A</p><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> isDoorOpen <span class="token operator">=</span> <span class="token boolean">false</span>
    <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Unlocking the door... please wait.\\n&quot;</span></span><span class="token punctuation">)</span>
    GlobalScope<span class="token punctuation">.</span><span class="token function">launch</span> <span class="token punctuation">{</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span>
        isDoorOpen <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
    GlobalScope<span class="token punctuation">.</span><span class="token function">launch</span> <span class="token punctuation">{</span>
        <span class="token function">repeat</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Trying to open the door...\\n&quot;</span></span><span class="token punctuation">)</span>
            <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">800</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>isDoorOpen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;Opened the door!\\n&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token function">println</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;The door is still locked\\n&quot;</span></span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    Thread<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">5000</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C1D\u8BD5\u8FD0\u884C\u4E0A\u9762\u4EE3\u7801\u3002\u60A8\u53EF\u4EE5\u770B\u5230\u5728\u6700\u7EC8\u6253\u5F00\u95E8\u4E4B\u524D\uFF0C\u53EF\u4EE5\u5C1D\u8BD5\u591A\u6B21\u53BB\u6253\u5F00\u95E8\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528 Kotlin \u6807\u51C6\u5E93\u4E2D\u7684 <code>delay</code> \u548C <code>repeat</code> \u51FD\u6570\uFF0C\u60A8\u8BBE\u6CD5\u6784\u5EFA\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u8BE5\u673A\u5236\u5728\u6EE1\u8DB3\u65F6\u95F4\u6216\u903B\u8F91\u6761\u4EF6\u4E4B\u524D\u5C1D\u8BD5\u591A\u6B21\u8FD0\u884C\u67D0\u4E9B\u4EE3\u7801\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528\u76F8\u540C\u7684\u673A\u5236\u6765\u6784\u5EFA\u7F51\u7EDC\u56DE\u9000\u548C\u91CD\u8BD5\u903B\u8F91\u3002\u5F53\u60A8\u5728\u672C\u4E66\u540E\u7EED\u7AE0\u8282\u5B66\u4E60\u4E86\u5982\u4F55\u4ECE\u534F\u7A0B\u4E2D\u8FD4\u56DE\u503C\uFF0C\u60A8\u4F1A\u770B\u5230\u5B83\u7684\u5F3A\u5927\u4E4B\u5904\u3002</p><hr class="footnotes-sep">`,18),r={class:"footnotes"},k={class:"footnotes-list"},v={id:"footnote1",class:"footnote-item"},b=s("\u8FD9\u91CC\u6307"),m=s("\u300A\u542F\u52A8\u534F\u7A0B\u300B\u4E2D\u7684\u4EE3\u7801"),f=s(),h=n("a",{href:"#footnote-ref1",class:"footnote-backref"},"\u21A9\uFE0E",-1);function g(_,y){const a=l("RouterLink");return e(),o("div",null,[d,n("section",r,[n("ol",k,[n("li",v,[n("p",null,[b,p(a,{to:"/KotlinCoroutinesByTutorials/Chapter3/02.launching_coroutine.html"},{default:c(()=>[m]),_:1}),f,h])])])])])}var C=t(u,[["render",g],["__file","05.digging-deeper-into-coroutines.html.vue"]]);export{C as default};
