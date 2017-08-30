﻿/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
        (function (global) {

            paths = {
                // paths serve as alias
                'npm:': 'node_modules/'
            },
                    // map tells the System loader where to look for things
                    map = {
                        // our app is within the app folder
                        app: 'app',

                        // angular bundles
                        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
                        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
                        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
                        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
                        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
                        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
                        '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
                        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
                        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

                        // other libraries
                        'rxjs': 'npm:rxjs',

                        '@ng-bootstrap': 'node_modules/@ng-bootstrap',
                        '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap'
                    },
                    // packages tells the System loader how to load when no filename and/or no extension
                    packages = {
                        app: {
                            main: './main.js',
                            defaultExtension: 'js'
                        },
                        rxjs: {
                            defaultExtension: 'js'
                        },
     '@ng-bootstrap/ng-bootstrap': {main: '/bundles/ng-bootstrap.js', defaultExtension: 'js'},
                    };

            var ngBootstrapPackageNames = [
                'accordion',
                'alert',
                'bundles',
                'buttons',
                'carousel',
                'collapse',
                'dropdown',
                'esm',
                'modal',
                'pagination',
                'popover',
                'progressbar',
                'rating',
                'tabset',
                'timepicker',
                'tooltip',
                'typeahead',
                'util'
            ];
            function ngBootstrapPackIndex(pkgName) {
                packages['@ng-bootstrap/ng-bootstrap/' + pkgName] = {main: 'index.js', defaultExtension: 'js'};
            }
            ngBootstrapPackageNames.forEach(ngBootstrapPackIndex);

            var config = {paths: paths,
                map: map,
                packages: packages
            };
            System.config(config);


        })(this);
