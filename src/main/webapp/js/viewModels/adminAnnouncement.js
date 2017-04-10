/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout-validation', 'ojs/ojbutton', 'ojs/ojpagingcontrol', 'ojs/ojarraypagingdatasource'],
    function (oj, ko, $) {

        function ManageAnnouncementViewModel() {
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
                self.isReeditMode = ko.observable(false);
                self.changedAnnouncementId = ko.observable();
                self.announcementTitle = ko.observable();
                self.announcementDetail = ko.observable();

                // clear announcement editor
                self.clearAnnouncementInput = function () {
                    self.isReeditMode(false);
                    self.changedAnnouncementId();
                    self.announcementTitle("");
                    self.announcementDetail("");
                }

                self.announcementPublish = function (data, event) {
                    alert("Publish an activity!");
                }

                // announcement list
                var announcementArray = [
                    {
                        "id": "001",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-04-04",
                        "description": "This is announcement information, please click title to see more detail"

    },
                    {
                        "id": "002",
                        "title": "This is announcement title xxxx",
                        "created_at": "2017-04-03",
                        "description": "This is announcement information, please click title to see more detail"
    },
                    {
                        "id": "003",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-04-02",
                        "description": "This is announcement information, please click title to see more detail"
    },
                    {
                        "id": "004",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-04-01",
                        "description": "This is announcement information, please click title to see more detail"
    },
                    {
                        "id": "005",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-03-31",
                        "description": "This is announcement information, please click title to see more detail"
    },
                    {
                        "id": "006",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-03-30",
                        "description": "This is announcement information, please click title to see more detail"
    },
                    {
                        "id": "007",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-03-30",
                        "description": "This is announcement information, please click title to see more detail"
    },
                    {
                        "id": "008",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-03-28",
                        "description": "This is announcement information, please click title to see more detail"
    }, {
                        "id": "009",
                        "title": "This is announcement title xxxxxxx",
                        "created_at": "2017-03-27",
                        "description": "This is announcement information, please click title to see more detail"
    }
];
                self.announcementDataSource = new oj.ArrayPagingDataSource(announcementArray);
                self.announcementItems = self.announcementDataSource.getWindowObservable();

                // Eidt a published announcement
                self.editAnnouncement = function (item) {
                    self.isReeditMode(true);
                    self.changedAnnouncementId(item.id);
                    self.announcementTitle(item.title);
                    self.announcementDetail(item.description);
                }

                //delete a published announcement
                // ????? failed to delete announcement
                self.deleteAnnouncement = function (item) {
                    var index = announcementArray.indexOf(item);
                    announcementArray.splice(index, 1);

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
        return new ManageAnnouncementViewModel();
    }
);
