<template>
  <div class="card card-flush">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">

      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
          <a href="#overview"></a>Overview
        </h1>
        <div class="py-5">
          <a href="https://sweetalert2.github.io" target="_blank">Sweetalert2</a> is a JavaScript plugin that allows you
          to display alerts with dynamically added features, such as:
          confirmation dialogs, auto-close, ajax requests, async await, and more...
        </div>
      </div>


      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="usage" data-kt-scroll-offset="50">
          <a href="#usage"></a>Usage
        </h1>
        <div class="py-5">
          Sweetalert2 is globally available in the whole project via the <code>window.swal</code> variable. It is
          recommended
          to use this variable, as it includes all the necessary CSS files needed to display it correctly
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            swal.fire("Example Alert")
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
            swal.fire("Success", "All users have been uploaded", "success")
            swal.fire("Error", "An error has been occured, please try again", "error")
            swal.fire("Warning", "There are no users with the given name", "warning")
            </pre>
        </div>
        <div class="py-5">
          The type can be either success, warning or error. This is the full working code:
        </div>
        <div class="py-5">
          <div class="rounded border p-10">
            <button @click="showSuccess()" class="btn btn-success">Show Success</button>
            <button @click="showError()" class="btn btn-danger ms-3">Show Error</button>
            <button @click="showWarning()" class="btn btn-warning ms-3">Show Warning</button>
          </div>
        </div>
        <div class="py-5">
  <!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button><ul class="nav nav-pills" role="tablist"><li class="nav-item" role="presentation">    <a class="nav-link active" data-bs-toggle="tab" href="#kt_highlight_63e537c8b9de3" role="tab" aria-selected="true">HTML</a></li><li class="nav-item" role="presentation">    <a class="nav-link " data-bs-toggle="tab" href="#kt_highlight_63e537c8b9dea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li></ul><div class="tab-content"><div class="tab-pane fade show active" id="kt_highlight_63e537c8b9de3" role="tabpanel">    <div class="highlight-code"><pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showSuccess()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-success<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Show Success<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showError()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-danger ms-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Show Error<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showWarning()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-warning ms-3<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Show Warning<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><div class="tab-pane fade " id="kt_highlight_63e537c8b9dea" role="tabpanel">    <div class="highlight-code"><pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">showSuccess</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token string">"Success"</span><span class="token punctuation">,</span> <span class="token string">"All users have been uploaded"</span><span class="token punctuation">,</span> <span class="token string">"success"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">showError</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token string">"Error"</span><span class="token punctuation">,</span> <span class="token string">"An error has been occured, please try again"</span><span class="token punctuation">,</span> <span class="token string">"error"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">showWarning</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token string">"Warning"</span><span class="token punctuation">,</span> <span class="token string">"There are no users with the given name"</span><span class="token punctuation">,</span> <span class="token string">"warning"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>    </div></div></div></div><!--end::Highlight-->    </div>
      </div>

      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="questionexample" data-kt-scroll-offset="50">
          <a href="#questionexample"></a>Question Example
        </h1>
        <div class="py-5">
          If you want to show an alert with Yes and No buttons, set the property <code>showCancelButton</code> to <span
            class="fw-bold text-gray-600">true</span>, and pass the
          <span class="fw-bold text-gray-600">title</span>, <span class="fw-bold text-gray-600">text</span>, <span
            class="fw-bold text-gray-600">icon</span>, <span class="fw-bold text-gray-600">confirmbuttontext</span>, and
          <span class="fw-bold text-gray-600">cancelButtonText</span> properties
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            swal.fire({
              title: "Are you sure?",
              text: "You want this?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes",
              cancelButtonText: "No"
            });
            </pre>
        </div>
        <div class="py-5">
          Then, use <code>async await</code> to save the variable <code>question</code>and avoid any action, if the user
          pressed "Cancel"
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            const question = await swal.fire({
              ...
            });

            //Avoid any action if the user pressed Cancel
            if(!question.isConfirmed) return
            </pre>
        </div>
        <div class="py-5">
          This is the full working code:
        </div>
        <div class="py-5">
          <div class="rounded border p-10">
            <button @click="showQuestion()" class="btn btn-primary">Show Question</button><br>
          </div>
        </div>
        <div class="py-5">
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
                  <pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showQuestion()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Show Question<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
                </div>
              </div>
              <div class="tab-pane fade " id="kt_highlight_63e537c8b9aea" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">showQuestion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> question <span class="token operator">=</span> <span class="token keyword">await</span> swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Are you sure?"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"You want this?"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showCancelButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">"Yes"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">"Cancel"</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">//Avoid any action if the user pressed Cancel</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>question<span class="token punctuation">.</span>isConfirmed<span class="token punctuation">)</span> <span class="token keyword">return</span>

      <span class="token comment">//Continue if the user pressed "Yes"</span>
      swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token string">"The user pressed yes"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
                </div>
              </div>
            </div>
          </div><!--end::Highlight-->
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
            swal.fire({
              ...
              showLoaderOnConfirm: true, //You also need to put this
              preConfirm(){

              }
            });
            </pre>
        </div>
        <div class="py-5">
          The <code>preConfirm</code> method expects you to return a <span class="fw-bold text-gray-600">promise</span>,
          you can use <a href="https://axios-http.com" target="_blank">axios</a> and perform the ajax operation from there
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            swal.fire({
              ...
              preConfirm(){
                return axios.delete("todos/1")
              }
            });
            </pre>
        </div>
        <div class="py-5">
          When the alert is shown, you must click the <span class="fw-bold text-gray-600">"Ok"</span> button to start the
          ajax operation. <br>
          This is where you must use <code>async await</code> to save the result of the ajax operation into a variable
          and access it with <code>question.value</code>
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            const question = await swal.fire({
              ...
            });

            //To get the result of ajax, we use question.value
            swal.fire(JSON.stringify(question.value))
              </pre>
        </div>
        <div class="py-5">
          This is the full working code of the Ajax example. notice the use of <code>swal.showValidationMessage</code>
          inside the
          <code>preConfirm</code> method, this is recommended in case the ajax operation failed.
        </div>
        <div class="py-5">
          <div class="rounded border p-10">
            <button @click="showAjax()" class="btn btn-primary">Show Ajax</button><br>
          </div>
        </div>
        <div class="py-5">
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
              data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9ce3" role="tab" aria-selected="true">HTML</a></li>
              <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9cea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="kt_highlight_63e537c8b9ce3" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>showAjax()<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn btn-primary<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Show Ajax<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span></code></pre>
                </div>
              </div>
              <div class="tab-pane fade " id="kt_highlight_63e537c8b9cea" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">showAjax</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">const</span> question <span class="token operator">=</span> <span class="token keyword">await</span> swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"Are you sure?"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">"You want this?"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">"warning"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showCancelButton</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">confirmButtonText</span><span class="token operator">:</span> <span class="token string">"Yes"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">"No"</span><span class="token punctuation">,</span>
        <span class="token literal-property property">showLoaderOnConfirm</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token function">preConfirm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> axios<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token string">"todos/1"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            swal<span class="token punctuation">.</span><span class="token function">showValidationMessage</span><span class="token punctuation">(</span><span class="token string">"An error has been ocurred, please try again"</span><span class="token punctuation">)</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">//Avoid any action if the user pressed Cancel</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>question<span class="token punctuation">.</span>isConfirmed<span class="token punctuation">)</span> <span class="token keyword">return</span>
      
      <span class="token comment">//To get the result of ajax, we use question.value</span>
      swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>question<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
                </div>
              </div>
            </div>
          </div><!--end::Highlight-->
        </div>
      </div>

    </div>
  </div>
</template>


<style>
@import "@/assets/documentation/style.css";
</style>

<script>
export default {
  methods: {
    showSuccess(){
      swal.fire("Success", "All users have been uploaded", "success")
    },
    showError(){
      swal.fire("Error", "An error has been occured, please try again", "error")
    },
    showWarning(){
      swal.fire("Warning", "There are no users with the given name", "warning")
    },
    async showQuestion() {
      const question = await swal.fire({
        title: "Are you sure?",
        text: "You want this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "Cancel"
      });
      
      //Avoid any action if the user pressed Cancel
      if(!question.isConfirmed) return
      
      //Continue if the user pressed "Yes"
      swal.fire("The user pressed yes")
    },
    async showAjax(){
      const question = await swal.fire({
        title: "Are you sure?",
        text: "You want this?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showLoaderOnConfirm: true,
        preConfirm(){
          return axios.delete("todos/1").catch(() => {
            swal.showValidationMessage("An error has been ocurred, please try again")
          })
        }
      });
      
      //Avoid any action if the user pressed Cancel
      if(!question.isConfirmed) return
      
      //To get the result of ajax, we use question.value
      swal.fire(JSON.stringify(question.value))
    }
  }
}
</script>