/*
var $scope = {name:'zfpx'};
with($scope){
    console.log(name);
}*/

var show = true;
function fn(){
    var show = false;
    console.log(show);
}
fn();