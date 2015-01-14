(function(){
	var navbarName = 'Control';

	angular.module('controlApp', [])
	.controller('NavbarController', function($scope){
		//para pegar o nome do escopo
		$scope.getName = function(){
			return navbarName;
		};
		$scope.setName = function(name){
			navbarName = name;
		};
	})
	.controller('TarefasController', function($scope){
		$scope.getTotalTarefas = function(){
			return $scope.tarefas.length;
		};
		$scope.tarefas = [
			{titulo: 'Criar telas do control', created: '2015-01-01 10:00:00'},
			{titulo: 'Testar qualquer problema', created: '2015-01-05 10:00:00'},
			{titulo: 'mudar email de envio', created: '2015-01-05 10:00:00'},
			{titulo: 'atualizar política de privacidade', created: '2015-01-05 10:00:00'},
		]
	});
})();