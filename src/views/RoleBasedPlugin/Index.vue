<template>
  <div>
    <div class="row gy-5 g-xl-10">
      <div class="col-xl-8 mb-xl-10">
        <div class="card card-flush h-xl-100">
          <div
            class="card-header bgi-no-repeat bgi-size-cover bgi-position-y-top bgi-position-x-center align-items-start bg-light-danger"
            style="height: 134px">
            <h3 class="card-title align-items-start flex-column pt-15">
              <span class="fw-bold fs-2x mb-3">Role-Based Plugin</span>
            </h3>
            <div class="card-toolbar">
              <font-awesome-icon class="text-danger" id="cuteicon" icon="fa-solid fa-hand" />
            </div>
          </div>
          <div class="card-body fs-6  p-10 text-gray-700">
            <div class="pb-10">
              <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
                <a href="#overview"></a>Overview
              </h1>
              <div class="py-5">
                The role-based authentication plugin, is a custom plugin that allows you to secure router endpoints, using
                a similarly pattern, found in <a
                  href="https://learn.microsoft.com/en-us/aspnet/core/security/authorization/roles"
                  target="_blank">ASP.NET Core</a>
              </div>
            </div>
            <div class="pb-10">
              <h1 class="anchor fw-bold mb-5" id="overview" data-kt-scroll-offset="50">
                <a href="#usage"></a>Usage
              </h1>
              <div class="py-5">
                Follow 1 of the links below, to start securing your endpoints:
                <ul>
                  <li><a href="#securingroute">Secure an endpoint route</a></li>
                  <li><a href="#specifyingroles">Specify a set of roles</a></li>
                  <li><a href="#securingwholedirectory">Secure a whole directory</a></li>
                  <li><a href="#exploreliveexample">Explore a live example</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 mb-xl-10">
        <div class="card h-md-100">
          <div class="card-body d-flex flex-column flex-center">
            <div class="mb-2">
              <div class="py-10 text-center">
                <img src="@/assets/media/illustrations/easy/1.svg" class="theme-light-show w-200px">
                <img src="@/assets/media/illustrations/easy/1-dark.svg" class="theme-dark-show w-200px">
              </div>
              <h1 class="fw-semibold text-gray-800 text-center lh-lg">
                Custom role-based authentication plugin that allows, certain accounts to see specific pages
              </h1>
            </div>
            <div class="text-center mb-1">
              <a class="btn btn-sm btn-light" href="#securingroute">
                Secure your endpoints now!</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 mt-xl-0 card card-flush">
      <div class="card-body fs-6 py-15 px-10 py-lg-15 px-lg-15 text-gray-700">
        <div class="pb-10">
          <h1 class="anchor fw-bold mb-5" id="securingroute" data-kt-scroll-offset="50">
            <a href="#securingroute"></a>Secure an endpoint route
          </h1>
          <div class="py-5">
            Open <code>router.js</code> and locate the route you want to secure, specify the <span class="fw-bold text-gray-600">meta</span> property
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              {
                path: "/books",
                ...
                meta: { }            &#60---- Specify this
              }
              </pre>
          </div>
          <div class="py-5">
            Inside the <span class="fw-bold text-gray-600">meta</span> property, specify either <code>Authorize: true</code>, or, <code>AllowAnonymous</code>
            <ul>
              <li>If you specify <span class="fw-bold text-gray-600">Authorize: true</span>, the user must be logged in, in order to enter to the required endpoint
              </li>
              <li>If you specify <span class="fw-bold text-gray-600">AllowAnonymous</span>, any user can enter the requested endpoint.</li>
            </ul>
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              {
                path: "/books",
                ...
                meta: {Authorize: true}            // The user must be logged in
              },

              {
                path: "/posts",
                ...
                meta: {AllowAnonymous: true}       // Anybody can enter
              }
              </pre>
          </div>
        </div>
        <div class="pb-10">
          <h1 class="anchor fw-bold mb-5" id="specifyingroles" data-kt-scroll-offset="50">
            <a href="#specifyingroles"></a>Specify a set of roles
          </h1>
          <div class="py-5">
            You can specify roles inside the <span class="fw-bold text-gray-600">meta</span> property, this way, only specific users can see the requested page.
          </div>
          <div class="py-5">
            To do this, specify the meta <code>Authorize: true</code>
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              {
                path: "/books",
                ...
                meta: {Authorize: true}        &#60---- Specify this
              }
              </pre>
          </div>
          <div class="py-5">
            Then pass the property <code>Roles</code>, as an array of string. <br>
            Each role must be divided by commas, similarly to <a href="https://learn.microsoft.com/en-us/aspnet/core/security/authorization/roles?view=aspnetcore-7.0#adding-role-checks" target="_blank">ASP.NET Core</a>
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              {
                path: "/books",
                ...
                meta: {Authorize: true, Roles: ["Administrator"]}         &#60---- Specify this
              }
              </pre>
          </div>
          <div class="py-5">
            When a user visits the link <code>"/books"</code>, the role-based authentication plugin will automatically
            decipher the JWT token of the browser and let the user visit the page, if it matches the specified role
            <code>["Administrator"]</code>
          </div>
          <div class="py-5">
            If it doesn't match, <span class="fw-bold text-gray-600">it will show an error page</span>, and the user can't proceed with the requested action.
          </div>
          <div class="py-5">
            We recommend contacting the <span class="fw-bold text-gray-600">backend developer</span> to have an updated list of all <a href="https://learn.microsoft.com/en-us/aspnet/core/security/authorization/roles?view=aspnetcore-7.0#adding-role-checks" target="_blank">ASP.NET Core roles</a>,
            per controller, that way, you can specify the correct <span class="fw-bold text-gray-600">meta</span> properties with the <span class="fw-bold text-gray-600">Roles</span> property as described
            above.
          </div>
        </div>
        <div class="pb-10">
          <h1 class="anchor fw-bold mb-5" id="securingwholedirectory" data-kt-scroll-offset="50">
            <a href="#securingwholedirectory"></a>Secure a whole directory
          </h1>
          <div class="py-5">
            The <span class="fw-bold text-gray-600">meta</span> property is automatically inherited to all children routes, for example, in the following route
            definition, the children, <span class="fw-bold text-gray-600">Index</span>, <span class="fw-bold text-gray-600">Create</span>, <span class="fw-bold text-gray-600">Edit</span> and <span class="fw-bold text-gray-600">ViewReport</span>, inherits the meta property <code>Authorize: true</code>
            and the roles <code>["Administrator"]</code> from the parent <code>"/books"</code>
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              {
                path: "/books",
                meta: {Authorize: true, Roles: ["Administrator"]},
                children: [
                  {
                    path: "/books/index",
                  },
                  {
                    path: "/books/create",
                  },                                     // All children
                  {                                      // Inherits role
                    path: "/books/edit/:id",             // "Administrator"
                  },
                  {
                    path: "/books/viewreport",
                  }
                ]
              }
              </pre>
          </div>
          <div class="py-5">
            If you want a specific children to have a different set of roles or authorization, you can specify the <span class="fw-bold text-gray-600">meta</span>
            property on the desired children
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              {
                path: "/books",
                meta: {Authorize: true, Roles: ["Administrator"]},
                children: [
                  {
                    path: "/books/index",
                  },
                  {
                    path: "/books/create",
                  },
                  {
                    path: "/books/edit/:id",
                  },
                  {
                    path: "/books/viewreport",           // Available to
                    meta: {AllowAnonymous: true}         // Everyone
                  }
                ]
              }
              </pre>
          </div>
          <div class="py-5">
            In the above example, the children <span class="fw-bold text-gray-600">ViewReport</span>, will be available to all users, even users who haven't logged
            in, ignoring entirely the roles defined in the parent
          </div>
          <div class="py-5">
            If the <span class="fw-bold text-gray-600">ViewReport</span> page have any other children, the meta definition <code>AllowAnonymous</code> will be also be inherited.
          </div>
          <div class="py-5">
            <pre style="background-color: var(--kt-gray-100);padding-top: 18px;">
              {
                path: "/books",
                meta: {Authorize: true, Roles: ["Administrator"]},
                children: [
                  {
                    path: "/books/index",
                  },                                                     // Only Administrator
                  {                                                      // Can access
                    path: "/books/create",
                  },
                  {
                    path: "/books/viewreport",
                    meta: {AllowAnonymous: true}
                    children: [
                      {
                        path: "/books/viewreport/details1"
                      },                                                 // Available to
                      {                                                  // Everyone
                        path: "/books/viewreport/details2"
                      },
                    ]
                  }
                ]
              }
              </pre>
          </div>
        </div>
        <div class="pb-10">
          <h1 class="anchor fw-bold mb-5" id="exploreliveexample" data-kt-scroll-offset="50">
            <a href="#exploreliveexample"></a>Explore a live example
          </h1>
          <div class="py-5">
            This project has two roles:
            <ul>
              <li><span class="fw-bold text-gray-600">admin@admin.com</span> with the password <span class="fw-bold text-gray-600">admin</span></li>
              <li><span class="fw-bold text-gray-600">employee@wintercr.com</span> with the password <span class="fw-bold text-gray-600">employee</span></li>
            </ul>
          </div>
          <div class="py-5">
            In the following links, each specific role has access to specific views, <span class="fw-bold text-gray-600">you can test them</span> by trying to access
            the following pages on your browser and see the end result. <br>
            You can also open the <code>router.js</code> file and inspect all of these routes by yourself:
          </div>
          <div class="py-5">
            <div class="table-responsive">
              <table class="table table-rounded table-row-dashed table-striped dt-custom">
                <thead>
                  <tr>
                    <th>Endpoint</th>
                    <th>Who has access?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><router-link to="./books/index" class="text-gray-800 text-hover-primary">List of books</router-link></td>
                    <td class="fw-semibold text-gray-600">
                      <ul>
                        <li>admin@admin.com</li>
                        <li>employee@wintercr.com</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><router-link to="./books/create" class="text-gray-800 text-hover-primary">Create a book</router-link></td>
                    <td class="fw-semibold text-gray-600">
                      <ul>
                        <li>admin@admin.com</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><router-link to="./books/edit/1" class="text-gray-800 text-hover-primary">Edit a book</router-link></td>
                    <td class="fw-semibold text-gray-600">
                      <ul>
                        <li>admin@admin.com</li>
                        <li>employee@wintercr.com</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><router-link to="./books/employeedashboard" class="text-gray-800 text-hover-primary">Employee Dashboard</router-link></td>
                    <td class="fw-semibold text-gray-600">
                      <ul>
                        <li>employee@wintercr.com</li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td><router-link to="./books/viewreport" class="text-gray-800 text-hover-primary">View Report</router-link></td>
                    <td class="fw-semibold text-gray-600">
                      <ul>
                        <li>everyone</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style>
#cuteicon {
  font-size: 59px;
  margin-top: 30px;
  margin-right: 25px;
}

@media screen and (max-width: 576px) {
  #cuteicon {
    font-size: 31px;
    margin-top: 38px;
    margin-right: 11px;
  }
}
</style>