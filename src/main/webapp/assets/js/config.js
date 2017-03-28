require.config({
    baseUrl: '.',                   //js主文件夹路径
    paths: {                           //对应所需文件路径
        'jquery': 'assets/js/jquery-1.10.2', //省略后缀.js
        'club_index': 'assets/js/club_index',
        'bootstrap': "assets/js/bootstrap",
        'ko': 'assets/js/knockout-3.4.2'
        // 'tm': 'assets/js/test.model'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery']
        }
    }

});
require(['jquery',
        'club_index',
        'bootstrap',
        'ko'],
    function ($, clb, bs, ko) {
        var test_name = null;
        var test_address = null;
        var model = new ViewModel();
        /*$.ajax({
            url: "test/2",
            dataType: "json",
            type: "GET",
            success: function (data) {
                alert(data.name + " " + data.address);
                test_name = data.name;
                test_address = data.address;
            },
            error: function () {
                alert("error occurred!")
            }
        }); */
        //Test ViewModel
        function ViewModel() {
            self = this;
            self.name = ko.observable("chehao");
            self.address = ko.observable("oracle");

        }

         ko.applyBindings(new ViewModel());
    });
