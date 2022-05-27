const React = require('react');
const Layout = require('./Layout');

function Navbar({ item }) {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/"><img src="/img/last.png" width="40" /></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-content-space-evenly">
            <li className="nav-item active">
              <a className="nav-link" href="/admin/properties">
                <span className="sr-only">Администратор</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Избранное</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/auth/signout">Выйти</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

module.exports = Navbar;
