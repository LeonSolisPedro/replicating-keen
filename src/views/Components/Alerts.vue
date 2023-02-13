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
        Keen customizes the <a href="https://getbootstrap.com/docs/5.2/components/alerts/" target="_blank" class="fw-semibold">Bootstrap Alerts</a>&nbsp;
        through creative use of Bootstrap utilities and with handpicked icons.
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
        Use <code>.alert</code> with <code>.alert-{color}</code> classes to set the alert's style
        defined with <code>$theme-colors</code> mapped in <code>src/sass/components/_variables.scss</code>:  
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10 pb-0 d-flex flex-column">
                            <div class="alert alert-primary d-flex align-items-center p-5 mb-10">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-primary me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor"></path>
<path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <div class="d-flex flex-column">
                        <h4 class="mb-1 text-primary">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                </div>
                            <div class="alert alert-success d-flex align-items-center p-5 mb-10">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-success me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor"></path>
<path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <div class="d-flex flex-column">
                        <h4 class="mb-1 text-success">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                </div>
                            <div class="alert alert-info d-flex align-items-center p-5 mb-10">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-info me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor"></path>
<path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <div class="d-flex flex-column">
                        <h4 class="mb-1 text-info">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                </div>
                            <div class="alert alert-warning d-flex align-items-center p-5 mb-10">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-warning me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor"></path>
<path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <div class="d-flex flex-column">
                        <h4 class="mb-1 text-warning">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                </div>
                            <div class="alert alert-danger d-flex align-items-center p-5 mb-10">
                    <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-danger me-4"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="currentColor"></path>
<path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <div class="d-flex flex-column">
                        <h4 class="mb-1 text-danger">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                </div>
                    </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Alert--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-primary d-flex align-items-center p-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Icon--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-2hx svg-icon-primary me-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Icon--&gt;</span>

    <span class="token comment">&lt;!--begin::Wrapper--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Title--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1 text-dark<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This is an alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Title--&gt;</span>
        <span class="token comment">&lt;!--begin::Content--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>The alert component can be used to highlight certain parts of your page for higher content visibility.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Content--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Wrapper--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Alert--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="solid-colors" data-kt-scroll-offset="50">
    <a href="#solid-colors"></a>
    
    Solid Colors</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.alert</code> with <code>.bg-{color}</code> classes to set the alert's style with a solid color. Please refer to our <a href="/html/keen/docs/base/utilities#theme-colors" class="me-1">Theme colors</a> for more info.
    </div>
    <!--end::Block-->

     <!--begin::Block-->
     <div class="py-5">
        Add the class <code>.alert-dismissible</code> to the parent <code>.alert</code> wrapper and <code>data-bs-dismiss="alert"</code> to the close button to allow dismissing alerts. Please take note of the HTML markup sample below for all required responsive classes.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10 pb-0 d-flex flex-column">
                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-primary d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/files/fil024.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor"></path>
<path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor"></path>
<rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="currentColor"></rect>
<path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column text-light pe-0 pe-sm-10">
                        <h4 class="mb-2 text-light">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2x svg-icon-light"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->
                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-danger d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/communication/com003.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor"></path>
<path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column text-light pe-0 pe-sm-10">
                        <h4 class="mb-2 text-light">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2x svg-icon-light"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->
                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-success d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column text-light pe-0 pe-sm-10">
                        <h4 class="mb-2 text-light">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2x svg-icon-light"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->
                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-info d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/general/gen007.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="currentColor"></path>
<path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column text-light pe-0 pe-sm-10">
                        <h4 class="mb-2 text-light">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2x svg-icon-light"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->
                    </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Alert--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-dismissible bg-primary d-flex flex-column flex-sm-row p-5 mb-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Icon--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-2hx svg-icon-light me-4 mb-5 mb-sm-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Icon--&gt;</span>

    <span class="token comment">&lt;!--begin::Wrapper--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column text-light pe-0 pe-sm-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Title--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-2 light<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This is an alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Title--&gt;</span>

        <span class="token comment">&lt;!--begin::Content--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>The alert component can be used to highlight certain parts of your page for higher content visibility.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Content--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Wrapper--&gt;</span>

    <span class="token comment">&lt;!--begin::Close--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-2x svg-icon-light<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Close--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Alert--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="light-colors" data-kt-scroll-offset="50">
    <a href="#light-colors"></a>
    
    Light Colors</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.alert</code> with <code>.bg-light-{color}</code> classes to set the alert's style with a light color. Please refer to our <a href="/html/keen/docs/base/utilities#theme-colors" class="me-1">Theme colors</a> for more info.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        Add the class <code>.alert-dismissible</code> to the parent <code>.alert</code> wrapper and <code>data-bs-dismiss="alert"</code> to the close button to allow dismissing alerts. Please take note of the HTML markup sample below for all required responsive classes.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10 pb-0 d-flex flex-column">
                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/files/fil024.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor"></path>
<path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor"></path>
<rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="currentColor"></rect>
<path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h4 class="fw-semibold">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1 svg-icon-primary"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-danger d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/communication/com003.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor"></path>
<path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h4 class="fw-semibold">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1 svg-icon-danger"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-success d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h4 class="fw-semibold">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1 svg-icon-success"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-info d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/general/gen007.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="currentColor"></path>
<path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h4 class="fw-semibold">This is an alert</h4>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1 svg-icon-info"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                    </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Alert--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-dismissible bg-light-primary d-flex flex-column flex-sm-row p-5 mb-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Icon--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Icon--&gt;</span>

    <span class="token comment">&lt;!--begin::Wrapper--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column pe-0 pe-sm-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Title--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h4</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This is an alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h4</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Title--&gt;</span>
        <span class="token comment">&lt;!--begin::Content--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>The alert component can be used to highlight certain parts of your page for higher content visibility.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Content--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Wrapper--&gt;</span>

    <span class="token comment">&lt;!--begin::Close--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-1 svg-icon-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Close--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Alert--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="border-options" data-kt-scroll-offset="50">
    <a href="#border-options"></a>
    
    Border Options</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.alert</code> with <code>.bg-light-{color}</code> and <code>.border</code> classes to set the alert's style with borders. Please refer to our <a href="/html/keen/docs/base/utilities#theme-colors" class="me-1">Theme colors</a> and <a href="/html/keen/docs/base/helpers/borders" class="me-1">Borders</a> for more info.
    </div>
    <!--end::Block-->

     <!--begin::Block-->
     <div class="py-5">
        Add the class <code>.alert-dismissible</code> to the parent <code>.alert</code> wrapper and <code>data-bs-dismiss="alert"</code> to the close button to allow dismissing alerts. Please take note of the HTML markup sample below for all required responsive classes.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10 pb-0 d-flex flex-column">
                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-primary border border-primary  d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/files/fil024.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M14 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V8L14 2Z" fill="currentColor"></path>
<path d="M20 8L14 2V6C14 7.10457 14.8954 8 16 8H20Z" fill="currentColor"></path>
<rect x="13.6993" y="13.6656" width="4.42828" height="1.73089" rx="0.865447" transform="rotate(45 13.6993 13.6656)" fill="currentColor"></rect>
<path d="M15 12C15 14.2 13.2 16 11 16C8.8 16 7 14.2 7 12C7 9.8 8.8 8 11 8C13.2 8 15 9.8 15 12ZM11 9.6C9.68 9.6 8.6 10.68 8.6 12C8.6 13.32 9.68 14.4 11 14.4C12.32 14.4 13.4 13.32 13.4 12C13.4 10.68 12.32 9.6 11 9.6Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h5 class="mb-1">This is an alert with a basic border</h5>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <i class="bi bi-x fs-1 text-primary"></i>
                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-danger border border-danger border-dashed d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/communication/com003.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="currentColor"></path>
<path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h5 class="mb-1">This is an alert with a dashed border</h5>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <i class="bi bi-x fs-1 text-danger"></i>
                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-success border border-success border-3 d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-success me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="currentColor"></path>
<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h5 class="mb-1">This is an alert with a thick border</h5>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <i class="bi bi-x fs-1 text-success"></i>
                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                            <!--begin::Alert-->
                <div class="alert alert-dismissible bg-light-info border border-info border-3 border-dashed d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <!--begin::Svg Icon | path: icons/duotune/general/gen007.svg-->
<span class="svg-icon svg-icon-2hx svg-icon-info me-4 mb-5 mb-sm-0"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="currentColor"></path>
<path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="currentColor"></path>
</svg>
</span>
<!--end::Svg Icon-->                    <!--end::Icon-->

                    <!--begin::Content-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <h5 class="mb-1">This is an alert with a thick dashed border</h5>
                        <span>The alert component can be used to highlight certain parts of your page for higher content visibility.</span>
                    </div>
                    <!--end::Content-->

                    <!--begin::Close-->
                    <button type="button" class="position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto" data-bs-dismiss="alert">
                        <i class="bi bi-x fs-1 text-info"></i>
                    </button>
                    <!--end::Close-->
                </div>
                <!--end::Alert-->

                    </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Alert--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-dismissible bg-light-primary border border-primary d-flex flex-column flex-sm-row p-5 mb-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Icon--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-2hx svg-icon-primary me-4 mb-5 mb-sm-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Icon--&gt;</span>

    <span class="token comment">&lt;!--begin::Wrapper--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-column pe-0 pe-sm-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Title--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h5</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This is an alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h5</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Title--&gt;</span>
        <span class="token comment">&lt;!--begin::Content--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>The alert component can be used to highlight certain parts of your page for higher content visibility.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Content--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Wrapper--&gt;</span>

    <span class="token comment">&lt;!--begin::Close--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position-absolute position-sm-relative m-2 m-sm-0 top-0 end-0 btn btn-icon ms-sm-auto<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>i</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bi bi-x fs-1 text-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>i</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Close--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Alert--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="rich-content" data-kt-scroll-offset="50">
    <a href="#rich-content"></a>
    
    Rich Content</h1>
<!--end::Heading-->

  
    <!--begin::Block-->
    <div class="py-5">
        Here's a sample of an alert with rich content elements inside it. Please take note of the HTML markup sample below for all required classes.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10 pb-0 d-flex flex-column flex-center">
            <div class="alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10">
                <!--begin::Close-->
                <button type="button" class="position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger" data-bs-dismiss="alert">
                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                </button>
                <!--end::Close-->

                <!--begin::Icon-->
                <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
<span class="svg-icon svg-icon-5tx svg-icon-danger mb-5"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->                <!--end::Icon-->

                <!--begin::Content-->
                <div class="text-center text-dark">
                    <h1 class="fw-bold mb-5">This is an alert</h1>
                    <div class="separator separator-dashed border-danger opacity-25 mb-5"></div>
                    <div class="mb-9">
                        The alert component can be used to highlight certain parts of your page for <strong>higher content visibility</strong>.<br>
                        Please read our <a href="#" class="fw-bold me-1">Terms and Conditions</a> for more info.
                    </div>

                    <!--begin::Buttons-->
                    <div class="d-flex flex-center flex-wrap">
                        <a href="#" class="btn btn-outline btn-outline-danger btn-active-danger m-2">Cancel</a>
                        <a href="#" class="btn btn-danger m-2">Ok, I got it</a>
                    </div>
                    <!--end::Buttons-->
                </div>
                <!--end::Content-->
            </div>
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="pt-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:400px" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Alert--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert alert-dismissible bg-light-danger d-flex flex-center flex-column py-10 px-10 px-lg-20 mb-10<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--begin::Close--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>position-absolute top-0 end-0 m-2 btn btn-icon btn-icon-danger<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>alert<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Close--&gt;</span>

    <span class="token comment">&lt;!--begin::Icon--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>svg-icon svg-icon-5tx svg-icon-danger mb-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Icon--&gt;</span>

    <span class="token comment">&lt;!--begin::Wrapper--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text-center<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--begin::Title--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold mb-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>This is an alert<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Title--&gt;</span>

        <span class="token comment">&lt;!--begin::Separator--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>separator separator-dashed border-danger opacity-25 mb-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Separator--&gt;</span>

        <span class="token comment">&lt;!--begin::Content--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-9 text-dark<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            The alert component can be used to highlight certain parts of your page for <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>strong</span><span class="token punctuation">&gt;</span></span>higher content visibility<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>strong</span><span class="token punctuation">&gt;</span></span>.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">/&gt;</span></span>
            Please read our <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold me-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Terms and Conditions<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> for more info.
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Content--&gt;</span>

        <span class="token comment">&lt;!--begin::Buttons--&gt;</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>d-flex flex-center flex-wrap<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-outline btn-outline-danger btn-active-danger m-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Cancel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-danger m-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Ok, I got it<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token comment">&lt;!--end::Buttons--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--end::Wrapper--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Alert--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
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