const React = require('react');
const Layout = require('./Layout');

module.exports = function Map() {
  return (
    <Layout>
      <div id="map" className="map" />
      <script
        src="https://api-maps.yandex.ru/2.1/?apikey=fcd06eba-3622-41ec-8467-f7311156bae9&lang=ru_RU"
        type="text/javascript"
      />
    </Layout>
  );
};
