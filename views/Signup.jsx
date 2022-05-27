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
          <h1 className="mainB">Регистрация</h1>
          <p>Пожалуйста, заполните эту форму, чтобы создать учетную запись.</p>
          <hr className="polosa" />
          <label htmlFor="username"><b>Name</b></label>
          <input className="auth" type="text" placeholder="User Name" name="username" required />
          <label htmlFor="useremail"><b>E-mail</b></label>
          <input className="auth" type="email" placeholder="Enter e-mail" name="email" required />
          <label htmlFor="psw"><b>Password</b></label>
          <input className="auth" type="password" placeholder="Enter Password" minLength="7" name="psw" required />
          <hr className="polosa" />
          <p>
            Здесь могла быть
            {' '}
            <a className="links" href="#">Ваша реклама</a>
          </p>
          <button type="submit" className="registerbtn">Зарегистрироваться</button>
        </div>
        <div className="container signin">
          <p>
            У вас уже есть аккаунт?
            {' '}
            <a className="links" href="/auth/signin">Войти</a>
          </p>
        </div>
      </form>
    </Layout>
  );
};
