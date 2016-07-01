import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './eventosList.html';
 
import { Eventos } from '../../api/eventos.js';

eventos = Eventos
class EventosListCtrl {

  constructor($scope) {
    $scope.viewModel(this);
    $scope.searchEvento=null;
    this.helpers({
      eventos() {
        if($scope.searchEvento) return Eventos.find({nome: $scope.searchEvento});
        else return Eventos.find();
      }
    });
  }

  addEvento(newEvento) {
    if(!newEvento) {
      alert("Por favor, dê um nome ao evento");
      return;
    }
    Eventos.insert({
      nome: newEvento,
      imageData: imageData,
      createdAt: new Date
    });
    this.newEvento = '';
  };

  remEvento(id) {
    Eventos.remove(id);
  };
  
}
 
export default angular.module('eventosList', [
  angularMeteor
]).component('eventosList', {
    templateUrl: 'imports/components/eventosList/eventosList.html',
    controller: EventosListCtrl
  });