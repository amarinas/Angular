/**
 * Created by amarinas on 3/23/17.
 */


app.controller('newController',
[
    '$scope',
    'friendsFactory',

    function ($scope, friendsFactory) {


        console.log('newController loaded');
        var self = this;
        self.newFriend = {};
        var index = function () {
            friendsFactory.index(function(returnedData){
                self.friends = returnedData;
            });
        };
        index();

        self.create = function () {
            console.log('create friend clicked');
            if (!self.newFriend.name || !self.newFriend.favoriteLanguage) {
                console.log('required fields not present');
                return;
            }
            friendsFactory.create(self.newFriend, function(newFriendAfterServer){
                console.log(self.newFriend);
                self.createdFriend = newFriendAfterServer;
                console.log(newFriendAfterServer);
            });
            console.log('All required fields present, and the self.newFriend on the controller (which is also NC.newFriend on the partial) looks like this:');

            console.log("I haven't sent this information to the server yet.");
        }

    }

]);