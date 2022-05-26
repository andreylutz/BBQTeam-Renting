const React = require('react');
const PropertyItem = require('./PropertyItem');

function PropList({ items }) {
  return (
    <div className="row js-properties">
      {
        items.map((property) => <PropertyItem property={property} key={property.id} />)
      }
    </div>
  );
}

module.exports = PropList;
