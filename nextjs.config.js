module.exports = {
  webpack5: true,
  webpack: (config, { isServer }) => {
    config.resolve.fallback = { fs: false };
    if (!isServer) {
      config.node = { fs: 'empty' };
    }
    return config;
  },
};
