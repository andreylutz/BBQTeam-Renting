/* eslint-disable react/self-closing-comp */
const React = require('react');
const Layout2 = require('./Layout2');

function EditPropertyPage({ property, propertyTypes, user }) {
  return (
    <Layout2>
      <div className="row">
        <div className="col mx-auto">
          <form name="edit_property" className="col-8 ms-5 mt-5" method="POST" action="/admin/properties/">
            <div className="mb-3">
              <textarea name="desc" rows="4" value={property.description} className="overflow-auto form-control" id="description"></textarea>
            </div>
            <input name="propId" type="hidden" value={property.id} />
            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupSelect01">Тип жилья</label>

              <select className="form-select" id="inputGroupSelect01" name="propType">
                <option selected>{property.PropertyType.name}</option>
                {
                propertyTypes.map((type) => <option value={type.id}>{type.name}</option>)
              }
              </select>
              <div className="input-group mb-3 mt-3">
                <span className="input-group-text">&#x20bd;</span>
                <span className="input-group-text">0</span>
                <input type="text" name="price" value={property.rentalPrice} className="form-control" aria-label="Цена в рублях за месяц" />
              </div>
              <div className="input-group mb-3 mt-3">
                <span className="input-group-text">http://</span>
                <input name="photo" value={property.photo} type="text" className="form-control" aria-label="Адрес изображения" />
              </div>
            </div>
            <button type="submit" className="btn btn-success mb-5">Сохранить</button>
          </form>
        </div>
        <div className="col">
          <img src={property.photo} className="col-9 img-fluid img-rounded mx-auto" alt="..." />
        </div>
      </div>
    </Layout2>
  );
}

module.exports = EditPropertyPage;
