// public/scripts/no-flash.js

// This is an IIFE (Immediately Invoked Function Expression)
// It runs instantly without polluting the global scope.
(function () {
  try {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.classList.add(theme);
    } else {
      // If no theme is stored, check the system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
    }
  } catch (e) {
    // If any error occurs, default to dark
    document.documentElement.classList.add('dark');
  }
})();