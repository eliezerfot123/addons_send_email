app.controller('ContactController', function ($scope, $http) {
    $scope.result = 'hidden'
    $scope.resultMessage;
    $scope.formData; //FormData es un objeto que contiene el nombre, correo electrónico, el teléfono y el mensaje
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //se usa para que  los errores se muestren de forma que sólo después de que el formulario se ha sido enviado
    $scope.submit = function(contactform) {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
        if (contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'http://localhost/addons/',
                data    : $.param($scope.formData),  
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //establecer los encabezados de información que pasa angular de los datos del formulario (no solicitar la carga es útil)
            }).success(function(data){
                console.log(data);
                if (data.success) { 
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
                }
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Por favor rellene todos los campos';
            $scope.result='bg-danger';
        }
    }
});