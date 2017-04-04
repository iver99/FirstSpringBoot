/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
'use strict';

/**
 * Example of Require.js boostrap javascript
 */

requirejs.config({
    baseUrl: 'js',

    // Path mappings for the logical module names
    paths:
    //injector:mainReleasePaths
    {
        'knockout': 'libs/knockout/knockout-3.4.0.debug',
        'jquery': 'libs/jquery/jquery-3.1.0',
        'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
        'promise': 'libs/es6-promise/es6-promise',
        'hammerjs': 'libs/hammer/hammer-2.0.8',
        'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0',
        'ojs': 'libs/oj/v3.0.0/debug',
        'ojL10n': 'libs/oj/v3.0.0/ojL10n',
        'ojtranslations': 'libs/oj/v3.0.0/resources',
        'text': 'libs/require/text',
        'signals': 'libs/js-signals/signals',
        'customElements': 'libs/webcomponents/CustomElements',
        'proj4': 'libs/proj4js/dist/proj4-src',
        'css': 'libs/require-css/css',
        'bootstrap': 'libs/bootstrap/bootstrap'
    }
    //endinjector
    ,
    // Shim configurations for modules that do not expose AMD
    shim: {
        'jquery': {
            exports: ['jQuery', '$']
        }
    }
});

/**
 * A top-level require call executed by the Application.
 * Although 'ojcore' and 'knockout' would be loaded in any case (they are specified as dependencies
 * by the modules themselves), we are listing them explicitly to get the references to the 'oj' and 'ko'
 * objects in the callback
 */
require(['ojs/ojcore', 'knockout', 'jquery', 'appController', 'ojs/ojknockout',
  'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojnavigationlist', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojtabs', 'ojs/ojconveyorbelt', 'bootstrap', 'ojs/ojinputtext', 'ojs/ojknockout-validation',
        'ojs/ojcheckboxset'],
    function (oj, ko, $, app) { // this callback gets executed when all required modules are loaded

        $(function () {

            function init() {
                oj.Router.sync().then(
                    function () {
                        // Bind your ViewModel for the content of the whole page body.
                        ko.applyBindings(app, document.getElementById('globalBody'));
                    },
                    function (error) {
                        oj.Logger.error('Error in root start: ' + error.message);
                    }
                );
            }

            // If running in a hybrid (e.g. Cordova) environment, we need to wait for the deviceready 
            // event before executing any code that might interact with Cordova APIs or plugins.
            if ($(document.body).hasClass('oj-hybrid')) {
                document.addEventListener("deviceready", init);
            } else {
                init();
            }

            //Active hot activity slide
            $('#carousel-example').carousel({
                interval: 3000 // THIS TIME IS IN MILLI SECONDS
            });

        });




        //        function activityListViewModel() {
        //            var self = this;
        //
        //            var currentActivityArray = [{
        //                    DepartmentId: 10,
        //                    DepartmentName: 'Administration',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 20,
        //                    DepartmentName: 'Marketing',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 30,
        //                    DepartmentName: 'Purchasing',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 40,
        //                    DepartmentName: 'Human Resources1',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 50,
        //                    DepartmentName: 'Administration2',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 60,
        //                    DepartmentName: 'Marketing3',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 70,
        //                    DepartmentName: 'Purchasing4',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 80,
        //                    DepartmentName: 'Human Resources5',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 90,
        //                    DepartmentName: 'Human Resources11',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 100,
        //                    DepartmentName: 'Administration12',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 110,
        //                    DepartmentName: 'Marketing13',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 120,
        //                    DepartmentName: 'Purchasing14',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 130,
        //                    DepartmentName: 'Human Resources15',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 1001,
        //                    DepartmentName: 'ADFPM 1001 neverending',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 55611,
        //                    DepartmentName: 'BB',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 1011,
        //                    DepartmentName: 'Administration',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 2011,
        //                    DepartmentName: 'Marketing',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 3011,
        //                    DepartmentName: 'Purchasing',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 4011,
        //                    DepartmentName: 'Human Resources1',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 5011,
        //                    DepartmentName: 'Administration2',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 6011,
        //                    DepartmentName: 'Marketing3',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 7011,
        //                    DepartmentName: 'Purchasing4',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 8011,
        //                    DepartmentName: 'Human Resources5',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 9011,
        //                    DepartmentName: 'Human Resources11',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 10011,
        //                    DepartmentName: 'Administration12',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 11011,
        //                    DepartmentName: 'Marketing13',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 12011,
        //                    DepartmentName: 'Purchasing14',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 13011,
        //                    DepartmentName: 'Human Resources15',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 100111,
        //                    DepartmentName: 'ADFPM 1001 neverending',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 55622,
        //                    DepartmentName: 'BB',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 1022,
        //                    DepartmentName: 'Administration',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 2022,
        //                    DepartmentName: 'Marketing',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 3022,
        //                    DepartmentName: 'Purchasing',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 4022,
        //                    DepartmentName: 'Human Resources1',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 5022,
        //                    DepartmentName: 'Administration2',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 6022,
        //                    DepartmentName: 'Marketing3',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 7022,
        //                    DepartmentName: 'Purchasing4',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 8022,
        //                    DepartmentName: 'Human Resources5',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 9022,
        //                    DepartmentName: 'Human Resources11',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 10022,
        //                    DepartmentName: 'Administration12',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 11022,
        //                    DepartmentName: 'Marketing13',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 12022,
        //                    DepartmentName: 'Purchasing14',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                },
        //                {
        //                    DepartmentId: 13022,
        //                    DepartmentName: 'Human Resources15',
        //                    LocationId: 200,
        //                    ManagerId: 300
        //                }];
        //            self.currentArrayDataSource = new oj.ArrayPagingDataSource(currentActivityArray);
        //        }
        //        var activityVM = new activityListViewModel;
        //
        //        $(document).ready(
        //            function () {
        //                ko.applyBindings(activityVM, document.getElementById('paging'));
        //                // Bind observable to list
        //                var SimpleListModel = function () {
        //                    this.items = activityVM.currentArrayDataSource.getWindowObservable();
        //                };
        //                ko.applyBindings(new SimpleListModel(), document.getElementById('ulResults'));
        //            }
        //        );


        // Current Activity list :  pull to refresh
        /**
                var model = oj.Model.extend({
                    idAttribute: 'source'
                });

                var collection = new oj.Collection(null, {
                    url: 'file:///D:/2017Hackathon/JET-Template-Web-NavDrawer/js/data/tweets.json',
                    model: model
                });

                var dataSource = new oj.CollectionTableDataSource(collection, {
                    idAttribute: 'source'
                });

                $(
                    function () {
                        ko.applyBindings({
                            dataSource: dataSource
                        }, document.getElementById('listviewWrapper'));

                        var root = $('#listview').ojListView('widget').get(0);
                        oj.PullToRefreshUtils.setupPullToRefresh(root, function () {
                            var promise = new Promise(function (resolve, reject) {
                                var handler = function (event) {
                                    if (event && event.data) {
                                        // this timeout is just to simulate a delay so that
                                        // the refresh panel does not close immediately
                                        setTimeout(function () {
                                            resolve();
                                        }, 2000);
                                    } else {
                                        reject();
                                    }
                                    dataSource.off("sync", handler);
                                    dataSource.off("error", handler);
                                };

                                // listens for data fetched after refresh
                                dataSource.on("sync", handler);
                                dataSource.on("error", reject);
                            });

                            // calls reset to clear collection
                            // listview will fetch data from collection
                            collection.reset();
                            return promise;
                        }, {
                            'primaryText': 'Primary Text',
                            'secondaryText': 'secondary text'
                        });

                        $('#listview').on({
                            'ojdestroy': function () {
                                oj.PullToRefreshUtils.tearDownPullToRefresh(root);
                            }
                        });
                    }
                );
        */

    }
);
