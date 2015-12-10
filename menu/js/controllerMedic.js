angular.module("myApp", []).controller("AppCtrl", function($scope){
	$scope.nuevoMedicamento = {};
	$scope.medicamentos = [];

	$scope.addMedic = function(){
		if(Object.keys($scope.nuevoMedicamento).length != 0){
			$scope.medicamentos.push($scope.nuevoMedicamento);
			$scope.nuevoMedicamento = {};
		}
	};

	$scope.remove = function(index){
		$scope.medicamentos.splice(index, 1);
	}
});