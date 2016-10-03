jamApp.factory('ApiFactory', function() {
  var obj = {};
  var socket = io();
  obj.socket = socket;
  return obj;
});
