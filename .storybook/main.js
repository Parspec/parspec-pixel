module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
            name: '@storybook/addon-styling',
            options: {
                scssBuildRule: {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sassOptions: {
                                    includePaths: ['node_modules/@syncfusion'],
                                    sourceMap: true
                                }
                            }
                        }
                    ]
                },
                sass: {
                    // Require your Sass preprocessor here
                    implementation: require('sass')
                }
            }
        }
  ],
  "framework": "@storybook/react",
  core: {
    builder: 'webpack5'
  },
  typescript: { reactDocgen: false }
}