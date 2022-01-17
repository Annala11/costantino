const { Branch } = require("../db/models");

const branches = async (req, res) => {
  try {
    const currentBranchId = req.session.currentBranchId ? req.session.currentBranchId : 1;
    const branches = await Branch.findAll({attributes: ['id', 'name','address']});
    res.json({
      branches: branches,
      currentbranchid: currentBranchId
    });
    
  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
}

module.exports = { branches };
