const path = require("path");

module.exports = {
    entry: "./src/index.ts",
    name: 'proof-factor-language-service',

    target: 'node',
    node: {
        // Do not use publicPath to overwrite __dirname, which is confusing
        __dirname: false,
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: { test: /nothing/, name: 'chunk-vendors' },
            },
            hidePathInfo: true,
            name: false,
        },
    },

    output: {
        path: path.join(__dirname, "dist"),
        library: 'ProofFactorLanguageService',
        libraryTarget: 'commonjs',
        filename: "proof-factor-language-service.js",
        chunkFilename: "[name].chunk.js",
        jsonpFunction: 'proof-factor-language-service',
        devtoolModuleFilenameTemplate(info) {
            return `file://${info.absoluteResourcePath.replace(/\\/g, '/')}`;
        },
    },

    resolve: {
        extensions: [".js", ".ts"]
    },

    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }],
    },

    devServer: {
        contentBase: "./dist"
    }
};