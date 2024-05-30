const userViewModel = require("../viewmodel/userViewModel");
const userView = require("../view/userView");

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await userViewModel.getAllUsers();
      res.send(userView.render(users));
    } catch (error) {
      res.status(500).send(error.toString());
    }
  }

  async getUserById(req, res) {
    try {
      const user = await userViewModel.getUserById(req.params.id);
      res.send(userView.renderDetail(user));
    } catch (error) {
      res.status(500).send(error.toString());
    }
  }

  async deleteUser(req, res) {
    try {
      const affectedRows = await userViewModel.delUserById(req.params.id);
      if (affectedRows > 0) {
        res
          .status(200)
          .send(userView.renderDeleteResponse("200", "success delete user"));
      } else {
        res
          .status(404)
          .send(userView.renderDeleteResponse("404", "user not found"));
      }
    } catch (error) {
      res
        .status(500)
        .send(userView.renderDeleteResponse("500", error.toString()));
    }
  }

  async createUser(req, res) {
    const { name, address, username, password } = req.body;
    if (!name || !address || !username || !password) {
      return res.status(400).send("All fields are required");
    }

    try {
      const user = await userViewModel.createUser({
        name,
        address,
        username,
        password,
      });
      res.send(userView.renderDetail(user));
    } catch (error) {
      res.status(500).send(error.toString());
    }
  }
}

module.exports = new UserController();
