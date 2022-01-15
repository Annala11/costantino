const logout = async (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        message: 'Ошибка при удалении сессии'
      });
    }
    res.clearCookie('user_sid');
    return res.json({
      isUserLogout: true,
      user: false,
      admin: false
    });
  });
};

module.exports = {
  logout
};
