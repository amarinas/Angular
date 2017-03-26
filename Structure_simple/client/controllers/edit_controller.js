/**
 * Created by amarinas on 3/23/17.
 */


app.controller('editController',
    [
        '$scope',
        'routeParams',
        'friendsFactory',

        function($scope, $routeParams, friendsFactory) {
            console.log('editController loaded');
            console.log('$routeParams currently looks like this', $routeParams)
            var self = this;
            self.currentFriend = {};


            var findFriend = function () {
                friendsFactory.getFriends($routeParams._id, function (factoryData) {
                    console.log('looking for a friend with id of', $routeParams)
                    self.currentFriend = factoryData;
                });
            }
            findFriend();

            self.update = function () {
                if (!self.currentFriend.name || !self.current().favoriteLanguage) {
                    console.log('not going to factory cause its missing a name or fav language');
                    return;
                }
            }
            friendsFactory.update(self.currentFriend, function (return_data) {
                console.log(return_data);
            });
        }

    ]);