const globalguard = (to, from, next) => {

  // Check if the current router has the meta: AllowAnonymous
  if(to.meta?.AllowAnonymous){
    next()
    return
  }
  // Check if the current router has the meta: Authorize
  if(to.meta?.Authorize){
    if(testAuth() == false){
      next({ path: '/login', replace: true, query: { returnUrl: to?.redirectedFrom?.fullPath ?? to.fullPath } })
      return
    }
  }
  // Check if the current router has the meta: Roles
  if(to.meta?.Roles){
    const rolesMeta = to.meta.Roles
    if(testRoles(rolesMeta) == false) {
      next({ path: '/unauthorized' })
      return
    }
  }

  // If the current router doesn't have a meta, we will look the "last meta" of the parent
  const anonymousIndex = to.matched.findLastIndex(x => x?.meta?.AllowAnonymous === true)
  const authorizeIndex = to.matched.findLastIndex(x => x?.meta?.Authorize === true)
  const rolesIndex = to.matched.findLastIndex(x => x?.meta?.Roles)

  // If there's no "last meta" of type anonymous or authorize, then we will let it pass through
  if(anonymousIndex === -1 && authorizeIndex === -1){
    next()
    return
  }

  //If the "last meta" is of type anonymous, then we will let it pass through
  if(anonymousIndex > authorizeIndex){
    next()
    return
  }
  
  //If the "last meta" is of type authorize, then we will check if has a valid JWT token
  if(authorizeIndex >= anonymousIndex){
    if(testAuth() == false){
      next({ path: '/login', replace: true, query: { returnUrl: to?.redirectedFrom ?? to.fullPath } })
      return
    }
  }

  //Lastly, we grab the "last meta" of roles definitions (if any), and we test them.
  if(rolesIndex !== -1){
    const rolesMeta = to.matched[rolesIndex].meta.Roles;
    if(testRoles(rolesMeta) == false) {
      next({ path: '/unauthorized' })
      return
    }
  }

  next()
}


function testAuth(){
  //Todo: Import here jwt library
  const token = localStorage.getItem("token")
  if(token !== "true"){
    return false
  }
  return true
}


function testRoles(rolesMeta){
  //Todo: Import here jwt library
  const jwtroles = JSON.parse(localStorage.getItem("roles"))
  for (const roles of rolesMeta) {
    const rolesToTest = roles.split(',')
    const found = jwtroles.some(r=> rolesToTest.includes(r))
    if(found === false)
      return false;
  }
  return true
}

export default globalguard