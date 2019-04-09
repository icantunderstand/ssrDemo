export default (req, res, next) => {
  const { url } = req;
  if (url === '/') {
    req.appName = 'github';
  } else {
    const appName = url.split('/')[1];
    req.appName = appName;
  }
  next();
};
