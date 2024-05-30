const db = require("../hellpers/service");

class User {
  static async fetchAll() {
    const [rows] = await db.execute("SELECT * FROM tbl_user");
    return rows;
  }

  static async findById(id) {
    const [rows] = await db.execute("SELECT * FROM tbl_user WHERE id = ?", [
      id,
    ]);
    return rows[0];
  }

  static async delById(id) {
    const [result] = await db.execute('DELETE FROM tbl_user WHERE id = ?', [id]);
    return result.affectedRows;
  }

  static async create(user) {
    const { name, address, username, password } = user;
    const [result] = await db.execute(
      "INSERT INTO tbl_user (name, address, username, password) VALUES (?, ?, ?, ?)",
      [name, address, username, password]
    );
    return result.insertId;
  }
}

module.exports = User;
