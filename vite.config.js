const { resolve } = require('path');

export default {
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        detailspage: resolve(__dirname, 'detailspage.html'),
        sandbox: resolve(__dirname, 'sandbox.html'),
        createlisting: resolve(__dirname, 'createlisting.html'),
        userprofile: resolve(__dirname, 'userprofile.html'),
        profile: resolve(__dirname, 'profile.html'),
      },
    },
  },
};
