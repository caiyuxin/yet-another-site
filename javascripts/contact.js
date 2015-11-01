var Contact = angular.module("Contact", []);

Contact.controller('ContactController', ['$scope', '$sce', function($scope, $sce) {
  $scope.url_set = {
    main:  $sce.trustAsResourceUrl('http://yuntu.amap.com/share/uiAf6z'),
    west:  $sce.trustAsResourceUrl('http://yuntu.amap.com/share/ZbEfAf'),
    south: $sce.trustAsResourceUrl('http://yuntu.amap.com/share/B3IRfm')
  };
  $scope.address_set = {
    main:  '陕西省西安市太白南路2号 西安电子科技大学北校区主楼I区150室/151室',
    west:  '陕西省西安市太白南路2号 西安电子科技大学北校区西大楼III区511室/517室',
    south: '陕西省西安市西沣路266号 西安电子科技大学南校区G楼520室/524室'
  };
  $scope.page = 'main';
  $scope.url = $scope.url_set['main'];
  $scope.address = $scope.address_set['main'];
  $scope.set_page = function(page) {
    $scope.url = $scope.url_set[page];
    $scope.address = $scope.address_set[page];
    $scope.page = page;
  }
}]);

