const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/style/style.css" />
        <script src="/js/application.js" defer />
        <title>Document</title>
      </head>
      <body>
        <header />

        <main>
          {children}
        </main>

        <footer />
      </body>
    </html>
  );
};
