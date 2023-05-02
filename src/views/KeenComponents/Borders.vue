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
        Keen extends <a href="https://getbootstrap.com/docs/5.2/utilities/borders/" class="fw-semibold">Bootstrap Borders</a>&nbsp; 
        in <code>src/sass/components/helpers/_borders.scss</code> to provide additional border utility classes to cover its own design system. 
    </div>
    <!--end::Block-->  
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="border-styles" data-kt-scroll-offset="50">
    <a href="#border-styles"></a>
    
    Border Styles</h1>
<!--end::Heading-->

 
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.border-dashed</code> or <code>.border-dotted</code> classes to set an element's border style.
        For border directions use <code>.border-{direction}-dashed</code> or <code>.border-{direction}-dotted</code> classes format.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        Where <code>direction</code> is one of:
        <ul class="pt-3">
            <li class="py-2"><code>top</code> - for classes that set border top style</li>
            <li class="py-2"><code>bottom</code> - for classes that set border bottom style</li>
            <li class="py-2"><code>end</code> - for classes that set border right style</li>
            <li class="py-2"><code>start</code> - for classes that set border start style</li>            
        </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
                <div class="border w-125px h-125px d-flex flex-center me-5 mb-5 fw-semibold">
                    default style
                </div>

                <div class="border-gray-300 border-dotted w-125px h-125px d-flex flex-center me-5 mb-5 fw-semibold">
                    .border-dotted
                </div>

                <div class="border-gray-300 border-dashed w-125px h-125px d-flex flex-center me-5 mb-5 fw-semibold">
                    .border-dashed
                </div>                

                <div class="border-gray-300 border-bottom-dashed w-125px h-125px d-flex flex-center me-5 mb-5 fw-semibold">
                    .border-bottom-dashed
                </div>

                <div class="border-gray-300 border-end-dashed w-125px h-125px d-flex flex-center me-5 mb-5 fw-semibold">
                    .border-end-dashed
                </div>
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    default style
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-gray-300 border-dotted<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    .border-dotted
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-gray-300 border-dashed<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    .border-dashed
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-gray-300 border-bottom-dashed<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    .border-bottom-dashed
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border-gray-300 border-end-dashed<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    .border-end-dashed
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="hover" data-kt-scroll-offset="50">
    <a href="#hover"></a>
    
    Hover State</h1>
<!--end::Heading-->

  
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.border-hover</code> to display an element's border on hover. 
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
                <div class="border border-hover w-125px h-125px  d-flex flex-center me-5 mb-5 fw-semibold">
                    default
                </div>

                <div class="border border-gray-500 border-hover w-125px h-125px  d-flex flex-center me-5 mb-5 fw-semibold">
                    gray-500
                </div>

                <div class="border border-primary border-hover w-125px h-125px  d-flex flex-center me-5 mb-5 fw-semibold">
                    primary
                </div>
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    default
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-500 border-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    gray-500
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-primary border-hover<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    primary
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="active" data-kt-scroll-offset="50">
    <a href="#active"></a>
    
    Active State</h1>
<!--end::Heading-->

  
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.border-active</code> to display an element's border when <code>.active</code> class applied. 
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
                <div class="border border-active active w-125px h-125px  d-flex flex-center me-5 mb-5 fw-semibold">
                    default
                </div>

                <div class="border border-gray-500 border-active active w-125px h-125px  d-flex flex-center me-5 mb-5 fw-semibold">
                    gray-500
                </div>

                <div class="border border-primary border-active active w-125px h-125px  d-flex flex-center me-5 mb-5 fw-semibold">
                    primary
                </div>
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-active active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    default
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-500 border-active active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    gray-500
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-primary border-active active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    primary
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="transparent" data-kt-scroll-offset="50">
    <a href="#transparent"></a>
    
    Transparent Border</h1>
<!--end::Heading-->

  
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.border-transparent</code> to set an element's border color to tranparent. 
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
                <div class="border border-transparent bg-light w-125px h-125px d-flex flex-center me-5 fw-semibold">
                    tranparent<br>border
                </div>
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-transparent<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    default
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="border-gray-colors" data-kt-scroll-offset="50">
    <a href="#border-gray-colors"></a>
    
    Border Gray Colors</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.border-gray-{100, 200, 300, 400, 500, 600, 700, 800, 900}</code> to set an element's border color.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-wrap align-items-center">
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-100">
                        .border-gray-100                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-200">
                        .border-gray-200                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-300">
                        .border-gray-300                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-400">
                        .border-gray-400                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-500">
                        .border-gray-500                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-600">
                        .border-gray-600                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-700">
                        .border-gray-700                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-800">
                        .border-gray-800                    </div>
                                                        <div class="w-125px h-125px d-flex flex-center p-3 me-5 mb-5 fw-semibold border border-gray-900">
                        .border-gray-900                    </div>
                            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-100<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-300<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-500<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-600<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-gray-900<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

            </div>
  </div>
</template>


<style>
@import "@/assets/documentation/style.css";
</style>