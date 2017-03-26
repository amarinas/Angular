console.log('Friends Factory');
app.factory('friendsFactory', ['$http', function($http){
    var friends =[];
    var friend = {};
    function FriendsFactory(){
        var _this = this;

    this.create= function(newFriend, callback){
        console.log(newFriend);
        $http.post('/friends', newFriend).then(function (return_data) {
            console.log(return_data);
            friend = returned_data.data;
            console.log(friend);

            if(typeof(callback)== 'function'){
                callback(return_data.data);
            }

        });
    };
    this.update = function(editedFriend, callback){
    $http
        .put('/friends/' + editedFriend.id, { name: editedFriend.name, favoriteLanguage: editedFriend.favoriteLanguage})
        .then(function(returned_data){
            friends = returned_data.data;
            if(typeof(callback)== 'function'){
                callback(friends);
            }
        });
    };


    this.index = function(callback){
        //this method when you want to update or set friends variable
        $http.get('/friends').then(function(return_data){
            console.log(return_data.data);
            callback(friends);
        });
    }
    this.getFriends= function(friendId, callback){
        console.log(friend);
        $http.get('/friends/'+friendId).then(function(returned_data){
            friend = returned_data.data;
            callback(friend);
        })
    };

    this.addFriend = function(item){
    frineds.push(item);

    };


    }

    console.log(new FriendsFactory());
    return new FriendsFactory();
}])