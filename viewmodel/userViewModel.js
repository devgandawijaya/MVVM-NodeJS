const User = require("../models/user");

class UserViewModel {
  async getAllUsers() {
    const users = await User.fetchAll();
    return users;
  }

  async getUserById(id) {
    const user = await User.findById(id);
    return user;
  }

  async delUserById(id) {
    const affectedRows = await User.delById(id);
    return affectedRows;
  }

  async createUser(user) {
    const userId = await User.create(user);
    const userAfterCreate = await User.findById(userId);
    return userAfterCreate;
  }
}

module.exports = new UserViewModel();
