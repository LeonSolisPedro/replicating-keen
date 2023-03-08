<template>
  <div class="card card-flush">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">

      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
          <a href="#overview"></a>Overview
        </h1>
        <div class="py-5">
          <a href="https://sweetalert2.github.io" target="_blank">Sweetalert2</a> is a JavaScript plugin that allows you to display alerts with dynamically added features, such as:
          confirmation dialogs, auto-close, ajax requests, async await, and more...
        </div>
      </div>


      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="usage" data-kt-scroll-offset="50">
          <a href="#usage"></a>Usage
        </h1>
        <div class="py-5">
          Sweetalert2 is globally available in the whole project via the <code>window.swal</code> variable. It is recommended
          to use this variable, as it includes all the necessary CSS files needed to display it correctly
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here
            </pre>
        </div>
      </div>



      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="basicexample" data-kt-scroll-offset="50">
          <a href="#basicexample"></a>Basic Example
        </h1>
        <div class="py-5">
          To show a message, use <code>swal.fire</code> followed by the <span class="fw-bold text-gray-600">title</span>
          of the message, the <span class="fw-bold text-gray-600">body</span> of the message, and the
          <span class="fw-bold text-gray-600">type</span> of the message
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here (with comments of each parameter)
            </pre>
        </div>
        <div class="py-5">
          The type can be either success, warning or error
        </div>
        <div class="py-5">
          <div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9de3" role="tab" aria-selected="true">HTML</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9dea" role="tab" aria-selected="false" tabindex="-1">CSS</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9de3" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html">bigcats1</code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9dea" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-css">bigcats2</code></pre>    </div></div></div></div><!--end::Highlight-->
        </div>
      </div>

      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="questionexample" data-kt-scroll-offset="50">
          <a href="#questionexample"></a>Question Example
        </h1>
        <div class="py-5">
          If you want to show an alert with Yes and No buttons, set the property <code>showCancelButton</code> to <span class="fw-bold text-gray-600">true</span>, and pass the
          <span class="fw-bold text-gray-600">title</span>, <span class="fw-bold text-gray-600">text</span>, <span class="fw-bold text-gray-600">icon</span>, <span class="fw-bold text-gray-600">confirmbuttontext</span>, and <span class="fw-bold text-gray-600">cancelButtonText</span> properties
        </div>
        <div class="py-5">
          <div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9ae3" role="tab" aria-selected="true">HTML</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9aea" role="tab" aria-selected="false" tabindex="-1">CSS</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9ae3" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html">bigcats1</code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9aea" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-css">bigcats2</code></pre>    </div></div></div></div><!--end::Highlight-->
        </div>
      </div>


      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="ajaxexample" data-kt-scroll-offset="50">
          <a href="#ajaxexample"></a>Ajax Example
        </h1>
        <div class="py-5">
          If you want to show an alert, and perform an ajax operation in the background, you can do this with the
          <code>preConfirm</code> method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here (You also need to put true to showLoaderOnConfirm)(preConfirm is empty)
            </pre>
        </div>
        <div class="py-5">
          The <code>preConfirm</code> method expects you to return a <span class="fw-bold text-gray-600">promise</span>, you can use <a href="https://axios-http.com" target="_blank">axios</a> and perform the ajax operation from there
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here (preConfirm now has stuff)
            </pre>
        </div>
        <div class="py-5">
          When the alert is shown, you must click the <span class="fw-bold text-gray-600">"Ok"</span> button to start the ajax operation. <br>
          This is where you must use <code>async await</code> to save the result of the ajax operation into a variable
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert showwhat large code with too many console.logs
            </pre>
        </div>
        <div class="py-5">
          This is the full working code of the Ajax example. notice the use of <code>swal.showValidationMessage</code> inside the
          <code>preConfirm</code> method, this is recommended in case the ajax operation failed.
        </div>
        <div class="py-5">
          <div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9ce3" role="tab" aria-selected="true">HTML</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9cea" role="tab" aria-selected="false" tabindex="-1">CSS</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9ce3" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html">bigcats1</code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9cea" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-css">bigcats2</code></pre>    </div></div></div></div><!--end::Highlight-->
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
}
</style>

<script>
export default {
  methods:{
    showAlertSuccess(){
      swal.fire("Success", "All users have been uploaded", "success")
    },
    showAlertError(){
      swal.fire("Error", "An error has been occured, please try again", "error")
    },
    showAlertWarning(){
      swal.fire("Warning", "There are no users with the given name", "warning")
    },
    showAlertQuestion(){
      swal.fire({
        title: "Are you sure you want to upgrade all users to level: Low?",
        text: "This action will prevent some users from logging in.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Continue",
        cancelButtonText: 'No, cancel'
    });
    }
  }
}
</script>