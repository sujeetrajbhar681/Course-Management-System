const isAuthenticated = (req, resp, next) => {
    if (req.session && req.session.userId) {
        return next();
    }
    resp.redirect("/login");
}

module.exports = { isAuthenticated };