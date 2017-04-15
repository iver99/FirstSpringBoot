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

            //register
//            $('#registerId').click(function register(){
//
//                var userName = $('#usernamesignup').val();
//                var email = $('#emailsignup').val();
//                var password = $('#passwordsignup').val();
//                var passwordConfirm = $('#passwordsignup_confirm').val();
//
//                //validation
//                if(userName == "" || email == "" || password == "" || passwordConfirm == ""){
//                    alert("不能有空值！");
//                    return;
//                }
//                // TODO 校验的话，考虑添加友好的界面，暂不管
////                if(userName.length < 6){
////                    alert("用户名长度不得小于6个字符，请重新输入！");
////                    $('#usernamesignup').val("");
////                    return;
////                }
////                if(password != passwordConfirm) {
////                    alert("两次输入的密码不同，请重新输入！");
////                    $('#passwordsignup').val("");
////                    $('#passwordsignup_confirm').val("");
////                    return;
////                }
////                if(!/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)) {
////                   alert("邮箱格式错误，请重新输入！");
////                   $('#emailsignup').val("");
////                   return;
////                }
////                if(password.length < 6) {
////                    alert("密码长度需大于6位，请重新输入密码！");
////                    $('#passwordsignup').val("");
////                    $('#passwordsignup_confirm').val("");
////                    return;
////                }
//
//                var registerData = {"userName":userName, "email":email, "password": password}
//                //register
//                $.ajax({
//                    url : '/v1/register',
//                    async : false,
//                    type : "POST",
//                    data : registerData,
//                    datatype : "json",
//                    success : function (data){
//                        if(data.success == 1){
//                            //TODO sign in label 去掉，添加用户名显示在页面，并把用户ID存好
//                            $('#loginRegisterModal').modal('hide');
//                        }else {
//                            // nothing to do ..
//                        }
//                    }
//                });
//            });

//            //login
//            $('#loginSubmitButon').click(function login(){
//
//                var userName = $('#username').val();
//                var password = $('#password').val();
//                var loginData = {"userName":userName, "password":password}
//                if(userName.length < 6 || password.length < 6){
//                    alert("请输入有效的用户名密码！");
//                    return;
//                }
//
//                if(userName == "KarenKim" && password == "111111") {
//                    $("#userIdFromServer").val("12");
//                    $("#signin_id").hide();
////                    $("#signout_id").show();
////                    $("#signin_username_id").val(userName);
////                    $("#signin_username_id").show();
//                    $('#loginRegisterModal').modal('hide');
//                    $("#userMenu").val() = userName;
//                 }
////                $.ajax({
////                    url : '',
////                    async : false,
////                    type : "GET",
////                    data : loginData,
////                    datatype : "json",
////                    success : function (data){
////                       if(data.success == 1){
////                            //TODO sign in label 去掉，添加用户名显示在页面
////                            $('#loginRegisterModal').modal('hide');
////
////                            // TODO 刷新页面，获取最新的 活动 和 通知 列表
////
////
////                       }else {
////                           //TODO 通知用户 用户名密码错误
////                       }
////                    }
////                });
//            });

            //Active hot activity slide
            $('#carousel-example').carousel({
                interval: 3000 // THIS TIME IS IN MILLI SECONDS
            });

        });


    }
);
