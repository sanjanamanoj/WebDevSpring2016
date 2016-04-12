(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController",ProfileController);

    function ProfileController($location,  UserService) {
        var vm = this;
        vm.update = update;
        vm.cu=null;


        function init() {
            UserService.getCurrentUser()
                .then(
                    function(response){
                        vm.cu = response.data;
                        if (vm.cu == null) {
                            $location.url("/home");
                        }
                    }
                );
        }
        return init();

        function update(user) {
            var emails = user.emails.toString();
            emails = emails.split(",");
            user.emails=emails;
            UserService
                .updateUser(user._id,user)
                .then(function(response){
                    if(response.data) {
                        UserService
                            .setCurrentUser(user);
                        $location.url("/profile");
                    }
                });
        }

    }
})();