const { User } = require('../db/models');

const registerUser = async (req, res) => {
  try {
    const { phone, password, name } = req.body;

    const userWithSamePhone = await User.findOne({
      where: {
        phone,
        raw: true,
      },
    });

    if (userWithSamePhone) {
      res.status(401).json({
        user: false,
        message: 'Пользователь с таким номером телефона уже существует',
      });
    }

    const user = await User.create({
      phone,
      password,
      name,
      role: "client"
    });

    req.session.user = {
      id: user.id,
      phone: user.phone,
      name: user.name,
      role: user.role
    }

    res.json({
      user: req.session.user
    });
  } catch (err) {
    console.log(err.message);
    res.status(401).end();
  }

};

module.exports = registerUser;
