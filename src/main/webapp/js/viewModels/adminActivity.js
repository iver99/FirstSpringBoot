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

        // data format 工具
        Date.prototype.format = function(format) {
               var date = {
                      "M+": this.getMonth() + 1,
                      "d+": this.getDate(),
                      "h+": this.getHours(),
                      "m+": this.getMinutes(),
                      "s+": this.getSeconds(),
                      "q+": Math.floor((this.getMonth() + 3) / 3),
                      "S+": this.getMilliseconds()
               };
               if (/(y+)/i.test(format)) {
                      format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
               }
               for (var k in date) {
                      if (new RegExp("(" + k + ")").test(format)) {
                             format = format.replace(RegExp.$1, RegExp.$1.length == 1
                                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
                      }
               }
               return format;
        }

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

                var createdActivityArray = new Array();
                var publishedActivityArray = new Array();
                var currentEditId = -1;

                // 获取所有活动
                $.ajax({
                    url : '/v1/activity',
                    async : false,
                    type : "GET",
                    datatype : "json",
                    success : function (result){

//                        alert(data.object);
//                        var result = data;
//                        alert("get" + result);

                        // failed
                        if(result.success == 0){
                            alert("Get all activities failed : " + result.msg);
                            return false;
                        }else {  //success
                            console.log(result.object.length);
//                            alert(result.object[0].status + result.object[0])
                            for(var i=0; i<result.object.length; i++) {
//                                if(result.object[i].status == 0) {
                                    createdActivityArray.push(result.object[i]);
//                                }else{
//                                    publishedActivityArray.push(result.object[i]);
//                                }
                            }

                        }
                    }
                });



                // clear activity editor ; also cancle the current edit activity
                self.clearActivityInput = function () {
                    self.subject("");
                    self.place("");
                    self.description("");
                    self.manager("");
                    self.contact("");
                    self.startTime(oj.IntlConverterUtils.dateToLocalIso(new Date()));
                    self.endTime(oj.IntlConverterUtils.dateToLocalIso(new Date()));
                    self.currentValue(10);
                    currentEditId = -1;
                    return true;
                }



                // editor 里 发布活动
                self.activityPublish = function (data, event) {
                    alert("Publish an activity!");
                    var createTime = new Date().format('MM/dd/yyyy hh:mm');
                    // 区分editor 是 新建的活动 还是 edit 按钮上来的活动
                    if(currentEditId == -1){  // edit 编辑已有的活动并发布
                        var publishActivityData =
                        {
                            "id":currentEditId,
                            "title": $("#subject").val(),
                            "publisher": $("#subject").val(),
                            "status": 1,
                            "created_at": createTime,
                            "description": $("#activityDescription").val(),
                            "start_time":  $("#startTime").val(),
                            "end_time":  $("#endTime").val(),
                            "activity_place":  $("#place").val(),
                            "manager":  $("#manager").val(),
                            "contact":  $("#contact").val(),
                            "capacity":  $("#capacity").val(),
                            "enrolled": "0"
                        };

                        $.ajax({
                            url : '/v1/activity/' + currentEditId,
                            async : false,
                            type : "PUT",
                            data: JSON.stringify(publishActivityData),
                            datatype : "json",
                            success : function (result){
                                // failed
                                if(result.success == 0){
                                    alert("Publish activity failed : " + result.msg);
                                    return false;
                                }else {  //success
                                    alert("Publish activity success !");
                                }
                            }
                        });
                    }else { // 创建活动并发布
                        var publishActivityData =
                        {
                            "title": $("#subject").val(),
                            "publisher": $("#subject").val(),
                            "status": 1,
                            "created_at": createTime,
                            "description": $("#activityDescription").val(),
                            "start_time":  $("#startTime").val(),
                            "end_time":  $("#endTime").val(),
                            "activity_place":  $("#place").val(),
                            "manager":  $("#manager").val(),
                            "contact":  $("#contact").val(),
                            "capacity":  $("#capacity").val(),
                            "enrolled": "0"
                        };

                        $.ajax({
                            url : '/v1/activity',
                            async : false,
                            type : "POST",
                            data: JSON.stringify(publishActivityData),
                            datatype : "json",
                            success : function (result){
                                // failed
                                if(result.success == 0){
                                    alert("Publish activity failed : " + result.msg);
                                    return false;
                                }else {  //success
                                    alert("Publish activity success !");
                                }
                            }
                        });
                    }

                    return true;
                }

                // editor 里 保存活动
                self.activityCreate = function (data, event) {
                    console.log("Create an activity!");
                    var createTime = new Date().format('MM/dd/yyyy hh:mm');
                    if(currentEditId == -1){  // 创建 并 保存活动
                        var createActivityData =
                        {
                            "title": $("#subject").val(),
                            "publisher": $("#subject").val(),
                            "status": 0,
                            "created_at": createTime,
                            "description": $("#activityDescription").val(),
                            "start_time":  $("#startTime").val(),
                            "end_time":  $("#endTime").val(),
                            "activity_place":  $("#place").val(),
                            "manager":  $("#manager").val(),
                            "contact":  $("#contact").val(),
                            "capacity":  $("#capacity").val(),
                            "enrolled": "0"
                        };

                        $.ajax({
                            url : '/v1/activity',
                            async : false,
                            type : "POST",
                            data: JSON.stringify(createActivityData),
                            datatype : "json",
                            success : function (result){
                                // failed
                                if(result.success == 0){
                                    alert("Create activity failed : " + result.msg);
                                    return false;
                                }else {  //success
                                    alert("Create activity success !");
                                }
                            }
                        });
                    }else{  // 更新 并保存活动
                        var createActivityData =
                        {
                            "id" : currentEditId,
                            "title": $("#subject").val(),
                            "publisher": $("#subject").val(),
                            "status": 0,
                            "created_at": createTime,
                            "description": $("#activityDescription").val(),
                            "start_time":  $("#startTime").val(),
                            "end_time":  $("#endTime").val(),
                            "activity_place":  $("#place").val(),
                            "manager":  $("#manager").val(),
                            "contact":  $("#contact").val(),
                            "capacity":  $("#capacity").val(),
                            "enrolled": "0"
                        };

                        $.ajax({
                            url : '/v1/activity/' + currentEditId,
                            async : false,
                            type : "POST",
                            data: JSON.stringify(createActivityData),
                            datatype : "json",
                            success : function (result){
                                // failed
                                if(result.success == 0){
                                    alert("Create activity failed : " + result.msg);
                                    return false;
                                }else {  //success
                                    alert("Create activity success !");
                                }
                            }
                        });
                    }

                    return true;
                }
/*
//                var publishedActivityArray = [
//                    {
//                        "id": "001",
//                        "title": "This is an long long long long activity title xxxxxxx",
//                        "publisher": "Admin",
//                        "status": "1",
//                        "created_at": "2017-04-01",
//                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
//                        "start_time": "04/08/17 01:00 PM",
//                        "end_time": "04/08/17 03:00 PM",
//                        "activity_place": "Beijing",
//                        "manager": "Vivian",
//                        "contact": "12345678912",
//                        "capacity": "20",
//                        "enrolled": "12"
//    },
//                    {
//                        "id": "014",
//                        "title": "This is an activity title",
//                        "publisher": "Admin",
//                        "status": "1",
//                        "created_at": "2017-04-07",
//                        "description": "This is activity description, contains all details information. Please click the activity title to see more detail, also you can click the right button to enroll.",
//                        "start_time": "05/03/17 10:00 AM",
//                        "end_time": "05/03/17 11:00 AM",
//                        "activity_place": "Beijing",
//                        "manager": "Vivian",
//                        "contact": "12345678912",
//                        "capacity": "20",
//                        "enrolled": "12"
//    }
//];
*/
                // 删除第一个元素 publishedActivityArray.shift();
                // 添加元素到数组的最后 publishedActivityArray.push();

                self.publishedActivityDataSource = new oj.ArrayPagingDataSource(publishedActivityArray);
                self.publishedActivityItems = self.publishedActivityDataSource.getWindowObservable();

                self.unpublishedActivityDataSource = new oj.ArrayPagingDataSource(createdActivityArray);
                self.unpublishedActivityItems = self.unpublishedActivityDataSource.getWindowObservable();



                // Eidt a created activity
                self.editActivity = function (item) {

                    currentEditId = item.id;
                    self.subject(item.title);
                    self.place(item.activity_place);
                    self.description(item.description);

                    self.startTime(oj.IntlConverterUtils.dateToLocalIso(new Date(item.start_time)));
                    self.endTime(oj.IntlConverterUtils.dateToLocalIso(new Date(item.end_time)));
                    self.manager(item.manager);
                    self.contact(item.contact);
                    self.currentValue(item.capacity);
                }

                // Publish a created activity
                self.publishActivity = function (item) {
                    alert(item.id);
                    var createdActivityData =
                    {
                        "id" : item.id,
                        "update_time" : new Date().format('MM/dd/yyyy hh:mm')
                    };
                    alert("Publish a activity" + JSON.stringify(createdActivityData));
                    $.ajax({
                        url : 'v1/activity/'+id,
                        async : false,
                        type : "PUT",
                        data: JSON.stringify(createdActivityData),
                        datatype : "json",
                        success : function (result){
                            // failed
                            if(result.success == 0){
                                alert("Publish activity failed : " + result.msg);
                                return false;
                            }else {  //success
                                alert("Publish activity success !");
                            }
                        }
                    });
                }

                // Delete a published activity
                self.deleteActivity = function (item) {
                    var deleteActivityData =
                    {
                        "id" : item.id,
                    };
                    $.ajax({
                        url : '/v1/activity/' + item.id,
                        async : false,
                        type : "DELETE",
                        data: JSON.stringify(createdActivityData),
                        datatype : "json",
                        success : function (result){
                            // failed
                            if(result.success == 0){
                                alert("Delete activity failed : " + result.msg);
                                return false;
                            }else {  //success
                                alert("Delete activity success !");
                            }
                        }
                    });
//                    alert("Delete an activity" + item.title);
                }

                // cancel published activity 在 published tab 下取消已发布的活动
                self.cancelActivity = function (item) {
                    var deleteActivityData =
                    {
                        "id" : item.id,
                        "status" : "3"
                    };
                    $.ajax({
                        url : '/v1/activity/' + item.id,
                        async : false,
                        type : "PUT",
                        data: JSON.stringify(createdActivityData),
                        datatype : "json",
                        success : function (result){
                            // failed
                            if(result.success == 0){
                                alert("Delete activity failed : " + result.msg);
                                return false;
                            }else {  //success
                                alert("Delete activity success !");
                            }
                        }
                    });
//                    alert("Delete an activity" + item.title);
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
