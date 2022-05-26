const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=fcd06eba-3622-41ec-8467-f7311156bae9&lang=ru_RU"
          type="text/javascript"
        />
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
