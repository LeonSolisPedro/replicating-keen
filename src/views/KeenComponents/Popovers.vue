<template>
  <div class="card">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
            <!--begin::Section-->
<div class="pb-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
    <a href="#overview"></a>
    
    Overview</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        Keen customizes the <a href="https://getbootstrap.com/docs/5.2/components/popovers/" class="fw-semibold">Bootstrap Popover</a>&nbsp;
        through the SASS variables in <code>src/sass/components/_variables.scss</code> and custom SASS code in <code>src/sass/components/_popovers.scss</code>. Bootstrap Popover are globally initialized by
        <code>src/js/components/app.js</code> wrapper script via data attribute <code>v-popover data-bs-toggle="popover"</code>.
        .
    </div>
    <!--end::Block-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="basic" data-kt-scroll-offset="50">
    <a href="#basic"></a>
    
    Basic</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use <code>v-popover data-bs-toggle="popover"</code> HTML attribute to initialize a popover by passing any of available options as explained 
        in <a href="https://getbootstrap.com/docs/5.2/components/popover/#options" class="fw-semibold">Popover Options</a>.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-placement="top" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on top" data-kt-initialized="1">
                Popover on top
            </button>

            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-placement="right" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on right" data-kt-initialized="1">
                Popover on right
            </button>
            
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-placement="bottom" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on bottom" data-kt-initialized="1">
                Popover on bottom
            </button>
            
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-placement="left" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on left" data-kt-initialized="1">
                Popover on left
            </button>

            <button type="button" class="btn btn-secondary my-2" v-popover data-bs-toggle="popover" data-bs-html="true" data-bs-content="And here's some amazing content. It's very <b class='text-danger'>engaging</b>. Right?" data-bs-original-title="<span><em>Popover</em> <u>title with</u> <b>HTML</b></span>" data-kt-initialized="1">
                Popover with HTML
            </button>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" v-popover data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on top<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on top
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on right<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on right
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on bottom<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on bottom
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on left<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on left
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>&lt;span&gt;&lt;em&gt;Popover&lt;/em&gt; &lt;u&gt;title with&lt;/u&gt; &lt;b&gt;HTML&lt;/b&gt;&lt;/span&gt;<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very &lt;b class=<span class="token punctuation">'</span>text-danger<span class="token punctuation">'</span>&gt;engaging&lt;/b&gt;. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover with HTML
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="inverse" data-kt-scroll-offset="50">
    <a href="#inverse"></a>
    
    Inverse</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use <code>data-bs-custom-class="popover-inverse"</code> HTML attribute to initialize a popover with inverse style.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-custom-class="popover-inverse" data-bs-placement="top" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on top" data-kt-initialized="1">
                Popover on top
            </button>

            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-custom-class="popover-inverse" data-bs-placement="right" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on right" data-kt-initialized="1">
                Popover on right
            </button>
            
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-custom-class="popover-inverse" data-bs-placement="bottom" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on bottom" data-kt-initialized="1">
                Popover on bottom
            </button>
            
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-custom-class="popover-inverse" data-bs-placement="left" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover on left" data-kt-initialized="1">
                Popover on left
            </button>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" v-popover data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-custom-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover-inverse<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on top<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on top
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-custom-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover-inverse<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on right<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on right
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-custom-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover-inverse<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on bottom<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on bottom
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-custom-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover-inverse<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-placement</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover on left<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Popover on left
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="delay-options" data-kt-scroll-offset="50">
    <a href="#delay-options"></a>
    
    Delay Options</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use custom <code>data-bs-delay-show</code> and <code>data-bs-delay-hide</code> HTML attributes to initialize a popover with showing and hiding delay(ms).
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-delay-show="1000" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover title" data-kt-initialized="1">
                Show delay: 1000ms 
            </button>

            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-delay-hide="1000" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Popover title" data-kt-initialized="1">
                Hide delay: 1000ms 
            </button>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" v-popover data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-delay-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1000<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover title<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Show delay: 1000ms
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-delay-hide</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1000<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Popover title<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Hide delay: 1000ms
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="dismiss" data-kt-scroll-offset="50">
    <a href="#dismiss"></a>
    
    Dismiss</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use custom <code>data-bs-dismiss="true"</code> HTML attribute to initialize a popover with showing and hiding delay(ms).
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-dismiss="true" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissable popover" data-kt-initialized="1">
                Default Mode
            </button>

            <button type="button" class="btn btn-secondary my-2 me-5" v-popover data-bs-toggle="popover" data-bs-dismiss="true" data-bs-custom-class="popover-inverse" data-bs-content="And here's some amazing content. It's very engaging. Right?" data-bs-original-title="Dismissable popover" data-kt-initialized="1">
                Dark Mode
            </button>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" v-popover data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dismissable popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Dismiss for default mode
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-secondary my-2 me-5<span class="token punctuation">"</span></span> <span class="token attr-name">v-popover data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Dismissable popover<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>And here<span class="token punctuation">'</span>s some amazing content. It<span class="token punctuation">'</span>s very engaging. Right?<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Dismiss for dark mode
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->        </div>
  </div>
</template>

<style lang="scss">
@import "@/plugins/keen-bootstrap/src/sass/init";
@import "@/plugins/keen-bootstrap/src/sass/vendors/plugins/root";
@import "@/plugins/keen-bootstrap/src/sass/vendors/plugins/prismjs";
</style>
<style>
code[class*=language-],
pre[class*=language-] {
  color: #9efeff;
  direction: ltr;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  font-family: "Operator Mono", "Fira Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  font-weight: 400;
  font-size: 17px;
  line-height: 25px;
  letter-spacing: 0.5px;
  text-shadow: 0 1px #222245;
}

pre[class*=language-]::-moz-selection,
pre[class*=language-] ::-moz-selection,
code[class*=language-]::-moz-selection,
code[class*=language-] ::-moz-selection,
pre[class*=language-]::selection,
pre[class*=language-] ::selection,
code[class*=language-]::selection,
code[class*=language-] ::selection {
  color: inherit;
  background: #a599e9;
}

/* Code blocks. */
pre[class*=language-] {
  padding: 2em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*=language-],
pre[class*=language-] {
  background: #1e1e3f;
}

/* Inline code */
:not(pre) > code[class*=language-] {
  padding: 0.1em;
  border-radius: 0.3em;
}

.token {
  font-weight: 400;
}

.token.comment,
.token.prolog,
.token.cdata {
  color: #b362ff;
}

.token.delimiter,
.token.keyword,
.token.selector,
.token.important,
.token.atrule {
  color: #ff9d00;
}

.token.operator,
.token.attr-name {
  color: rgb(255, 180, 84);
}

.token.punctuation {
  color: #ffffff;
}

.token.boolean {
  color: rgb(255, 98, 140);
}

.token.tag,
.token.tag .punctuation,
.token.doctype,
.token.builtin {
  color: rgb(255, 157, 0);
}

.token.entity,
.token.symbol {
  color: #6897bb;
}

.token.number {
  color: #ff628c;
}

.token.property,
.token.constant,
.token.variable {
  color: #ff628c;
}

.token.string,
.token.char {
  color: #a5ff90;
}

.token.attr-value,
.token.attr-value .punctuation {
  color: #a5c261;
}

.token.attr-value .punctuation:first-child {
  color: #a9b7c6;
}

.token.url {
  color: #287bde;
  text-decoration: underline;
}

.token.function {
  color: rgb(250, 208, 0);
}

.token.regex {
  background: #364135;
}

.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.inserted {
  background: #00ff00;
}

.token.deleted {
  background: #ff000d;
}

code.language-css .token.property,
code.language-css .token.property + .token.punctuation {
  color: #a9b7c6;
}

code.language-css .token.id {
  color: #ffc66d;
}

code.language-css .token.selector > .token.class,
code.language-css .token.selector > .token.attribute,
code.language-css .token.selector > .token.pseudo-class,
code.language-css .token.selector > .token.pseudo-element {
  color: #ffc66d;
}

.token.class-name {
  color: #fb94ff;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background: none;
}

.line-highlight.line-highlight {
  margin-top: 36px;
  background: linear-gradient(to right, rgba(179, 98, 255, 0.17), transparent);
}

.line-highlight.line-highlight:before,
.line-highlight.line-highlight[data-end]:after {
  content: "";
}
</style>