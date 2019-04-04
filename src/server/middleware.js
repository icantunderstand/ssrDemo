export default (req, res, next) => {
  console.log('logger');
  next();
};
