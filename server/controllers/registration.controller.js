const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const registerUser = async (req, res) => {
  try {
    const { phone, password, name } = req.body;
    console.log({ phone, password, name });

    const userWithSamePhone = await User.findOne({
      where: {
        phone,
        // raw: true,
      },
    });
    if (userWithSamePhone) {
      // console.log('same phone');
      res.status(401).json({
        user: false,
        message: 'Пользователь с таким номером телефона уже существует',
      });
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.create({
        phone,
        password: hashedPassword,
        name,
        role: "user"
      });

      req.session.user = {
        id: user.id,
        phone: user.phone,
        name: user.name,
        role: user.role,
        isAuth:true,
      }

      res.json({
        user: req.session.user
      });
    }



  } catch (error) {
    // console.log(error.message);
    res.status(401)
      .json({
        message: error.message
      }).end();
  }

};

module.exports = { registerUser };
