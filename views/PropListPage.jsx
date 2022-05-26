const React = require('react');
const Layout = require('../views/Layout');
const PropList = require('../views/PropList');

function PropListPage({properties, user}) {
  return (
    <Layout>
      <PropList items={properties} />
    </Layout>
  )
}

module.exports = PropListPage;
