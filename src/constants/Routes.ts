export const Routes = {
  // Hide Sidebar on these paths
  SIDEBAR_HIDDEN: ['/login', '/register', '/terms', '/forget-password'],

  // No authentication needed
  PUBLIC: ['/login', '/register', '/terms', '/forget-password', '/callback'],

  // Blocked for authenticated users
  UNAUTHENTICATED_ONLY: ['/login', '/register'],

  // Show Searchbar on these paths
  SEARCHBAR_SHOW: ['/'],
}
