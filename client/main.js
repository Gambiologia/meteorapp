import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-component';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import eventosList from '../imports/components/eventosList/eventosList';
import { Eventos } from '../imports/api/eventos.js';
import 'angular-material/angular-material.css';

//import '../imports/startup/accounts-config.js';

var app = angular.module('meteorapp', [
  angularMeteor,ngMaterial,uiRouter,
  eventosList.name
]);

app.controller("cameraCtrl", ['$scope', '$meteor',
	function($scope, $meteor){

	$scope.addEvento = function() {
	    if(!$scope.newEvento) {
	      alert("Por favor, dê um nome ao evento");
	      return;
	    }
	    Eventos.insert({
	      nome: $scope.newEvento,
	      imageData: $scope.imageData,
	      createdAt: new Date
	    });
	    $scope.imageData=null;
	    $scope.newEvento = '';
	  };

	  $scope.takePicture = function(){
	    $meteor.getPicture().then(function(data){
	      $scope.imageData = data;
	    });
	  };

}]);


// log sent messages
var _send = Meteor.connection._send;
Meteor.connection._send = function (obj) {
console.log("send", obj);
_send.call(this, obj);
};

// log received messages
Meteor.connection._stream.on('message', function (message) { 
console.log("receive", JSON.parse(message)); 
});

// TODO: Add 'accounts.ui'
