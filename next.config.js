const withImages = require('next-images');

module.exports = withImages({
  images: {
    disableStaticImages: true,
    domains: ['i.ibb.co'],
  },
});
