/**
 * Created by Sanjanamanoj on 3/8/2016.
 */
"use strict";
(function () {
    angular
        .module("EventSchedulerApp")
        .controller("MyEventsController", MyEventsController);

    function MyEventsController($scope, EventService, $rootScope, $location) {

        $scope.currentUserId = $rootScope.currentUser._id;
        console.log(currentUserId);
        $scope.events = EventService.findAllEventsForUser($scope.currentUserId, function(response){});

$scope.message="hello";
        $scope.addEvent = addEvent;
        $scope.updateEvent = updateEvent;
        $scope.selectEvent = selectEvent;
        $scope.deleteEvent = deleteEvent;


        function addEvent(event) {
            EventService.createEventForUser($scope.currentUserId,{title : event.title}, function(response){});
            EventService.findAllEventsForUser($scope.currentUserId, function(response){
                $scope.events=response;
            });

            $scope.events.push(event);

        }

        function updateEvent(event) {
            EventService.updateEventById(event._id, event, function(response){});

        }

        function selectEvent(index) {
            $scope.event = {
                _id: $scope.events[index]._id,
                title: $scope.events[index].title,
                userId: $scope.events[index].userId
            }
        }

        function deleteEvent(index) {
            EventService.deleteEventById($scope.events[index]._id, function(response){});
            $scope.events.splice(index, 1);
        }

        function id(param) {
            return param;
        }
    }
})();
