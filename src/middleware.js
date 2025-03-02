function logger(req, res, next) {
  console.log(req.method, req.url);
  console.log(req.headers);

  // if (req.query && req.query.name === "budi") return res.status(404).json({ message: "salah orang." });
  // if (req.query && req.query.name !== "budi")

  next();
}

function isAuthenticated(req, res, next) {
  if (req.headers.token !== "ksdfkahroiwfknsklvaldkfjasdkfalkdfjadkfjasldkfadfnadfnjdfhsdfhdfjhdfjh") return res.status(403).json({ message: "Unauthorized" });

  next();
}
function isAdministrator(req, res, next) {
  if (req.headers.role !== "admin") return res.status(403).json({ message: "Unauthorized" });

  next();
}

const middleware = {
  logger,
  isAuthenticated,
  isAdministrator,
};

module.exports = middleware;
