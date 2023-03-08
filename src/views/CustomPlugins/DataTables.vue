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
          <div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9de3" role="tab" aria-selected="true">HTML</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9dea" role="tab" aria-selected="false" tabindex="-1">CSS</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9de3" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html">bigcats1</code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9dea" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-css">bigcats2</code></pre>    </div></div></div></div><!--end::Highlight-->
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
            Insert small code here
            </pre>
        </div>
        <div class="py-5">
          After that, iterate the list with <code>v-for</code>
        </div>
        <div class="py-5">
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button> <ul class="nav nav-pills" role="tablist"> <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9ae3" role="tab" aria-selected="true">HTML</a></li> <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9aea" role="tab" aria-selected="false" tabindex="-1">CSS</a></li></ul> <div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9ae3" role="tabpanel"><div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html">bigcats1</code></pre></div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9aea" role="tabpanel"><div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-css">bigcats2</code></pre></div></div></div></div><!--end::Highlight-->
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
            Insert small code here
            </pre>
        </div>
        <div class="py-5">
          Then, specify the desired <code>id</code> and pass a Vue method inside the <code>hook:mounted</code> event
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here
            </pre>
        </div>
        <div class="py-5">
          In the <code>&lt;script&gt;</code> tag, import jQuery, and initialize DataTables within the method you previously specified
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here
            </pre>
        </div>
        <div class="py-5">
          If you like to use <code>v-for</code> inside the vue-datatable component, make sure to watch for changes on the
          list that you are iterating for.
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here (watch list is empty)
            </pre>
        </div>
        <div class="py-5">
          Then, inside the <code>watch</code> method, destroy DataTables and reinitialize it again
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here
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
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button> <ul class="nav nav-pills" role="tablist"> <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9be3" role="tab" aria-selected="true">HTML</a></li> <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9bea" role="tab" aria-selected="false" tabindex="-1">CSS</a></li></ul> <div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9be3" role="tabpanel"><div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html">bigcats1</code></pre></div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9bea" role="tabpanel"><div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-css">bigcats2</code></pre></div></div></div></div><!--end::Highlight-->
        </div>
      </div>

    </div>
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

:not(pre)>code[class*=language-],
pre[class*=language-] {
  background: #1e1e3f;
}

/* Inline code */
:not(pre)>code[class*=language-] {
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
code.language-css .token.property+.token.punctuation {
  color: #a9b7c6;
}

code.language-css .token.id {
  color: #ffc66d;
}

code.language-css .token.selector>.token.class,
code.language-css .token.selector>.token.attribute,
code.language-css .token.selector>.token.pseudo-class,
code.language-css .token.selector>.token.pseudo-element {
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
}</style>


<script>
export default {
  data() {
    return {
      lista1: [{
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
  methods: {
    addData() {
      const data = { id: this.lista1.length + 1, name: `CoolName${this.lista1.length + 1}`, status: `CoolStatus${this.lista1.length + 1}` }
      this.lista1.push(data)
    }
  }
}
</script>