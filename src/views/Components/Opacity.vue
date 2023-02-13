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
        Keen sets custom opacity classes in <code>src/sass/components/helpers/_opacity.scss</code> and through a SASS variable 
        <code>$opacity-values</code> defined in <code>src/sass/components/_variables.scss</code> to provide additional opacity utility classes to cover its own design system.
    </div>
    <!--end::Block-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="opacity" data-kt-scroll-offset="50">
    <a href="#opacity"></a>
    
    Opacity</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Use the <code>.opacity-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }</code> class to set an element's opacity style.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
                                                        <div class="opacity-0 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-0                    </div>
                                                        <div class="opacity-5 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-5                    </div>
                                                        <div class="opacity-10 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-10                    </div>
                                                        <div class="opacity-15 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-15                    </div>
                                                        <div class="opacity-20 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-20                    </div>
                                                        <div class="opacity-25 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-25                    </div>
                                                        <div class="opacity-50 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-50                    </div>
                                                        <div class="opacity-75 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-75                    </div>
                                                        <div class="opacity-100 bg-primary text-white w-100px h-100px d-flex flex-center me-5 mb-5 fw-semibold">
                        .opacity-100                    </div>
                            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-15<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-20<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-25<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-50<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-75<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="opacity-hover" data-kt-scroll-offset="50">
    <a href="#opacity-hover"></a>
    
    Opacity Hover Effects</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.opacity-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }-hover</code> to display an element's opacity on hover.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
                                                        <div class="opacity-0-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-0-hover
                    </div>
                                                        <div class="opacity-5-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-5-hover
                    </div>
                                                        <div class="opacity-10-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-10-hover
                    </div>
                                                        <div class="opacity-15-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-15-hover
                    </div>
                                                        <div class="opacity-20-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-20-hover
                    </div>
                                                        <div class="opacity-25-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-25-hover
                    </div>
                                                        <div class="opacity-50-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-50-hover
                    </div>
                                                        <div class="opacity-75-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-75-hover
                    </div>
                                                        <div class="opacity-100-hover bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold">
                        .opacity-100-hover
                    </div>
                            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-0-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-5-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-10-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-15-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-20-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-25-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-50-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-75-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-100-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="opacity-active" data-kt-scroll-offset="50">
    <a href="#opacity-active"></a>
    
    Opacity Active State</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.opacity-active-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }</code> to set an element's opacity on active states. Click on the demo below to trigger the active state.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center nav" role="tablist">
                                                        <div class="nav-link opacity-active-0 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-active-0                    </div>
                                                        <div class="nav-link opacity-active-5 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">
                        .opacity-active-5                    </div>
                                                        <div class="nav-link opacity-active-10 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-active-10                    </div>
                                                        <div class="nav-link opacity-active-15 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-active-15                    </div>
                                                        <div class="nav-link opacity-active-20 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">
                        .opacity-active-20                    </div>
                                                        <div class="nav-link opacity-active-25 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">
                        .opacity-active-25                    </div>
                                                        <div class="nav-link opacity-active-50 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">
                        .opacity-active-50                    </div>
                                                        <div class="nav-link opacity-active-75 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold active" data-bs-toggle="tab" aria-selected="true" role="tab">
                        .opacity-active-75                    </div>
                                                        <div class="nav-link opacity-active-100 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">
                        .opacity-active-100                    </div>
                            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-15<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-20<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-25<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-50<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-75<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-active-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="opacity-state" data-kt-scroll-offset="50">
    <a href="#opacity-state"></a>
    
    Opacity Combined Active &amp; Hover State</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.opacity-state-{ 0, 5, 10, 15 ,20, 25, 50, 75, 100 }</code> to set an element's opacity on both active and hover states. Click on the demo below to trigger the active state.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center nav" role="tablist">
                                                        <div class="nav-link opacity-state-0 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" role="tab" tabindex="-1">
                        .opacity-state-0                    </div>
                                                        <div class="nav-link opacity-state-5 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-state-5                    </div>
                                                        <div class="nav-link opacity-state-10 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold active" data-bs-toggle="tab" aria-selected="true" role="tab">
                        .opacity-state-10                    </div>
                                                        <div class="nav-link opacity-state-15 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-state-15                    </div>
                                                        <div class="nav-link opacity-state-20 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-state-20                    </div>
                                                        <div class="nav-link opacity-state-25 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-state-25                    </div>
                                                        <div class="nav-link opacity-state-50 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-state-50                    </div>
                                                        <div class="nav-link opacity-state-75 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-state-75                    </div>
                                                        <div class="nav-link opacity-state-100 bg-primary text-white w-100px h-100px d-flex flex-center p-3 me-5 mb-5 fw-semibold" data-bs-toggle="tab" aria-selected="false" tabindex="-1" role="tab">
                        .opacity-state-100                    </div>
                            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-15<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-20<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-25<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-50<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-75<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>opacity-state-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
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