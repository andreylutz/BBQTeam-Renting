const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ arrTypes }) {
  return (
    <Layout>
      <form method="GET" action="" className="js-categoriesForm">
        <p>Выберите категорию:</p>
        <ol className="categories">
          {
            arrTypes.map((type) => (
              <li key={type.id}>
                <input type="checkbox" className="js-checkbox" id={type.id} name={type.id} checked />
                {type.name}
              </li>
            ))
          }
        </ol>
        <input type="submit" />
      </form>
      <div className="yaMap" id="mapId">
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=fcd06eba-3622-41ec-8467-f7311156bae9&lang=ru_RU"
          type="text/javascript"
        />
        <script src="../public/js/application.js" />
      </div>
    </Layout>
  );
};
