module.exports = {
    output: 'export',
    compiler: {
        styledComponents: true,
    },
    images: {
        unoptimized: true,
    },
    assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio-website/' : '',
    basePath: process.env.NODE_ENV === 'production' ? '/portfolio-website' : '',
};