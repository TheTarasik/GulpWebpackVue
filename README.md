
# GulpWebpackVue

*Gulp and Webpack compiler for Vue.js*

## Introduction
* watching the files [Browsersync](https://browsersync.io/)
* used [vuejs](https://vuejs.org)
* the template is set for [sass](https://sass-lang.com/)

## Setup

### Update settings in [settings.json](https://github.com/TheTarasik/GulpWebpackVue/blob/master/settings.json)

* you can change the compilation paths and other

```json
{
    "preprocessor": "scss",
    "path": {
        "source": "src",
        "build": "dist"
    },
    "stylesCompressSuffix": ".min",
    "dev": {
        "jsCompress": false,
        "files": {
            "html": {
                "folder": "views",
                "entry": "*.html",
                "watch": "**/*"
            },
            "styles": {
                "folder": "assets/styles",
                "entry": "**/*.{css,scss,sass,less}",
                "watch": "**/*"
            },
            "fonts": {
                "folder": "assets/fonts",
                "entry": "**/*.{eot,ttf,otf,otc,ttc,woff,woff2}",
                "watch": "**/*.{eot,ttf,otf,otc,ttc,woff,woff2}"
            },
            "images": {
                "folder": "assets/images",
                "entry": "**/*.{png,jpg,jpeg,gif,svg}",
                "watch": "**/*.{png,jpg,jpeg,gif,svg}"
            },
            "js": {
                "folder": "assets/js",
                "entry": "**/*.js",
                "watch": "**/*"
            },
            "jsLibs": {
                "entry": "node_modules/"
            },
            "favicon": {
                "folder": "favicon",
                "entry": "**/*.{png,ico,svg,xml,webmanifest}",
                "watch": "**/*.{png,ico,svg,xml,webmanifest}"
            }
        }
    },
    "build": {
        "jsCompress": true,
        "files": {
            "html": {
                "output": "/"
            },
            "fonts": {
                "output": "assets/fonts"
            },
            "images": {
                "output": "assets/images"
            },
            "favicon": {
                "output": "/"
            }
        }
    },
    "plugins": {
        "dev": {
            "browserSync": {
                "server": {
                    "baseDir": "./dist"
                },
                "notify": false,
                "ghostMode": false,
                "cors": true,
                "open": true
            },
            "htmlmin": {
                "config": {
                    "caseSensitive": true
                }
            }
        },
        "build": {
            "htmlmin": {
                "config": {
                    "caseSensitive": true
                }
            }
        }
    }
}
```

### Don't forget for [webpack.config.js](https://github.com/TheTarasik/GulpWebpackVue/blob/master/webpack.config.js)