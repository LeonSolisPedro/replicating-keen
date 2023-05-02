<template>
  <div class="card card-flush">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">

      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
          <a href="#overview"></a>Overview
        </h1>
        <div class="py-5">
          <a href="https://datatables.net" target="_blank">DataTables</a> is a jQuery plugin that allows you to build
          tables dynamically, with rich features, such as: searching, paging, exporting, and processing.
        </div>
      </div>


      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="usage" data-kt-scroll-offset="50">
          <a href="#usage"></a>Usage
        </h1>
        <div class="py-5">
          To use DataTables in this project, it is recommended to use the following Vue component, as it loads all the
          necessary dependencies (such as jQuery) and all the CSS files needed to display it correctly
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            &lt;vue-datatable /&gt;
            </pre>
        </div>
      </div>



      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="basicexample" data-kt-scroll-offset="50">
          <a href="#basicexample"></a>Basic Example
        </h1>
        <div class="py-5">
          If you plan to use DataTables for static data, use the vue-datatable component right away
        </div>
        <div class="py-5">
        <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-datatable</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-dashed dt-custom<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Id<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Status<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Travis Adbeel<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Unemployment<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-datatable</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
        <div class="py-5">
          <div class="rounded border p-10">
            <vue-datatable class="table table-row-dashed dt-custom">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Travis Adbeel</th>
                  <th>Unemployment</th>
                </tr>
              </tbody>
            </vue-datatable>
          </div>
        </div>
      </div>


      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="examplevfor" data-kt-scroll-offset="50">
          <a href="#examplevfor"></a>Example with v-for
        </h1>
        <div class="py-5">
          If you plan to use v-for inside the vue-datatable component, first, specify the <code>watchData</code> prop on the
          vue-datatable component and specify the list that you want to iterate for.
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            &lt;vue-datatable :watchData="list1" /&gt;
            </pre>
        </div>
        <div class="py-5">
          After that, iterate the list with <code>v-for</code>
        </div>
        <div class="py-5">
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button> <ul class="nav nav-pills" role="tablist"> <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9ae3" role="tab" aria-selected="true">HTML</a></li> <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9aea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li></ul> <div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9ae3" role="tabpanel"><div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-datatable</span> <span class="token attr-name">:watchData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>list1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-dashed dt-custom<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Id<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Status<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>people in list1<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>people.id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>&#123;&#123; people.id &#123;&#123;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>&#123;&#123; people.name &#123;&#123;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>&#123;&#123; people.status &#123;&#123;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-datatable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addData1()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add new Data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre></div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9aea" role="tabpanel"><div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list1</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Travis Adbeel"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"Unemployment"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Diego Janus"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"Unemployment"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"David Salas"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"Working"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">addData1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list1<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">CoolName</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>list1<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">CoolStatus</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>list1<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>list1<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre></div></div></div></div><!--end::Highlight-->
        </div>
        <div class="py-5">
          <div class="rounded border p-10">
            <vue-datatable :watchData="list1" class="table table-row-dashed dt-custom">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="people in list1" :key="people.id">
                  <th>{{ people.id }}</th>
                  <th>{{ people.name }}</th>
                  <th>{{ people.status }}</th>
                </tr>
              </tbody>
            </vue-datatable>
            <button class="btn btn-primary" @click="addData1()">Add new Data</button>
          </div>
        </div>
        <div class="py-5">
          When new data is added to the list, DataTables will reinitialize itself, this is why the <code>watchData</code> prop is
          required in conjunction with <code>v-for</code>
        </div>
      </div>



      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="manualinitialization" data-kt-scroll-offset="50">
          <a href="#manualinitialization"></a>Manual initialization
        </h1>
        <div class="py-5">
          If you want to initialize DataTables with custom options and features, you can do this by first, specifying
          the <code>manual</code> prop to true
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            &lt;vue-datatable :manualMode="true" /&gt;
            </pre>
        </div>
        <div class="py-5">
          Then, specify the desired <code>id</code> and pass a Vue method inside the <code>vue:mounted</code> event
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            &lt;vue-datatable :manualMode="true" @vue:mounted="initDatatables" id="datatable1" /&gt;
            </pre>
        </div>
        <div class="py-5">
          In the <code>&lt;script&gt;</code> tag, import jQuery, and initialize DataTables within the method you previously specified
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            import $ from "jquery"

            export default {
              methods: {
                initDatatables() {
                  $("#datatable1").DataTable({...})
                }
              }
            }
            </pre>
        </div>
        <div class="py-5">
          If you like to use <code>v-for</code> inside the vue-datatable component, make sure to watch for changes on the
          list that you are iterating for.
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            watch: {
              list1: {

              }
            },
            </pre>
        </div>
        <div class="py-5">
          Then, inside the <code>watch</code> property, destroy DataTables and reinitialize it again, using the
          <code>handler()</code> method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            watch: {
              list1: {
                handler(){
                  $('#datatable1').DataTable().destroy();
                  this.$nextTick(() => {
                    this.initDatatables()
                  });
                }
              }
            },
            </pre>
        </div>
        <div class="py-5">
          Don't forget to add the property <code>deep: true</code> inside the watcher, to make sure reactivity work
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            watch: {
              list1: {
                handler(){
                  ...
                },
                deep: true       &#60-- Specify this
              }
            },
          </pre>
        </div>
        <div class="py-5">
          This way, when new data is added to the list, DataTables will reinitialize itself and respond to the
          reactivity of Vue
        </div>
        <div class="py-5">
          This is the full working code of manual initialization
        </div>
        <div class="py-5">
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button> <ul class="nav nav-pills" role="tablist"> <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9be3" role="tab" aria-selected="true">HTML</a></li> <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9bea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li></ul> <div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9be3" role="tabpanel"><div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>vue-datatable</span> <span class="token attr-name">:manualMode</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span> <span class="token attr-name"><span class="token namespace">@vue:</span>mounted</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>initDatatables<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>datatable1<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-dashed dt-custom<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Id<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Status<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>people in list2<span class="token punctuation">"</span></span> <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>people.id<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>&#123;&#123; people.id &#123;&#123;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>&#123;&#123; people.name &#123;&#123;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>&#123;&#123; people.status &#123;&#123;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>vue-datatable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>addData2()<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Add new Data<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre></div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9bea" role="tabpanel"><div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> $ <span class="token keyword">from</span> <span class="token string">"jquery"</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">list2</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Travis Adbeel"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"Unemployment"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Diego Janus"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"Unemployment"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"David Salas"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token string">"Working"</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">list2</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">'#datatable1'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DataTable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$nextTick</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">initDatatables</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">deep</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">initDatatables</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">"#datatable1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">DataTable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token string-property property">"language"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token string-property property">"lengthMenu"</span><span class="token operator">:</span> <span class="token string">"Show _MENU_"</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token string-property property">"dom"</span><span class="token operator">:</span>
          <span class="token string">"&lt;'row'"</span> <span class="token operator">+</span>
          <span class="token string">"&lt;'col-sm-6 d-flex align-items-center justify-conten-start'l&gt;"</span> <span class="token operator">+</span>
          <span class="token string">"&lt;'col-sm-6 d-flex align-items-center justify-content-end'f&gt;"</span> <span class="token operator">+</span>
          <span class="token string">"&gt;"</span> <span class="token operator">+</span>
          <span class="token string">"&lt;'table-responsive'tr&gt;"</span> <span class="token operator">+</span>
          <span class="token string">"&lt;'row'"</span> <span class="token operator">+</span>
          <span class="token string">"&lt;'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i&gt;"</span> <span class="token operator">+</span>
          <span class="token string">"&lt;'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p&gt;"</span> <span class="token operator">+</span>
          <span class="token string">"&gt;"</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">addData2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list2<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">CoolName</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>list2<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">CoolStatus</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>list2<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token punctuation">}</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>list2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre></div></div></div></div><!--end::Highlight-->
        </div>
        <div class="py-5">
          <div class="rounded border p-10">
            <vue-datatable :manualMode="true" @vue:mounted="initDatatables" id="datatable1" class="table table-row-dashed dt-custom">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="people in list2" :key="people.id">
                  <th>{{ people.id }}</th>
                  <th>{{ people.name }}</th>
                  <th>{{ people.status }}</th>
                </tr>
              </tbody>
            </vue-datatable>
            <button class="btn btn-primary" @click="addData2()">Add new Data</button>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>



<style>
@import "@/assets/documentation/style.css";
</style>


<script>
import $ from "jquery"

export default {
  data() {
    return {
      list1: [{
        id: 1,
        name: "Travis Adbeel",
        status: "Unemployment"
      },
      {
        id: 2,
        name: "Diego Janus",
        status: "Unemployment"
      },
      {
        id: 3,
        name: "David Salas",
        status: "Working"
      },
      ],
      list2: [{
        id: 1,
        name: "Travis Adbeel",
        status: "Unemployment"
      },
      {
        id: 2,
        name: "Diego Janus",
        status: "Unemployment"
      },
      {
        id: 3,
        name: "David Salas",
        status: "Working"
      },
      ]
    }
  },
  watch: {
    list2: {
      handler(){
        $('#datatable1').DataTable().destroy();
        this.$nextTick(() => {
          this.initDatatables()
        });
      },
      deep:true
    }
  },
  methods: {
    initDatatables() {
      $("#datatable1").DataTable({
        "language": {
          "lengthMenu": "Show _MENU_",
        },
        "dom":
          "<'row'" +
          "<'col-sm-6 d-flex align-items-center justify-conten-start'l>" +
          "<'col-sm-6 d-flex align-items-center justify-content-end'f>" +
          ">" +
          "<'table-responsive'tr>" +
          "<'row'" +
          "<'col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'i>" +
          "<'col-sm-12 col-md-7 d-flex align-items-center justify-content-center justify-content-md-end'p>" +
          ">"
      });
    },
    addData1() {
      const data = { id: this.list1.length + 1, name: `CoolName${this.list1.length + 1}`, status: `CoolStatus${this.list1.length + 1}` }
      this.list1.push(data)
    },
    addData2() {
      const data = { id: this.list2.length + 1, name: `CoolName${this.list2.length + 1}`, status: `CoolStatus${this.list2.length + 1}` }
      this.list2.push(data)
    },
  }
}
</script>