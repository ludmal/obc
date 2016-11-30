app.controller('ComponentsCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
        code[i].addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});

app.controller('LangCtrl', function ($scope, $stateParams, ionicMaterialInk) {
    //ionic.material.ink.displayEffect();
    $scope.languages = [
      {
        Title: 'English',
        Value: 'en'
      },
      {
        Title: 'German',
        Value: 'de'
      },
      {
        Title: 'French',
        Value: 'fr'
      },
      {
        Title: 'Chinese',
        Value: 'ch'
      },
      {
        Title: 'Japanese',
        Value: 'jp'
      }
    ]
});

// YOUR OTHER CONTROLLER - NOT CURRENTLY USED
app.controller('DashCtrl', function($scope, $cordovaGeolocation, $http) {

//$scope.lng = window.navigator.userLanguage || window.navigator.language;

        
        $scope.temp = [10, 12, 9, 11];
        $scope.today = new Date();
        $scope.getTemp =function() {
          return $scope.temp[Math.floor(Math.random() * $scope.temp.length)]
        }
        var posOptions = {timeout: 20000, enableHighAccuracy: true}

        $scope.address = '';
        $scope.result = {};

        $scope.where = function(){
            $cordovaGeolocation.getCurrentPosition(posOptions)
            .then(function(position){
                $scope.lat  = position.coords.latitude
                $scope.long = position.coords.longitude
                console.log('lat', $scope.lat);
                console.log('long',$scope.long);  

                var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng($scope.lat, $scope.long);
      var request = {
        latLng: latlng
      };


$scope.map = {
            center: { latitude:$scope.lat, longitude: $scope.long },
            zoom: 14
        };


  $scope.positions = [{
    lat: 43.07493,
    lng: -89.381388
  }];

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });

  $scope.centerOnMe= function(){
  $scope.positions = [];
    
    
    $ionicLoading.show({
      template: 'Loading...'
    });


    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      $scope.positions.push({lat: pos.k,lng: pos.B});
      console.log(pos);
      $scope.map.setCenter(pos);
      $ionicLoading.hide();
    });

  };

      // $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng=' + $scope.lat + ',' + $scope.lng + '&sensor=true').then(function(response){
      // 		$scope.result = response.data.results;
      // 		console.log(response.data);
      // 		console.log('url', 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + $scope.lat + ',' + $scope.lng + '&sensor=true');
      // });

      geocoder.geocode(request, function(data, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (data[0] != null) {
          	console.log(data[0]);
          	$scope.result = data[0];
            $scope.address = data[0].formatted_address;
            $scope.$apply();

          } else {
            $scope.address("No address available");
          }
        }
      })
            }, function(error){
                console.log('error:', error);
            });

        };

ionic.Platform.ready($scope.where);
        // $scope.where();
});

 app.controller('MapCtrl', function($scope, $ionicLoading, $location) {

    console.log('a', $location.search().a);
    console.log('b', $location.search().b);

    $scope.lat = $location.search().a;
    $scope.long = $location.search().b;

    $scope.sources = [
            {
                customerName: "AIR LIQUIDE AUSTRALIA - ALTONA",
                customerNo: "99999944",
                address: "631 KOROROIT CREEK ROAD, ALTONA",
                longi: 144.7927,
                lati: -37.8453,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            },
            {
                customerName: "AIR LIQUIDE AUSTRALIA - LANG LANG (S01)",
                customerNo: "99999944",
                address: "5570 SOUTH GIPPSLAND HWY, LANG LANG",
                longi: 145.61476,
                lati: -38.334134,
                tel: "9290 1100",
                email: "ala@airliquide.com"
            }
        ];

         $scope.map = {
            center: { latitude: $location.search().a, longitude: $location.search().b },
            zoom: 14
        };

$scope.marker = {
      id: 0,
      coords: {
        latitude: -38.334134,
        longitude: 145.61476
      },
      options: { draggable: true },
      events: {
      }
    };


 $scope.createMarker = function (lati, longi) {
            var marker = {
                id: "1",
                coords: {
                    latitude: -38.334134,
                    longitude: 145.61476
                },
                options: {
                    draggable: false
                }
            };

            return marker;
        };

        $scope.markers = [];

        $scope.markers.push($scope.createMarker($location.search().a, $location.search().b))

        console.log($scope.markers);
    });

app.controller('BulkCtrl', function($scope, $http) {

	$scope.items = [];

	$scope.init = function() {
		$http.get('http://test-api-directmoney-development.azurewebsites.net/api/public/agg/B').then(function(response){
			$scope.items = response.data;	
		});
	}

	$scope.init();

});

app.controller('PlantCtrl', function($scope, $http) {

	$scope.items = [];

	$scope.init = function() {
		$http.get('http://test-api-directmoney-development.azurewebsites.net/api/public/agg/P').then(function(response){
			$scope.items = response.data;	
		});
	}

	$scope.init();


});

app.controller('MainCtrl', function($scope, $http, $translate) {

  $scope.items = [];

$scope.lng = window.navigator.userLanguage || window.navigator.language;
 

  $scope.init = function() {
    $http.get('http://test-api-directmoney-development.azurewebsites.net/api/public/agg/P').then(function(response){
      $scope.items = response.data; 
    });
  }

  $scope.init();


});

// CAMERA VIEW CONTROLLER
app.controller('CameraCtrl', function($scope, $cordovaFile, $ionicLoading, $cordovaSocialSharing, $ionicHistory, $ionicLoading, $http, $cordovaGeolocation, $state) {

    
     $scope.data = {
    speechText: ''
  };
  $scope.recognizedText = '';
 
  $scope.speakText = function() {
    TTS.speak({
           text: $scope.data.speechText,
           locale: 'en-GB',
           rate: 1.5
       }, function () {
           // Do Something after success
       }, function (reason) {
           // Handle the error case
       });
  };
  
$scope.record = function() {
    var recognition = new SpeechRecognition();
    recognition.onresult = function(event) {
        if (event.results.length > 0) {
            $scope.recognizedText = event.results[0][0].transcript;
            $scope.$apply()
        }
    };
    recognition.start();
  };

    $scope.$on("$ionicView.enter", function(event) {
          $ionicHistory.clearCache();
          $ionicHistory.clearHistory();
    });


        $scope.products = [
            { key: 'LIN', value: 'LIN' },
            { key: 'LOX', value: 'LOX' },
            { key: 'LAR', value: 'LAR' },
            { key: 'LCO2', value: 'LCO2' },
            { key: 'H2', value: 'H2' },
            { key: 'LOX Medical', value: 'LOX Medical' },
            { key: 'LIN Medical', value: 'LIN Medical' }
        ];


   // LOAD IMAGE FROM THE CAMERA
   $scope.takePhoto = function(type) {
		
		var image = new Image();

		if ( type == "Camera" )
			type = navigator.camera.PictureSourceType.CAMERA ;
		else type = navigator.camera.PictureSourceType.PHOTOLIBRARY ;
	
		navigator.camera.getPicture(function(imageURI) {
	
			 image.onload = function() {
				
				 $scope.imageSRC = image ;
		
				  var canvas =  document.getElementById('myCanvas');
				  canvas.width = image.width;
				  canvas.height = image.height;

				  var ctx = canvas.getContext("2d");
				  ctx.drawImage(image, 0,0, image.width,image.height); // DRAW THE IMAGE ONTO CANVAS      
				 
				  // READING METADATA FROM IMAGE	
				  EXIF.getData(image, function() {
					console.log("in exif " +  JSON.stringify(this));
					});
				  
				$scope.cleanUp(); // CLEAN UP IMAGES TAKEN
			};
		
			image.src = imageURI ; // LOAD THE IMAGE OBJECT
 
			}, function(message) { //ERROR HANDLER
				console.log("error " + message);
				
			}, { // CAMERA OPTIONS
				quality:50,
				sourceType: type,
				encodingType: Camera.EncodingType.JPEG,
				correctOrientation: true,
				destinationType: Camera.DestinationType.FILE_URI
			});
}

	$scope.cleanUp = function(){ // CLEAN UP PHOTOS TAKEN
		
		navigator.camera.cleanup(onSuccess, onFail);

			function onSuccess() {
				console.log("Camera cleanup success.")
			}

			function onFail(message) {
				alert('Failed because: ' + message);
			}
	}
		

  // ROTATE IMAGE FUNCTION
  $scope.rotateImage = function(degree){

     $ionicLoading.show({
            template: 'Working...'
      });

      // DEPENDING ON THE SIZE OF THE IMAGE, THE ROTATION CAN ALSO BE CPU HEAVY
      // BECAUSE IT NEEDS TO REDRAW THE IMAGE
      
      setTimeout( function() { // SET A TIMEOUT SO THAT THE LOADING POPUP CAN BE SHOWN

		  var image = $scope.imageSRC ;

		  image.onload = null ; // remove the onload handler
	 
		  var canvas =  document.getElementById('myCanvas');

		  // swap the width and height for 90 degree rotation
		  canvas.width = image.height;
		  canvas.height = image.width;

		  var ctx = canvas.getContext("2d");

		  // translate context to center of canvas
		  ctx.translate(image.height / 2, image.width / 2);
		  ctx.rotate((Math.PI/180) * degree); // rotate image

		  // draw the new rotated image
		  ctx.drawImage(image, - image.width / 2, - image.height / 2, image.width, image.height);

		  $scope.imageSRC.src = canvas.toDataURL(); // save the new original image

      }, 100);

      setTimeout( function() {$ionicLoading.hide();},100); // HIDE THE POPUP AFTER IT'S DONE
  }

  $scope.itemType = false;

$scope.item = {
	AggreType: $scope.itemType ? 'P' : 'B',
	AggBase: '',
	Agg1: '',
	Agg2: '',
	Agg3: '',
	Agg4: '',
	Agg5: '',
	Agg6: '',
	Agg7: '',
  Product:'asdfasdf',
  Supplier:'',
  Tank:'',
  Market:'',
  CylinderRequired: false,
  InSalesForce: false,
  InBarPlus: false,
  Remarks:'',
  Website:''
}

$scope.setProduct= function(product){
  $scope.item.Product = product;
  console.log('product', product);
};

$scope.setCylinderRequired= function(val){
  $scope.item.CylinderRequired = val;
  console.log('CylinderRequired', val);
};

$scope.setSalesForce= function(val){
  $scope.item.InSalesForce = val;
  console.log('CylinderRequired', val);
};

$scope.setBar= function(val){
  $scope.item.InBarPlus = val;
  console.log('CylinderRequired', val);
};

$scope.setTank= function(tank){
  $scope.item.Tank = tank;
  console.log('tank', tank);
};

$scope.setSupplier= function(sup){
  $scope.item.Supplier = sup;
  console.log('sup', sup);
};

$scope.setMarket= function(market){
  $scope.item.Market = market;
  console.log('market', market);
};

$scope.saveItem = function() {
    if($scope.item.Agg1 == '') {
        alert('Please enter valid Name');
        return;
    }

	$scope.item.AggBase = $scope.picture;
	$scope.item.AggreType = $scope.itemType ? 'P' : 'B';
	$http.post('http://test-api-directmoney-development.azurewebsites.net/api/public/agg', $scope.item).then(function(response){
		$state.go('app.main');
	})
}


var posOptions = {timeout: 20000, enableHighAccuracy: true}

        $scope.address = '';

        $scope.where = function(){
            $cordovaGeolocation.getCurrentPosition(posOptions)
            .then(function(position){
                $scope.lat  = position.coords.latitude
                $scope.long = position.coords.longitude
                console.log('lat', $scope.lat);
                console.log('long',$scope.long);  

                var geocoder = new google.maps.Geocoder();
      var latlng = new google.maps.LatLng($scope.lat, $scope.long);
      var request = {
        latLng: latlng
      };
      geocoder.geocode(request, function(data, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          if (data[0] != null) {
          	$scope.item.Agg2 = data[0].address_components[0].long_name + ' ' + data[0].address_components[1].long_name;
          	$scope.item.Agg3 = data[0].address_components[2].long_name;
          	$scope.item.Agg4 = data[0].address_components[6].long_name;
            $scope.item.Agg5 = data[0].address_components[5].long_name;
            $scope.item.Agg6 = $scope.lat;
          	$scope.item.Agg7 = $scope.long;

            $scope.address = data[0].formatted_address;

            console.log('address', data[0]);
            $scope.$apply();

          } else {
            $scope.address("No address available");
          }
        }
      })
            }, function(error){
                console.log('error:', error);
            });

        };

        $scope.where();

  // SHARE OR SAVE PHOTO FUNCTION
  $scope.sharePhoto = function(){
   
  	if ( ionic.Platform.isAndroid() ) { // SAVE FOR ANDROID
  	   window.canvas2ImagePlugin.saveImageDataToLibrary(
                        function(msg){
                            alert("Photo Saved!");
                        }, 
                        function(err){
                            alert(err);
                        }, 
                        'myCanvas'
                    );
	}
	else{ // SHARE SHEET WORKS FOR IOS ONLY

  	    var canvas =  document.getElementById('myCanvas');
	  	var dataURL = canvas.toDataURL();

		$cordovaSocialSharing
			.share("title", "message", dataURL, "link") // Share via native share sheet
			.then(function(result) {
				// Success!
			}, function(err) {
			  // An error occured. Show a message to the user
		  	});
  		}
	}

$scope.picture = '';

	$scope.changePicture = function() {

            console.log('changePicture');

        navigator.camera.getPicture(onSuccess, onFail,
            {
                sourceType : Camera.PictureSourceType.CAMERA,
                correctOrientation: true,
                quality: 75,
                targetWidth: 200,
                destinationType: Camera.DestinationType.DATA_URL,
                encodingType: Camera.EncodingType.PNG,
                saveToPhotoAlbum:false
            });
        function onSuccess(imageData) {
            $scope.picture = "data:image/png;base64," + imageData;
            $scope.$apply();
        }

        function onFail(message) {
            console.log('Failed because: ' + message);
        }
    };	
});