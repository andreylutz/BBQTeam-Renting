const React = require('react');
const Layout = require('./Layout');
const PropList = require('./PropList');

function PropListPage({ properties, user }) {
  return (
    <Layout>
      <PropList items={properties} />
    </Layout>
  );
}

module.exports = PropListPage;
