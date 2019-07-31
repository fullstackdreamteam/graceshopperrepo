const routerGateway = (req, res, next) => {
  if (req.user.isAdmin === true) {
    next()
  } else {
    res.send('DENIED')
  }
}

module.exports = routerGateway
