/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
  'ojs/ojoffcanvas', 'ojs/ojdialog'],
    function (oj, ko) {
        function ControllerViewModel() {
            var self = this;

            // Media queries for repsonsive layouts
            var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
            self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
            var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
            self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

            // Router setup
            self.router = oj.Router.rootInstance;
            self.router.configure({
                'hotActivities': {
                    label: 'Hot Activities',
                    isDefault: true
                },
                'activities': {
                    label: 'Activities'
                },
                'announcements': {
                    label: 'Announcements'
                },
                'feedback': {
                    label: 'Feedback'
                }
            });
            oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

            // Navigation setup
            var navData = [
                {
                    name: 'Hot Activities',
                    id: 'hotActivities',
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-fire-icon-24'
                },
                {
                    name: 'Activities',
                    id: 'activities',
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-catalog-icon-24'
                },
                {
                    name: 'Announcements',
                    id: 'announcements',
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-info-icon-24'
                },
                {
                    name: 'Feedback',
                    id: 'feedback',
                    iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-edit-icon-24'
                }
      ];
            self.navDataSource = new oj.ArrayTableDataSource(navData, {
                idAttribute: 'id'
            });

            // Drawer
            // Called by nav drawer option change events so we can close drawer after selection
            self.navChangeHandler = function (event, data) {
                if (data.option === 'selection' && data.value !== self.router.stateId()) {
                    self.toggleDrawer();
                }
            }
            // Close offcanvas on medium and larger screens
            self.mdScreen.subscribe(function () {
                oj.OffcanvasUtils.close(self.drawerParams);
            });
            self.drawerParams = {
                displayMode: 'push',
                selector: '#navDrawer',
                content: '#pageContent'
            };
            // Called by navigation drawer toggle button and after selection of nav drawer item
            self.toggleDrawer = function () {
                return oj.OffcanvasUtils.toggle(self.drawerParams);
            }

            // Header
            // Application Name used in Branding Area
            self.appName = ko.observable("OCH Club");
            // User Info used in Global Navigation area
            self.userLogin = ko.observable("");
            $("#dropdownList_id").hide();
            //login
            $('#loginSubmitButon').click(function login(){

                var userName = $('#username').val();
                var password = $('#password').val();
                var loginData = {"username":userName, "password":password}
                if(userName.length < 3 || password.length < 3){
                    alert("请输入有效的用户名密码！");
                    return;
                }

                $.ajax({
                    url : 'v1/userInfo',
                    async : false,
                    type : "GET",
                    data : loginData,
                    datatype : "json",
                    success : function (data){
                       if(data.success == 1){
                            //TODO sign in label 去掉，添加用户名显示在页面
                            $('#loginRegisterModal').modal('hide');
                            $("#signin_id").hide();
                            $("#dropdownList_id").show();
                            self.userLogin(userName);
                            //todo 放到cookie 里保存用户登录状态

                            //TODO 刷新页面，获取最新的 活动 和 通知 列表
//                            location.reload();

                       }else {
                           //TODO 通知用户 用户名密码错误
                       }
                    }
                });


            });

           //register
           $('#registerId').click(function register(){

                var userName = $('#usernamesignup').val();
                var email = $('#emailsignup').val();
                var password = $('#passwordsignup').val();
                var passwordConfirm = $('#passwordsignup_confirm').val();

                //validation
                if(userName == "" || email == "" || password == "" || passwordConfirm == ""){
                    alert("不能有空值！");
                    return;
                }

                var registerData = {"username":userName, "email":email, "password": password}
                //register
                $.ajax({
                    url : '/v1/userInfo',
                    async : false,
                    type : "POST",
                    data : registerData,
                    datatype : "json",
                    success : function (data){
                       if(data.success == 1){
                             //TODO sign in label 去掉，添加用户名显示在页面
                             $('#loginRegisterModal').modal('hide');
                             $("#signin_id").hide();
                             $("#dropdownList_id").show();
                             self.userLogin(userName);
                             //todo 放到cookie 里保存用户登录状态

                             //TODO 刷新页面，获取最新的 活动 和 通知 列表
//                             location.reload();

                        }else {
                            //TODO
                        }
                    }
                });
            });

            //Sign out
            $("#out").click(function singOut(){
                 $("#signin_id").show();
                 self.userLogin("");
                 $("#dropdownList_id").hide();
                 //todo 把放到cookie 里的用户名ID去掉

                 //TODO 刷新页面，获取最新的 活动 和 通知 列表
//                 location.reload();

            });


            // goto user center
            self.userMenuItemSelect = function (event, ui) {
                var selectItem = ui.item.children("a").text();
                if (selectItem == "My Activity") {
                    window.location.href = "userCenter.html";
                } else if (selectItem == "My Subscription") {
                    window.location.href = "userCenter.html?root=mySubscription";
                } else if (selectItem == "My Announcement") {
                    window.location.href = "userCenter.html?root=myAnnouncement";
                }

            };

            // open login dialog
            //            self.loginClick = function () {
            //                $("#loginDialog").ojDialog("open");
            //                return true;
            //            }
            // close login dialog
            //            self.loginSuccess = function () {
            //                $("#loginRegisterModal").style.display = 'none';
            //            }


            // Footer
            function footerLink(name, id, linkTarget) {
                this.name = name;
                this.linkId = id;
                this.linkTarget = linkTarget;
            }
            self.footerLinks = ko.observableArray([
        new footerLink('About Oracle', 'aboutOracle', 'http://www.oracle.com/us/corporate/index.html#menu-about'),
        new footerLink('Contact Us', 'contactUs', 'http://www.oracle.com/us/corporate/contact/index.html'),
        new footerLink('Legal Notices', 'legalNotices', 'http://www.oracle.com/us/legal/index.html'),
        new footerLink('Terms Of Use', 'termsOfUse', 'http://www.oracle.com/us/legal/terms/index.html'),
        new footerLink('Your Privacy Rights', 'yourPrivacyRights', 'http://www.oracle.com/us/legal/privacy/index.html')
      ]);
        }

        return new ControllerViewModel();
    }
);
