const React = require('react');
const Layout = require('./Layout');

module.exports = function Signin({ }) {
  return (
    <Layout>
      <div className="vladmaxi-top">
        <a href="/" target="_blank" rel="noreferrer">Главная</a>
        <span className="right">
          <a href="/auth/signup">
            <strong>ЗАРЕГЕСТРИРОВАТЬСЯ</strong>
          </a>
        </span>
        <div className="clr" />
      </div>
      <div id="login-form">
        <h1>АВТОРИЗАЦИЯ</h1>
        <fieldset>
          <form action="/auth/signin" method="POST">
            <input type="email" required value="Логин" name="email" />
            <input type="password" required value="Пароль" name="password" />
            <input type="submit" value="ВОЙТИ" />
          </form>
        </fieldset>
      </div>
    </Layout>
  );
};
