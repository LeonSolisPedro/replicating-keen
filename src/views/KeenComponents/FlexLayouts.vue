<template>
  <div class="card">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
            <!--begin::Section-->
<div class="py-0">
    <!--begin::Heading-->
    <h1 class="anchor fw-bold mb-5" id="overview">
        <a href="#overview"></a>
        Overview
    </h1>
    <!--end::Heading-->

    <!--begin::Block-->
    <div class="py-5">
        Use responsive-friendly custom flex classes to build nested layouts with fixed and fluid columns. 

        The classes are named using the format <code>flex-{property}</code> for <code>xs</code> and <code>flex-{breakpoint}-{property}</code> 
        for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.
    </div>
    <!--end::Block-->
    
    <!--begin::Block-->
    <div class="py-5">
        Where <code>property</code> is one of:
        <ul class="pt-3">
            <li class="py-2"><code>root</code> - to define the root node of the flex layout(usually it's used when the layout is placed as a direct child of the body element in order to fully occupy the window height)</li>
            <li class="py-2"><code>column-auto</code> - to set a flex item with auto height</li>
            <li class="py-2"><code>column-fluid</code> - to set a flex item with fluid height</li>
            <li class="py-2"><code>row-auto</code> - to set a flex item with auto width</li>
            <li class="py-2"><code>row-fluid</code> - to set a flex item with fluid width</li>
            <li class="py-2"><code>center</code> - to set a flex item's content vertically and horizontally centered</li>
            <li class="py-2"><code>start</code> - to set a flex item's content alignments to start</li>
            <li class="py-2"><code>end</code> - to set a flex item's content alignments to end</li>
        </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div class="d-flex flex-row h-300px">
                <div class="d-flex flex-column flex-row-auto w-200px">
                    <div class="d-flex flex-column-auto flex-center h-50px bg-primary">
                        <span class="text-white">Fixed Height</span>
                    </div>

                    <div class="d-flex flex-column-fluid bg-success flex-center">
                        <span class="text-white">Fluid Height</span>
                    </div>
                </div>

                <div class="d-flex flex-column flex-row-fluid">
                    <div class="d-flex flex-column-auto h-70px bg-info flex-center">
                        <span class="text-white">Fixed Height</span>
                    </div>

                    <div class="d-flex flex-row flex-column-fluid">
                        <div class="d-flex flex-row-fluid bg-dark flex-center">
                            <span class="text-white">Fluid Width</span>
                        </div>

                        <div class="d-flex flex-row-auto w-200px bg-warning flex-center">
                            <span class="text-white">Fixed Width</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-row h-300px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column flex-row-auto w-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column-auto h-50px bg-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Fixed Height<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column-fluid bg-success flex-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Fluid Height<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column flex-row-fluid<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column-auto h-70px bg-info flex-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Fixed Height<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-row flex-column-fluid<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-row-fluid bg-dark flex-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Fluid Width<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-row-auto w-200px bg-warning flex-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-white<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Fixed Width<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
        </div>
  </div>
</template>


<style>
@import "@/assets/documentation/style.css";
</style>