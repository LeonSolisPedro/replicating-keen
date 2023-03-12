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
        Bootstrap Menu is an exclusive component of Keen that provides a simple and elegent solution for Bootstrap Menu with nested Dropdown and Accordion Submenus.
    </div>
    <!--end::Block--> 
</div>
<!--end::Section-->
<!--begin::Section-->

<!--end::Section-->
<!--begin::Section-->
<div class="py-5">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="initialization" data-kt-scroll-offset="50">
    <a href="#initialization"></a>
    
    Initialization</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="pt-5">
        <ul class="py-0">
            <li class="py-2">
                Bootstrap Menu structure is split into 3 parts. The <strong>trigger element</strong>, the <strong class="me-1">menu container</strong> and the <strong>menu items</strong>.
            </li>
            <li class="py-2">
                The trigger element can be any HTML element. For example, a <code>button</code>, an <code>input</code> field or an empty <code>div</code>.
            </li>
            <li class="py-2">
                Add <code>data-kt-menu-trigger</code> to the trigger element with a value of <code>click</code> or <code>hover</code> initialize the menu trigger type.
            </li>
            <li class="py-2">
                Add <code>.menu</code> CSS class to the menu container along with <code>v-ktmenu data-kt-menu="true"</code> attribute to define the menu container. There are other options available as well, <a href="#options" data-kt-scroll-toggle="">listed below</a>.
            </li>
            <li class="py-2">
                Add <code>.menu-item</code> CSS class to the menu item elements to define the menu elements. Add <code>.menu-link</code> as a child element within <code>.menu-item</code> to enable a clean hover state effect.
            </li>
            <li class="py-2">
                Bootstrap Menu can be nested within itself to allow multiple tier menus. Please refer to our <a href="#nested" data-kt-scroll-toggle="">nested menu example below</a>.
            </li>
            <li class="py-2">
                Bootstrap Menu supports all Bootstrap styling classes.
            </li>
            <li class="py-2">
                Bootstrap Menu instances can also be controlled programmatically. <a href="#methods" data-kt-scroll-toggle="">See below for more info</a>.
            </li>
        </ul>
    </div>
    <!--end::Block-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="examples" data-kt-scroll-offset="50">
    <a href="#examples"></a>
    
    Examples</h1>
<!--end::Heading-->


    <!--begin::Example-->
    <div class="mb-5">
        <!--begin::Block-->
        <div class="py-5">
            Basic inline menu with link, icon and badge.
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
            <!--begin::Wrapper-->
            <div class="rounded border p-5">
                <!--begin::Menu-->
                <div class="menu"> 
                    <!--begin::Menu item-->
                    <div class="menu-item">
                        <a href="#" class="menu-link">
                            <span class="menu-icon">
                                <font-awesome-icon icon="fa-solid fa-chart-simple" class="fa-xl" />
                            </span>
                            <span class="menu-title">Example Link</span>
                        </a>
                    </div>
                    <!--end::Menu item-->

                    <!--begin::Menu item-->
                    <div class="menu-item">
                        <a href="#" class="menu-link">
                            <span class="menu-icon">
                                <font-awesome-icon icon="fa-regular fa-bell" class="fa-xl" />
                            </span>
                            <span class="menu-title">Example Link</span>
                            <span class="menu-badge">
                                <span class="badge badge-sm badge-circle badge-danger">5</span>
                            </span>
                        </a>
                    </div>
                    <!--end::Menu item-->

                    <!--begin::Menu item-->
                    <div class="menu-item">
                        <a href="#" class="menu-link">
                            <span class="menu-icon">
                                <font-awesome-icon icon="fa-regular fa-calendar" class="fa-xl" />
                            </span>
                            <span class="menu-title">Example Link</span>
                        </a>
                    </div>
                    <!--end::Menu item-->
                </div>
                <!--end::Menu-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
            <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Menu--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Menu item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-solid fa-chart-simple<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-xl<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Menu item--&gt;</span>

    <span class="token comment">&lt;!--begin::Menu item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-regular fa-bell<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-xl<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-badge<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>badge badge-sm badge-circle badge-danger<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Menu item--&gt;</span>

    <span class="token comment">&lt;!--begin::Menu item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-regular fa-calendar<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-xl<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Menu item--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Menu--&gt;</span></code></pre>    </div></div><!--end::Highlight-->        </div>
        <!--end::Code-->
    </div>
    <!--end::Example-->

    <!--begin::Example-->
    <div class="mb-0">
        <!--begin::Block-->
        <div class="py-5">
            Use <code>.menu-column</code> class for a basic vertical menu:
        </div>
        <!--end::Block-->

        <!--begin::Wrapper-->
        <div class="rounded border p-5">
            <!--begin::Menu-->
            <div class="menu menu-column w-200px"> 
                <!--begin::Menu item-->
                <div class="menu-item">
                    <a href="#" class="menu-link">
                        <span class="menu-icon">
                            <font-awesome-icon icon="fa-solid fa-chart-simple" class="fa-xl" />
                        </span>
                        <span class="menu-title">Example Link</span>
                    </a>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu item-->
                <div class="menu-item">
                    <a href="#" class="menu-link">
                        <span class="menu-icon">
                            <font-awesome-icon icon="fa-regular fa-bell" class="fa-xl" />
                        </span>
                        <span class="menu-title">Example Link</span>
                        <span class="menu-badge">
                            <span class="badge badge-sm badge-circle badge-danger">5</span>
                        </span>
                    </a>
                </div>
                <!--end::Menu item-->

                <!--begin::Menu item-->
                <div class="menu-item">
                    <a href="#" class="menu-link">
                        <span class="menu-icon">
                            <font-awesome-icon icon="fa-regular fa-calendar" class="fa-xl" />
                        </span>
                        <span class="menu-title">Example Link</span>
                    </a>
                </div>
                <!--end::Menu item-->
            </div>
            <!--end::Menu-->
        </div>
        <!--end::Wrapper-->

        <!--begin::Code-->
        <div class="py-5">
            <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Menu--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu menu-column w-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Menu item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-solid fa-chart-simple<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-xl<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Menu item--&gt;</span>

    <span class="token comment">&lt;!--begin::Menu item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-regular fa-bell<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-xl<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-badge<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>badge badge-sm badge-circle badge-danger<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Menu item--&gt;</span>

    <span class="token comment">&lt;!--begin::Menu item--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-item<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-link<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>font-awesome-icon</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-regular fa-calendar<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fa-xl<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Menu item--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Menu--&gt;</span></code></pre>    </div></div><!--end::Highlight-->        </div>
        <!--end::Code-->
    </div>
    <!--end::Example-->
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