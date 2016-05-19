import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './eventosList.html';
 
class EventosListCtrl {
  constructor() {
    this.tasks = [{
      text: 'This is task 1'
    }, {
      text: 'This is task 2'
    }, {
      text: 'This is task 3'
    }];
  }
}
 
export default angular.module('eventosList', [
  angularMeteor
])
  .component('eventosList', {
    templateUrl: 'imports/components/eventosList/eventosList.html',
    controller: EventosListCtrl
  });