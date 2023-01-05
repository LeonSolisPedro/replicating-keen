const redirects = (to, from, next) => {

  //We are redirecting to corresponding dashboards
  const superarray1 = to.matched.flatMap(record => Object.values(record.components))
  const redirectdashboards = typeof superarray1[superarray1.length - 1].RedirectToDashboards !== "undefined"
  if (redirectdashboards) {
    const coolurl = to.path.replace(/\/$/, "");

    //Todo: Import here jwt library
    const jwtroles = JSON.parse(localStorage.getItem("roles"))
    if (jwtroles[0] === "Administrator")
      next({ path: `${coolurl}/admin`, replace: true })
    if (jwtroles[0] === "Employee")
      next({ path: `${coolurl}/employee`, replace: true })
  }

  
  //We are redirecting to index (if possible)
  const superarray2 = to.matched.flatMap(record => Object.values(record.components))
  const redirectindex = typeof superarray2[superarray2.length - 1].RedirectToIndex !== "undefined"
  if (redirectindex) {
    const coolurl = to.path.replace(/\/$/, "");
    next({ path: `${coolurl}/index`, replace: true })
  }

}


export default redirects