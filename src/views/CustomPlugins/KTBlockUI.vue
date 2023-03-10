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
     BlockUI is an exclusive plugin of Keen that allows element blocking with overlay and loading indicator. 
    </div>
    <!--end::Block--> 
</div>
<!--end::Section-->
<!--begin::Section-->

<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="basic-bxampleoverview" data-kt-scroll-offset="50">
    <a href="#basic-bxampleoverview"></a>
    
    Basic Example</h1>
<!--end::Heading-->

 
    <!--begin::Block-->
    <div class="py-5">
        Click the below button to block the below content area:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10 mb-10" id="kt_block_ui_1_target">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus litora venenatis.
            Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus. 
            Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
        </div>

        <button id="kt_block_ui_1_button" class="btn btn-primary">Block</button>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_640b97c471c0d" role="tab" aria-selected="true">JAVASCRIPT</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_640b97c471c12" role="tab" aria-selected="false" tabindex="-1">HTML</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_640b97c471c0d" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_1_button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_1_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>blockUI<span class="token punctuation">.</span><span class="token function">isBlocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        blockUI<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"Block"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        blockUI<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"Release"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_640b97c471c12" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded border p-10<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_1_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Lorem ipsum dolor sit amet....
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div></div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="custom-message" data-kt-scroll-offset="50">
    <a href="#custom-message"></a>
    
    Custom Message</h1>
<!--end::Heading-->

 
    <!--begin::Block-->
    <div class="py-5">
        Click the below button to block the below content area:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="mb-10" id="kt_block_ui_2_target">
            <div class="rounded border p-10 scroll-y h-100px">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus litora venenatis.
                Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus. 
                Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
            </div>
        </div>

        <button id="kt_block_ui_2_button" class="btn btn-primary">Block</button>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_640b97c471c44" role="tab" aria-selected="true">JAVASCRIPT</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_640b97c471c45" role="tab" aria-selected="false" tabindex="-1">HTML</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_640b97c471c44" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_2_button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_2_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'&lt;div class="blockui-message"&gt;&lt;span class="spinner-border text-primary"&gt;&lt;/span&gt; Loading...&lt;/div&gt;'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>blockUI<span class="token punctuation">.</span><span class="token function">isBlocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        blockUI<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"Block"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        blockUI<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"Release"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_640b97c471c45" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mb-10<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_2_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded border p-10 scroll-y h-100px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        Lorem ipsum dolor sit amet....
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div></div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="overlay-class" data-kt-scroll-offset="50">
    <a href="#overlay-class"></a>
    
    Overlay Class</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use custom class for overlay to change it's background color:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10 mb-10" id="kt_block_ui_3_target">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus litora venenatis.
            Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus. 
            Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
        </div>

        <button id="kt_block_ui_3_button" class="btn btn-primary">Block</button>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_640b97c471c7c" role="tab" aria-selected="true">JAVASCRIPT</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_640b97c471c7d" role="tab" aria-selected="false" tabindex="-1">HTML</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_640b97c471c7c" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_3_button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_3_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">overlayClass</span><span class="token operator">:</span> <span class="token string">"bg-danger bg-opacity-25"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>blockUI<span class="token punctuation">.</span><span class="token function">isBlocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        blockUI<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"Block"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        blockUI<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        button<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">"Release"</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_640b97c471c7d" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded border p-10<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_3_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Lorem ipsum dolor sit amet....
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div></div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="modal" data-kt-scroll-offset="50">
    <a href="#modal"></a>
    
    Modal</h1>
<!--end::Heading-->

  
    <!--begin::Block-->
    <div class="py-5">
        Modal content blocking example:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_1">
                Launch demo modal
            </button>

            <!--begin::Modal-->
            <div class="modal fade" tabindex="-1" id="kt_modal_1">
                <div class="modal-dialog modal-dialog-centered mw-650px">
                    <div class="modal-content" id="kt_block_ui_4_target">
                        <div class="modal-header">
                            <h5 class="modal-title">Modal title</h5>                            
                            <!--begin::Close-->
                            <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
<span class="svg-icon svg-icon-2x"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="currentColor"></rect>
</svg>

</span>
<!--end::Svg Icon-->                            </div>
                            <!--end::Close-->
                        </div>

                        <div class="modal-body py-lg-10 px-lg-20">
                            <!--begin:Form-->
                            <form class="form" action="#">
                                <!--begin::Input group-->
                                <div class="d-flex flex-column mb-8 fv-row">
                                    <!--begin::Label-->
                                    <label class="d-flex align-items-center fs-6 fw-semibold mb-2">
                                        <span class="required">Target Title</span>
                                        <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" aria-label="Specify a target name for future usage and reference" data-bs-original-title="Specify a target name for future usage and reference" data-kt-initialized="1"></i>
                                    </label>
                                    <!--end::Label-->

                                    <input type="text" class="form-control form-control-solid" placeholder="Enter Target Title" name="target_title">
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="d-flex flex-column mb-8 fv-row">
                                    <label class="required fs-6 fw-semibold mb-2">Assign</label>

                                    <select class="form-select form-select-solid select2-hidden-accessible" data-control="select2" data-hide-search="true" data-placeholder="Select a Team Member" name="team_assign" data-select2-id="select2-data-1-br2z" tabindex="-1" aria-hidden="true" data-kt-initialized="1">
                                        <option value="" data-select2-id="select2-data-3-5e1y">Select user...</option>
                                        <option value="1">Karina Clark</option>
                                        <option value="2">Robert Doe</option>
                                        <option value="3">Niel Owen</option>
                                        <option value="4">Olivia Wild</option>
                                        <option value="5">Sean Bean</option>
                                    </select><span class="select2 select2-container select2-container--bootstrap5" dir="ltr" data-select2-id="select2-data-2-9e9g" style="width: 100%;"><span class="selection"><span class="select2-selection select2-selection--single form-select form-select-solid" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-disabled="false" aria-labelledby="select2-team_assign-ry-container" aria-controls="select2-team_assign-ry-container"><span class="select2-selection__rendered" id="select2-team_assign-ry-container" role="textbox" aria-readonly="true" title="Select a Team Member"><span class="select2-selection__placeholder">Select a Team Member</span></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="d-flex flex-column mb-8">
                                    <label class="fs-6 fw-semibold mb-2">Target Details</label>

                                    <textarea class="form-control form-control-solid" rows="3" name="target_details" placeholder="Type Target Details">                                    </textarea>
                                </div>
                                <!--end::Input group-->

                                <!--begin::Input group-->
                                <div class="mb-15 fv-row">
                                    <!--begin::Wrapper-->
                                    <div class="d-flex flex-stack">
                                        <!--begin::Label-->
                                        <div class="fw-semibold me-5">
                                            <label class="fs-6">Notifications</label>

                                            <div class="fs-7 text-muted">Allow Notifications by Phone or Email</div>
                                        </div>
                                        <!--end::Label-->

                                        <!--begin::Checkboxes-->
                                        <div class="d-flex align-items-center">
                                            <!--begin::Checkbox-->
                                            <label class="form-check form-check-custom form-check-solid me-10">
                                                <input class="form-check-input h-20px w-20px" type="checkbox" name="communication[]" value="email" checked="checked">

                                                <span class="form-check-label fw-semibold">
                                                    Email
                                                </span>
                                            </label>
                                            <!--end::Checkbox-->

                                            <!--begin::Checkbox-->
                                            <label class="form-check form-check-custom form-check-solid">
                                                <input class="form-check-input h-20px w-20px" type="checkbox" name="communication[]" value="phone">

                                                <span class="form-check-label fw-semibold">
                                                    Phone
                                                </span>
                                            </label>
                                            <!--end::Checkbox-->
                                        </div>
                                        <!--end::Checkboxes-->
                                    </div>
                                    <!--end::Wrapper-->
                                </div>
                                <!--end::Input group-->

                                <!--begin::Actions-->
                                <div class="text-center">
                                    <button class="btn btn-light me-3">
                                        Cancel
                                    </button>

                                    <button id="kt_block_ui_4_button" class="btn btn-primary">
                                        Block
                                    </button>
                                </div>
                                <!--end::Actions-->
                            </form>
                            <!--end:Form-->
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Modal-->
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_640b97c471cc8" role="tab" aria-selected="true">JAVASCRIPT</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_640b97c471cc9" role="tab" aria-selected="false" tabindex="-1">HTML</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_640b97c471cc8" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_4_button"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_block_ui_4_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span>

button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    e<span class="token punctuation">.</span><span class="token function">preventDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    blockUI<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        blockUI<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_640b97c471cc9" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Modal--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal fade<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_modal_1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-dialog modal-dialog-centered mw-650px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-content<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_4_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
            ....
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Modal--&gt;</span></code></pre>    </div></div></div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
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
        The following are the BlockUI's functionality methods for more control.
    </div>
    <!--end::Block-->

    <!--begin::Table-->
    <div class="pt-2 pb-10">
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

                <!--begin::Body-->
                <tbody>
                    <tr>
                        <td>
                            <code>Constructor</code>
                        </td>
                        <td>
                            Constructs a new instance of <code>KTBlockUI</code> class and initializes a Dialer control:
                            <div class="pt-3 mb-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>

                            <!--begin::Information--><div class="d-flex align-items-center rounded py-5 px-5 bg-light-info ">    <!--begin::Icon-->	  <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
<span class="svg-icon svg-icon-3x svg-icon-info me-5"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->    <!--end::Icon-->    <!--begin::Description-->    <div class="text-gray-700 fw-bold fs-6">
                            For the constructor <code>options</code> refer to the next table.
                                </div>    <!--end::Description--></div><!--end::Information-->                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>block()</code>
                        </td>
                        <td>
                            Block target element

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">blockUI<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>release</code>
                        </td>
                        <td>
                            Release target element

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">blockUI<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>isBlocked()</code>
                        </td>
                        <td>
                            Check if target element is blocked.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>blockUI<span class="token punctuation">.</span><span class="token function">isBlocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>destroy()</code>
                        </td>
                        <td>
                            Removes the component instance from element.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">blockUI<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                </tbody>
                <!--end::Body-->

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
                            <code>getInstance(DOMElement element)</code>
                        </td>
                        <td>
                            Get BlockUI instance created and bind to a target element.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blockUI <span class="token operator">=</span> KTBlockUI<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
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
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="constructor-options" data-kt-scroll-offset="50">
    <a href="#constructor-options"></a>
    
    Constructor Options</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        All options can be passed to the construction during the plugin initialization:
    </div>
    <!--end::Block-->

    <!--begin::Table-->
    <div class="py-5">
        <div class="table-responsive border rounded">
            <table class="table table-striped align-middle mb-0 g-5">
                <thead>
                    <tr class="fs-4 fw-bold text-dark p-6">
                        <th class="min-w-150px">Name</th>
                        <th class="min-w-150px">Type</th>
                        <th class="min-w-150px">Default</th>
                        <th class=" ">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>zIndex</code>
                        </td>
                        <td>
                            Object
                        </td>
                        <td>
                            false
                        </td>
                        <td>
                            Custom CSS z-index value of BlockUI's overlay element.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>overlayClass</code>
                        </td>
                        <td>
                            String
                        </td>
                        <td>
                            null
                        </td>
                        <td>
                            Custom CSS class for BlockUI overlay element.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>overflow</code>
                        </td>
                        <td>
                            String
                        </td>
                        <td>
                            hidden
                        </td>
                        <td>
                            Forces to set the target element's CSS overflow value to <code>hidden</code> if the target element does not have a CSS overflow value.
                            Set the value to <code>auto</code> to ignore this behaviour. 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>message</code>
                        </td>
                        <td>
                            String
                        </td>
                        <td>
                            <code>
                                &lt;span class="spinner-border text-primary"&gt;&lt;/span&gt;                            </code>                    
                        </td>
                        <td>
                            Sets BlockUI's HTML content centered within the target element.
                        </td>
                    </tr>
                </tbody>
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
        Below are few events for hooking into the Bootstrap BlockUI functionality.
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
                            <code>kt.blockui.block</code>
                        </td>
                        <td>
                            This event is fired before BlockUI is blocked.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.block"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before block"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>kt.blockui.blocked</code>
                        </td>
                        <td>
                            This event is fired after BlockUI is blocked.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.blocked"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after blocked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>kt.blockui.release</code>
                        </td>
                        <td>
                            This event is fired before BlockUI release.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.release"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before release"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>kt.blockui.released</code>
                        </td>
                        <td>
                            This event is fired after BlockUI is released.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.released"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after released"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
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