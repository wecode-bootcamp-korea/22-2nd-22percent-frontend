const { kakao } = window;

export default function KakaoMapScript(latitude, longitude) {
  const container = document.getElementById('myMap');
  const options = {
    center: new kakao.maps.LatLng(latitude, longitude),
    level: 5,
  };
  //map
  const map = new kakao.maps.Map(container, options);
  let markerPosition = new kakao.maps.LatLng(latitude, longitude);

  let marker = new kakao.maps.Marker({
    position: markerPosition,
  });

  marker.setMap(map);
}
