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

    if (!userByPhone) {
      res.status(401).json({
        user: false,
        message: 'Пользователя с таким телефоном не существует',
      })
    }

    const isValidPassword = await bcrypt.compare(password, userByPhone.password);

    if (!isValidPassword) {
      return res.status(401)
        .json({
          user: false,
          message: 'Пароль не верный',
        })
    }

    req.session.user = {
      id: userByPhone.id,
      name: userByPhone.name,
      phone: userByPhone.phone,
      role: userByPhone.role
    }
  } catch (error) {
    console.log(error.message)
    res.status(401).end()

  }
}

module.exports = { login };
