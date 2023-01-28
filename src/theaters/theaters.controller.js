const service = require("./theaters.service");
const asyncErrorBoundary = require("../utils/errors/asyncErrorBoundary");

async function list(req, res) {
  const data = await service.list();
  res.send({ data });
}

module.exports = {
  list: asyncErrorBoundary(list),
};