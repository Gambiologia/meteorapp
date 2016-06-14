import angular from 'angular';
import angularMeteor from 'angular-meteor';
import 'angular-component';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import eventosList from '../imports/components/eventosList/eventosList';
import '../imports/api/eventos.js';
import 'angular-material/angular-material.css';
//import '../imports/startup/accounts-config.js';

angular.module('meteorapp', [
  angularMeteor,ngMaterial,uiRouter,
  eventosList.name
]);

// TODO: Add 'accounts.ui'
