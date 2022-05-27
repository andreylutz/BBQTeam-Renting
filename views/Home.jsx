const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ }) {
  return (
    <Layout>

      <form>
        <p>Выберите категорию:</p>
        <ol className="categories">
          <li>
            <input type="checkbox" name="rooms" />
            Комнаты
          </li>
          <li>
            <input type="checkbox" name="flats" />
            Квартиры
          </li>
          <li>
            <input type="checkbox" name="houses" />
            Дома
          </li>
        </ol>
        <input type="submit" />
      </form>
      <div className="yaMap" id="mapId">
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=fcd06eba-3622-41ec-8467-f7311156bae9&lang=ru_RU"
          type="text/javascript"
        />
        {/* <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript" /> */}
        <script src="../public/js/application.js" />
      </div>
    </Layout>
  );
};
