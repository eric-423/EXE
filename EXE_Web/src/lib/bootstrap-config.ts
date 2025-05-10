// Bootstrap theme configuration
export const bootstrapConfig = {
  // You can customize Bootstrap theme options here
  theme: {
    primaryColor: '#ff7a00',
    secondaryColor: '#f5f5f5',
    borderRadius: '0.5rem',
  },
  // Define breakpoints (these match Bootstrap defaults)
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  }
};

// Helper function to apply theme variables
export const applyTheme = (isDark = false) => {
  document.documentElement.classList.toggle('dark', isDark);
};