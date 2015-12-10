angular.module("myApp", []).controller("AppCtrl", function($scope){
	$scope.nuevoMedicamento = {};
	$scope.medicamentos = [];
	$scope.modificando = false;

	$scope.addMedic = function(){
		if(Object.keys($scope.nuevoMedicamento).length != 0){
			if(!$scope.modificando){
				$scope.medicamentos.push($scope.nuevoMedicamento);
				$scope.nuevoMedicamento = {};
			}else{
				$scope.medicamentos[$scope.pos] = $scope.nuevoMedicamento;
				$scope.nuevoMedicamento = {};
				$scope.modificando = false;
			}
		}
	};

	$scope.remove = function(index){
		$scope.medicamentos.splice(index, 1);
	};

	$scope.edit = function(index){
		$scope.nuevoMedicamento = $scope.medicamentos[index];
		$scope.modificando = true;
		$scope.pos = index;

	};
});