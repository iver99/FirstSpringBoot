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

        //Test ViewModel
        function TestViewModel() {
            self = this;
            self.name = ko.observable();
            self.address = ko.observable();

        }
        var viewModel = new TestViewModel();
        ko.applyBindings(viewModel);
        $.ajax({
            url: "test/1",
            dataType: "json",
            type: "GET",
            success: function (data) {
                viewModel.name(data.name);
                viewModel.address(data.address);
            },
            error: function () {
                console.error("error occurred when request test API")
            }
        });



    });
