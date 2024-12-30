const config = {
  env: window.location.hostname === 'internal.mycompany.com' ? 'development' : 'production'
};

export default config;