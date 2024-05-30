class UserView {
  render(users) {
    return JSON.stringify(users, null, 2);
  }

  renderDetail(user) {
    return JSON.stringify(user, null, 2);
  }

  renderDeleteResponse(status, message, data = null) {
    return {
      status,
      message,
      data
    };
  }
  
}

module.exports = new UserView();
