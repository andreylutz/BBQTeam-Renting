const React = require('react');
const Layout = require('./Layout');

module.exports = function Signup({ }) {
  return (
    <Layout>
      <video autoPlay muted loop id="myVideo">
        <source src="/vid/Saint Petersburg Aerial Timelab.pro (1).mp4" type="video/mp4" />
      </video>
      <form action="" method="POST">
        <div className="container">
          <h1>Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr />
          <label htmlFor="username"><b>Name</b></label>
          <input type="text" placeholder="User Name" name="username" required />
          <label htmlFor="useremail"><b>E-mail</b></label>
          <input type="email" placeholder="Enter e-mail" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" minLength="7" name="psw" required />
          <hr />
          <p>
            Здесь могла быть
            {' '}
            <a href="#">Ваша реклама</a>
          </p>
          <button type="submit" className="registerbtn">Зарегистрироваться</button>
        </div>
        <div className="container signin">
          <p>
            У вас уже есть аккаунт?
            {' '}
            <a href="/auth/signin">Войти</a>
          </p>
        </div>
      </form>
    </Layout>
  );
};
