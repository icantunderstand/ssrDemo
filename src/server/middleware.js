export const logger = (req, res, next) => {
  console.log('logger');
  next();
}