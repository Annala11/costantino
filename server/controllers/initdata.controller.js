const { Branch, Service, Specialist, Category } = require('../db/models');

const initData = async (req, res) => { 
  
  try {
    const branches = await Branch.findAll({attributes: ['id', 'name','address']});
    const currentBranchId = req.session.currentBranchId ? req.session.currentBranchId : 1;
    const specialists = await Specialist.findAll({});
    const services = await Service.findAll({});
    const categories = await Category.findAll({});
   
    res.status(200).json({
      branches:{
        branches: branches,
        currentbranchid: currentBranchId
      },
      specialists,
      services,
      categories
     });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { initData };
