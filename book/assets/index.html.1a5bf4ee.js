import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.43850152.js";const t={},i=e(`<h1 id="mask" tabindex="-1"><a class="header-anchor" href="#mask" aria-hidden="true">#</a> Mask</h1><p>Used to hide Java/Kotlin methods or construction methods in the SDK.</p><p>\u7528\u4E8E\u5728SDK\u4E2D\u9690\u85CFJava/Kotlin\u65B9\u6CD5\u6216\u6784\u9020\u65B9\u6CD5\u3002</p><h2 id="\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210" aria-hidden="true">#</a> \u96C6\u6210</h2><p><code>def version = 0.0.6</code></p><p>\u6709\u4E24\u4E2A\u7248\u672C\uFF1A</p><ol><li>AGP + Transform - \u9002\u7528Kotlin/Java</li><li>Kotlin Compiler Plugin - \u4EC5\u9002\u7528\u4E8EKotlin - <strong>0.0.5\u53CA\u4EE5\u4E0A\u7248\u672C</strong></li></ol><p>Kotlin\u9879\u76EE\u4F7F\u7528KCP\u6BD4\u4F7F\u7528Transform\u7F16\u8BD1\u4F1A\u7A0D\u5FAE\u5FEB\u4E00\u4E9B**(\u6CA1\u6709\u8FDB\u884C\u8FC7\u5177\u4F53\u6D4B\u8BD5\uFF0C\u4EC5\u662F\u4E2A\u4EBA\u76F4\u89C9)**</p><h3 id="project-level-build-gradle" tabindex="-1"><a class="header-anchor" href="#project-level-build-gradle" aria-hidden="true">#</a> Project level build.gradle</h3><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>buildscript <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span>
            <span class="token comment">// 1.Github</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://raw.githubusercontent.com/guodongAndroid/maven/main/repository/&quot;</span></span>
            
            <span class="token comment">// 2.Gitee</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://gitee.com/guodongAndroid/maven/raw/main/repository/&quot;</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    dependencies <span class="token punctuation">{</span>
        <span class="token comment">// 1.AGP + Transform - \u9002\u7528Kotlin/Java</span>
        classpath <span class="token interpolation-string"><span class="token string">&quot;com.guodong.android:mask-gradle-plugin:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
        
        <span class="token comment">// 2.Kotlin Compiler Plugin - \u4EC5\u9002\u7528\u4E8EKotlin</span>
        classpath <span class="token interpolation-string"><span class="token string">&quot;com.guodong.android:mask-kcp-gradle-plugin:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

allprojects <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://raw.githubusercontent.com/guodongAndroid/maven/main/repository/&quot;</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="library-level-build-gradle" tabindex="-1"><a class="header-anchor" href="#library-level-build-gradle" aria-hidden="true">#</a> Library level build.gradle</h3><div class="language-groovy ext-groovy line-numbers-mode"><pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
    id <span class="token string">&#39;com.guodong.android.mask&#39;</span> <span class="token comment">// AGP + Transform - \u9002\u7528Kotlin/Java</span>
    id <span class="token string">&#39;com.guodong.android.mask.kcp&#39;</span> <span class="token comment">// KCP - \u4EC5\u9002\u7528\u4E8EKotlin</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;com.guodong.android:mask-api:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token comment">// java</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;com.guodong.android:mask-api-kt:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token comment">// kotlin</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaTest</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Hide</span>
    <span class="token keyword">public</span> <span class="token class-name">JavaTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">JavaTest</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getA</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setA</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Hide</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setA</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>a <span class="token operator">=</span> a<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin</h3><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">KotlinTest</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token annotation builtin">@Hide</span>
    <span class="token keyword">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">companion</span> <span class="token keyword">object</span> <span class="token punctuation">{</span>

        <span class="token annotation builtin">@JvmStatic</span>
        <span class="token keyword">fun</span> <span class="token function">newKotlinTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token function">KotlinTest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">var</span> a <span class="token operator">=</span> a
        <span class="token annotation builtin">@Hide</span> <span class="token keyword">get</span>
        <span class="token annotation builtin">@Hide</span> <span class="token keyword">set</span>

    <span class="token keyword">fun</span> <span class="token function">getA1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> Int <span class="token punctuation">{</span>
        <span class="token keyword">return</span> a
    <span class="token punctuation">}</span>

    <span class="token keyword">fun</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        a <span class="token operator">=</span> <span class="token number">1000</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[i];function p(l,c){return s(),a("div",null,o)}var r=n(t,[["render",p],["__file","index.html.vue"]]);export{r as default};
