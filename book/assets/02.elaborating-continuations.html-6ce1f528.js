import{_ as n,Y as o,Z as e,a3 as t}from"./framework-3d290349.js";const a="/book/assets/01.call-stack-with-continuation-d17317e4.jpg",c="/book/assets/02.function-state-2da0331a.jpg",s={},i=t('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>是否拥有一等公民续体是区分标准函与可挂起函数的关键。但续体什么呢？在程序每次调用函数时，程序都会把函数添加到调用栈中。这个调用栈是所有函数共有的，按函数调用顺序排列的，栈中的函数都保存在内存中，且都尚未完成。续体操作这个执行流程进而帮助处理调用栈。</p><p>您已经了解到续体是一个回调，但在非常低的系统级别实现。更准确的解释是：它是程序控制状态的抽象包装器。它有办法控制程序如何和何时进一步执行，以及它的结果是什么——一个异常或一个值。</p><p>当函数执行完成，程序将其从调用栈中取出，并继续执行下一个函数。问题是系统如何知道每个函数执行后返回的位置信息？此信息保存在上述续体中。</p><p>每个续体都包含一些关于调用函数的上下文的信息。像局部变量一样，函数传递的参数，调用它的线程等等。当一个函数结束时，通过使用这些信息，系统可以简单地依靠续体来告诉它需要到哪里。</p><p>试着从函数调用到结束看看一个函数和一个续体的生命周期是什么。</p><h2 id="调用栈" tabindex="-1"><a class="header-anchor" href="#调用栈" aria-hidden="true">#</a> 调用栈</h2><p>当一个程序第一次启动时，它的调用堆栈只有一个入口——初始函数，通常称为 main。这是因为在其中还没有调用其他函数。初始函数很重要，因为当程序结束时，它会回调 main 函数的续体，从而完成程序，并通知系统将其从内存中释放。</p><p>随着程序的运行，它会调用其他函数，将它们添加到调用栈中。</p><p><img src="'+a+`" alt="Call stack with continuation" loading="lazy"></p><p>所以如果您有这段代码<code>fun main() {}</code>，程序级续体的生命周期包含在主函数的括号内。但是当另一个函数调用时，系统要做的第一件事就是为新函数创建一个新的续体。系统会为新续体添加一些信息，比如它的父函数是谁以及它的续体对象是谁——在本例中是 <code>main</code> 函数。同时它也会携带有关调用函数的代码行、使用哪些参数以及它的返回类型应该是什么。</p><p>看看以下代码片段会发生什么：</p><div class="language-kotlin line-numbers-mode" data-ext="kt"><pre class="language-kotlin"><code><span class="token keyword">fun</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">val</span> numbers <span class="token operator">=</span> <span class="token function">listOf</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>系统会创建一个续体，它将存在于 <code>listOf</code> 中。</li><li>首先，它知道它是在 <code>main</code> 的第一行被调用的，所以它可以在完成时返回到代码中的适当位置。</li><li>接下来，它知道它的父函数是 <code>main</code>。这意味着 <code>listOf</code> 会完成这个程序，并将调用一直传播到初始续体。例如，这可能在发生异常时发生。最后，它知道传递给 <code>listOf</code> 的参数是一个可变参数数组，其值为 1、2、5，并且在函数完成时，我们应该得到一个 <code>List&lt;Int&gt;</code>。</li><li>通过这些信息，它将函数执行和生命周期从调用点引导至返回语句。</li></ul><p>在更深层次上，这就像声明一个局部变量，使用指向该变量的指针调用初始化函数，然后在其他地方设置该值——在 <code>listOf</code> 中，然后使用 <code>goto</code> 语句返回初始化函数调用后的一行，此时已有返回的变量以供后续使用。</p><p>另一个可以用来解释续体的例子是电子游戏。在大多数电子游戏中，您都有称为检查点的东西。当您进行冒险并探索时，这就像调用一个函数。您必须走一段距离并完成一组较小的任务才能继续。</p><p>当您完成上诉任务后，您可以返回检查点并完成冒险。 另一方面，如果发生了不好的事情——您在游戏中的任务失败了，这类似于在计算中抛出异常。您始终可以重新加载游戏并从检查点重新开始。如果将函数包装在 <code>try/catch</code> 块中，则可以实现类似的行为，因为您可以有效地返回检查点并重新开始。</p><p><strong>注：此小节的 <code>Continuation</code> 并非 Kotlin 协程中的 <code>Continuation</code> 类，而是上一节描述的系统内置的、不可见的 <code>Continuation</code>。</strong></p><h2 id="处理续体" tabindex="-1"><a class="header-anchor" href="#处理续体" aria-hidden="true">#</a> 处理续体</h2><p>在 <code>getUser</code> 的最新版本中，您将使用 Coroutines API 中的 <code>suspendCoroutine</code>。它是一个顶级函数，允许您创建协程，就像 <code>launch</code> 一样，但它专门用于返回值，而不是启动工作。<code>suspendCoroutine</code> 的另一个不同之处在于它接受一个 lambda 作为参数，它的类型是<code>block: (Continuation&lt;T&gt;) -&gt; Unit</code>。这意味着您可以将 Continuation 作为一等公民处理，随意调用对象上的函数。这允许手动进行控制状态和控制流操作。</p><p>Continuations 上可用的函数是 <code>resume</code>、<code>resumeWith</code> 和 <code>resumeWithException</code> 您还可以通过调用 <code>continuation.context</code> 访问 <code>CoroutineContext</code>。稍后您将在 “第 6 章：协程上下文” 中了解上下文。</p><p>进一步分析 Continuation，<code>resume</code> 传递了 <code>T</code> 类型的成功值，无论您尝试从协程返回哪种类型。当您认为协程中的条件有效并希望返回到其余代码时，您可以使用它。<code>resumeWithException</code> 接受一个 <code>Throwable</code>，以防出现问题。这允许您完成带有错误的协程，您可以稍后捕获并处理该错误。</p><p>这提供了从函数返回值的惊人能力，这可能是异步的，而不知道它们背后是什么。就像 API 就应该是那样一样。您可能在想：但是如果函数没有结束呢？</p><p>在这种情况下，您将再次等待一个没有到来的值，从而再次导致另一个停止问题，您的代码被无限期挂起。</p><p><img src="`+c+'" alt="Function state" loading="lazy"></p><p>为了解决这个问题，最好是使用续体积极应对。不管怎样，尽量总是返回一个结果，即使它只是一个异常。至少在这种情况下，您的函数将会结束，您也会有一些事情要处理。幸运的是，<code>Continuation</code> 有一个功能可以做到这一点。它被称为 <code>resumeWith</code>，它接受前面提到的 <code>Result</code> 对象。<code>Result</code> 只能是特定时间的两种状态之一。要么是成功，持有您需要的值，要么是失败，持有异常。</p><p>它还包含一些实用函数，例如 <code>runCatching</code>，它接收一个它尝试运行的 lambda，在成功情况下以获取某些值。如果出现问题，它会在 <code>try/catch</code> 块的帮助下捕获异常并最终返回失败结果。Continuation 收到 Result 后，将其解包并获取值或异常，以便您自己处理。</p><p>每当您使用 <code>suspendCoroutine</code> 或任何其他通过续体来返回值的方式时，强烈建议您强制使用上诉方法，这样您就不会遇到永远不会完成的协程。</p><p><strong>注：此小节的 <code>Continuation</code> 并非系统内置的、不可见的 <code>Continuation</code>，而是 Kotlin 协程中的 <code>Continuation</code> 类。</strong></p>',29),d=[i];function p(l,u){return o(),e("div",null,d)}const h=n(s,[["render",p],["__file","02.elaborating-continuations.html.vue"]]);export{h as default};
