<template>
  <div class="card">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
            <!--begin::Section-->
<div class="pb-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="markup-reference" data-kt-scroll-offset="50">
    <a href="#markup-reference"></a>
    
    Markup Reference</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        Bootstrap Menu uses HTML attributes to set specific configurations. Here are the references for each below
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="py-5">
        <h2 class="fw-bold mb-5">HTML Attributes</h2>

        <div class="mb-3">
            Bootstrap KTMenu HTML attribute <code>data-kt-menu-{parameter}</code> values are compatible with 
            <a href="https://getbootstrap.com/docs/5.2/layout/breakpoints/" class="fw-semibold" target="_blank">Bootstrap breakpoint</a>&nbsp; sizing <code>sm, md, lg, xl, xxl</code>. 
            For responsive options, this attribute value must be written as an object string to enable multiple responsive breakpoints.
        </div>

        <div class="mb-0">
            For example: <code>data-kt-menu-trigger="{default:'click', 'lg': 'hover'}"</code> indicates that the drawer view component has <code>bottom</code> 
            position value width on screens larger than <code>lg</code> and <code>top</code> for every other screen size.
        </div>
    </div>
    <!--end::Block-->

    <!--begin::Table-->
    <div class="py-5">
        <div class="table-responsive border rounded">
            <table class="table table-striped align-top mb-0 g-5">
                <thead>
                    <tr class="fs-4 fw-bold text-dark p-6">
                        <th class="min-w-150px">Name</th>
                        <th class="min-w-50px">Type</th>
                        <th class="">Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <code>data-kt-menu-trigger</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            Sets the menu item submenu trigger method. Accepts values <code>click</code> or <code>hover</code>.
                        </td>
                    </tr>               

                    
                    
                    <tr>
                        <td>
                            <code>data-kt-menu-placement</code>
                        </td>
                        <td>
                            <code class="ms-0">mandatory</code>
                        </td>
                        <td>
                            KTMenu uses <a href="https://popper.js.org/" class="fw-semibold" target="_blank">Popper</a>&nbsp; library for dropdown position relative the the trigger element. 
                            Accepts values 
                            <code>top</code>, <code>top-start</code>, <code>top-end</code>, <code>bottom</code>,<code>bottom-start</code>, <code>bottom-end</code>, <code>left</code>,
                            <code>left-start</code>, <code>left-end</code>, <code>right</code>,<code>right-start</code> and <code>right-end</code>. For more info check.
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-static="true"</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Sets the menu item submenu static to avoid closing it on page body click. Accepts values <code>true</code> or <code>false</code>.
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-offset</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Sets the menu offset position relative the trigger element. Accepts upto 2 offset values in <code>px</code>. For example <code>data-kt-menu-offset="0,20"</code>.
                            The first number indicates the horizontal offset value and the second number indicates the vertical offset value.                            
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-toggle</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Sets the menu item submenu toggle mode. Accepts boolean values <code>true</code> or <code>false</code>.
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-permanent</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Sets the menu item dropdown permanent to prevent it from closing on click on it and its children. Accepts boolean values <code>true</code> or <code>false</code>.
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-overflow</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Populates the menu item dropdown under <code>body</code> element instead of under the item element. 
                            This option is useful when the menu parent has <code>overflow: hidden</code> style. 
                            Accepts boolean values <code>true</code> or <code>false</code>.
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-attach</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Attaches the dropdown menu to the item's parent element, instead to the item itself. 
                            Accepts a string value <code>parent</code> or any query string for an HTML element <code>#some_parent_element</code>.
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-height</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Sets dropdown custom height. Accepts CSS <code>px</code> or <code>rem</code> values.
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>data-kt-menu-width</code>
                        </td>
                        <td>
                            <code class="ms-0">optional</code>
                        </td>
                        <td>
                            Sets dropdown custom width. Accepts CSS <code>px</code> or <code>rem</code> values.
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
<h1 class="anchor fw-bold mb-5" id="methods" data-kt-scroll-offset="50">
    <a href="#methods"></a>
    
    Methods</h1>
<!--end::Heading-->


    <!--begin::Block-->
    <div class="py-5">
        All Bootstrap Menu components are initialized automatically, however the following are Bootstrap Menu's functionality methods for more control.
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
                        <th class="min-w-150px">Name</th>
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
                            Initializes Bootstrap Menu instances by selector. Default value of <code>selector</code> is <code>[v-ktmenu data-kt-menu="true"]</code>.
                            This method can be used to initialize dynamicly populated Bootstrap Menu instances(e.g: after Ajax request).
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTMenu<span class="token punctuation">.</span><span class="token function">createInstances</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>getInstance(DOMElement element): KTMenu</code>
                        </td>
                        <td>
                            Get the KTMenu instance created

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> menuElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> menu <span class="token operator">=</span> KTMenu<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>menuElement<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>updateDropdowns()</code>
                        </td>
                        <td>
                            Updates dropdown by recalculating its styles and positions.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTMenu<span class="token punctuation">.</span><span class="token function">updateDropdowns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>updateByLinkAttribute(String value, String name = "href")</code>
                        </td>
                        <td>
                            Updates all existing menus instances active links state based on given attribute value.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTMenu<span class="token punctuation">.</span><span class="token function">updateByLinkAttribute</span><span class="token punctuation">(</span><span class="token string">"/users/group/add"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>hideDropdowns()</code>
                        </td>
                        <td>
                            Hides currently shown Menu Dropdowns

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">KTMenu<span class="token punctuation">.</span><span class="token function">hideDropdowns</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
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
                            <code>show(DOMElement item)</code>
                        </td>
                        <td>
                            Shows submenu(accordion or dropdown) of given menu item.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> menuElement <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> menu <span class="token operator">=</span> KTMenu<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>menuElement<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// .menu-item</span>
menu<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>hide(DOMElement item)</code>
                        </td>
                        <td>
                            Hides submenu(accordion or dropdown) of given menu item.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span><span class="token function">hide</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>toggle(DOMElement item)</code>
                        </td>
                        <td>
                            Toggles(show or hide) submenu(accordion or dropdown) of given menu item.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>hideAccordions(DOMElement item)</code>
                        </td>
                        <td>
                            Hides accordions of given menu item.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span><span class="token function">hideAccordions</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>reset(DOMElement item)</code>
                        </td>
                        <td>
                            Resets submenu states(<code>.active</code>, <code>.here</code>, <code>.show</code> classes) of given menu item.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span><span class="token function">reset</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>update()</code>
                        </td>
                        <td>
                            Updates all submenu states.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>getLinkByAttribute(String value, String name = "href")</code>
                        </td>
                        <td>
                            Gets menu link DOM object by attribute value
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> activeLink <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getLinkByAttribute</span><span class="token punctuation">(</span><span class="token string">"/users/group/add"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>setActiveLink(DOMElement link)</code>
                        </td>
                        <td>
                            Sets the active state for given menu link element:
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> activeLink <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getLinkByAttribute</span><span class="token punctuation">(</span><span class="token string">"/users/group/add"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span><span class="token function">setActiveLink</span><span class="token punctuation">(</span>activeLink<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>getElement(): DOMElement</code>
                        </td>
                        <td>
                            Returns DOM element of menu.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> menuElement <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>getItemLinkElement(DOMElement item): DOMElement</code>
                        </td>
                        <td>
                            Returns DOM element of link for give menu item <code>.menu-item</code>.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> menuLinkElement <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getItemLinkElement</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>getItemToggleElement(DOMElement item): DOMElement</code>
                        </td>
                        <td>
                            Returns DOM element of toggle for give menu item <code>.menu-item</code>.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> menuToggleElement <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getItemToggleElement</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>getItemSubElement(DOMElement item): DOMElement</code>
                        </td>
                        <td>
                            Returns DOM element of submenu for give menu item <code>.menu-item</code>.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> menuSubElement <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getItemSubElement</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>getItemParentElements(DOMElement item): DOMElement</code>
                        </td>
                        <td>
                            Returns DOM elements of parent items for give menu item <code>.menu-item</code>.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> parentItemElements <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getItemParentElements</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>isItemSubShown(DOMElement item): Boolean</code>
                        </td>
                        <td>
                            Checks whether item submenu is shown. 
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> isShown <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">isItemSubShown</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>isItemParentShown(DOMElement item): DOMElement</code>
                        </td>
                        <td>
                            Checks whether item parent is shown. 
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> isShown <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">isItemParentShown</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>isItemDropdownPermanent(DOMElement item): Boolean</code>
                        </td>
                        <td>
                            Checks whether item parent is shown in Boolean. 
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> item <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu_item"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> isPermanent <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">isItemDropdownPermanent</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>getTriggerElement(DOMElement item): DOMElement</code>
                        </td>
                        <td>
                            Returns menu trigger element's DOM object.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> triggerElement <span class="token operator">=</span> menu<span class="token punctuation">.</span><span class="token function">getTriggerElement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>on(String eventName, Function handler)</code>
                        </td>
                        <td>
                            Attaches a handler to a custom event.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'kt.menu.dropdown.show'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'menu dropdown show event fired'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>one(String eventName, Function handler)</code>
                        </td>
                        <td>
                            Attaches a handler to a custom event that is executed at most once per.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">one</span><span class="token punctuation">(</span><span class="token string">'kt.menu.dropdown.show'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'menu dropdown show event fired at most once'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>off(String eventName)</code>
                        </td>
                        <td>
                            Deattaches a handler from a custom event.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">off</span><span class="token punctuation">(</span><span class="token string">'kt.menu.dropdown.show'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>destroy()</code>
                        </td>
                        <td>
                            Removes the component instance from element.
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
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
        Below are few events for hooking into the Bootstrap Menu functionality.
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
                        <th class="min-w-300px">Event Type</th>
                        <th class="min-w-500px">Description</th>
                    </tr>
                </thead>
                <!--end::Head-->

                <!--begin::Body-->
                <tbody>
                    <tr>
                        <td>
                            <code>kt.menu.link.click</code>
                        </td>
                        <td>
                            This event fires on after the menu link <code>.menu-link</code> is clicked and before it's processed. 
                            
                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">var</span> menuEl <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">"#kt_menu"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> menu <span class="token operator">=</span> KTMenu<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span>menuEl<span class="token punctuation">)</span><span class="token punctuation">;</span>
menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.link.click"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement link</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"menu link is just clicked"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// return false; quit and do not hide shown dropdowns</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.link.clicked</code>
                        </td>
                        <td>
                        This event fires on after the menu link <code>.menu-link</code> is clicked and processed. 

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.link.clicked"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement link</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"menu link click is processed"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.dropdown.show</code>
                        </td>
                        <td>
                            This event fires on before menu item <code>.menu-item</code> dropdown is shown.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.dropdown.show"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before menu dropdown show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// return false; quit and do not show the dropdown</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.dropdown.shown</code>
                        </td>
                        <td>
                        This event fires on after menu item <code>.menu-item</code> dropdown is shown.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.dropdown.shown"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after menu dropdown show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.dropdown.hide</code>
                        </td>
                        <td>
                            This event fires on before menu item <code>.menu-item</code> dropdown is hidden.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.dropdown.hide"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before menu dropdown hide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// return false; quit and do not show the dropdown</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.dropdown.hidden</code>
                        </td>
                        <td>
                            This event fires on after menu item <code>.menu-item</code> dropdown is hidden.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.dropdown.hidden"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after menu dropdown hide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <code>kt.menu.accordion.show</code>
                        </td>
                        <td>
                            This event fires on before menu item <code>.menu-item</code> accordion is shown.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.accordion.show"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before menu accordion show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// return false; quit and do not show the accordion</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.accordion.shown</code>
                        </td>
                        <td>
                        This event fires on after menu item <code>.menu-item</code> accordion is shown.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.accordion.shown"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after menu accordion show"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.accordion.hide</code>
                        </td>
                        <td>
                            This event fires on before menu item <code>.menu-item</code> accordion is hidden.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.dropdown.hide"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"before menu accordion hide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// return false; quit and do not show the accordion</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>    </div></div><!--end::Highlight-->                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <code>kt.menu.accordion.hidden</code>
                        </td>
                        <td>
                            This event fires on after menu item <code>.menu-item</code> accordion is hidden.

                            <div class="pt-3">
                                <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript">menu<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"kt.menu.accordion.hidden"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">DOMElement item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"after menu accordion hide"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
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


<style>
@import "@/assets/documentation/style.css";
</style>