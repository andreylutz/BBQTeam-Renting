function isAdmin(req, res, next) {
  if (!req.session.user.isAdmin) {
    res.redirect('/');
    return;
  }

  next();
}

module.exports = isAdmin;
