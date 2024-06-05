const userService = require('../service/userService');

const getUsers = async (req, res) => {
  try {
    const users = await userService.fetchUsers();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
  } catch (error) {
    console.error('[SERVER ERROR] >>>>>', error);
    res.statusCode = 500;
    res.end(JSON.stringify({ error: 'An error occurred' }));
  }
};

module.exports = { getUsers };