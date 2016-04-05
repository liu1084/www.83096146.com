对话框组件
======
对话框组件可以创建并显示弹出窗口。

### 使用方法
通过使用$ionicPopup服务的接口来创建并显示不同类型的对话框。

### $ionicPopup服务
$ionicPopup服务控制对话框指令。

方法：

1.  show(options)：创建一个带有按钮组的复杂弹窗，每个按钮带有一个文本和类型字段。

    | 参数    | 类型   | 说明                                                                                                                                                                                                                                                                                                                                                            |
    |---------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | options | object | 对话框选项，属性：1. {string} title：对话框的标题2. {string}subTitle：对话框的子标题3. {string}templateUrl：对话框内的html模板的URL4. {string}template：对话框内的html模板5.{scope}scope：一个链接到弹窗内容的作用域6.{Array[Object]}buttons：放在对话框中的按钮：buttons的属性：{strting}text：按钮显示值{string}type：按钮样式{function}onTap：点击按钮时触发 |

例如：

    angular.module('myApp', ['ionic'])
    .controller(function($scope, $ionicPopup) {
     // 触发一个按钮点击，或一些其他目标
     $scope.showPopup = function() {
       var myPopup = $ ionicPopup.show({
         template: '<input type="password" ng-model="data.wifi">',
         title: 'Enter Wi-Fi Password',
         subTitle: 'Please use normal things',
         scope: $scope,
         buttons: [
           { text: 'Cancel' },
           {
             text: '<b>Save</b>',
             type: 'button-positive',
             onTap: function(e) {
               if (!$scope.data.wifi) {
                 //不允许用户关闭，除非他键入wifi密码
                 e.preventDefault();
               } else {
                  return $scope.data.wifi;
               }
             }
           },
         ]
       });
    });

2.  alert(options)：创建一个带有一段信息和一个用户可以点击关闭对话框的按钮的简单提示对话框。

    | 参数    | 类型   | 说明                                                                                                                                                                                                                                    |
    |---------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | options | object | 对话框选项，属性：1.{string} title：对话框的标题2.{string}subTitle：对话框的子标题3.{string}templateUrl：对话框内的html模板的URL4.{string}template：对话框内的html模板5.{string}okText：按钮文字，默认为’OK’ 6.{string}okType：按钮样式 |

例如：

    angular.module('myApp', ['ionic'])
    .controller(function($scope, $ionicPopup) {
     // 触发一个按钮点击，或一些其他目标
     $scope.showAlert = function() {
         var alertPopup = $ionicPopup.alert({
           title: 'Don\'t eat that!',
           template: 'It might taste good'
         });
         alertPopup.then(function(res) {
           console.log('Thank you for not eating my delicious ice cream cone');
         });
       };
     };
    });

3.  confirm(options)：创建一个带有取消和ok按钮的对话框。

    | 参数    | 类型   | 说明                                                                                                                                                                                                                                                                                                                                    |
    |---------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
    | options | object | 对话框选项，属性：1.{string} title：对话框的标题2.{string} subTitle：对话框的子标题3.{string}templateUrl：对话框内的html模板的URL4.{string} template：对话框内的html模板5.{string} okText：OK按钮文字，默认为’OK’ 6.{string} okType：OK按钮样式7.{string} cancelText：取消按钮的文字，默认为’Cancel’8.{string} cancelType：取消按钮样式 |

例如：

    angular.module('myApp', ['ionic'])
    .controller(function($scope, $ionicPopup) {
     // 触发一个按钮点击，或一些其他目标
     $scope.showConfirm = function() {
         var confirmPopup = $ionicPopup.confirm({
           title: 'Consume Ice Cream',
           template: 'Are you sure you want to eat this ice cream?'
         });
         confirmPopup.then(function(res) {
           if(res) {
             console.log('You are sure');
           } else {
             console.log('You are not sure');
           }
         });
       };
    });