import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.938a25b9.js";const t={},o=e(`<h1 id="sword" tabindex="-1"><a class="header-anchor" href="#sword" aria-hidden="true">#</a> Sword</h1><p>\u4F7F\u7528 kotlin compiler plugin \u5B9E\u73B0\uFF0C\u76EE\u524D\u4EC5\u4F5C\u7528\u4E8E Kotlin \u51FD\u6570\uFF0C\u4E3A Kotlin \u51FD\u6570\u63D0\u4F9B\u4EE3\u7406\u5B9E\u73B0\u3002</p><h2 id="\u96C6\u6210" tabindex="-1"><a class="header-anchor" href="#\u96C6\u6210" aria-hidden="true">#</a> \u96C6\u6210</h2><p><code>def version = 0.0.1</code></p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> Api</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token annotation builtin">@Target</span><span class="token punctuation">(</span>AnnotationTarget<span class="token punctuation">.</span>FUNCTION<span class="token punctuation">)</span>
<span class="token annotation builtin">@Retention</span><span class="token punctuation">(</span>AnnotationRetention<span class="token punctuation">.</span>BINARY<span class="token punctuation">)</span>
<span class="token keyword">annotation</span> <span class="token keyword">class</span> <span class="token function">Proxy</span><span class="token punctuation">(</span>
    <span class="token comment">/**
     * \u662F\u5426\u542F\u7528, \u9ED8\u8BA4True
     */</span>
    <span class="token keyword">val</span> enable<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/**
     * [InvocationHandler]\u5B9E\u73B0\u7C7B\u7684\u5168\u9650\u5B9A\u540D, \u5B9E\u73B0\u7C7B\u5FC5\u987B\u6709\u65E0\u53C2\u6784\u9020\u65B9\u6CD5
     *
     * e.g. com.example.ProxyTestInvocationHandler
     */</span>
    <span class="token keyword">val</span> handler<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">interface</span> InvocationHandler <span class="token punctuation">{</span>

    <span class="token keyword">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span>className<span class="token operator">:</span> String<span class="token punctuation">,</span> methodName<span class="token operator">:</span> String<span class="token punctuation">,</span> args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>Any<span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Any<span class="token operator">?</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u6807\u8BB0[InvocationHandler]\u7684\u5B50\u7C7B, \u4E3A\u5176\u751F\u6210FqName\u7D22\u5F15\u7C7B\`HandlerFqName\`
 *
 * \u4F7F\u7528 ksp \u5B9E\u73B0
 *
 * Created by guodongAndroid on 2022/8/17.
 */</span>
<span class="token annotation builtin">@Target</span><span class="token punctuation">(</span>AnnotationTarget<span class="token punctuation">.</span>CLASS<span class="token punctuation">)</span>
<span class="token annotation builtin">@Retention</span><span class="token punctuation">(</span>AnnotationRetention<span class="token punctuation">.</span>BINARY<span class="token punctuation">)</span>
<span class="token keyword">annotation</span> <span class="token keyword">class</span> <span class="token function">ProxyHandler</span><span class="token punctuation">(</span>
    <span class="token comment">/**
     * \u751F\u6210\u5B57\u6BB5\u7684\u540D\u79F0, \u9ED8\u8BA4\u4E3A\u7C7B\u540D
     *
     * \`paramName\`\u53C2\u6570\u540D\u79F0\u4E0D\u8981\u968F\u610F\u53D8\u52A8
     */</span>
    <span class="token keyword">val</span> paramName<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5411 <code>Proxy</code> \u6CE8\u89E3\u4E2D\u7684 <code>handler</code> \u53C2\u6570\u6CE8\u5165 <code>InvocationHandler</code> \u5B9E\u73B0\u7C7B\u7684\u5168\u9650\u5B9A\u540D(Fully Qualified Name)\uFF0C\u5176\u5B9E\u73B0\u7C7B\u5FC5\u987B\u6709\u65E0\u53C2\u6784\u9020\u65B9\u6CD5</strong>\u3002</p><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token keyword">class</span> Test <span class="token punctuation">{</span>

    <span class="token annotation builtin">@Proxy</span><span class="token punctuation">(</span>
        enable <span class="token operator">=</span> BuildConfig<span class="token punctuation">.</span>isDebug<span class="token punctuation">,</span>
        handler <span class="token operator">=</span> HandlerFqName<span class="token punctuation">.</span>GET_TEXT_NO_ARG
    <span class="token punctuation">)</span>
    <span class="token keyword">fun</span> <span class="token function">getTextNoArg</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;guodongAndroid&quot;</span></span>

    <span class="token annotation builtin">@Proxy</span><span class="token punctuation">(</span>
        enable <span class="token operator">=</span> BuildConfig<span class="token punctuation">.</span>isDebug<span class="token punctuation">,</span>
        handler <span class="token operator">=</span> HandlerFqName<span class="token punctuation">.</span>GetTextArgInvocationHandler
    <span class="token punctuation">)</span>
    <span class="token keyword">fun</span> <span class="token function">getTextArg</span><span class="token punctuation">(</span>
        b<span class="token operator">:</span> Byte<span class="token punctuation">,</span>
        z<span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
        c<span class="token operator">:</span> Char<span class="token punctuation">,</span>
        s<span class="token operator">:</span> Short<span class="token punctuation">,</span>
        i<span class="token operator">:</span> Int<span class="token punctuation">,</span>
        l<span class="token operator">:</span> Long<span class="token punctuation">,</span>
        f<span class="token operator">:</span> Float<span class="token punctuation">,</span>
        d<span class="token operator">:</span> Double<span class="token punctuation">,</span>
        str<span class="token operator">:</span> String<span class="token punctuation">,</span>
        ia<span class="token operator">:</span> IntArray<span class="token punctuation">,</span>
        sa<span class="token operator">:</span> Array<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        ls<span class="token operator">:</span> List<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        lls<span class="token operator">:</span> List<span class="token operator">&lt;</span>List<span class="token operator">&lt;</span>String<span class="token operator">&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">,</span>
        map<span class="token operator">:</span> Map<span class="token operator">&lt;</span>String<span class="token punctuation">,</span> String<span class="token operator">&gt;</span><span class="token punctuation">,</span>
        user<span class="token operator">:</span> User<span class="token punctuation">,</span>
        callback<span class="token operator">:</span> Callback<span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token operator">:</span> User <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;guodongAndroid-Release&quot;</span></span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token annotation builtin">@ProxyHandler</span>
<span class="token keyword">class</span> GetTextArgInvocationHandler <span class="token operator">:</span> InvocationHandler <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">val</span> TAG <span class="token operator">=</span> GetTextArgInvocationHandler<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">.</span>simpleName

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span>className<span class="token operator">:</span> String<span class="token punctuation">,</span> methodName<span class="token operator">:</span> String<span class="token punctuation">,</span> args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>Any<span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Any<span class="token operator">?</span> <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">e</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;invoke: className = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">className</span></span><span class="token string">, methodName = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">methodName</span></span><span class="token string">, args(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">args<span class="token punctuation">.</span>size</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">args<span class="token punctuation">.</span><span class="token function">joinToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;guodongAndroid-Debug&quot;</span></span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token annotation builtin">@ProxyHandler</span><span class="token punctuation">(</span><span class="token string-literal singleline"><span class="token string">&quot;GET_TEXT_NO_ARG&quot;</span></span><span class="token punctuation">)</span>
<span class="token keyword">class</span> GetTextNoArgInvocationHandler <span class="token operator">:</span> InvocationHandler <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">val</span> TAG <span class="token operator">=</span> GetTextNoArgInvocationHandler<span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">.</span>java<span class="token punctuation">.</span>simpleName

    <span class="token keyword">override</span> <span class="token keyword">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span>className<span class="token operator">:</span> String<span class="token punctuation">,</span> methodName<span class="token operator">:</span> String<span class="token punctuation">,</span> args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>Any<span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Any<span class="token operator">?</span> <span class="token punctuation">{</span>
        Log<span class="token punctuation">.</span><span class="token function">e</span><span class="token punctuation">(</span>TAG<span class="token punctuation">,</span> <span class="token string-literal singleline"><span class="token string">&quot;invoke: className = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">className</span></span><span class="token string">, methodName = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">$</span><span class="token expression">methodName</span></span><span class="token string">, args(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">args<span class="token punctuation">.</span>size</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) = </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token expression">args<span class="token punctuation">.</span><span class="token function">joinToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string-literal singleline"><span class="token string">&quot;guodongAndroid-Debug&quot;</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="handlerfqname" tabindex="-1"><a class="header-anchor" href="#handlerfqname" aria-hidden="true">#</a> HandlerFqName</h2><div class="language-kotlin ext-kt line-numbers-mode"><pre class="language-kotlin"><code><span class="token comment">// The file is automatic generated by Sword, don&#39;t modify it.</span>
<span class="token keyword">package</span> com<span class="token punctuation">.</span>guodong<span class="token punctuation">.</span>android<span class="token punctuation">.</span>sword<span class="token punctuation">.</span>app

<span class="token keyword">import</span> kotlin<span class="token punctuation">.</span>String

<span class="token comment">/**
 * The class is automatic generated by Sword, don&#39;t modify it.
 *
 * [com.guodong.android.sword.api.kt.InvocationHandler]\u5B9E\u73B0\u7C7B\u7684\u5168\u9650\u5B9A\u540D
 */</span>
<span class="token keyword">public</span> <span class="token keyword">object</span> HandlerFqName <span class="token punctuation">{</span>
  <span class="token comment">/**
   * [com.guodong.android.sword.app.GetTextArgInvocationHandler]
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token keyword">val</span> GetTextArgInvocationHandler<span class="token operator">:</span> String <span class="token operator">=</span>
      <span class="token string-literal singleline"><span class="token string">&quot;com.guodong.android.sword.app.GetTextArgInvocationHandler&quot;</span></span>

  <span class="token comment">/**
   * [com.guodong.android.sword.app.GetTextNoArgInvocationHandler]
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">const</span> <span class="token keyword">val</span> GET_TEXT_NO_ARG<span class="token operator">:</span> String <span class="token operator">=</span>
      <span class="token string-literal singleline"><span class="token string">&quot;com.guodong.android.sword.app.GetTextNoArgInvocationHandler&quot;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function i(l,c){return s(),a("div",null,p)}var d=n(t,[["render",i],["__file","index.html.vue"]]);export{d as default};
