const URL="https://covid19.mathdro.id/api";
let app=angular.module('Myapp',[]);
app.controller('Myctrl',($scope,$http)=>{
//this is controller

$scope.title="Stay Home Stay Safe";

//calling api
console.log('api loaded');
$http.get(URL).then( (response)=>{
    
    console.log(response.data);
    $scope.all_data=response.data;  

},
(error)=>{
    console.log("inside Error");
    console.log(error);
}
);
//get Country code
$scope.get_c_data=()=>{
    let country=$scope.c;
    if(country==""){
        $scope.c_data=undefined;
        return;
    }
    $http.get(`${URL}/countries/${country}`)
    .then((response)=>{
        console.log(response.data);
        $scope.c_data=response.data;
    },
    (error)=>{
        console.log(error);
    });

};

});