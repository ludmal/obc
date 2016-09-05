
(function () {
    'use strict';

    angular
        .module('core.module')
        .factory('NotificationService', NotificationService);

    NotificationService.$inject = ['$rootScope', 'Settings'];

    function NotificationService($rootScope, Settings) {
        var notificationService = {};

        var Notification = function (type, message) {
            this.type = type; // 'error | success | warning | info'
            this.message = message;
        };

        notificationService.notifications = {};

        notificationService.getNotifications = function () {
            return notificationService.notifications;
        },

        notificationService.add = function (newNotification) {
            if (newNotification.id) {
                // Named notification (i.e. single, named instance)
                notificationService.remove(newNotification.id);
                notificationService.notifications[newNotification.id] = newNotification;
            } else {
                // Anonymous notification
                var timestamp = new Date().getTime();
                newNotification.id = timestamp;
                notificationService.notifications[timestamp] = newNotification;
            }
            $rootScope.$broadcast('notifications.added', newNotification);
        };

        notificationService.remove = function (id) {
            if (notificationService.notifications[id]) {
                delete notificationService.notifications[id];
                $rootScope.$broadcast('notifications.update');
            }
        };

        notificationService.removeAll = function () {
            notificationService.notifications = {};
            $rootScope.$broadcast('notifications.update');
        };

        return notificationService;
    };

})();