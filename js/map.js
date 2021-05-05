ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [55.41455704138744,37.90076808204525],
        zoom: 16
    });
    var myPlacemark = new ymaps.Placemark([[55.41455704138744,37.90076808204525]], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'map_marker_blue.svg',
        iconImageSize: [30, 42],
        iconImageOffset: [-3, -42],
    });
    
    myMap.geoObjects.add(myPlacemark);
    
}