import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './eventosList.html';
 
import { Eventos } from '../../api/eventos.js';

eventos = Eventos
class EventosListCtrl {

  constructor($scope) {
    $scope.viewModel(this);
    this.helpers({
      eventos() {
        retorno= Eventos.find({});
        console.log(retorno);
        return retorno;
      }
    })
  }
}
 
export default angular.module('eventosList', [
  angularMeteor
]).component('eventosList', {
    templateUrl: 'imports/components/eventosList/eventosList.html',
    controller: EventosListCtrl
  });