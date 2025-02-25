import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./styles.css";

// 環境変数からアクセストークンを取得
// process.envはWebpackビルド時に実際の値に置き換えられます
mapboxgl.accessToken = process.env.MAPBOX_ACCESS_TOKEN;

// 環境変数が適切に設定されているか確認
console.log("Mapbox token loaded:", mapboxgl.accessToken ? "Yes" : "No");

// 地図の初期化

if (!mapboxgl.accessToken) {
  console.error("Mapboxトークンが設定されていません。");
  document.getElementById("map").innerHTML =
    '<div class="error-message">Mapboxアクセストークンが設定されていません。</div>';
} else {
  // 地図の初期化
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [139.767, 35.6814], // 東京
    zoom: 12,
  });

  // コントロールの追加
  map.addControl(new mapboxgl.NavigationControl());
}
// 地図がロードされたときのイベント
map.on("load", () => {
  console.log("Map loaded successfully");
});
