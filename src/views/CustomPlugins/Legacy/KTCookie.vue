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
        Cookie is an exclusive component of Keen that provides a simple integrated way to manage cookies via Javascript. For more info on cookies, please visit: <a href="https://javascript.info/cookie" target="_blank">https://javascript.info/cookie</a>
    </div>
    <!--end::Block--> 
</div>
<!--end::Section-->
<!--begin::Section-->

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
                Cookie is globally initialized and can be controlled via our custom <code>get</code>, <code>set</code> and <code>remove</code> API methods.
            </li>
            <li class="py-2">
                Cookie instances can also be controlled programmatically. <a href="#methods" data-kt-scroll-toggle="">See below for more info</a>.
            </li>
        </ul>
    </div>
    <!--end::Block-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pt-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="methods" data-kt-scroll-offset="50">
    <a href="#methods"></a>
    
    Methods</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        All Cookie components are initialized automatically, however the following are Cookie's API functionality methods for more control.
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
                        <th class="">Description</th>
                    </tr>
                </thead>
                <!--end::Head-->

                <!--begin::Body-->
                <tbody>
                    <tr>
                        <td>
                            <code>set(name, value, options)</code>
                        </td>
                        <td>
                            Create a new Cookie with specified <code>name</code>, <code>value</code> and <code>options</code>
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> date <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">24</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">60</span> <span class="token operator">*</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// +2 day from now</span>
<span class="token keyword">var</span> options <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">expires</span><span class="token operator">:</span> date <span class="token punctuation">}</span><span class="token punctuation">;</span>
KTCookie<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"user_logged_in"</span><span class="token punctuation">,</span> <span class="token string">"yes"</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>    
                    <tr>
                        <td>
                            <code>get(name)</code>
                        </td>
                        <td>
                            Returns the selected cookie if applicable.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTCookie<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"user_logged_in"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr> 
                    <tr>
                        <td>
                            <code>remove(name)</code>
                        </td>
                        <td>
                            Destroys the selected cookie.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTCookie<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"user_logged_in"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
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