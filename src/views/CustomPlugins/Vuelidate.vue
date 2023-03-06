<template>
  <div class="card card-flush">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">

      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
          <a href="#overview"></a>Overview
        </h1>
        <div class="py-5">
          Vuelidate is a Vue plugin that allows you to validate forms, using data-driven validations
        </div>
      </div>


      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="usage" data-kt-scroll-offset="50">
          <a href="#usage"></a>Usage
        </h1>
        <div class="py-5">
          To use Vuelidate, import the `@vuelidate/core` package inside the script tag, and then, call `useVuelidate`
          within the `setup` method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here
            </pre>
        </div>
        <div class="py-5">
          After that, specify the validations using the `validations` method right next to the `data` method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert small code here
            </pre>
        </div>
        <div class="py-5">
          To specify the validations, declare the same structure of the `data` method, on the `validations` method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Insert code small code here (you can ignore some data’s that don't require validations) //id: {}
            </pre>
        </div>
        <div class="py-5">
          Then import the required validations, on the `@vuelidate/validators` package, some common validations include
          <ul>
            <li>Required: to require a specific field</li>
            <li>Email: The field must be a valid email address</li>
            <li>Number: The field must be a number</li>
          </ul>
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Small code here
            </pre>
        </div>
        <div class="py-5">
          And import them inside the brackets of `{}`
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Small code here
            </pre>
        </div>
        <div class="py-5">
          Make a two-way binding on you template tag, and specify the method `send()` after submitting your form
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Small code here
            </pre>
        </div>
        <div class="py-5">
          Inside the method `Send()` use the following code to validate your form and avoid submitting it if it has any
          errors.
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            Small code here
            </pre>
        </div>
        <div class="py-5">
          Here's the full working code for this basic usage, you can also refer to the official documentation for more
          information
        </div>
        <div class="py-5">
          <div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9de3" role="tab" aria-selected="true">HTML</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9dea" role="tab" aria-selected="false" tabindex="-1">CSS</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9de3" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html">bigcats1</code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9dea" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-css">bigcats2</code></pre>    </div></div></div></div>
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
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data () {
    return {
      email: ""
    }
  },
  validations () {
    return {
      email: {required, email}
    }
  },
  methods: {
    async sendForm(){
      const valid = await this.v$.$validate()
      if (!valid) return
      alert("Submitting form...")
    }
  }
}
</script>