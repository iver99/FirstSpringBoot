/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojtable', 'ojs/ojpagingcontrol', 'ojs/ojarraypagingdatasource', 'ojs/ojbutton'],
    function (oj, ko, $) {

        function MySubscriptionViewModel() {

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


                self.renderTime = function(date){
                    var da = new Date(date);
                    return da.getFullYear()+"-"+ (da.getMonth()+1)+"-" +da.getDate();
                }

                 //Current Subscribed Activity List
                var currentSubscribeActivityArray = new Array();

                $.ajax({
                    url: '/v1/subscribe/1',
                    async: false,
                    type : "GET",
//                    data : {"user_id": 1}
                    datatype: "json",
                    success: function (data) {
                        if(data.success == 1){
                            for(var i=0; i<data.object.length; i++){
                                currentSubscribeActivityArray.push(data.object[i]);
                            }
                        }else {
                            //TODO
                        }

                    }
                });


                self.currentActivityDataSource = new oj.ArrayPagingDataSource(currentSubscribeActivityArray);
                self.currentActivityItems = self.currentActivityDataSource.getWindowObservable();


                // UnSubscribe a created activity
                self.unSubscribeActivity = function (item) {
                    //取消活动订阅
                    $.ajax({
                        url: '/v1/unsubscribe?userId=1&activityId='+item.id,
                        async: false,
                        type : "PUT",
                        data : {"user_id": 1, "activity_id":item.id},
                        datatype: "json",
                        success: function (data) {
                            if(data.success == 1){
                                location.reload();
                            }else {
                                //TODO
                            }

                        }

                    });
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
        return new MySubscriptionViewModel();
    }
);
