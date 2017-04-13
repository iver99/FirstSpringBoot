/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojarraypagingdatasource', 'ojs/ojbutton', 'ojs/ojselectcombobox'],
    function (oj, ko, $) {

        function ActivitiesViewModel() {

            var self = this;

            self.handleActivated = function (info) {

                //                var currentActivityArray = new Array();
                //
                //                $.ajax({
                //                    url: '/v1/activity',
                //                    async: false,
                //                    type: "GET",
                //                    datatype: "json",
                //                    success: function (data) {
                //                        for (var i = 0; i < data.object.length; i++) {
                //                            if (data.object[i].status == 1) {
                //                                currentActivityArray.push(data.object[i]);
                //                            }
                //                        }
                //
                //                    }
                //                });
                var currentActivityArray = [
                    {
                        "id": "001",
                        "title": "This is an long long long long activity title xxxxxxx",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-01",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "04/08/17 01:00 PM",
                        "end_time": "04/08/17 03:00 PM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
                                    },
                    {
                        "id": "014",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-07",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/03/17 10:00 AM",
                        "end_time": "05/03/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
                                    }
                                ];

                self.currentActivityDataSource = new oj.ArrayPagingDataSource(currentActivityArray);
                self.currentActivityItems = self.currentActivityDataSource.getWindowObservable();

                // Enroll a created activity
                self.enrollActivity = function (item) {
                    //活动报名
                    $.ajax({
                        url: '/v1/myActivity',
                        async: false,
                        type: "POST",
                        data: {
                            "userId": 1,
                            "activityId": item.id
                        },
                        datatype: "json",
                        success: function (data) {
                            if (data.success == 1) {
                                //todo
                                $("#enrollBtn_id").css('color', '#a5aeb0');
                                $("#enrollBtn_id").val("Enrolled");
                            } else {
                                //TODO
                            }

                        }
                    });
                }


                // Subscribe a created activity
                self.subscribeActivity = function (item) {
                    //活动订阅
                    $.ajax({
                        url: '/v1/mySubscribe',
                        async: false,
                        type: "POST",
                        data: {
                            "userId": 1,
                            "activityId": item.id
                        },
                        datatype: "json",
                        success: function (data) {
                            if (data.success == 1) {
                                //todo
                                $("#enrollBtn_id").css('color', '#a5aeb0');
                                $("#enrollBtn_id").value = "Subscribed"
                            } else {
                                //TODO
                            }

                        }
                    });
                }

                self.updateEventHandler = function (context, ui) {
                    alert("updateEventHandler " + ui.value);
                }

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
