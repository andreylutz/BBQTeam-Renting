const React = require('react');
const Layout = require('./Layout');

module.exports = function Signin({ }) {
  return (
    <Layout>
      <video autoPlay muted loop id="myVideo">
        <source src="/vid/Saint Petersburg Aerial Timelab.pro (1).mp4" type="video/mp4" />
      </video>
      <div className="container">
        <h1>Авторизация</h1>
        <p>Пожалуйста, заполните эту форму, чтобы войти в учетную запись.</p>
        <hr />
        {/* <fieldset> */}
        <form action="/auth/signin" method="POST">
          <label htmlFor="useremail"><b>E-mail</b></label>
          <input type="email" placeholder="Enter e-mail" name="email" />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" />
          <hr />
          <p>
            Здесь могла быть
            {' '}
            <a href="#">Ваша реклама</a>
          </p>
          <button type="submit" className="registerbtn">Войти</button>
          <div className="boxing">
            <p>
              Мы будем очень рады, когда вы пройдете
              {' '}
              <a href="/auth/signup">регистрацию</a>
            </p>
            <a href="/" target="_blank" rel="noreferrer">На главную</a>
          </div>
        </form>
        {/* </fieldset> */}
      </div>
    </Layout>
  );
};
