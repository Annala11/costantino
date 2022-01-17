const logout = async (req, res) => {
  console.log(1111);
  req.session.destroy((error) => {
    if (error) {
      return res.status(500).json({
        message: 'Произошла ошибка при попытке выхода.'
      });
    }
    res.clearCookie('user_sid');
    return res.json({
      logoutComplete: true,
    });
  });
};

module.exports = {
  logout
};
