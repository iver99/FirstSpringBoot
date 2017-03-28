define(['jquery',
        'club_index',
        'bootstrap',
        'ko']
    , function TestDataSource($, clb, bs, ko) {
        var self = this;
        self.name = null;
        self.address = null;

        function loadData(){
            alert("loading...");
            self.name = ko.observable("chehao");
            self.address = ko.observable("oracle");
            /*$.ajax({
                url: "test/2",
                dataType: "json",
                type: "GET",
                success: function (data) {
                    self.name = ko.observable(data.name);
                    self.address = ko.observable(data.address);
                },
                error: function () {
                    alert("error occurred!")
                }
            });*/
        }

        function func(){
            alert("func1");
        }
    });