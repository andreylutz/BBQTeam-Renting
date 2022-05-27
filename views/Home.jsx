const React = require('react');
const Layout = require('./Layout');
const PropList = require('./PropList');

module.exports = function Home({ properties }) {
  return (
    <Layout>
      <div className="row">
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
      </div>
      <div className="row">
        <div className="col col-3">
          <div className="yaMap" id="mapId">
            <script
              src="https://api-maps.yandex.ru/2.1/?apikey=fcd06eba-3622-41ec-8467-f7311156bae9&lang=ru_RU"
              type="text/javascript"
            />
            {/* <script src="https://yandex.st/jquery/2.2.3/jquery.min.js" type="text/javascript" /> */}
            <script src="../public/js/application.js" />
          </div>
        </div>
        <div className="col">
          <PropList items={properties} />
        </div>
      </div>
    </Layout>
  );
};
