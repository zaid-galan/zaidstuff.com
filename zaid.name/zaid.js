function getAllProjectsParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('allprojects') === 'true'; // only true if explicitly set
}
