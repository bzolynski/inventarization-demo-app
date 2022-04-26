const tsconfig = require('./tsconfig.json');
let rawAlias = tsconfig.compilerOptions.paths;
let alias = {};

for (let x in rawAlias) {
    alias[x.replace('/*', '')] = rawAlias[x].map((p) => p.replace('/*', ''));
}

module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    alias: {
                        '@src': './src',
                        '@assets': './src/assets',
                        '@components': './src/components',
                        '@redux-store': './src/redux-store',
                        '@theme': './src/theme',
                        '@screens': './src/screens/',
                        '@models': './src/models',
                    },
                    root: ['./'],
                    extensions: [
                        '.ios.js',
                        '.android.js',
                        '.js',
                        '.ts',
                        '.tsx',
                        '.json',
                    ],
                },
            ],
        ],
    };
};
