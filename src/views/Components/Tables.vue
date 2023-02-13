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
	    Keen extends <a class="fw-bold me-1" href="https://getbootstrap.com/docs/5.2/content/tables/">Bootstrap Tables</a> to provide wider variants for multi-purpose usage as static tables or tables integrated with 
		<a href="https://datatables.net/" class="fw-bold me-1" target="_blank">Datatables</a> as well.
    </div>
    <!--end::Block-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pb-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="basic" data-kt-scroll-offset="50">
    <a href="#basic"></a>
    
    Basic</h1>
<!--end::Heading-->

   
    <!--begin::Block-->
    <div class="my-5">
		<div class="table-responsive">
			<table class="table">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
	<!--end::Block-->
	
	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold fs-6 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->  
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="bordered" data-kt-scroll-offset="50">
    <a href="#bordered"></a>
    
    Bordered</h1>
<!--end::Heading-->

    
    <!--begin::Block-->
    <div class="my-5">
		<div class="table-responsive">
			<table class="table table-bordered">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
	<!--end::Block-->
	
	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-bordered<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold fs-6 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->  
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="cell-spacing" data-kt-scroll-offset="50">
    <a href="#cell-spacing"></a>
    
    Cell Spacing</h1>
<!--end::Heading-->

   
	<!--begin::Block-->
	<div class="py-5">
	    To control cell paddings easily, <a href="https://getbootstrap.com/docs/5.2/layout/gutters/" class="fw-bold me-1">Bootstrap Gutters</a> 
		classes <code>.g-*</code>&nbsp;, <code>.gy-*</code>&nbsp; and <code>.gx-*</code>&nbsp; can be used.  Use <code>.gs-*</code> to set padding left to the first cell and padding right to the last cell in the row.
    </div>
    <!--end::Block-->

	 <!--begin::Block-->
	<div class="my-5">
		<div class="table-responsive">
        	<table class="table gs-7 gy-7 gx-7">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
    	</div>
	</div>
	<!--end::Block-->
	
	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table gs-7 gy-7 gx-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-6 text-gray-800 border-bottom border-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->   
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="row-border-styling" data-kt-scroll-offset="50">
    <a href="#row-border-styling"></a>
    
    Border Styling</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
		Use <code>.table-row-bordered</code>&nbsp;  or <code>.table-row-dashed</code>&nbsp;  class to set border bottom style row cells.
		To change the row border color <code>.table-row-gray-{100-900}</code>&nbsp;  classes can be used.
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="py-5 pb-6">
		<div class="table-responsive">
			<table class="table table-row-bordered gy-7">
				<thead>
					<tr class="fw-bold fs-6 text-gray-800">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="py-5">
		<div class="table-responsive">
			<table class="table table-row-dashed table-row-gray-300 gy-7">
				<thead>
					<tr class="fw-bold fs-6 text-gray-800">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-dashed table-row-gray-300 gy-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold fs-6 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-dashed table-row-gray-300 gy-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold fs-6 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
					<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="striped-rows" data-kt-scroll-offset="50">
    <a href="#striped-rows"></a>
    
    Striped Rows</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
		Use  <code>.table-striped</code>&nbsp;  to add zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="my-5">
		<div class="table-responsive">
			<table class="table table-striped gy-7 gs-7">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-striped gy-7 gs-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-6 text-gray-800 border-bottom border-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="striped-rounded-and-bordered" data-kt-scroll-offset="50">
    <a href="#striped-rounded-and-bordered"></a>
    
    Striped, Rounded &amp; Bordered</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
		Use  <code>.border</code>&nbsp; and <code>.table-striped</code>&nbsp; to set bordered table with striped rows and make it rounded with <code>.table-rounded</code> .
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="my-5">
		<div class="table-responsive">
			<table class="table table-rounded table-striped border gy-7 gs-7">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-rounded table-striped border gy-7 gs-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-6 text-gray-800 border-bottom border-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="flush-table" data-kt-scroll-offset="50">
    <a href="#flush-table"></a>
    
    Flush Table</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
		Use <code>.table-flush</code>&nbsp; to reset the table and cells base styles so then style the cells individually.
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="my-5">
		<div class="table-responsive">
			<table class="table table-rounded table-flush">
				<thead>
					<tr class="fw-semibold fs-7 text-danger border-bottom border-gray-200 py-4">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr class="py-5 fw-semibold  border-bottom border-gray-300 fs-6">
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr class="py-5 fw-bold  border-bottom  border-gray-400 fs-4">
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr class="py-5 fw-bolder border-bottom border-gray-500 fs-3">
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-rounded table-flush<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-7 text-danger border-bottom border-gray-200 py-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-5 fw-semibold  border-bottom border-gray-300 fs-6<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>py-5 fw-bold  border-bottom  border-gray-400 fs-4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="hoverable-rows" data-kt-scroll-offset="50">
    <a href="#hoverable-rows"></a>
    
    Hoverable Rows</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
	Add <code>.table-hover</code>&nbsp; to enable a hover state on table rows within a &lt;tbody&gt;    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="my-5">
		<div class="table-responsive">
			<table class="table table-hover table-rounded table-striped border gy-7 gs-7">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-hover table-rounded table-striped border gy-7 gs-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="active-rows" data-kt-scroll-offset="50">
    <a href="#active-rows"></a>
    
    Active Rows</h1>
<!--end::Heading-->

	
	<!--begin::Block-->
	<div class="py-5">
		Highlight a table row or cell by adding  <code>.table-active</code>&nbsp; class:
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="my-5">
		<div class="table-responsive">
			<table class="table table-rounded table-row-bordered border gy-7 gs-7">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr class="table-active">
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr class="table-active">
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-rounded table-row-bordered border gy-7 gs-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-active<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
    
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="nesting" data-kt-scroll-offset="50">
    <a href="#nesting"></a>
    
    Nesting</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
	Border styles, active styles, and table variants are not inherited by nested tables.
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="my-5">
        <div class="table-responsive">
            <table class="table table-striped table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-7 gs-7">
                <thead>
                    <tr class="fw-semibold fs-4 text-gray-800">
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    </tr>
                    <tr>
                    <td colspan="4">
                        <table class="table table-row-dashed table-row-gray-500 gy-5 gs-5 mb-0">
                            <thead>
                            <tr class="fw-semibold fs-6 text-gray-800">
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                                <th scope="col">Header</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">A</th>
                                <td>First</td>
                                <td>Last</td>
                                </tr>
                                <tr>
                                <th scope="row">B</th>
                                <td>First</td>
                                <td>Last</td>
                                </tr>
                                <tr>
                                <th scope="row">C</th>
                                <td>First</td>
                                <td>Last</td>
                                </tr>
                            </tbody>
                        </table>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-striped table-rounded border border-gray-300 table-row-bordered table-row-gray-300 gy-7 gs-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-4 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>#<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>First<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Last<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Handle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Mark<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Otto<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>@mdo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">colspan</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-dashed table-row-gray-500 gy-5 gs-5 mb-0<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-6 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Header<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>First<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Last<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>B<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>First<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Last<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>C<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>First<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Last<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">scope</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Larry<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>the Bird<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>@twitter<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="responsive" data-kt-scroll-offset="50">
    <a href="#responsive"></a>
    
    Responsive</h1>
<!--end::Heading-->

   
	<!--begin::Block-->
	<div class="py-5">
		Enable a table with fixed cell widths and responsive modes by referring to the official 
		<a href="https://getbootstrap.com/docs/5.2/content/tables/" class="fw-bold me-1">Bootstrap Tables</a> documentation.
    </div>
    <!--end::Block-->

	<!--begin::Block-->
	<div class="my-5">
		<div class="table-responsive">
			<table class="table table-striped gy-7 gs-7">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
						<th class="min-w-200px">Name</th>
						<th class="min-w-400px">Position</th>
						<th class="min-w-100px">Office</th>
						<th class="min-w-200px">Age</th>
						<th class="min-w-200px">Start date</th>
						<th class="min-w-200px">Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
    <!--end::Block-->

	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-striped gy-7 gs-7<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-400px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-100px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>min-w-200px<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="py-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="sorting-states" data-kt-scroll-offset="50">
    <a href="#sorting-states"></a>
    
    Sorting States</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
		Add <code>.table-sort-asc</code> or <code>.table-sort-desc</code> to <code>&lt;th&gt;</code> to set a column's sort state. 
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="my-5">
		<div class="table-responsive">
			<table class="table table-row-bordered gy-5">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
						<th class="table-sort-desc">Name</th>
						<th class="table-sort-asc">Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
	<!--end::Block-->
	
	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-bordered gy-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold fs-6 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-sort-desc<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-sort-asc<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->  
</div>
<!--end::Section-->
<!--begin::Section-->
<div class="pt-10">
	
<!--begin::Heading-->
<h1 class="anchor fw-bold mb-5" id="loading-indicator" data-kt-scroll-offset="50">
    <a href="#loading-indicator"></a>
    
    Loading Indicator</h1>
<!--end::Heading-->

    
	<!--begin::Block-->
	<div class="py-5">
		Wrap a table with <code>.table-loading</code> class and use <code>.table-loading-message</code> class
		to display a loading message.
    </div>
    <!--end::Block-->

    <!--begin::Block-->
    <div class="my-5">
		<div class="table-responsive table-loading">
			<div class="table-loading-message">
				Loading...
			</div>

			<table class="table table-row-bordered gy-5">
				<thead>
					<tr class="fw-semibold fs-6 text-gray-800 border-bottom border-gray-200">
						<th>Name</th>
						<th>Position</th>
						<th>Office</th>
						<th>Age</th>
						<th>Start date</th>
						<th>Salary</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Tiger Nixon</td>
						<td>System Architect</td>
						<td>Edinburgh</td>
						<td>61</td>
						<td>2011/04/25</td>
						<td>$320,800</td>
					</tr>
					<tr>
						<td>Garrett Winters</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>63</td>
						<td>2011/07/25</td>
						<td>$170,750</td>
					</tr>
					<tr>
						<td>Ashton Cox</td>
						<td>Junior Technical Author</td>
						<td>San Francisco</td>
						<td>66</td>
						<td>2009/01/12</td>
						<td>$86,000</td>
					</tr>
					<tr>
						<td>Cedric Kelly</td>
						<td>Senior Javascript Developer</td>
						<td>Edinburgh</td>
						<td>22</td>
						<td>2012/03/29</td>
						<td>$433,060</td>
					</tr>
					<tr>
						<td>Airi Satou</td>
						<td>Accountant</td>
						<td>Tokyo</td>
						<td>33</td>
						<td>2008/11/28</td>
						<td>$162,700</td>
					</tr>
					<tr>
						<td>Brielle Williamson</td>
						<td>Integration Specialist</td>
						<td>New York</td>
						<td>61</td>
						<td>2012/12/02</td>
						<td>$372,000</td>
					</tr>
					<tr>
						<td>Herrod Chandler</td>
						<td>Sales Assistant</td>
						<td>San Francisco</td>
						<td>59</td>
						<td>2012/08/06</td>
						<td>$137,500</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
	<!--end::Block-->
	
	<!--begin::Code-->
    <div class="py-5">
		<!--begin::Highlight--><div class="highlight">  <button class="highlight-copy btn" data-bs-toggle="tooltip" data-bs-original-title="Copy code" data-kt-initialized="1">copy</button>    <div class="highlight-code"><pre class="language-html" style="height:300px" tabindex="0"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-responsive table-loading<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table-loading-message<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		Loading...
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>

	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>table table-row-bordered gy-5<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fw-bold fs-6 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Position<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Office<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Age<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Start date<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">&gt;</span></span>Salary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tiger Nixon<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>System Architect<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Edinburgh<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>61<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/04/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$320,800<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Garrett Winters<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Accountant<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>Tokyo<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>63<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>2011/07/25<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
				<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span><span class="token punctuation">&gt;</span></span>$170,750<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">&gt;</span></span>
			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">&gt;</span></span>
		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">&gt;</span></span>
	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span></code></pre>    </div></div><!--end::Highlight-->    </div>
    <!--end::Code-->  
</div>
<!--end::Section-->
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