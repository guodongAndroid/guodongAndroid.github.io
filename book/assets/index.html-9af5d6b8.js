import{_ as n,Y as s,Z as a,a3 as e}from"./framework-3d290349.js";const t={},i=e(`<h1 id="mask" tabindex="-1"><a class="header-anchor" href="#mask" aria-hidden="true">#</a> Mask</h1><p>Used to hide Java/Kotlin methods or construction methods in the SDK.</p><p>用于在SDK中隐藏Java/Kotlin方法或构造方法。</p><h2 id="集成" tabindex="-1"><a class="header-anchor" href="#集成" aria-hidden="true">#</a> 集成</h2><p><code>def version = 0.0.6</code></p><p>有两个版本：</p><ol><li>AGP + Transform - 适用Kotlin/Java</li><li>Kotlin Compiler Plugin - 仅适用于Kotlin - <strong>0.0.5及以上版本</strong></li></ol><p>Kotlin项目使用KCP比使用Transform编译会稍微快一些**(没有进行过具体测试，仅是个人直觉)**</p><h3 id="project-level-build-gradle" tabindex="-1"><a class="header-anchor" href="#project-level-build-gradle" aria-hidden="true">#</a> Project level build.gradle</h3><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>buildscript <span class="token punctuation">{</span>
    repositories <span class="token punctuation">{</span>
        maven <span class="token punctuation">{</span>
            <span class="token comment">// 1.Github</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://raw.githubusercontent.com/guodongAndroid/maven/main/repository/&quot;</span></span>
            
            <span class="token comment">// 2.Gitee</span>
            url <span class="token interpolation-string"><span class="token string">&quot;https://gitee.com/guodongAndroid/maven/raw/main/repository/&quot;</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    dependencies <span class="token punctuation">{</span>
        <span class="token comment">// 1.AGP + Transform - 适用Kotlin/Java</span>
        classpath <span class="token interpolation-string"><span class="token string">&quot;com.guodong.android:mask-gradle-plugin:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span>
        
        <span class="token comment">// 2.Kotlin Compiler Plugin - 仅适用于Kotlin</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="library-level-build-gradle" tabindex="-1"><a class="header-anchor" href="#library-level-build-gradle" aria-hidden="true">#</a> Library level build.gradle</h3><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>plugins <span class="token punctuation">{</span>
    id <span class="token string">&#39;com.guodong.android.mask&#39;</span> <span class="token comment">// AGP + Transform - 适用Kotlin/Java</span>
    id <span class="token string">&#39;com.guodong.android.mask.kcp&#39;</span> <span class="token comment">// KCP - 仅适用于Kotlin</span>
<span class="token punctuation">}</span>

dependencies <span class="token punctuation">{</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;com.guodong.android:mask-api:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token comment">// java</span>
    implementation <span class="token interpolation-string"><span class="token string">&quot;com.guodong.android:mask-api-kt:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">version</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span> <span class="token comment">// kotlin</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><h3 id="java" tabindex="-1"><a class="header-anchor" href="#java" aria-hidden="true">#</a> Java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JavaTest</span> <span class="token punctuation">{</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kotlin" tabindex="-1"><a class="header-anchor" href="#kotlin" aria-hidden="true">#</a> Kotlin</h3><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> <span class="token function">KotlinTest</span><span class="token punctuation">(</span>a<span class="token operator">:</span> Int<span class="token punctuation">)</span> <span class="token punctuation">{</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),o=[i];function p(l,c){return s(),a("div",null,o)}const d=n(t,[["render",p],["__file","index.html.vue"]]);export{d as default};
