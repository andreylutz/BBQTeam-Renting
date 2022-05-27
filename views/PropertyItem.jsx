const React = require('react');

function PropertyItem({ property }) {
  return (
    <div className="card m-3" style={{ width: `${15}rem` }} id={`card_${property.id}`}>
      <img src={property.photo} className="img-thumbnail rounded float-start" alt="..." />
      <div className="card-body h-100">
        <p className="card-text"><b><small>{property.PropertyType.name}</small></b></p>
        <p className="card-text">{property.description}</p>
      </div>
      <div className="card-body mx-auto">
        <p className="card-text"><b>{`${property.rentalPrice}\u20bd`}</b></p>

      </div>
      <div className="card-body mx-auto">

        <a
          href={`/admin/properties/${property.id}`}
          className="btn btn-outline-primary btn-sm me-2 mt-auto"
        >
          Редактировать
        </a>
        <button
          type="button"
          data-id={property.id}
          className="js-delete btn btn-outline-danger btn-sm js-delete-button"
        >
          X
        </button>
      </div>
    </div>

  );
}

module.exports = PropertyItem;
