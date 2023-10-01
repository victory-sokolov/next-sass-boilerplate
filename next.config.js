/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});

const nextConfig = {
    eslint: {
        dirs: ['./src', './lib']
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**'
            }
        ]
    },
    poweredByHeader: false,
    // compress: false,
    basePath: '',
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    output: 'standalone',
};

module.exports = () => {
    const plugins = [withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), nextConfig);
};
