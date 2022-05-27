const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style/style.css" />
        <script defer src="/js/application.js" />
        
        <title>Document</title>
      </head>
      <body>
        <header>
          <div className="header">
            <div className="logo">
              <a href="#">Лого/на хоум</a>
            </div>
            <nav className="navBar">
              <a href="#">Вход</a>
              <a href="#">Избранное</a>
              <a href="#">Категории</a>
            </nav>
          </div>
        </header>

        <main>

          {children}
        </main>

        <footer />
      </body>
    </html>
  );
};
