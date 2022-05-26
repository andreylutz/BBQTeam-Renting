const React = require('react');
const Layout = require('./Layout');

module.exports = function Home({ }) {
  return (
    <Layout>
      <a href="/auth/signout">ВЫХОД из ПРОФИЛЯ</a>
    </Layout>
  );
};
