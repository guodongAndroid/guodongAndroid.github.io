import{_ as n,Y as s,Z as a,a3 as e}from"./framework-3d290349.js";const t={},o=e(`<h1 id="sword" tabindex="-1"><a class="header-anchor" href="#sword" aria-hidden="true">#</a> Sword</h1><p>使用 kotlin compiler plugin 实现，目前仅作用于 Kotlin 函数，为 Kotlin 函数提供代理实现。</p><h2 id="集成" tabindex="-1"><a class="header-anchor" href="#集成" aria-hidden="true">#</a> 集成</h2><p><code>def version = 0.0.1</code></p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> Api</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token annotation builtin">@Target</span><span class="token punctuation">(</span>AnnotationTarget<span class="token punctuation">.</span>FUNCTION<span class="token punctuation">)</span>
<span class="token annotation builtin">@Retention</span><span class="token punctuation">(</span>AnnotationRetention<span class="token punctuation">.</span>BINARY<span class="token punctuation">)</span>
<span class="token keyword">annotation</span> <span class="token keyword">class</span> <span class="token function">Proxy</span><span class="token punctuation">(</span>
    <span class="token comment">/**
     * 是否启用, 默认True
     */</span>
    <span class="token keyword">val</span> enable<span class="token operator">:</span> Boolean <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">,</span>

    <span class="token comment">/**
     * [InvocationHandler]实现类的全限定名, 实现类必须有无参构造方法
     *
     * e.g. com.example.ProxyTestInvocationHandler
     */</span>
    <span class="token keyword">val</span> handler<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">interface</span> InvocationHandler <span class="token punctuation">{</span>

    <span class="token keyword">fun</span> <span class="token function">invoke</span><span class="token punctuation">(</span>className<span class="token operator">:</span> String<span class="token punctuation">,</span> methodName<span class="token operator">:</span> String<span class="token punctuation">,</span> args<span class="token operator">:</span> Array<span class="token operator">&lt;</span>Any<span class="token operator">?</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token operator">:</span> Any<span class="token operator">?</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * 标记[InvocationHandler]的子类, 为其生成FqName索引类\`HandlerFqName\`
 *
 * 使用 ksp 实现
 *
 * Created by guodongAndroid on 2022/8/17.
 */</span>
<span class="token annotation builtin">@Target</span><span class="token punctuation">(</span>AnnotationTarget<span class="token punctuation">.</span>CLASS<span class="token punctuation">)</span>
<span class="token annotation builtin">@Retention</span><span class="token punctuation">(</span>AnnotationRetention<span class="token punctuation">.</span>BINARY<span class="token punctuation">)</span>
<span class="token keyword">annotation</span> <span class="token keyword">class</span> <span class="token function">ProxyHandler</span><span class="token punctuation">(</span>
    <span class="token comment">/**
     * 生成字段的名称, 默认为类名
     *
     * \`paramName\`参数名称不要随意变动
     */</span>
    <span class="token keyword">val</span> paramName<span class="token operator">:</span> String <span class="token operator">=</span> <span class="token string-literal singleline"><span class="token string">&quot;&quot;</span></span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>向 <code>Proxy</code> 注解中的 <code>handler</code> 参数注入 <code>InvocationHandler</code> 实现类的全限定名(Fully Qualified Name)，其实现类必须有无参构造方法</strong>。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">class</span> Test <span class="token punctuation">{</span>

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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token annotation builtin">@ProxyHandler</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="handlerfqname" tabindex="-1"><a class="header-anchor" href="#handlerfqname" aria-hidden="true">#</a> HandlerFqName</h2><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token comment">// The file is automatic generated by Sword, don&#39;t modify it.</span>
<span class="token keyword">package</span> com<span class="token punctuation">.</span>guodong<span class="token punctuation">.</span>android<span class="token punctuation">.</span>sword<span class="token punctuation">.</span>app

<span class="token keyword">import</span> kotlin<span class="token punctuation">.</span>String

<span class="token comment">/**
 * The class is automatic generated by Sword, don&#39;t modify it.
 *
 * [com.guodong.android.sword.api.kt.InvocationHandler]实现类的全限定名
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function i(l,c){return s(),a("div",null,p)}const u=n(t,[["render",i],["__file","index.html.vue"]]);export{u as default};
