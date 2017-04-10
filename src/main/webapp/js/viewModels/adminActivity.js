/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout-validation',
        'ojs/ojcheckboxset', 'ojs/ojbutton', 'ojs/ojdatetimepicker', 'ojs/ojtimezonedata', 'ojs/ojinputnumber', 'ojs/ojpagingcontrol', 'ojs/ojarraypagingdatasource'],
    function (oj, ko, $) {

        function ManageActivityViewModel() {
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
                self.subject = ko.observable();
                self.place = ko.observable();
                self.description = ko.observable();

                // actvity time
                self.startTime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));
                self.endTime = ko.observable(oj.IntlConverterUtils.dateToLocalIso(new Date()));

                // manager name, contact number
                self.manager = ko.observable();
                self.contact = ko.observable();

                // activity capacity
                self.currentValue = ko.observable(10);
                self.max = ko.observable(1000);
                self.min = ko.observable(1);
                self.step = ko.observable(1);

                // clear activity editor
                self.clearActivityInput = function () {
                    self.subject("");
                    self.place("");
                    self.description("");
                    self.manager("");
                    self.contact("");
                    self.startTime(oj.IntlConverterUtils.dateToLocalIso(new Date()));
                    self.endTime(oj.IntlConverterUtils.dateToLocalIso(new Date()));
                    self.currentValue(10);
                    return true;
                }


                self.activityPublish = function (data, event) {
                    alert("Publish an activity!");
                    return true;
                }

                var publishedActivityArray = [
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
                        "id": "002",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-01",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "04/09/17 10:00 AM",
                        "end_time": "04/09/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "003",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-02",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "04/10/17 10:00 AM",
                        "end_time": "04/10/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "004",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-02",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "04/20/17 10:00 AM",
                        "end_time": "04/20/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "005",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-03",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "04/23/17 10:00 AM",
                        "end_time": "04/23/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "006",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-03",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "04/24/17 10:00 AM",
                        "end_time": "04/24/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "007",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-04",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/01/17 10:00 AM",
                        "end_time": "05/01/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "008",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-04",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/01/17 10:00 AM",
                        "end_time": "05/01/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    }, {
                        "id": "009",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-05",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/01/17 10:00 AM",
                        "end_time": "05/01/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "010",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-05",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/01/17 10:00 AM",
                        "end_time": "05/01/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "011",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-06",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/01/17 10:00 AM",
                        "end_time": "05/01/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "012",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-06",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/03/17 09:00 AM",
                        "end_time": "05/03/17 11:00 AM",
                        "activity_place": "Beijing",
                        "manager": "Vivian",
                        "contact": "12345678912",
                        "capacity": "20",
                        "enrolled": "12"
    },
                    {
                        "id": "013",
                        "title": "This is an activity title",
                        "publisher": "Admin",
                        "status": "1",
                        "created_at": "2017-04-07",
                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
                        "start_time": "05/01/17 10:00 AM",
                        "end_time": "05/01/17 11:00 AM",
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
                // 删除第一个元素 publishedActivityArray.shift();
                // 添加元素到数组的最后 publishedActivityArray.push();

                self.publishedActivityDataSource = new oj.ArrayPagingDataSource(publishedActivityArray);
                self.publishedActivityItems = self.publishedActivityDataSource.getWindowObservable();

                // Eidt a published activity
                self.editActivity = function (item) {

                    self.subject(item.title);
                    self.place(item.activity_place);
                    self.description(item.description);

                    self.startTime(oj.IntlConverterUtils.dateToLocalIso(new Date(item.start_time)));
                    self.endTime(oj.IntlConverterUtils.dateToLocalIso(new Date(item.end_time)));
                    self.manager(item.manager);
                    self.contact(item.contact);
                    self.currentValue(item.capacity);
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
        return new ManageActivityViewModel();
    }
);
