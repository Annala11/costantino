const { Branch, Specialist, Service } = require("../db/models");

const initData = async (req, res) => {
  try {
    const currentbranchid = req.session.currentBranchId ? req.session.currentBranchId : 1;
    const branches = await Branch.findAll({attributes: ['id', 'name','address']});
    const specialists = await Specialist.findAll({attributes: ['id', 'name','description','photo','branch_id']});
    const services = await Service.findAll({attributes: ['id', 'name','description','price','interval','category_id']});
    res.json({
      branchinfo:{
        branches,
        currentbranchid
      },
      specialists,
      services,
    });
    
  } catch (error) {
    console.log(error.message);
    res.status(401).end();
  }
}

module.exports = { initData };
