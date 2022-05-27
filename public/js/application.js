/* eslint-disable no-loop-func */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
async function init() {
  const map = new ymaps.Map('mapId', {
    center: [59.94627076602441, 30.359373585863374],
    zoom: 16,
  });
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  // map.controls.remove('searchControl'); // удаляем поиск
  // map.controls.remove('geolocationControl'); // удаляем геолокацию
  // map.controls.remove('typeSelector'); // удаляем тип
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  // map.controls.remove('rulerControl'); // удаляем контрол правил

  const response = await fetch('/api/map');
  const { arrAdresses } = await response.json();
  console.log(arrAdresses);
  // console.log(arrAdresses[0].addresses);
  // const addr = arrAdresses.map((el) => el.address.split('\n').join(' '));
  // console.log(addr);

  for (let i = 0; i < arrAdresses.length; i += 1) {
    const place = arrAdresses[i].address;
    const desc = arrAdresses[i].description;
    const price = arrAdresses[i].rentalPrice;
    const { photo } = arrAdresses[i];
    ymaps.geocode(place)
      .then((res) => {
        const firstGeoObject = res.geoObjects.get(0);
        const coords = firstGeoObject.geometry.getCoordinates();

        console.log(firstGeoObject);
        console.log(`${coords} ${desc} ${price}`);
        const placemark = new ymaps.Placemark(
          coords,
          {
            balloonContent: `
          <div>
          <ul>
          <li>Описание: ${desc}</li>
          <li>Цена за сутки: ${price}</li>
          <li>Фото: ${photo}</li>
          <li>Адрес: ${place}</li>
          </ul>
          
          </div>
        
        `,
          },
          {
            iconLayout: 'default#image',
            iconImageHref: 'https://cdn-icons.flaticon.com/png/512/5973/premium/5973800.png?token=exp=1653589061~hmac=e76f612cfdbae978049c6a407bc714e0',
            iconImageSize: [40, 40],
            iconImageOffset: [0, 0],
          },
        );
        map.geoObjects.add(placemark);
      });
  }
  // for (let i = 0; i < arrAdresses)

  // for (let j = 0; j < addr.length; j += 1) {
  //   const placemark = new ymaps.Placemark(coords, {
  //     balloonContent:
  //   });
  // }
  // });
  // }
}

ymaps.ready(init);
