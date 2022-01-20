const { Branch, Service, Specialist, Category } = require('../db/models');

const initData = async (req, res) => {

  try {
    const branches = await Branch.findAll({ attributes: ['id', 'name', 'address'] });
    const currentBranchId = req.session.currentBranchId ? req.session.currentBranchId : 1;
    const services = await Service.findAll({ attributes: ['id', 'name', 'description', 'price', 'interval', 'category_id'] });
    const categories = await Category.findAll({});
    const specialists = await Specialist.findAll({
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      },
      include: {
        model: Category,
        attributes: ['id']
      }
    });

    const preparedSpecs = specialists.map((spec)=>{
      const object = {};
      object.catids = [];
      for (const [key, value] of Object.entries(spec.dataValues)) {
        if(key !== "Categories"){
          object[key] = value;
        } else {
          value.forEach((el)=>{
            object.catids.push(el.id);
          })
        }
      }
      return object;
    })

    res.status(200).json({
      branches: {
        branches: branches,
        currentbranchid: currentBranchId
      },
      specialists: preparedSpecs,
      services,
      categories
    });
  } catch (error) {
    res.status(404).json({ error: 'error' });
    console.log(error);
  }
};

module.exports = { initData };
