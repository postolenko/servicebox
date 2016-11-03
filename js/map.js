if( document.getElementsByClassName("map-box")[0] ) {

			var map;
			var map3;

			var marker;
			var image = 'img/marker.png';

			var styles;

			function initMap() {

				var styles = [
				    {
				        "featureType": "poi",
				        "elementType": "labels",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    },
				    {
				        "featureType": "poi.business",
				        "elementType": "all",
				        "stylers": [
				            {
				                "visibility": "off"
				            }
				        ]
				    }
				];

				var styledMap = new google.maps.StyledMapType(styles,
				{name: "Styled Map"});

				map = new google.maps.Map(document.getElementById('map'), {
					center: {lat: 55.895924, lng: 37.6017443},
					// 59.9711252,30.2972661
					scrollwheel: false,
					scaleControl: false,
					zoom: 14
				});

				map = new google.maps.Map(document.getElementById('map2'), {
					center: {lat: 55.895924, lng: 37.6017443},
					// 59.9711252,30.2972661
					scrollwheel: false,
					scaleControl: false,
					zoom: 14
				});

				map3 = new google.maps.Map(document.getElementById('map3'), {
					center: {lat: 55.895924, lng: 37.6017443},
					// 59.9711252,30.2972661
					scrollwheel: false,
					scaleControl: false,
					zoom: 14
				});

				marker = new google.maps.Marker({
					map: map,
					draggable: false,
					animation: google.maps.Animation.DROP,
					position: {lat: 55.895924, lng: 37.6017443},
					map: map,
					icon: image,
					title: 'Novaton'
				});

				marker.addListener('click', toggleBounce);

				//Associate the styled map with the MapTypeId and set it to display.
				map.mapTypes.set('map_style', styledMap);
				map.setMapTypeId('map_style');


			}

				function toggleBounce() {
				  if (marker.getAnimation() !== null) {
				    marker.setAnimation(null);
				  } else {
				    marker.setAnimation(google.maps.Animation.BOUNCE);
				  }
				}

		}

