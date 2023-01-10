// inyecte en el request un dato que se recuperará en el sgte middleware

const middlewareJose = (req, res, next) => {
  req.joseData = 'Hola soy Josefina';
  next();
}

module.exports = middlewareJose;