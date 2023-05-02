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
        Keen customizes the <a href="https://getbootstrap.com/docs/5.2/components/carousel/" class="fw-semibold">Bootstrap Carousel</a>&nbsp;
        through the SASS variables in <code>src/sass/components/_variables.scss</code> and adds additonal options in <code>src/sass/components/_carousel.scss</code>.
    </div>
    <!--end::Block--> 
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="dots-indicators" data-kt-scroll-offset="50">
    <a href="#dots-indicators"></a>
    
    Dots Indicators</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Add <code>.carousel-custom</code> and <code>.carousel-indicators-dots</code> classes for a custom carousel with dots indicators style:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div id="kt_carousel_1_carousel" class="carousel carousel-custom slide" data-bs-ride="carousel" data-bs-interval="8000">
                <!--begin::Heading-->
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <!--begin::Label-->
                    <span class="fs-4 fw-bold pe-2">Title</span>
                    <!--end::Label-->

                    <!--begin::Carousel Indicators-->
                    <ol class="p-0 m-0 carousel-indicators carousel-indicators-dots">
                        <li data-bs-target="#kt_carousel_1_carousel" data-bs-slide-to="0" class="ms-1"></li>
                        <li data-bs-target="#kt_carousel_1_carousel" data-bs-slide-to="1" class="ms-1 active" aria-current="true"></li>
                        <li data-bs-target="#kt_carousel_1_carousel" data-bs-slide-to="2" class="ms-1"></li>
                    </ol>
                    <!--end::Carousel Indicators-->
                </div>
                <!--end::Heading-->

                <!--begin::Carousel-->
                <div class="carousel-inner pt-8">
                    <!--begin::Item-->
                    <div class="carousel-item">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item active">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </div>
                    <!--end::Item-->
                </div>
                <!--end::Carousel-->
            </div>

        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_carousel_1_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel carousel-custom slide<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-ride</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8000<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Heading--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex align-items-center justify-content-between flex-wrap<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Label--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fs-4 fw-bold pe-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Label--&gt;</span>

        <span class="token comment">&lt;!--begin::Carousel Indicators--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-0 m-0 carousel-indicators carousel-indicators-dots<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_1_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1 active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_1_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_1_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Carousel Indicators--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Heading--&gt;</span>

    <span class="token comment">&lt;!--begin::Carousel--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-inner pt-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>

        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>

        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Carousel--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="bullet-indicators" data-kt-scroll-offset="50">
    <a href="#bullet-indicators"></a>
    
    Bullet Indicators</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Add <code>.carousel-custom</code> and <code>.carousel-indicators-bullet</code> 
        classes for a custom carousel with bullet indicators style:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">            
            <div id="kt_carousel_2_carousel" class="carousel carousel-custom slide" data-bs-ride="carousel" data-bs-interval="8000">
                <!--begin::Heading-->
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <!--begin::Label-->
                    <span class="fs-4 fw-bold pe-2">Title</span>
                    <!--end::Label-->

                    <!--begin::Carousel Indicators-->
                    <ol class="p-0 m-0 carousel-indicators carousel-indicators-bullet">
                        <li data-bs-target="#kt_carousel_2_carousel" data-bs-slide-to="0" class="ms-1"></li>
                        <li data-bs-target="#kt_carousel_2_carousel" data-bs-slide-to="1" class="ms-1 active" aria-current="true"></li>
                        <li data-bs-target="#kt_carousel_2_carousel" data-bs-slide-to="2" class="ms-1"></li>
                    </ol>
                    <!--end::Carousel Indicators-->
                </div>
                <!--end::Heading-->

                <!--begin::Carousel-->
                <div class="carousel-inner pt-8">
                    <!--begin::Item-->
                    <div class="carousel-item">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item active">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </div>
                    <!--end::Item-->
                </div>
                <!--end::Carousel-->
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_carousel_2_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel carousel-custom slide<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-ride</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8000<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Heading--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex align-items-center justify-content-between flex-wrap<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Label--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fs-4 fw-bold pe-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Label--&gt;</span>

        <span class="token comment">&lt;!--begin::Carousel Indicators--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-0 m-0 carousel-indicators carousel-indicators-bullet<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_2_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1 active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_2_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_2_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Carousel Indicators--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Heading--&gt;</span>

    <span class="token comment">&lt;!--begin::Carousel--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-inner pt-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>

        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>

        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Carousel--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="theme-colors" data-kt-scroll-offset="50">
    <a href="#theme-colors"></a>
    
    Theme Colors</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Add <code>.carousel-custom</code> and <code>carousel-indicators-active-{color}</code> 
        where <code>color</code> accepts one of <a href="/html/keen/docs/base/utilities">Theme Colors</a>
        &nbsp;to apply a color to the indicator's active state.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <div id="kt_carousel_3_carousel" class="carousel carousel-custom slide" data-bs-ride="carousel" data-bs-interval="8000">
                <!--begin::Heading-->
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <!--begin::Label-->
                    <span class="fs-4 fw-bold pe-2">Title</span>
                    <!--end::Label-->

                    <!--begin::Carousel Indicators-->
                    <ol class="p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-primary">
                        <li data-bs-target="#kt_carousel_3_carousel" data-bs-slide-to="0" class="ms-1"></li>
                        <li data-bs-target="#kt_carousel_3_carousel" data-bs-slide-to="1" class="ms-1 active" aria-current="true"></li>
                        <li data-bs-target="#kt_carousel_3_carousel" data-bs-slide-to="2" class="ms-1"></li>
                    </ol>
                    <!--end::Carousel Indicators-->
                </div>
                <!--end::Heading-->

                <!--begin::Carousel-->
                <div class="carousel-inner pt-8">
                    <!--begin::Item-->
                    <div class="carousel-item">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item active">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    </div>
                    <!--end::Item-->

                    <!--begin::Item-->
                    <div class="carousel-item">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </div>
                    <!--end::Item-->
                </div>
                <!--end::Carousel-->
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_carousel_3_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel carousel-custom slide<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-ride</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-interval</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>8000<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Heading--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex align-items-center justify-content-between flex-wrap<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Label--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fs-4 fw-bold pe-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Label--&gt;</span>

        <span class="token comment">&lt;!--begin::Carousel Indicators--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ol</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>p-0 m-0 carousel-indicators carousel-indicators-bullet carousel-indicators-active-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_3_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1 active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_3_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_carousel_3_carousel<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-slide-to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>2<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ms-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ol</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Carousel Indicators--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Heading--&gt;</span>

    <span class="token comment">&lt;!--begin::Carousel--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-inner pt-8<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>

        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>

        <span class="token comment">&lt;!--begin::Item--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>carousel-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ...
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Carousel--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->        </div>
  </div>
</template>


<style>
@import "@/assets/documentation/style.css";
</style>