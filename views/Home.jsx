const React = require('react');
const Layout = require('./Layout');
const PropList = require('./PropList');


module.exports = function Home({ arrTypes, properties }) {
  return (
    <Layout>
    <div className='row'>
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
</div>
<div className="row>
<div className="col col-3">
      <div className="yaMap" id="mapId">
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=fcd06eba-3622-41ec-8467-f7311156bae9&lang=ru_RU"
          type="text/javascript"
        />
        <script src="../public/js/application.js" />
</div>
<div className="col">
          <PropList items={properties} />
   </div>
      </div>
    </Layout>
  );
};
