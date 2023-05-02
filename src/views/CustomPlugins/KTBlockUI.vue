<template>
  <div class="card">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
      <!--begin::Section-->
      <div class="pb-10">

        <!--begin::Heading-->
        <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
          <a href="#overview"></a>

          Overview
        </h1>
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

          Basic Example
        </h1>
        <!--end::Heading-->


        <!--begin::Block-->
        <div class="py-5">
          Click the below button to block the below content area:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10 mb-10" ref="kt_block_ui_1_target">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus
            litora venenatis.
            Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
            Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
          </div>

          <button @click="blockuno()" class="btn btn-primary">Block</button>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <!--begin::Code-->
        <div class="py-5">
          <!--begin::Highlight-->
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
              data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9ae3" role="tab" aria-selected="true">HTML</a></li>
              <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9aea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="kt_highlight_63e537c8b9ae3" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-html"
                    tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded border p-10 mb-10<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_1_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus litora venenatis.
    Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus. 
    Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blockuno()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
                </div>
              </div>
              <div class="tab-pane fade " id="kt_highlight_63e537c8b9aea" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">async</span> <span class="token function">blockuno</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> block <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>kt_block_ui_1_target<span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        block<span class="token punctuation">.</span><span class="token function">releaseDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span></code></pre>
                </div>
              </div>
            </div>
          </div><!--end::Highlight-->
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->
      <!--begin::Section-->
      <div class="py-10">

        <!--begin::Heading-->
        <h1 class="anchor fw-bold mb-5" id="custom-message" data-kt-scroll-offset="50">
          <a href="#custom-message"></a>

          Custom Message
        </h1>
        <!--end::Heading-->


        <!--begin::Block-->
        <div class="py-5">
          Click the below button to block the below content area:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10 mb-10" ref="kt_block_ui_2_target">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus
            litora venenatis.
            Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
            Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
          </div>

          <button @click="blockdos()" class="btn btn-primary">Block</button>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <!--begin::Highlight-->
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
              data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9be3" role="tab" aria-selected="true">HTML</a></li>
              <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9bea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="kt_highlight_63e537c8b9be3" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-html"
                    tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded border p-10 mb-10<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_2_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus litoravenenatis.
    Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
    Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blockdos()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
                </div>
              </div>
              <div class="tab-pane fade " id="kt_highlight_63e537c8b9bea" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">async</span> <span class="token function">blockdos</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> block <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>kt_block_ui_2_target<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Hi"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        block<span class="token punctuation">.</span><span class="token function">releaseDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span></code></pre>
                </div>
              </div>
            </div>
          </div><!--end::Highlight-->
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->
      <!--begin::Section-->
      <div class="py-10">

        <!--begin::Heading-->
        <h1 class="anchor fw-bold mb-5" id="overlay-class" data-kt-scroll-offset="50">
          <a href="#overlay-class"></a>

          Overlay Class
        </h1>
        <!--end::Heading-->


        <!--begin::Block-->
        <div class="py-5">
          Use custom class for overlay to change it's background color:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10 mb-10" ref="kt_block_ui_3_target">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus
            litora venenatis.
            Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
            Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
          </div>

          <button @click="blocktres()" class="btn btn-primary">Block</button>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <!--begin::Highlight-->
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
              data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9ee3" role="tab" aria-selected="true">HTML</a></li>
              <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9eea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="kt_highlight_63e537c8b9ee3" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-html"
                    tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>rounded border p-10 mb-10<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_3_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Inceptos imperdiet magna! Sed fusce fames tempus litoravenenatis.
    Ac aliquet leo hendrerit taciti viverra? Nisl suscipit potenti accumsan quis ipsum purus cursus.
    Suspendisse ultrices morbi in purus lectus dictum porta; Commodo penatibus nec.
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blocktres()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
                </div>
              </div>
              <div class="tab-pane fade " id="kt_highlight_63e537c8b9eea" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">async</span> <span class="token function">blocktres</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> block <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>kt_block_ui_3_target<span class="token punctuation">,</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">"Hi"</span><span class="token punctuation">,</span>
          <span class="token literal-property property">overlayClass</span><span class="token operator">:</span> <span class="token string">"bg-danger bg-opacity-25"</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        block<span class="token punctuation">.</span><span class="token function">releaseDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span></code></pre>
                </div>
              </div>
            </div>
          </div><!--end::Highlight-->
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->
      <!--begin::Section-->
      <div class="py-10">

        <!--begin::Heading-->
        <h1 class="anchor fw-bold mb-5" id="modal" data-kt-scroll-offset="50">
          <a href="#modal"></a>

          Modal
        </h1>
        <!--end::Heading-->


        <!--begin::Block-->
        <div class="py-5">
          Modal content blocking example:
        </div>
        <!--end::Block-->

        <!--begin::Block-->
        <div class="py-5">
          <div class="rounded border p-10">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#example_modal_4">
              Launch demo modal
            </button>

            <div class="modal fade" tabindex="-1" id="example_modal_4">
              <div class="modal-dialog">
                <div class="modal-content" ref="kt_block_ui_4_target">
                  <div class="modal-header">
                    <h3 class="modal-title">Demo modal</h3>
                    <button class="btn-close btn btn-icon btn-sm btn-active-light-primary me-0" data-bs-dismiss="modal"
                      aria-label="Close"></button>
                  </div>
                  <div class="modal-body">
                    Click the block button
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                    <button @click="blockcuatro()" type="button" class="btn btn-primary">Block</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end::Block-->

        <!--begin::Code-->
        <div class="py-5">
          <!--begin::Highlight-->
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
              data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9re3" role="tab" aria-selected="true">HTML</a></li>
              <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9rea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="kt_highlight_63e537c8b9re3" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-html"
                    tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#example_modal_4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Launch demo modal
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal fade<span class="token punctuation">"</span></span> <span class="token attr-name">tabindex</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>-1<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example_modal_4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-dialog<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-content<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_block_ui_4_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-header<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h3</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-title<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Demo modal<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h3</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn-close btn btn-icon btn-sm btn-active-light-primary me-0<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span>
            <span class="token attr-name">aria-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Close<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-body<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          Click the block button
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal-footer<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-light<span class="token punctuation">"</span></span> <span class="token attr-name">data-bs-dismiss</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>modal<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Cancel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>blockcuatro()<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Block<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>
                </div>
              </div>
              <div class="tab-pane fade " id="kt_highlight_63e537c8b9rea" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token keyword">async</span> <span class="token function">blockcuatro</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">const</span> block <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>kt_block_ui_4_target<span class="token punctuation">)</span>
        <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">r</span> <span class="token operator">=&gt;</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>r<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        block<span class="token punctuation">.</span><span class="token function">releaseDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span></code></pre>
                </div>
              </div>
            </div>
          </div><!--end::Highlight-->
        </div>
        <!--end::Code-->
      </div>
      <!--end::Section-->

      <!--begin::Section-->
      <div class="py-10">

        <!--begin::Heading-->
        <h1 class="anchor fw-bold mb-5" id="methods" data-kt-scroll-offset="50">
          <a href="#methods"></a>

          Methods
        </h1>
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
                    Constructs a new instance of <code>KTBlockUI</code> class and blocks the current target
                    <div class="pt-3 mb-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>

                    <!--begin::Information-->
                    <div class="d-flex align-items-center rounded py-5 px-5 bg-light-info "> <!--begin::Icon-->
                      <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
                      <span class="svg-icon svg-icon-3x svg-icon-info me-5"><svg width="24" height="24"
                          viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
                          <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)"
                            fill="currentColor"></rect>
                          <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)"
                            fill="currentColor"></rect>
                        </svg>
                      </span>
                      <!--end::Svg Icon--> <!--end::Icon--> <!--begin::Description-->
                      <div class="text-gray-700 fw-bold fs-6">
                        For the constructor <code>options</code> refer to the next table.
                      </div> <!--end::Description-->
                    </div><!--end::Information-->
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>releaseDestroy</code>
                  </td>
                  <td>
                    Release target element, and destroys <span class="fw-bold text-gray-600">KTBlockUI</span> instance from element

                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript">blockUI<span class="token punctuation">.</span><span class="token function">releaseDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>release</code>
                  </td>
                  <td>
                    Release target element

                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript">blockUI<span class="token punctuation">.</span><span class="token function">release</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>block()</code>
                  </td>
                  <td>
                    Block target element

                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript">blockUI<span class="token punctuation">.</span><span class="token function">block</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
                  </td>
                </tr>
                
                <tr>
                  <td>
                    <code>isBlocked()</code>
                  </td>
                  <td>
                    Check if target element is blocked.

                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">if</span> <span class="token punctuation">(</span>blockUI<span class="token punctuation">.</span><span class="token function">isBlocked</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// do something</span>
  <span class="token punctuation">}</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <code>destroy()</code>
                  </td>
                  <td>
                    Destroys <span class="fw-bold text-gray-600">KTBlockUI</span> instance from element
                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript">blockUI<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
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
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> blockUI <span class="token operator">=</span> KTBlockUI<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
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

          Constructor Options
        </h1>
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
                    Forces to set the target element's CSS overflow value to <code>hidden</code> if the target element
                    does not have a CSS overflow value.
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

          Events
        </h1>
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
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

  blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.block"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before block"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <code>kt.blockui.blocked</code>
                  </td>
                  <td>
                    This event is fired after BlockUI is blocked.

                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

  blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.blocked"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after blocked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <code>kt.blockui.release</code>
                  </td>
                  <td>
                    This event is fired before BlockUI release.

                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

  blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.release"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before release"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>
                    <code>kt.blockui.released</code>
                  </td>
                  <td>
                    This event is fired after BlockUI is released.

                    <div class="pt-3">
                      <!--begin::Highlight-->
                      <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
                          data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
                        <div class="highlight-code">
                          <pre class="language-javascript"
                            tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> target <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_blockui_target"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> blockUI <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KTBlockUI</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span>

  blockUI<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.blockui.released"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after released"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>
                        </div>
                      </div><!--end::Highlight-->
                    </div>
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
    </div>
  </div>
</template>


<style>
@import "@/assets/documentation/style.css";
</style>


<script>
export default {
  methods: {
    async blockuno() {
      const block = new KTBlockUI(this.$refs.kt_block_ui_1_target)
      await new Promise(r => setTimeout(r, 2000));
      block.releaseDestroy()
    },
    async blockdos() {
      const block = new KTBlockUI(this.$refs.kt_block_ui_2_target, { message: "Hi" })
      await new Promise(r => setTimeout(r, 2000));
      block.releaseDestroy()
    },
    async blocktres() {
      const block = new KTBlockUI(this.$refs.kt_block_ui_3_target, {
        message: "Hi",
        overlayClass: "bg-danger bg-opacity-25"
      })
      await new Promise(r => setTimeout(r, 2000));
      block.releaseDestroy()
    },
    async blockcuatro() {
      const block = new KTBlockUI(this.$refs.kt_block_ui_4_target)
      await new Promise(r => setTimeout(r, 2000));
      block.releaseDestroy()
    },
  }
}
</script>