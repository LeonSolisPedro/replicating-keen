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
        Bootstrap Drawer is an exclusive plugin of Keen that provides a simple, smooth and lightweight option for hidden sidebars that are most used for navigations, shopping carts and a whole lot more.
    </div>
    <!--end::Block--> 
</div>
<!--end::Section-->

<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="initialization" data-kt-scroll-offset="50">
    <a href="#initialization"></a>
    
    Initialization</h1>
<!--end::Heading-->

 
    <!--begin::Block-->
    <div class="py-5">
        <ul class="py-0">
            <li class="py-2">
                Bootstrap Drawer's Javascript is globally initialized and added into our script bundle.
            </li>
            <li class="py-2">
                To initialize it, the drawer view component needs to be added within the page with a button trigger to toggle it.
            </li>
            <li class="py-2">
                Bootstrap Drawer instances can also be created programmatically. <a href="#methods" data-kt-scroll-toggle="">See below for more info</a>.
            </li>
        </ul>
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
        There are 2 parts when adding in a drawer component. There's the trigger and the view component. The trigger can be anything with a specific <code>id</code> which needs to be defined in the view component.<br>
        <br>
        The view component will then have a few HTML attributes that will set it's configuration options. The key attributes are:
        <ul class="pt-3 pb-5">
            <li class="py-2"><code>v-ktdrawer data-kt-drawer</code></li>
            <li class="py-2"><code>data-kt-drawer-activate</code></li>
            <li class="py-2"><code>data-kt-drawer-toggle</code></li>
            <li class="py-2"><code>data-kt-drawer-close</code></li>
            <li class="py-2"><code>data-kt-drawer-width</code></li>
        </ul> 
        <a href="#options" class="me-1" data-kt-scroll-toggle="">Click here</a> for more info on the options.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-5 p-lg-15">
            <!--begin::Button-->
            <button id="kt_drawer_example_basic_button" class="btn btn-primary">Toggle basic drawer</button>
            <!--end::Button-->
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Trigger button--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_drawer_example_basic_button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Toggle basic drawer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Trigger button--&gt;</span>

<span class="token comment">&lt;!--begin::View component--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_drawer_example_basic<span class="token punctuation">"</span></span>

    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-ktdrawer data-kt-drawer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-activate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_basic_button<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_basic_close<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>500px<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::View component--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->


<!--begin::Drawer-->
<div id="kt_drawer_example_basic" class="bg-white drawer drawer-end" v-ktdrawer data-kt-drawer="true" data-kt-drawer-activate="true" data-kt-drawer-toggle="#kt_drawer_example_basic_button" data-kt-drawer-close="#kt_drawer_example_basic_close" data-kt-drawer-width="500px" style="width: 500px !important;">

    <!--begin::Card-->
    <div class="card w-100 rounded-0">
        <!--begin::Card header-->
        <div class="card-header pe-5">
            <!--begin::Title-->
            <div class="card-title">
                <!--begin::User-->
                <div class="d-flex justify-content-center flex-column me-3">
                    <a href="#" class="fs-4 fw-bold text-gray-900 text-hover-primary me-1 lh-1">Example Basic</a>
                </div>
                <!--end::User-->
            </div>
            <!--end::Title-->

             <!--begin::Card toolbar-->
             <div class="card-toolbar">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_example_basic_close">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body hover-scroll-overlay-y">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Sed faucibus turpis in eu mi. Velit egestas dui id ornare arcu odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vehicula ipsum a arcu cursus. Gravida neque convallis a cras semper. Amet massa vitae tortor condimentum. Lectus mauris ultrices eros in cursus turpis massa. Orci sagittis eu volutpat odio facilisis mauris sit amet. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Erat pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum morbi blandit cursus risus at ultrices.</p>

            <p>Quis ipsum suspendisse ultrices gravida dictum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Eget arcu dictum varius duis at consectetur lorem donec massa. Morbi tincidunt ornare massa eget. Ornare arcu dui vivamus arcu felis. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Aliquet nec ullamcorper sit amet. Dignissim enim sit amet venenatis urna cursus eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Non consectetur a erat nam at. Ut morbi tincidunt augue interdum velit. Ridiculus mus mauris vitae ultricies leo integer malesuada.</p>

            <p>Ipsum dolor sit amet consectetur adipiscing. Blandit cursus risus at ultrices mi tempus imperdiet. Risus nullam eget felis eget. A lacus vestibulum sed arcu non. Tristique magna sit amet purus gravida quis blandit turpis cursus. Imperdiet nulla malesuada pellentesque elit. Nec dui nunc mattis enim ut tellus elementum sagittis. Ac placerat vestibulum lectus mauris. Facilisi etiam dignissim diam quis enim. Suspendisse faucibus interdum posuere lorem ipsum dolor. Mattis rhoncus urna neque viverra justo nec ultrices. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. At varius vel pharetra vel turpis nunc eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Ut morbi tincidunt augue interdum velit euismod in.</p>

            <p>Etiam tempor orci eu lobortis elementum nibh. Libero volutpat sed cras ornare arcu. Risus sed vulputate odio ut enim. Iaculis nunc sed augue lacus viverra vitae. Enim neque volutpat ac tincidunt vitae. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ullamcorper a lacus vestibulum sed arcu. In dictum non consectetur a erat. Varius quam quisque id diam vel quam elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sed viverra tellus in hac habitasse platea dictumst. Amet cursus sit amet dictum sit amet. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Non tellus orci ac auctor augue mauris.</p>

            <p>Ut lectus arcu bibendum at varius vel. Arcu felis bibendum ut tristique et egestas quis. Sit amet commodo nulla facilisi nullam vehicula ipsum. Tellus cras adipiscing enim eu turpis egestas pretium. Imperdiet massa tincidunt nunc pulvinar sapien et. Integer eget aliquet nibh praesent tristique magna sit. Lacinia at quis risus sed vulputate odio ut. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Aenean pharetra magna ac placerat vestibulum. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra nam libero justo laoreet sit amet cursus sit amet. Diam vel quam elementum pulvinar. Massa vitae tortor condimentum lacinia quis vel eros donec ac.</p>
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->
</div>
<!--end::Drawer-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="advanced" data-kt-scroll-offset="50">
    <a href="#advanced"></a>
    
    Advanced</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        Bootstrap Drawer component can be easily configured by adding additional HTML attributes to the view component. For example, adding <code>data-kt-drawer-direction</code> 
        will indicate which side the drawer will slide out from (<code>start</code> for left and <code>end</code> for right).<br>
        <br>
        Adding <code>data-kt-drawer-width</code> will set the drawer view component's width and it's also very responsive and uses 
        Bootstrap's default breakpoints to switch widths on certain screen sizes. For example: <code>{default:'300px', 'md': '500px'}</code> 
        indicates that the drawer view component has <code>500px</code> width on screens larger than <code>md</code> and <code>300px</code> for every other screen size.<br>
        <br>
        <a href="#options" class="me-1" data-kt-scroll-toggle="">Click here</a> for more info on the options.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-5 p-lg-15">
            <!--begin::Button-->
            <button id="kt_drawer_example_advanced_button" class="btn btn-primary">Toggle advanced drawer</button>
            <!--end::Button-->
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Trigger button--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_drawer_example_basic_button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Toggle advanced drawer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Trigger button--&gt;</span>

<span class="token comment">&lt;!--begin::View component--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_drawer_example_advanced<span class="token punctuation">"</span></span>

    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-ktdrawer data-kt-drawer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-activate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_advanced_button<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_advanced_close<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>docs<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-overlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{default:<span class="token punctuation">'</span>300px<span class="token punctuation">'</span>, <span class="token punctuation">'</span>md<span class="token punctuation">'</span>: <span class="token punctuation">'</span>500px<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-direction</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>start<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::View component--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->


<!--begin::Drawer-->
<div id="kt_drawer_example_advanced" class="bg-white drawer drawer-start" v-ktdrawer data-kt-drawer="true" data-kt-drawer-activate="true" data-kt-drawer-toggle="#kt_drawer_example_advanced_button" data-kt-drawer-close="#kt_drawer_example_advanced_close" data-kt-drawer-name="docs" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="start" style="width: 500px !important;">

    <!--begin::Card-->
    <div class="card rounded-0 w-100">
        <!--begin::Card header-->
        <div class="card-header pe-5">
            <!--begin::Title-->
            <div class="card-title">
                <!--begin::User-->
                <div class="d-flex justify-content-center flex-column me-3">
                    <a href="#" class="fs-4 fw-bold text-gray-900 text-hover-primary me-1 lh-1">Example Advanced</a>
                </div>
                <!--end::User-->
            </div>
            <!--end::Title-->

             <!--begin::Card toolbar-->
             <div class="card-toolbar">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_example_advanced_close">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body hover-scroll-overlay-y">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Sed faucibus turpis in eu mi. Velit egestas dui id ornare arcu odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vehicula ipsum a arcu cursus. Gravida neque convallis a cras semper. Amet massa vitae tortor condimentum. Lectus mauris ultrices eros in cursus turpis massa. Orci sagittis eu volutpat odio facilisis mauris sit amet. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Erat pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum morbi blandit cursus risus at ultrices.</p>

            <p>Quis ipsum suspendisse ultrices gravida dictum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Eget arcu dictum varius duis at consectetur lorem donec massa. Morbi tincidunt ornare massa eget. Ornare arcu dui vivamus arcu felis. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Aliquet nec ullamcorper sit amet. Dignissim enim sit amet venenatis urna cursus eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Non consectetur a erat nam at. Ut morbi tincidunt augue interdum velit. Ridiculus mus mauris vitae ultricies leo integer malesuada.</p>

            <p>Ipsum dolor sit amet consectetur adipiscing. Blandit cursus risus at ultrices mi tempus imperdiet. Risus nullam eget felis eget. A lacus vestibulum sed arcu non. Tristique magna sit amet purus gravida quis blandit turpis cursus. Imperdiet nulla malesuada pellentesque elit. Nec dui nunc mattis enim ut tellus elementum sagittis. Ac placerat vestibulum lectus mauris. Facilisi etiam dignissim diam quis enim. Suspendisse faucibus interdum posuere lorem ipsum dolor. Mattis rhoncus urna neque viverra justo nec ultrices. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. At varius vel pharetra vel turpis nunc eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Ut morbi tincidunt augue interdum velit euismod in.</p>

            <p>Etiam tempor orci eu lobortis elementum nibh. Libero volutpat sed cras ornare arcu. Risus sed vulputate odio ut enim. Iaculis nunc sed augue lacus viverra vitae. Enim neque volutpat ac tincidunt vitae. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ullamcorper a lacus vestibulum sed arcu. In dictum non consectetur a erat. Varius quam quisque id diam vel quam elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sed viverra tellus in hac habitasse platea dictumst. Amet cursus sit amet dictum sit amet. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Non tellus orci ac auctor augue mauris.</p>

            <p>Ut lectus arcu bibendum at varius vel. Arcu felis bibendum ut tristique et egestas quis. Sit amet commodo nulla facilisi nullam vehicula ipsum. Tellus cras adipiscing enim eu turpis egestas pretium. Imperdiet massa tincidunt nunc pulvinar sapien et. Integer eget aliquet nibh praesent tristique magna sit. Lacinia at quis risus sed vulputate odio ut. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Aenean pharetra magna ac placerat vestibulum. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra nam libero justo laoreet sit amet cursus sit amet. Diam vel quam elementum pulvinar. Massa vitae tortor condimentum lacinia quis vel eros donec ac.</p>
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->
</div>
<!--end::Drawer-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="adhoc-dismiss" data-kt-scroll-offset="50">
    <a href="#adhoc-dismiss"></a>
    
    Adhoc Dismiss</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        Add a button or link within Bootstrap Drawer view component with the HTML attributes <code>data-kt-drawer-dismiss="true"</code> to close the current drawer.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-5 p-lg-15">
            <!--begin::Button-->
            <button id="kt_drawer_example_dismiss_button" class="btn btn-primary">Toggle drawer with dismiss button</button>
            <!--end::Button-->
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Trigger button--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_drawer_example_dismiss_button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Toggle drawer with dismiss button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Trigger button--&gt;</span>

<span class="token comment">&lt;!--begin::View component--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_drawer_example_dismiss<span class="token punctuation">"</span></span>

    <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-white<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-ktdrawer data-kt-drawer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-activate</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_dismiss_button<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_dismiss_close<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-overlay</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-drawer-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{default:<span class="token punctuation">'</span>300px<span class="token punctuation">'</span>, <span class="token punctuation">'</span>md<span class="token punctuation">'</span>: <span class="token punctuation">'</span>500px<span class="token punctuation">'</span>}<span class="token punctuation">"</span></span>
<span class="token punctuation">&gt;</span></span>
    ...

    <span class="token comment">&lt;!--begin::Dismiss button--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-light-danger<span class="token punctuation">"</span></span> <span class="token attr-name">data-kt-drawer-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Dismiss drawer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Dismiss button--&gt;</span>

    ...
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::View component--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Drawer-->
<div id="kt_drawer_example_dismiss" class="bg-white drawer drawer-end" v-ktdrawer data-kt-drawer="true" data-kt-drawer-activate="true" data-kt-drawer-toggle="#kt_drawer_example_dismiss_button" data-kt-drawer-close="#kt_drawer_example_dismiss_close" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" style="width: 500px !important;">

    <!--begin::Card-->
    <div class="card rounded-0 w-100">
        <!--begin::Card header-->
        <div class="card-header pe-5">
            <!--begin::Title-->
            <div class="card-title">
                <!--begin::User-->
                <div class="d-flex justify-content-center flex-column me-3">
                    <a href="#" class="fs-4 fw-bold text-gray-900 text-hover-primary me-1 lh-1">Example Dismiss Button</a>
                </div>
                <!--end::User-->
            </div>
            <!--end::Title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_example_dismiss_close">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body hover-scroll-overlay-y">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Sed faucibus turpis in eu mi. Velit egestas dui id ornare arcu odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vehicula ipsum a arcu cursus. Gravida neque convallis a cras semper. Amet massa vitae tortor condimentum. Lectus mauris ultrices eros in cursus turpis massa. Orci sagittis eu volutpat odio facilisis mauris sit amet. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Erat pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum morbi blandit cursus risus at ultrices.</p>

            <p>Quis ipsum suspendisse ultrices gravida dictum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Eget arcu dictum varius duis at consectetur lorem donec massa. Morbi tincidunt ornare massa eget. Ornare arcu dui vivamus arcu felis. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Aliquet nec ullamcorper sit amet. Dignissim enim sit amet venenatis urna cursus eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Non consectetur a erat nam at. Ut morbi tincidunt augue interdum velit. Ridiculus mus mauris vitae ultricies leo integer malesuada.</p>

            <p>Ipsum dolor sit amet consectetur adipiscing. Blandit cursus risus at ultrices mi tempus imperdiet. Risus nullam eget felis eget. A lacus vestibulum sed arcu non. Tristique magna sit amet purus gravida quis blandit turpis cursus. Imperdiet nulla malesuada pellentesque elit. Nec dui nunc mattis enim ut tellus elementum sagittis. Ac placerat vestibulum lectus mauris. Facilisi etiam dignissim diam quis enim. Suspendisse faucibus interdum posuere lorem ipsum dolor. Mattis rhoncus urna neque viverra justo nec ultrices. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. At varius vel pharetra vel turpis nunc eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Ut morbi tincidunt augue interdum velit euismod in.</p>

            <p>Etiam tempor orci eu lobortis elementum nibh. Libero volutpat sed cras ornare arcu. Risus sed vulputate odio ut enim. Iaculis nunc sed augue lacus viverra vitae. Enim neque volutpat ac tincidunt vitae. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ullamcorper a lacus vestibulum sed arcu. In dictum non consectetur a erat. Varius quam quisque id diam vel quam elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sed viverra tellus in hac habitasse platea dictumst. Amet cursus sit amet dictum sit amet. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Non tellus orci ac auctor augue mauris.</p>

            <p>Ut lectus arcu bibendum at varius vel. Arcu felis bibendum ut tristique et egestas quis. Sit amet commodo nulla facilisi nullam vehicula ipsum. Tellus cras adipiscing enim eu turpis egestas pretium. Imperdiet massa tincidunt nunc pulvinar sapien et. Integer eget aliquet nibh praesent tristique magna sit. Lacinia at quis risus sed vulputate odio ut. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Aenean pharetra magna ac placerat vestibulum. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra nam libero justo laoreet sit amet cursus sit amet. Diam vel quam elementum pulvinar. Massa vitae tortor condimentum lacinia quis vel eros donec ac.</p>
        </div>
        <!--end::Card body-->

        <!--begin::Card footer-->
        <div class="card-footer">
            <!--begin::Dismiss button-->
            <button class="btn btn-light-danger" data-kt-drawer-dismiss="true">Dismiss drawer</button>
            <!--end::Dismiss button-->
        </div>
        <!--end::Card footer-->
    </div>
    <!--end::Card-->
</div>
<!--end::Drawer-->


<!--begin::Drawer-->
<div id="kt_drawer_example_permanent" class="bg-white drawer drawer-end" v-ktdrawer data-kt-drawer="true" data-kt-drawer-activate="true" data-kt-drawer-toggle="#kt_drawer_example_permanent_toggle" data-kt-drawer-close="#kt_drawer_example_permanent_close" data-kt-drawer-overlay="true" data-kt-drawer-permanent="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" style="width: 500px !important;"> 

    <!--begin::Card-->
    <div class="card rounded-0 w-100">
        <!--begin::Card header-->
        <div class="card-header pe-5">
            <!--begin::Title-->
            <div class="card-title">
                Permanent Drawer
            </div>
            <!--end::Title-->

            <!--begin::Card toolbar-->
            <div class="card-toolbar">
                <!--begin::Close-->
                <div class="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_example_permanent_close">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                </div>
                <!--end::Close-->
            </div>
            <!--end::Card toolbar-->
        </div>
        <!--end::Card header-->

        <!--begin::Card body-->
        <div class="card-body hover-scroll-overlay-y">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo vel fringilla est ullamcorper eget nulla. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Sed faucibus turpis in eu mi. Velit egestas dui id ornare arcu odio. Arcu non odio euismod lacinia at quis risus sed vulputate. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vehicula ipsum a arcu cursus. Gravida neque convallis a cras semper. Amet massa vitae tortor condimentum. Lectus mauris ultrices eros in cursus turpis massa. Orci sagittis eu volutpat odio facilisis mauris sit amet. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Erat pellentesque adipiscing commodo elit at imperdiet dui. Vestibulum morbi blandit cursus risus at ultrices.</p>

            <p>Quis ipsum suspendisse ultrices gravida dictum. Egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Vitae proin sagittis nisl rhoncus mattis rhoncus urna. Eget arcu dictum varius duis at consectetur lorem donec massa. Morbi tincidunt ornare massa eget. Ornare arcu dui vivamus arcu felis. Egestas purus viverra accumsan in nisl nisi scelerisque eu. Aliquet nec ullamcorper sit amet. Dignissim enim sit amet venenatis urna cursus eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Non consectetur a erat nam at. Ut morbi tincidunt augue interdum velit. Ridiculus mus mauris vitae ultricies leo integer malesuada.</p>

            <p>Ipsum dolor sit amet consectetur adipiscing. Blandit cursus risus at ultrices mi tempus imperdiet. Risus nullam eget felis eget. A lacus vestibulum sed arcu non. Tristique magna sit amet purus gravida quis blandit turpis cursus. Imperdiet nulla malesuada pellentesque elit. Nec dui nunc mattis enim ut tellus elementum sagittis. Ac placerat vestibulum lectus mauris. Facilisi etiam dignissim diam quis enim. Suspendisse faucibus interdum posuere lorem ipsum dolor. Mattis rhoncus urna neque viverra justo nec ultrices. Luctus accumsan tortor posuere ac ut consequat semper viverra nam. At varius vel pharetra vel turpis nunc eget. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Ut morbi tincidunt augue interdum velit euismod in.</p>

            <p>Etiam tempor orci eu lobortis elementum nibh. Libero volutpat sed cras ornare arcu. Risus sed vulputate odio ut enim. Iaculis nunc sed augue lacus viverra vitae. Enim neque volutpat ac tincidunt vitae. Iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ullamcorper a lacus vestibulum sed arcu. In dictum non consectetur a erat. Varius quam quisque id diam vel quam elementum. Cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla. Sed viverra tellus in hac habitasse platea dictumst. Amet cursus sit amet dictum sit amet. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Non tellus orci ac auctor augue mauris.</p>

            <p>Ut lectus arcu bibendum at varius vel. Arcu felis bibendum ut tristique et egestas quis. Sit amet commodo nulla facilisi nullam vehicula ipsum. Tellus cras adipiscing enim eu turpis egestas pretium. Imperdiet massa tincidunt nunc pulvinar sapien et. Integer eget aliquet nibh praesent tristique magna sit. Lacinia at quis risus sed vulputate odio ut. Amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Aenean pharetra magna ac placerat vestibulum. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Viverra nam libero justo laoreet sit amet cursus sit amet. Diam vel quam elementum pulvinar. Massa vitae tortor condimentum lacinia quis vel eros donec ac.</p>
        </div>
        <!--end::Card body-->
    </div>
    <!--end::Card-->
</div>
<!--end::Drawer-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="external-toggle" data-kt-scroll-offset="50">
    <a href="#external-toggle"></a>
    
    External Toggle</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        Bootstrap Drawers can also be toggled without binding the button <code>id</code> with the drawer view component by adding <code>data-kt-drawer-show="true"</code> and <code>data-kt-drawer-target</code> with the drawer view component <code>id</code>.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-5 p-lg-15">
            <!--begin::Button-->
            <button class="btn btn-primary me-3 my-1 my-lg-0" data-kt-drawer-show="true" data-kt-drawer-target="#kt_drawer_example_basic">Toggle basic drawer</button>
            <button class="btn btn-primary my-1 my-lg-0" data-kt-drawer-show="true" data-kt-drawer-target="#kt_drawer_example_advanced">Toggle advanced drawer</button>
            <!--end::Button-->
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Trigger button--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary me-3<span class="token punctuation">"</span></span> <span class="token attr-name">data-kt-drawer-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">data-kt-drawer-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_basic<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Toggle basic drawer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">data-kt-drawer-show</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name">data-kt-drawer-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_drawer_example_advanced<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Toggle advanced drawer<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Trigger button--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="markup-reference" data-kt-scroll-offset="50">
    <a href="#markup-reference"></a>
    
    Markup Reference</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        Scroll uses both CSS and HTML attributes to define the scroll configuration. Here are the references for each below
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="fw-bold fs-2">HTML Attribute references</div>
    </div>
    <!--end::Block-->

    <!--begin::Table-->
    <div class="py-5">
        <div class="table-responsive border rounded">
            <table class="table table-striped align-top mb-0 g-5">
                <thead>
                    <tr class="fs-4 fw-bold text-dark p-6">
                        <th class="min-w-150px">Name</th>
                        <th class="min-w-100px">Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>v-ktdrawer data-kt-drawer</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            Defines the element as a drawer view component.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-activate</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            <div class="mb-3">
                                Enables the drawer view component. Accepts <code>true</code> and <code>false</code> values. Default value is set to <code>true</code>.
                            </div>

                            <div class="mb-3">
                                This is also compatible with Bootstrap's standard breakpoint sizing <code>eg: sm, md, lg, xl</code>. For responsive options,
                                this attribute value must be written as a JSON string to specify values for multiple responsive breakpoints.
                            </div>

                            For example: <code>{default: false, md: true}</code> indicates that the drawer is activated only when width on screens larger than <code>md</code> breakpoint size.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-toggle</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Defines the toggle button <code>id</code>.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-close</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Defines the close button <code>id</code> within the drawer view component.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-name</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            Defines the drawer view component's name for identification and used to append a special attribute to Body element to indicate the drawer's shown state.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-overlay</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Toggles the drawer view component as an overlay element or not. 
                            Accepts <code>true</code> and <code>false</code> values.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-permanent</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Prevents drawer from closing on overlay click
                            Accepts <code>true</code> and <code>false</code> values.
                            Default value is set to <code>false</code>.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-width</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            <div class="mb-3">
                                Specifies the drawer view component's width in either a <code>px</code> or <code>%</code> value. For example: <code>400px</code> or <code>25%</code>
                            </div>

                            <div class="mb-3">
                                This is also compatible with Bootstrap's standard breakpoint sizing (eg: <code>sm, md, lg, xl</code>) with similar <code>px</code> or <code>%</code> values. For responsive options, this attribute value must be written as an object string to enable multiple responsive breakpoints.
                            </div>

                            For example: <code>{default:'300px', 'md': '500px'}</code> indicates that the drawer view component has <code>500px</code> width on screens larger than <code>md</code> and <code>300px</code> for every other screen size.<br>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-drawer-direction</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Defines the starting direction for the drawer view component. Accepts <code>start</code> for left and <code>end</code> for right values. Default value is set to <code>end</code>.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!--end::Table-->

    <!--begin::Notice-->
    <div class="py-5">
        <!--begin::Information--><div class="d-flex align-items-center rounded py-5 px-5 bg-light-warning ">    <!--begin::Icon-->	  <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
<span class="svg-icon svg-icon-3x svg-icon-warning me-5"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->    <!--end::Icon-->    <!--begin::Description-->    <div class="text-gray-700 fw-bold fs-6">
           Please note that a drawer view component is a simple wrapper element that may contain all other components or elements within it. All HTML attributes should be added into the main wrapping element only.
            </div>    <!--end::Description--></div><!--end::Information-->    </div>
    <!--end::Notice-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="methods" data-kt-scroll-offset="50">
    <a href="#methods"></a>
    
    Methods</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        All Bootstrap Drawer components are initialized automatically, however the following are the Bootstrap Drawer's functionality methods for more control.
    </div>
    <!--end::Block-->

    <!--begin::Table-->
    <div class="py-2">
        <!--begin::Table wrapper-->
        <div class="table-responsive border rounded">
            <!--begin::Table-->
            <table class="table table-striped mb-0 g-6">
                <!--begin::Head-->
                <thead>
                    <tr class="fs-4 fw-bold p-6">
                        <th class="min-w-200px">Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <!--end::Head-->

                <!--begin::Head-->
                <thead>
                    <tr class="fs-4 fw-bold p-6">
                        <th colspan="2">Static Methods</th>
                    </tr>
                </thead>
                <!--end::Head-->

                <!--begin::Body-->
                <tbody>
                    <tr>
                        <td>
                            <code>createInstances(DOMString selector)</code>
                        </td>
                        <td>
                            Initializes Drawer instances by selector. Default value of <code>selector</code> is <code>[v-ktdrawer data-kt-drawer="true"]</code>.
                            This method can be used to initialize dynamicly populated Drawer instances(e.g: after Ajax request).
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTDrawer<span class="token punctuation">.</span><span class="token function">createInstances</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>getInstance(DOMElement element)</code>
                        </td>
                        <td>
                            Get the Drawer instance created

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerElement<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>hideAll(DOMElement skip, DOMString selector)</code>
                        </td>
                        <td>
                            Hides all drawer elements that match the selector and skips one if provided. 
                            <code>skip</code> is optional and <code>selector</code> optional with default value <code>[v-ktdrawer data-kt-drawer="true"]</code>. 

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTDrawer<span class="token punctuation">.</span><span class="token function">hideAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>updateAll(DOMString selector)</code>
                        </td>
                        <td>
                            Updates all drawer elements that match the selector. <code>selector</code> optional with default value <code>[v-ktdrawer data-kt-drawer="true"]</code>. 

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTDrawer<span class="token punctuation">.</span><span class="token function">updateAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                </tbody>
                <!--end::Body-->

                <!--begin::Head-->
                <thead>
                    <tr class="fs-4 fw-bold p-6">
                        <th colspan="2">Public Methods</th>
                    </tr>
                </thead>
                <!--end::Head-->

                <!--begin::Body-->
                <tbody>
                    <tr>
                        <td>
                            <code>KTDrawer(DOMElement element, Object options)</code>
                        </td>
                        <td>
                            Constructs a new instance of <code>KTDrawer</code> class and initializes a Drawer control:
                            <div class="pt-3 mb-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> scrollElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_scroll_control"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> scroll <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTDrawer</span><span class="token punctuation">(</span>scrollElement<span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">overlay</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>

                            <!--begin::Information--><div class="d-flex align-items-center rounded py-5 px-5 bg-light-info ">    <!--begin::Icon-->	  <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
<span class="svg-icon svg-icon-3x svg-icon-info me-5"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->    <!--end::Icon-->    <!--begin::Description-->    <div class="text-gray-700 fw-bold fs-6">
                            Remove <code>v-ktdrawer data-kt-drawer="true"</code> attribute to avoid lazy initialization. Option <code>overlay</code> replicates <code>data-kt-drawer-overlay</code> option functionaliy as described above. 
                                </div>    <!--end::Description--></div><!--end::Information-->                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>toggle()</code>
                        </td>
                        <td>
                            Toggle the drawer view component's state.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">drawer<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>show()</code>
                        </td>
                        <td>
                            Show/open the drawer view component if the it's current closed. Does nothing if it's already opened.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">drawer<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>hide()</code>
                        </td>
                        <td>
                            Hide/close the drawer view component if the it's current opened. Does nothing if it's already closed.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">drawer<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>isShown()</code>
                        </td>
                        <td>
                            Return the drawer view component's display state. Returns <code>true</code> or <code>false</code>.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">drawer<span class="token punctuation">.</span><span class="token function">isShown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>update()</code>
                        </td>
                        <td>
                            Forces the drawer component to update with any modifications done.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">drawer<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>goElement()</code>
                        </td>
                        <td>
                            Returns the selected drawer instance.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">drawer<span class="token punctuation">.</span><span class="token function">goElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>destroy()</code>
                        </td>
                        <td>
                            Removes the component instance from element.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">drawer<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                </tbody>
                <!--end::Body-->
            </table>
        </div>
    </div>
    <!--end::Table-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="events" data-kt-scroll-offset="50">
    <a href="#events"></a>
    
    Events</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        Below are few events for hooking into the Bootstrap Drawer functionality.
    </div>
    <!--end::Block-->

    <!--begin::Table-->
    <div class="pt-2">
        <!--begin::Table wrapper-->
        <div class="table-responsive border rounded">
            <!--begin::Table-->
            <table class="table table-striped mb-0 g-6">
                <!--begin::Head-->
                <thead>
                    <tr class="fs-4 fw-bold p-6">
                        <th class="min-w-200px">Event Type</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <!--end::Head-->

                <!--begin::Body-->
                <tbody>
                    <tr>
                        <td>
                            <code>kt.drawer.toggle</code>
                        </td>
                        <td>
                            This event fires on when the drawer is about to get toggled.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
drawer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.drawer.toggle"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.drawer.toggle event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.drawer.toggled</code>
                        </td>
                        <td>
                            This event fires on when the drawer is done toggling.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
drawer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.drawer.toggled"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.drawer.toggled event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.drawer.hide</code>
                        </td>
                        <td>
                            This event fires on when the drawer starts to hide.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
drawer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.drawer.hide"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.drawer.hide event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.drawer.after.hidden</code>
                        </td>
                        <td>
                            This event fires on when the drawer is completely hidden.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
drawer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.drawer.after.hidden"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.drawer.after.hidden event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.drawer.show</code>
                        </td>
                        <td>
                            This event fires on when the drawer starts to show.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
drawer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.drawer.show"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.drawer.show event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.drawer.shown</code>
                        </td>
                        <td>
                            This event fires on when the drawer is completely shown.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
drawer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.drawer.shown"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.drawer.shown event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>trigger(drawer, event)</code>
                        </td>
                        <td>
                            Triggers a specific event to the selected drawer.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> drawerEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_drawer_example"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> drawer <span class="token operator">=</span> KTDrawer<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>drawerEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
drawer<span class="token punctuation">.</span><span class="token function">trigger</span><span class="token punctuation">(</span>drawer<span class="token punctuation">,</span> <span class="token string">"kt.drawer.show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// trigger show drawer</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                </tbody>
                <!--end::Body-->
            </table>
        </div>
    </div>
    <!--end::Table-->
</div>
<!--end::Section-->        </div>
  </div>
</template>


<style>
@import "@/assets/documentation/style.css";
</style>