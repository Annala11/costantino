const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const login = async (req, res) => {
  try {
    const {
      phone,
      password,
    } = req.body;

    const userByPhone = await User.findOne({
      where: {
        phone,
      },
    });
    // console.log(userByPhone);
    if (!userByPhone) {
      return res.status(401).json({
        user: false,
        message: 'Пользователя с таким телефоном не существует',
      })
    }
    // console.log(12121);
    // const isValidPassword = await bcrypt.compare(password, userByPhone.password);
    // const isValidPassword = true; //TODO - remove after test

    // if (!isValidPassword) {
    //   return res.status(401)
    //     .json({
    //       user: false,
    //       message: 'Пароль не верный',
    //     })
    // }

    req.session.user = {
      id: userByPhone.id,
      name: userByPhone.name,
      phone: userByPhone.phone,
      role: userByPhone.role,
      isAuth:true,
    }

    res.json({
      user: req.session.user
    });
  } catch (error) {
    console.log(error.message)
    res.status(401).end()

  }
}

module.exports = { login };
