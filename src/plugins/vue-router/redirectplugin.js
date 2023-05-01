const redirectplugin = (to, from, next) => {

  //We are redirecting to corresponding dashboards
  const lastComponents1 = Object.values(to.matched[to.matched?.length - 1]?.components ?? {});
  const redirectdashboards = lastComponents1.some(x => x.RedirectToDashboards)
  if (redirectdashboards) {
    const coolurl = to.path.replace(/\/$/, "");

    //Todo: Import here jwt library
    const jwtroles = JSON.parse(localStorage.getItem("roles"))
    if (jwtroles[0] === "Administrator"){
      next({ path: `${coolurl}/admin`, replace: true })
      return
    }
    if (jwtroles[0] === "Employee"){
      next({ path: `${coolurl}/employee`, replace: true })
      return
    }
      
  }

  
  //We are redirecting to index (if possible)
  const lastComponents2 = Object.values(to.matched[to.matched?.length - 1]?.components ?? {});
  const redirectindex = lastComponents2.some(x => x.RedirectToIndex)
  if (redirectindex) {
    const coolurl = to.path.replace(/\/$/, "");
    next({ path: `${coolurl}/index`, replace: true })
    return
  }

  next()
}


export default redirectplugin