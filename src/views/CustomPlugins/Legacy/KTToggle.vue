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
        Bootstrap Toggle is an exclusive component of Keen that provides a simple build-in Javascript solution to toggle an element's state via HTML attribute 
         without the need to writing any custom or additional Javascript code. Use cases of this component can be aside or sidebar with minimize toggle support.
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
                Toggle's Javascript is globally initialized and added into our script bundle.
            </li>
            <li class="py-2">
                Add <code>v-kttoggle data-kt-toggle="true"</code> to a HTML element to enable it. There are multiple additional HTML attributes you can include to configure Toggle directly.
            </li>
            <li class="py-2">
                Toggle instances can also be controlled programmatically. <a href="#methods" data-kt-scroll-toggle="">See below for more info</a>.
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
        <div class="mb-3">
            Add <code>v-kttoggle data-kt-toggle="true"</code> to any element element to enable it. Then add the additional attributes to configure the toggle.
        </div>

        <div class="mb-3">
            Use the browser's inspect tool on the button below to preview the toggle in action.
        </div>

        <a href="#options" class="me-1" data-kt-scroll-toggle="">Click here</a> for more info on the options.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <div class="rounded border p-5 p-lg-15">
            <!--begin::Toggle button-->
            <button id="kt_toggle_example_basic" class="btn btn-light-primary" v-kttoggle data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="#kt_toggle_example_target" data-kt-toggle-name="custom-toggle">
                Click this toggle button and inspect the below element
            </button>
            <!--end::Toggle button-->

            <div class="separator separator-dashed my-10"></div>

            <!--begin::Toggle tagert-->
            <div class="bg-light rounded p-10" id="kt_toggle_example_target">
                Toggle target
            </div>
            <!--end::Toggle tagert-->

            <!--begin::Inline style-->
            
            <!--end::Inline style-->
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Code-->
    <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token comment">&lt;!--begin::Toggle button--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_toggle_example_basic<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-light-primary<span class="token punctuation">"</span></span>
    <span class="token attr-name">v-kttoggle data-kt-toggle</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-toggle-state</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>active<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-toggle-target</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#kt_toggle_example_target<span class="token punctuation">"</span></span>
    <span class="token attr-name">data-kt-toggle-name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>toggle-name<span class="token punctuation">"</span></span>
    <span class="token punctuation">&gt;</span></span>
    Click this toggle button and inspect the below element
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Toggle button--&gt;</span>

<span class="token comment">&lt;!--begin::Inline style--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">[data-kt-custom-toggle="on"]</span> <span class="token punctuation">{</span>
        <span class="token property">border</span><span class="token punctuation">:</span> 2px solid green<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Inline style--&gt;</span>

<span class="token comment">&lt;!--begin::Toggle tagert--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>bg-light rounded p-10<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>kt_toggle_example_target<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    Toggle target
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--end::Toggle tagert--&gt;</span></code></pre>    </div></div><!--end::Highlight-->    </div>
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
        Toggle uses HTML attributes to define the toggle configuration. Here are the references for each below
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
                        <th class="min-w-250px">Name</th>
                        <th class="min-w-100px">Type</th>
                        <th class="min-w-500px">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>v-kttoggle data-kt-toggle</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            Enables the element as a toggle.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-toggle-state</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            A class to add into the toggle element. Accepts any string value. For example, if <code>data-kt-toggle-state="active"</code> is set, then the class <code>active</code> will be added or removed into the toggle element's class on click.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-toggle-name</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            Defines the custom HTML attrbute name that will be added into the target element defined in <code>data-kt-toggle-target</code>. Accepts a string value without spaces.
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>data-kt-toggle-target</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            <div class="mb-3">
                            Defines the target element to add or remove a custom HTML attribute when Toggle is clicked. The custom HTML attribute is created by using the value added in <code>data-kt-toggle-name</code>. For example, if we add in <code>data-kt-toggle-name="docs-basic-example"</code> and <code>data-kt-toggle-target="#kt_toggle_example_basic"</code>, when the button is clicked, <code>data-kt-docs-basic-example="on"</code> will be added into the targeted element.
                            </div>

                            This additional HTML attribute can then be used for any custom Javascript hooks as required.
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
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="methods" data-kt-scroll-offset="50">
    <a href="#methods"></a>
    
    Methods</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        All Bootstrap Toggle components are initialized automatically, however the following are Toggle's functionality methods for more control.
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
                            <code>createInstances (DOMString selector)</code>
                        </td>
                        <td>
                            Initializes Bootstrap Toggle instances by selector. Default value of <code>selector</code> is <code>[v-kttoggle data-kt-toggle="true"]</code>.
                            This method can be used to initialize dynamicly populated Bootstrap Toggle instances(e.g: after Ajax request).
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTToggle<span class="token punctuation">.</span><span class="token function">createInstances</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>getInstance (DOMElement element)</code>
                        </td>
                        <td>
                            Get the Toggle instance created

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> toggleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_toggle_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> toggle <span class="token operator">=</span> KTToggle<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>toggleElement<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
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
                            <code>toggle()</code>
                        </td>
                        <td>
                            Toggle the selected toggle element.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">toggle<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>enable()</code>
                        </td>
                        <td>
                            Set the toggle element to active or enabled.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">toggle<span class="token punctuation">.</span><span class="token function">enable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>disable()</code>
                        </td>
                        <td>
                            Set the toggle element to inactive or disabled.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">toggle<span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>isEnabled()</code>
                        </td>
                        <td>
                            Returns the toggle state as <code>true</code> or <code>false</code>
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">toggle<span class="token punctuation">.</span><span class="token function">isEnabled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>getElement()</code>
                        </td>
                        <td>
                            Returns the toggle element.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">toggle<span class="token punctuation">.</span><span class="token function">goElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>destroy()</code>
                        </td>
                        <td>
                            Removes the component instance from element.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">toggle<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
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
        Below are few events for hooking into the Toggle functionality.
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
                            <code>kt.toggle.change</code>
                        </td>
                        <td>
                            This event fires on when the toggle element is about to get toggled (either enabled or disabled).

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> toggleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_toggle_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> toggle <span class="token operator">=</span> KTToggle<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>toggleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
toggle<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.toggle.change"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.toggle.change event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.toggle.changed</code>
                        </td>
                        <td>
                            This event fires on when the toggle element has been toggled (either enabled or disabled).

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> toggleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_toggle_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> toggle <span class="token operator">=</span> KTToggle<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>toggleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
toggle<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.toggle.changed"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.toggle.changed event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.toggle.enable</code>
                        </td>
                        <td>
                            This event fires on when the toggle element is about to be enabled.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> toggleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_toggle_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> toggle <span class="token operator">=</span> KTToggle<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>toggleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
toggle<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.toggle.enable"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.toggle.enable event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.toggle.enabled</code>
                        </td>
                        <td>
                            This event fires on when the toggle element has been enabled.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> toggleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_toggle_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> toggle <span class="token operator">=</span> KTToggle<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>toggleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
toggle<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.toggle.enabled"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.toggle.enabled event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.toggle.disable</code>
                        </td>
                        <td>
                            This event fires on when the toggle element is about to be disabled.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> toggleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_toggle_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> toggle <span class="token operator">=</span> KTToggle<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>toggleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
toggle<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.toggle.disable"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.toggle.disable event is fired");</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.toggle.disabled</code>
                        </td>
                        <td>
                            This event fires on when the toggle element has been disabled.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> toggleElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_toggle_example_1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> toggle <span class="token operator">=</span> KTToggle<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>toggleElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
toggle<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.toggle.disabled"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// console.log("kt.toggle.disabled event is fired");</span>
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
[data-kt-custom-toggle="on"] {
  border: 2px solid green;
}
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