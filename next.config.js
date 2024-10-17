const path = require('path');

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config, { isServer }) {
    // Example: Add support for resolving custom file extensions
    config.resolve.extensions.push('.ts', '.tsx');
    
    // Example: Resolve alias if needed
    config.resolve.alias['@components'] = path.resolve(__dirname, 'src/components');

    return config;
  },
};
