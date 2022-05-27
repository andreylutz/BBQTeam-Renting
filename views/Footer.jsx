const React = require('react');
const Layout = require('./Layout');

function Footer({}) {
  return (
    <div className="footer">
      <a href="https://vk.com"><img src="/img/vk.jpeg" width="30" /></a>
      <a href="https://mail.ru/"><img src="/img/mail.jpeg" width="30" /></a>
      <a href="https://web.telegram.org"><img src="/img/telegram.jpeg" width="30" /></a>
      <a className="contact" href="tel:+79001215204">Служба поддержки 8-800-333-33-33</a>
    </div>
  );
}

module.exports = Footer;
