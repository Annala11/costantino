const Branch = require("../db/models/branch");

const branches = async (req, res) => {
  try {
    const branches = await Branch.findAll({});
    res.json({
      branches: branches
    });
  } catch (error) {
    console.log(error.message)
    res.status(401).end()
  }
}

module.exports = { branches };
