/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojarraypagingdatasource', 'ojs/ojbutton'],
    function (oj, ko, $) {

        function ActivitiesViewModel() {

            var self = this;
            // Below are a subset of the ViewModel methods invoked by the ojModule binding
            // Please reference the ojModule jsDoc for additionaly available methods.

            /**
             * Optional ViewModel method invoked when this ViewModel is about to be
             * used for the View transition.  The application can put data fetch logic
             * here that can return a Promise which will delay the handleAttached function
             * call below until the Promise is resolved.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
             * the promise is resolved
             */
            self.handleActivated = function (info) {

                var currentActivityArray = new Array();
                var myActivityArray = new Array();
                var finishedActivityArray = new Array();

                $.ajax({
                    url: '/v1/activity',
                    async: false,
                    type: "GET",
                    datatype: "json",
                    success: function (data) {
                        for (var i = 0; i < data.object.length; i++) {
                            // finished 状态
                            if (data.object[i].status == 2) {
                                finishedActivityArray.push(data.object[i]);
                            } else {
                                currentActivityArray.push(data.object[i]);
                            }
                        }

                    }
                });

                var userId = 1; //todo 改成活的
                // my activities
                $.ajax({
                    url: '',
                    async: false,
                    type: "GET",
                    data: userId,
                    datatype: "json",
                    success: function (data) {

                        for (var i = 0; i < data.object.length; i++) {
                            myActivityArray.push(data.object[i]);
                        }

                    }
                });


                //>>>>>>> iver99/greenchannel

                self.currentActivityDataSource = new oj.ArrayPagingDataSource(currentActivityArray);
                self.currentActivityItems = self.currentActivityDataSource.getWindowObservable();

                // Enroll a created activity
                self.enrollActivity = function (item) {
                    //活动报名
                }

                // Subscribe a created activity
                self.subscribeActivity = function (item) {
                    //活动订阅
                }


                // History Activity List
                var historyActivityArray = [
                    {
                        "id": "040",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-02-10",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"

    },
                    {
                        "id": "041",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-02-05",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "042",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-02-03",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "043",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-02-02",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "044",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-23",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "045",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-22",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "046",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-21",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "047",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-20",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    }, {
                        "id": "048",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-12",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "049",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-10",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "050",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-09",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "051",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-08",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    },
                    {
                        "id": "052",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-01-07",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "03/11/17 10:00 AM",
                        "end_time": "03/11/17 11:00 AM",
                        "activity_place": "Beijing"
    }
];
                self.historyActivityDataSource = new oj.ArrayPagingDataSource(historyActivityArray);
                self.historyActivityItems = self.historyActivityDataSource.getWindowObservable();
            };

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
             */
            self.handleAttached = function (info) {
                // Implement if needed
                // enroll activity button click
            };


            /**
             * Optional ViewModel method invoked after the bindings are applied on this View. 
             * If the current View is retrieved from cache, the bindings will not be re-applied
             * and this callback will not be invoked.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             */
            self.handleBindingsApplied = function (info) {
                // Implement if needed
            };

            /*
             * Optional ViewModel method invoked after the View is removed from the
             * document DOM.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
             */
            self.handleDetached = function (info) {
                // Implement if needed
            };

        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        //                $.get("/test/activities", function (data) {
        //                    alert("GETRestfulTest调用成功，返回值为：" + data);
        //                      currentActivityArray = data;
        //                });
        return new ActivitiesViewModel();
    }
);
