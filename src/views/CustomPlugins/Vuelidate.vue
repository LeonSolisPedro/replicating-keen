<template>
  <div class="card card-flush">
    <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">

      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
          <a href="#overview"></a>Overview
        </h1>
        <div class="py-5">
          <a href="https://vuelidate-next.netlify.app" target="_blank">Vuelidate</a> is a Vue plugin that allows you to
          validate forms, using data-driven validations
        </div>
      </div>


      <div class="pb-10">
        <h1 class="anchor fw-bold mb-5" id="usage" data-kt-scroll-offset="50">
          <a href="#usage"></a>Usage
        </h1>
        <div class="py-5">
          To use Vuelidate, import the <code>@vuelidate/core</code> package inside the <code>&lt;script&gt;</code> tag,
          and then, call <code>useVuelidate</code> within the <code>setup</code> method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            import { useVuelidate } from '@vuelidate/core'

            export default {
              setup: () => ({ v$: useVuelidate() })
            }
            </pre>
        </div>
        <div class="py-5">
          After that, specify the validations using the <code>validations</code> method right next to the
          <code>data</code> method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            export default {
              data() {
                return {

                }
              },
              validations() {
                return {

                }
              }
            }
            </pre>
        </div>
        <div class="py-5">
          To specify the validations, declare the same structure of the <code>data</code> method, on the
          <code>validations</code> method
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            export default {
              data() {
                return {
                  todo: {
                    id: 0,
                    title: "",
                    email: "",
                    number: null
                  }
                }
              },
              validations() {
                return {
                  todo: {
                    //id: {}, //You can ignore some fields like so
                    title: {},
                    email: {},
                    number: {}
                  }
                }
              }
            }
              </pre>
        </div>
        <div class="py-5">
          Then import the required validations, on the <code>@vuelidate/validators</code> package, some common validations
          include:
          <ul>
            <li><span class="fw-bold text-gray-600">Required:</span> to require a specific field</li>
            <li><span class="fw-bold text-gray-600">Email:</span> The field must be a valid email address</li>
            <li><span class="fw-bold text-gray-600">Numeric:</span> The field must be a number</li>
          </ul>
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            &lt;script&gt;
            import { useVuelidate } from '@vuelidate/core'
            import { required, email, numeric } from '@vuelidate/validators'
            
            ...
              </pre>
        </div>
        <div class="py-5">
          And import them inside the brackets of <code>{}</code>
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            export default {
              validations() {
                return {
                  todo: {
                    //id: {}, //You can some ignore fields like so
                    title: { required },
                    email: { required, email },
                    number: { required, numeric }
                  }
                }
              }
            }
              </pre>
        </div>
        <div class="py-5">
          Make a two-way binding on you <code>&lt;template&gt;</code> tag, and specify the <code>send()</code> method
          after
          submitting your form
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            &lt;form&gt;
              &lt;div&gt;
                &lt;label&gt;Title&lt;/label&gt;
                &lt;input type="text" v-model="todo.title"/&gt;
                &lt;div&gt; &#123;&#123; v$.todo.title.$errors[0]?.$message &#123;&#123; &lt;/div&gt;
              &lt;/div&gt;
              &lt;button @click.prevent="send()"&gt;Submit&lt;/button&gt;
            &lt;/form&gt;
              </pre>
        </div>
        <div class="py-5">
          Inside the <code>send()</code> method, use the following code to validate your form and avoid submitting it if
          it has any errors.
        </div>
        <div class="py-5">
          <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
            export default {
              methods: {
                async send() {
                  const valid = await this.v$.$validate()
                  if (!valid) return
                  await swal.fire("Submitting form...")
                }
              }
            }
            </pre>
        </div>
        <div class="py-5">
          Here's the full working code for this basic usage, you can also refer to the <a
            href="https://vuelidate-next.netlify.app/guide.html" target="_blank">official documentation</a> for more
          information
        </div>
        <div class="py-5">
          <div class="rounded border p-10">
            <form class="row mb-3 g-5">
              <div class="col-sm-6">
                <label class="required form-label">Title</label>
                <input type="text" v-model="todo.title" class="form-control form-control-solid" placeholder="Jhon"/>
                <span class="invalid-feedback"> {{ v$.todo.title.$errors[0]?.$message }} </span>
              </div>
              <div class="col-sm-6">
                <label class="required form-label">Email</label>
                <input type="email" v-model="todo.email" class="form-control form-control-solid" placeholder="example@wintercr.com"/>
                <span class="invalid-feedback"> {{ v$.todo.email.$errors[0]?.$message }} </span>
              </div>
              <div class="col-sm-6">
                <label class="required form-label">Number</label>
                <input type="number" v-model="todo.number" class="form-control form-control-solid" placeholder="123"/>
                <span class="invalid-feedback"> {{ v$.todo.number.$errors[0]?.$message }} </span>
              </div>
            </form>
            <button @click.prevent="send()" type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
        <div class="py-5">
          <div class="highlight"> <button class="highlight-copy btn" data-bs-toggle="tooltip"
              data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>
            <ul class="nav nav-pills" role="tablist">
              <li class="nav-item" role="presentation"> <a class="nav-link active" data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9de3" role="tab" aria-selected="true">HTML</a></li>
              <li class="nav-item" role="presentation"> <a class="nav-link " data-bs-toggle="tab"
                  href="#kt_highlight_63e537c8b9dea" role="tab" aria-selected="false" tabindex="-1">Vue Script</a></li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="kt_highlight_63e537c8b9de3" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-html" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row mb-3 g-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-sm-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>required form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Title<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.title<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control form-control-solid<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Jhon<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>invalid-feedback<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> &#123;&#123; v$.todo.title.$errors[0]?.$message &#123;&#123; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-sm-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>required form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.email<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control form-control-solid<span class="token punctuation">"</span></span>
      <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>example@wintercr.com<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>invalid-feedback<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> &#123;&#123; v$.todo.email.$errors[0]?.$message &#123;&#123; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-sm-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>required form-label<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Number<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>number<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>todo.number<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form-control form-control-solid<span class="token punctuation">"</span></span> <span class="token attr-name">placeholder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>123<span class="token punctuation">"</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>invalid-feedback<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span> &#123;&#123; v$.todo.number.$errors[0]?.$message &#123;&#123; <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></code></pre>
                </div>
              </div>
              <div class="tab-pane fade " id="kt_highlight_63e537c8b9dea" role="tabpanel">
                <div class="highlight-code">
                  <pre class="language-javascript" tabindex="0"><code class="language-javascript"><span class="token keyword">import</span> <span class="token punctuation">{</span> useVuelidate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuelidate/core'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> required<span class="token punctuation">,</span> email<span class="token punctuation">,</span> numeric <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuelidate/validators'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">setup</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">v$</span><span class="token operator">:</span> <span class="token function">useVuelidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">todo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span>
        <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token keyword">null</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">validations</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">todo</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">//id: 0,</span>
        <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token punctuation">{</span> required <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span> required<span class="token punctuation">,</span> email <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">number</span><span class="token operator">:</span> <span class="token punctuation">{</span> required<span class="token punctuation">,</span> numeric <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token keyword">async</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> valid <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>v$<span class="token punctuation">.</span><span class="token function">$validate</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>valid<span class="token punctuation">)</span> <span class="token keyword">return</span>
      swal<span class="token punctuation">.</span><span class="token function">fire</span><span class="token punctuation">(</span><span class="token string">"Submitting form..."</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
                </div>
              </div>
            </div>
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
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  data() {
    return {
      todo: {
        id: 0,
        title: "",
        email: "",
        number: null
      }
    }
  },
  validations() {
    return {
      todo: {
        //id: 0,
        title: { required },
        email: { required, email },
        number: { required, numeric }
      }
    }
  },
  methods: {
    async send() {
      const valid = await this.v$.$validate()
      if (!valid) return
      swal.fire("Submitting form...")
    }
  }
}
</script>