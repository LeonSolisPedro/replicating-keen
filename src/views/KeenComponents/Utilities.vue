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
        Keenfully utilizes the <a href="https://getbootstrap.com/docs/5.2/utilities/api/" class="fw-semibold">Bootstrap Utility API</a>&nbsp;
         in <code>src/sass/components/_utilities.scss</code> to generate additional utility classes to cover its own design system.  
         The customized utility SASS variables are defined in <code>src/sass/components/_variables.scss</code> and in <code>src/sass/components/_variables.custom.scss</code> 
         you can override any variable for your needs.
    </div>
    <!--end::Block-->  
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pb-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="theme-colors" data-kt-scroll-offset="50">
    <a href="#theme-colors"></a>
    
    Theme Colors</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Keen extends <a href="https://getbootstrap.com/docs/5.2/customize/color/" class="fw-semibold">Bootstrap Colors</a>&nbsp; system with extra variants 
        to cover its own design system build on top of the Boostrap Standards. The extended  theme color SASS variables are defined in <code>src/sass/components/_variables.scss</code>:
    </div>
    <!--end::Block-->  

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-scss" style="height:300px" tabindex="0"><code class="language-scss"><span class="token comment">// Theme colors</span>
<span class="token property"><span class="token variable">$theme-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">"white"</span><span class="token punctuation">:</span>      <span class="token variable">$white</span><span class="token punctuation">,</span>  <span class="token comment">// custom color type</span>
    <span class="token string">"primary"</span><span class="token punctuation">:</span>    <span class="token variable">$primary</span><span class="token punctuation">,</span>
    <span class="token string">"secondary"</span><span class="token punctuation">:</span>  <span class="token variable">$secondary</span><span class="token punctuation">,</span>
    <span class="token string">"success"</span><span class="token punctuation">:</span>    <span class="token variable">$success</span><span class="token punctuation">,</span>
    <span class="token string">"info"</span><span class="token punctuation">:</span>       <span class="token variable">$info</span><span class="token punctuation">,</span>
    <span class="token string">"warning"</span><span class="token punctuation">:</span>    <span class="token variable">$warning</span><span class="token punctuation">,</span>
    <span class="token string">"danger"</span><span class="token punctuation">:</span>     <span class="token variable">$danger</span><span class="token punctuation">,</span>
    <span class="token string">"light"</span><span class="token punctuation">:</span>      <span class="token variable">$light</span><span class="token punctuation">,</span>
    <span class="token string">"dark"</span><span class="token punctuation">:</span>       <span class="token variable">$dark</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>

<span class="token comment">// Active and hover states colors</span>
<span class="token property"><span class="token variable">$theme-active-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">"white"</span><span class="token punctuation">:</span>      <span class="token variable">$white-active</span><span class="token punctuation">,</span>   <span class="token comment">// custom color type</span>
    <span class="token string">"primary"</span><span class="token punctuation">:</span>    <span class="token variable">$primary-active</span><span class="token punctuation">,</span>
    <span class="token string">"secondary"</span><span class="token punctuation">:</span>  <span class="token variable">$secondary-active</span><span class="token punctuation">,</span>
    <span class="token string">"success"</span><span class="token punctuation">:</span>    <span class="token variable">$success-active</span><span class="token punctuation">,</span>
    <span class="token string">"info"</span><span class="token punctuation">:</span>       <span class="token variable">$info-active</span><span class="token punctuation">,</span>
    <span class="token string">"warning"</span><span class="token punctuation">:</span>    <span class="token variable">$warning-active</span><span class="token punctuation">,</span>
    <span class="token string">"danger"</span><span class="token punctuation">:</span>     <span class="token variable">$danger-active</span><span class="token punctuation">,</span>
    <span class="token string">"light"</span><span class="token punctuation">:</span>      <span class="token variable">$light-active</span><span class="token punctuation">,</span>
    <span class="token string">"dark"</span><span class="token punctuation">:</span>       <span class="token variable">$dark-active</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>  <span class="token comment">// Custom variable</span>

<span class="token comment">// Inverse colors</span>
<span class="token property"><span class="token variable">$theme-inverse-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">"white"</span><span class="token punctuation">:</span>      <span class="token variable">$white-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"primary"</span><span class="token punctuation">:</span>    <span class="token variable">$primary-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"secondary"</span><span class="token punctuation">:</span>  <span class="token variable">$secondary-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"success"</span><span class="token punctuation">:</span>    <span class="token variable">$success-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"info"</span><span class="token punctuation">:</span>       <span class="token variable">$info-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"warning"</span><span class="token punctuation">:</span>    <span class="token variable">$warning-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"danger"</span><span class="token punctuation">:</span>     <span class="token variable">$danger-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"light"</span><span class="token punctuation">:</span>      <span class="token variable">$light-inverse</span><span class="token punctuation">,</span>
    <span class="token string">"dark"</span><span class="token punctuation">:</span>       <span class="token variable">$dark-inverse</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>  <span class="token comment">// Custom variable</span>

<span class="token comment">// Light colors</span>
<span class="token property"><span class="token variable">$theme-light-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">"white"</span><span class="token punctuation">:</span>      <span class="token variable">$white-light</span><span class="token punctuation">,</span>
    <span class="token string">"primary"</span><span class="token punctuation">:</span>    <span class="token variable">$primary-light</span><span class="token punctuation">,</span>
    <span class="token string">"secondary"</span><span class="token punctuation">:</span>  <span class="token variable">$secondary-light</span><span class="token punctuation">,</span>
    <span class="token string">"success"</span><span class="token punctuation">:</span>    <span class="token variable">$success-light</span><span class="token punctuation">,</span>
    <span class="token string">"info"</span><span class="token punctuation">:</span>       <span class="token variable">$info-light</span><span class="token punctuation">,</span>
    <span class="token string">"warning"</span><span class="token punctuation">:</span>    <span class="token variable">$warning-light</span><span class="token punctuation">,</span>
    <span class="token string">"danger"</span><span class="token punctuation">:</span>     <span class="token variable">$danger-light</span><span class="token punctuation">,</span>
    <span class="token string">"light"</span><span class="token punctuation">:</span>      <span class="token variable">$light-light</span><span class="token punctuation">,</span>
    <span class="token string">"dark"</span><span class="token punctuation">:</span>       <span class="token variable">$dark-light</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>  <span class="token comment">// Custom variable</span>

<span class="token comment">// Text colors</span>
<span class="token property"><span class="token variable">$theme-text-colors</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token string">"white"</span><span class="token punctuation">:</span>      <span class="token variable">$white</span><span class="token punctuation">,</span>
    <span class="token string">"primary"</span><span class="token punctuation">:</span>    <span class="token variable">$primary</span><span class="token punctuation">,</span>
    <span class="token string">"secondary"</span><span class="token punctuation">:</span>  <span class="token variable">$dark</span><span class="token punctuation">,</span>
    <span class="token string">"success"</span><span class="token punctuation">:</span>    <span class="token variable">$success</span><span class="token punctuation">,</span>
    <span class="token string">"info"</span><span class="token punctuation">:</span>       <span class="token variable">$info</span><span class="token punctuation">,</span>
    <span class="token string">"warning"</span><span class="token punctuation">:</span>    <span class="token variable">$warning</span><span class="token punctuation">,</span>
    <span class="token string">"danger"</span><span class="token punctuation">:</span>     <span class="token variable">$danger</span><span class="token punctuation">,</span>
    <span class="token string">"light"</span><span class="token punctuation">:</span>      <span class="token variable">$light</span><span class="token punctuation">,</span>
    <span class="token string">"dark"</span><span class="token punctuation">:</span>       <span class="token variable">$dark</span><span class="token punctuation">,</span>
    <span class="token string">"muted"</span><span class="token punctuation">:</span>      <span class="token variable">$text-muted</span><span class="token punctuation">,</span>
    <span class="token string">"gray-100"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-100</span><span class="token punctuation">,</span>
    <span class="token string">"gray-200"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-200</span><span class="token punctuation">,</span>
    <span class="token string">"gray-300"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-300</span><span class="token punctuation">,</span>
    <span class="token string">"gray-400"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-400</span><span class="token punctuation">,</span>
    <span class="token string">"gray-500"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-500</span><span class="token punctuation">,</span>
    <span class="token string">"gray-600"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-600</span><span class="token punctuation">,</span>
    <span class="token string">"gray-700"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-700</span><span class="token punctuation">,</span>
    <span class="token string">"gray-800"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-800</span><span class="token punctuation">,</span>
    <span class="token string">"gray-900"</span><span class="token punctuation">:</span>   <span class="token variable">$gray-900</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span>  <span class="token comment">// Custom variable</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->

    <!--begin::Info-->
    <div class="py-5">
    <!--begin::Information--><div class="d-flex align-items-center rounded py-5 px-5 bg-light-warning ">    <!--begin::Icon-->	  <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
<span class="svg-icon svg-icon-3x svg-icon-warning me-5"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="currentColor"></rect>
<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="currentColor"></rect>
<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="currentColor"></rect>
</svg>
</span>
<!--end::Svg Icon-->    <!--end::Icon-->    <!--begin::Description-->    <div class="text-gray-700 fw-bold fs-6">
         Custom variables that used to customize Bootstrap components are marked with <code>Custom variable</code> comment in <code>_variables.scss</code>&nbsp; file.
        </div>    <!--end::Description--></div><!--end::Information-->    </div>
    <!--end::Info-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="spacing" data-kt-scroll-offset="50">
    <a href="#spacing"></a>
    
    Spacing</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Keen extends 
        <a href="https://getbootstrap.com/docs/5.2/utilities/spacing/" class="fw-semibold">Bootstrap Spacing Classes</a>&nbsp; 
        to provide additonal spacing options by overidding the default spacing SASS variable as shown below:
    </div>
    <!--end::Block-->  

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-scss" style="height:200px" tabindex="0"><code class="language-scss"><span class="token property"><span class="token variable">$spacers</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token property">0</span><span class="token punctuation">:</span> 0<span class="token punctuation">,</span>
    <span class="token property">1</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> .25<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">2</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> .5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">3</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> .75<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">4</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 1<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">5</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 1.25<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">6</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 1.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">7</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 1.75<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">8</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 2<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">9</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 2.25<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">10</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 2.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">11</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 2.75<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">12</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 3<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">13</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 3.25<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">14</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 3.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">15</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 3.75<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">16</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 4<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">17</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 4.25<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">18</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 4.5<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">19</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 4.75<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token property">20</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token variable">$spacer</span> <span class="token operator">*</span> 5<span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="font-sizes" data-kt-scroll-offset="50">
    <a href="#font-sizes"></a>
    
    Font Sizes</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Keen extends 
        <a href="https://getbootstrap.com/docs/5.2/utilities/text/#font-size" class="fw-semibold">Bootstrap Font Size Classes</a>&nbsp; 
        to provide additonal sizing options by overidding the default font size SASS variable as shown below:
    </div>
    <!--end::Block-->  

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-scss" style="height:200px" tabindex="0"><code class="language-scss"><span class="token property"><span class="token variable">$font-sizes</span></span><span class="token punctuation">:</span> <span class="token punctuation">(</span>
    <span class="token property">1</span><span class="token punctuation">:</span> <span class="token variable">$h1-font-size</span><span class="token punctuation">,</span>   <span class="token comment">// 22.75px</span>
    <span class="token property">2</span><span class="token punctuation">:</span> <span class="token variable">$h2-font-size</span><span class="token punctuation">,</span>   <span class="token comment">// 19.50px</span>
    <span class="token property">3</span><span class="token punctuation">:</span> <span class="token variable">$h3-font-size</span><span class="token punctuation">,</span>   <span class="token comment">// 17.55px</span>
    <span class="token property">4</span><span class="token punctuation">:</span> <span class="token variable">$h4-font-size</span><span class="token punctuation">,</span>   <span class="token comment">// 16.25px</span>
    <span class="token property">5</span><span class="token punctuation">:</span> <span class="token variable">$h5-font-size</span><span class="token punctuation">,</span>   <span class="token comment">// 14.95px</span>
    <span class="token property">6</span><span class="token punctuation">:</span> <span class="token variable">$h6-font-size</span><span class="token punctuation">,</span>   <span class="token comment">// 13.95px</span>

    <span class="token property">7</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 0.95<span class="token punctuation">,</span>  <span class="token comment">// 12.35px</span>
    <span class="token property">8</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 0.85<span class="token punctuation">,</span>  <span class="token comment">// 11.05px</span>
    <span class="token property">9</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 0.75<span class="token punctuation">,</span>  <span class="token comment">// 9.75px</span>
    <span class="token property">10</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 0.5<span class="token punctuation">,</span>  <span class="token comment">// 6.50px</span>

    <span class="token property">base</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span><span class="token punctuation">,</span> <span class="token comment">// 13px</span>
    <span class="token property">fluid</span><span class="token punctuation">:</span> 100%<span class="token punctuation">,</span> <span class="token comment">// 100%</span>

    <span class="token property">2x</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 2<span class="token punctuation">,</span>        <span class="token comment">// 26px</span>
    <span class="token property">2qx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 2.25<span class="token punctuation">,</span>    <span class="token comment">// 29.25px</span>
    <span class="token property">2hx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 2.5<span class="token punctuation">,</span>     <span class="token comment">// 32.5px</span>
    <span class="token property">2tx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 2.75<span class="token punctuation">,</span>    <span class="token comment">// 35.75px</span>

    <span class="token property">3x</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 3<span class="token punctuation">,</span>        <span class="token comment">// 39px</span>
    <span class="token property">3qx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 3.25<span class="token punctuation">,</span>    <span class="token comment">// 42.25px</span>
    <span class="token property">3hx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 3.5<span class="token punctuation">,</span>     <span class="token comment">// 45.5px</span>
    <span class="token property">3tx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 3.75<span class="token punctuation">,</span>    <span class="token comment">// 48.75px</span>

    <span class="token property">4x</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 4<span class="token punctuation">,</span>        <span class="token comment">// 52px</span>
    <span class="token property">4qx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 4.25<span class="token punctuation">,</span>    <span class="token comment">// 55.25px</span>
    <span class="token property">4hx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 4.5<span class="token punctuation">,</span>     <span class="token comment">// 58.5px</span>
    <span class="token property">4tx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 4.75<span class="token punctuation">,</span>    <span class="token comment">// 61.75px</span>

    <span class="token property">5x</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 5<span class="token punctuation">,</span>        <span class="token comment">// 65px</span>
    <span class="token property">5qx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 5.25<span class="token punctuation">,</span>    <span class="token comment">// 68.25px</span>
    <span class="token property">5hx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 5.5<span class="token punctuation">,</span>     <span class="token comment">// 71.5px</span>
    <span class="token property">5tx</span><span class="token punctuation">:</span> <span class="token variable">$font-size-base</span> <span class="token operator">*</span> 5.75     <span class="token comment">// 74.75px</span>
<span class="token punctuation">)</span> <span class="token statement keyword">!default</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="line-height" data-kt-scroll-offset="50">
    <a href="#line-height"></a>
    
    Line Height</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Keen extends 
        <a href="https://getbootstrap.com/docs/5.2utilities/text/#line-height" class="fw-semibold">Bootstrap Line Height Classes</a>&nbsp; 
        to provide additonal line height options by overidding the line height SASS variable. 
    </div>
    <!--end::Block-->  

    <!--begin::Block-->
    <div class="py-5">
        Use <code>.lh-{value}</code> class to set an element's line height where <code>value</code> is one of:
    </div>
    <!--end::Block-->  

    <!--begin::Block-->
    <ul class="pt-3 pb-5">
                    <li class="py-2">
                <code>1</code> - for classes that set line height to <code>1</code>
            </li>
                    <li class="py-2">
                <code>sm</code> - for classes that set line height to <code>1.25</code>
            </li>
                    <li class="py-2">
                <code>base</code> - for classes that set line height to <code>1.5</code>
            </li>
                    <li class="py-2">
                <code>lg</code> - for classes that set line height to <code>1.75</code>
            </li>
                    <li class="py-2">
                <code>xl</code> - for classes that set line height to <code>2</code>
            </li>
                    <li class="py-2">
                <code>xxl</code> - for classes that set line height to <code>2.25</code>
            </li>
            </ul>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            
                            <div class="lh-1 py-5">Example text <br> for <code>.lh-1</code></div>
                                            <div class="lh-sm py-5">Example text <br> for <code>.lh-sm</code></div>
                                            <div class="lh-base py-5">Example text <br> for <code>.lh-base</code></div>
                                            <div class="lh-lg py-5">Example text <br> for <code>.lh-lg</code></div>
                                            <div class="lh-xl py-5">Example text <br> for <code>.lh-xl</code></div>
                                            <div class="lh-xxl py-5">Example text <br> for <code>.lh-xxl</code></div>
                                    </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lh-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .lh-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lh-sm<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .lh-sm<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lh-base<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .lh-base<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lh-lg<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .lh-lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lh-xl<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .lh-xl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lh-xxl<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .lh-xxl<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="letter-spacing" data-kt-scroll-offset="50">
    <a href="#letter-spacing"></a>
    
    Letter Spacing</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.ls-{value}</code> class to set an element's letter spacing where <code>value</code> is one of:
    </div>
    <!--end::Block-->  

    <!--begin::Block-->
    <ul class="pt-3 pb-5">
                    <li class="py-2">
                <code>1</code> - for classes that set letter spacing to <code>0.1rem</code>
            </li>
                    <li class="py-2">
                <code>2</code> - for classes that set letter spacing to <code>0.115rem</code>
            </li>
                    <li class="py-2">
                <code>3</code> - for classes that set letter spacing to <code>0.125rem</code>
            </li>
                    <li class="py-2">
                <code>4</code> - for classes that set letter spacing to <code>0.25rem</code>
            </li>
                    <li class="py-2">
                <code>5</code> - for classes that set letter spacing to <code>0.5rem</code>
            </li>
                    <li class="py-2">
                <code>n1</code> - for classes that set letter spacing to <code>-0.1rem</code>
            </li>
                    <li class="py-2">
                <code>n2</code> - for classes that set letter spacing to <code>-0.115rem</code>
            </li>
                    <li class="py-2">
                <code>n3</code> - for classes that set letter spacing to <code>-0.125rem</code>
            </li>
                    <li class="py-2">
                <code>n4</code> - for classes that set letter spacing to <code>-0.25rem</code>
            </li>
                    <li class="py-2">
                <code>n5</code> - for classes that set letter spacing to <code>-0.5rem</code>
            </li>
            </ul>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">
            
                            <div class="ls-1 py-5">Example text for <code>.ls-1</code></div>
                                            <div class="ls-2 py-5">Example text for <code>.ls-2</code></div>
                                            <div class="ls-3 py-5">Example text for <code>.ls-3</code></div>
                                            <div class="ls-4 py-5">Example text for <code>.ls-4</code></div>
                                            <div class="ls-5 py-5">Example text for <code>.ls-5</code></div>
                                            <div class="ls-n1 py-5">Example text for <code>.ls-n1</code></div>
                                            <div class="ls-n2 py-5">Example text for <code>.ls-n2</code></div>
                                            <div class="ls-n3 py-5">Example text for <code>.ls-n3</code></div>
                                            <div class="ls-n4 py-5">Example text for <code>.ls-n4</code></div>
                                            <div class="ls-n5 py-5">Example text for <code>.ls-n5</code></div>
                                    </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-n1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-n1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-n2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-n2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-n3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-n3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-n4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-n4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>ls-n5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Example text for .ls-n5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="width-and-height" data-kt-scroll-offset="50">
    <a href="#width-and-height"></a>
    
    Width &amp; Height</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        Assign responsive-friendly <code>height</code>, <code>min-height</code>, <code>max-height</code>, <code>width</code> , <code>min-with</code> and 
        <code>max-width</code> values to an element with shorthand classes.

        The classes are named using the format <code>{property}-{size}</code> for <code>xs</code> and <code>{property}-{breakpoint}-{size}</code> 
        for <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>, and <code>xxl</code>.
    </div>
    <!--end::Block-->
    
    <!--begin::Block-->
    <div class="py-5">
        Where <code>property</code> is one of:
        <ul class="pt-3">
            <li class="py-2"><code>h</code> - for classes that set height</li>
            <li class="py-2"><code>mh</code> - for classes that set max height</li>
            <li class="py-2"><code>min-h</code> - for classes that set min height</li>
            <li class="py-2"><code>w</code> - for classes that set width</li>
            <li class="py-2"><code>mw</code> - for classes that set max width</li>
            <li class="py-2"><code>min-w</code> - for classes that set min width</li>
        </ul>
    </div>
    <!--end::Block-->

     <!--begin::Block-->
    <div class="py-5">
        Where <code>size</code> defined with <code>$custom-sizes</code> variable in <code>sass/_variables.scss</code> is one of-
        <ul class="pt-3">
            <li class="py-2"><code>25</code> - for 25%</li>
            <li class="py-2"><code>50</code> - for 50%</li>
            <li class="py-2"><code>75</code> - for 75%</li>
            <li class="py-2"><code>100</code> - for 100%</li>
            <li class="py-2"><code>auto</code> - for auto</li>
            <li class="py-2"><code>1px</code></li>
            <li class="py-2"><code>2px</code></li>
            <li class="py-2"><code>3px</code></li>
            <li class="py-2"><code>4px</code></li>
            <li class="py-2"><code>5px</code></li>
            <li class="py-2"><code>6px</code></li>
            <li class="py-2"><code>7px</code></li>
            <li class="py-2"><code>8px</code></li>
            <li class="py-2"><code>9px</code></li>
            <li class="py-2"><code>10px</code></li>
            <li class="py-2"><code>15px</code></li>
            <li class="py-2"><code>20px</code></li>
            <li class="py-2"><code>25px</code></li>
            <li class="py-2"><code>30px</code></li>
            <li class="py-2"><code>35px</code></li>
            <li class="py-2"><code>40px</code></li>
            <li class="py-2"><code>45px</code></li>
            <li class="py-2"><code>50px</code></li>
            <li class="py-2"><code>55px</code></li>
            <li class="py-2"><code>60px</code></li>
            <li class="py-2"><code>65px</code></li>
            <li class="py-2"><code>70px</code></li>
            <li class="py-2"><code>75px</code></li>
            <li class="py-2"><code>80px</code></li>
            <li class="py-2"><code>85px</code></li>
            <li class="py-2"><code>90px</code></li>
            <li class="py-2"><code>95px</code></li>
            <li class="py-2"><code>100px</code></li>
            <li class="py-2"><code>125px</code></li>
            <li class="py-2"><code>150px</code></li>
            <li class="py-2"><code>175px</code></li>
            <li class="py-2"><code>200px</code></li>
            <li class="py-2"><code>225px</code></li>
            <li class="py-2"><code>250px</code></li>
            <li class="py-2"><code>275px</code></li>
            <li class="py-2"><code>300px</code></li>
            <li class="py-2"><code>325px</code></li>
            <li class="py-2"><code>350px</code></li>
            <li class="py-2"><code>375px</code></li>
            <li class="py-2"><code>400px</code></li>
            <li class="py-2"><code>425px</code></li>
            <li class="py-2"><code>450px</code></li>
            <li class="py-2"><code>475px</code></li>
            <li class="py-2"><code>500px</code></li>
            <li class="py-2"><code>550px</code></li>
            <li class="py-2"><code>600px</code></li>
            <li class="py-2"><code>650px</code></li>
            <li class="py-2"><code>700px</code></li>
            <li class="py-2"><code>750px</code></li>
            <li class="py-2"><code>800px</code></li>
            <li class="py-2"><code>850px</code></li>
            <li class="py-2"><code>900px</code></li>
            <li class="py-2"><code>950px</code></li>
            <li class="py-2"><code>1000px</code></li>
        </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-10">

            <div class="d-flex flex-wrap align-items-center">
                                    
                    <div class="w-100px h-100px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold ">
                        w-100px<br> 
                        h-100px
                    </div>
                                    
                    <div class="w-150px h-150px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold ">
                        w-150px<br> 
                        h-150px
                    </div>
                                    
                    <div class="w-200px h-200px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold ">
                        w-200px<br> 
                        h-200px
                    </div>
                                    
                    <div class="w-250px h-250px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold ">
                        w-250px<br> 
                        h-250px
                    </div>
                            </div>

            <div class="separator border-solid mt-10 mb-12"></div>

            <div class="d-flex flex-wrap align-items-center">
                                    
                    <div class="min-w-100px min-h-100px mw-100px mh-100px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold">
                        min-w-100px<br> 
                        min-h-100px<br> 
                        mw-100px<br> 
                        mh-100px
                    </div>
                                    
                    <div class="min-w-150px min-h-150px mw-150px mh-150px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold">
                        min-w-150px<br> 
                        min-h-150px<br> 
                        mw-150px<br> 
                        mh-150px
                    </div>
                                    
                    <div class="min-w-200px min-h-200px mw-200px mh-200px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold">
                        min-w-200px<br> 
                        min-h-200px<br> 
                        mw-200px<br> 
                        mh-200px
                    </div>
                                    
                    <div class="min-w-250px min-h-250px mw-250px mh-250px d-flex flex-column flex-center me-5 mb-5 bg-light   fw-semibold">
                        min-w-250px<br> 
                        min-h-250px<br> 
                        mw-250px<br> 
                        mh-250px
                    </div>
                            </div>

        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-100px h-100px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-150px h-150px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-200px h-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>w-250px h-250px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-100px min-h-100px mw-100px mh-100px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-150px min-h-150px mw-150px mh-150px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-200px min-h-200px mw-200px mh-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-250px min-h-250px mw-250px mh-250px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="z-index" data-kt-scroll-offset="50">
    <a href="#z-index"></a>
    
    Z-Index</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="py-5">
        Use <code>.z-index-{value}</code> class to set an element's z-index:        
    </div>
    <!--end::Block-->  

    <!--begin::Block-->
    <div class="py-5">
        Where <code>value</code> is one of:
        <ul class="pt-3">
                            <li class="py-2">
                    <code>n1</code> - for classes that set z-index <code>n1</code>
                </li>
                            <li class="py-2">
                    <code>n2</code> - for classes that set z-index <code>n2</code>
                </li>
                            <li class="py-2">
                    <code>0</code> - for classes that set z-index <code>0</code>
                </li>
                            <li class="py-2">
                    <code>1</code> - for classes that set z-index <code>1</code>
                </li>
                            <li class="py-2">
                    <code>2</code> - for classes that set z-index <code>2</code>
                </li>
                            <li class="py-2">
                    <code>3</code> - for classes that set z-index <code>3</code>
                </li>
                    </ul>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
    <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>z-index-n1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>z-index-n2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>z-index-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>z-index-1<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>z-index-2<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>z-index-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->

<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="css-variables-in-js" data-kt-scroll-offset="50">
    <a href="#css-variables-in-js"></a>
    
    CSS Variables</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="py-5">
        There are a variety custom CSS variables available. To access these variables in Javascript(Charts, etc), 
        we have provided a simple Javascript function to grab it through CSS variables easily and quickly. Here's the list of CSS variables available for you:
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <ul class="py-0">
                            <li class="py-2">
                    <code>--kt-primary</code> - Primary color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-success</code> - Success color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-info</code> - Info color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-danger</code> - Danger color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-warning</code> - Warning color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-dark</code> - Dark color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-light</code> - Light color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-100</code> - Gray 100 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-200</code> - Gray 200 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-300</code> - Gray 300 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-400</code> - Gray 400 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-500</code> - Gray 500 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-600</code> - Gray 600 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-700</code> - Gray 700 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-800</code> - Gray 800 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-gray-900</code> - Gray 900 color hex value.
                </li>
                            <li class="py-2">
                    <code>--kt-xs</code> - Extra small breakpoint width value - 0.
                </li>
                            <li class="py-2">
                    <code>--kt-sm</code> - Extra small breakpoint width value - 576px.
                </li>
                            <li class="py-2">
                    <code>--kt-md</code> - Medium small breakpoint width value - 768px.
                </li>
                            <li class="py-2">
                    <code>--kt-lg</code> - Large small breakpoint width value - 992px.
                </li>
                            <li class="py-2">
                    <code>--kt-xl</code> - Extra large small breakpoint width value - 1200px.
                </li>
                            <li class="py-2">
                    <code>--kt-xxl</code> - Double extra large breakpoint width value - 1400px.
                </li>
                            <li class="py-2">
                    <code>--kt-font-sans-serif</code> - Main font family. E.g: <code>"Roboto", sans-serif</code>.
                </li>
                    </ul>
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        To access these variables, simply call it with this function <code>KTUtil.getCssVariableValue('css variable name')</code>.<br>
        For example to access the primary color, CSS responsive breakpoint value or the theme font family you can use the below code:
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> primaryColor <span class="token operator">=</span> KTUtil<span class="token punctuation">.</span><span class="token function">getCssVariableValue</span><span class="token punctuation">(</span><span class="token string">"--kt-primary"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> breakpointLg <span class="token operator">=</span> KTUtil<span class="token punctuation">.</span><span class="token function">getCssVariableValue</span><span class="token punctuation">(</span><span class="token string">"--kt-lg"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> fontFamily <span class="token operator">=</span> KTUtil<span class="token punctuation">.</span><span class="token function">getCssVariableValue</span><span class="token punctuation">(</span><span class="token string">"--kt-font-sans-serif"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->            </div>
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