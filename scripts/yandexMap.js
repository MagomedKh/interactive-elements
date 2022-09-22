ymaps.ready(() => {
   const map = new ymaps.Map('map', {
      center: [55.44196821343145, 65.37305272775586],
      zoom: 17,
   })

   var myPlacemark = new ymaps.Placemark([55.44196821343145, 65.37305272775586], {}, {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-mark.svg',
      iconImageSize: [28, 40],
      iconImageOffset: [-5, -25]
   });
   map.geoObjects.add(myPlacemark)
})

