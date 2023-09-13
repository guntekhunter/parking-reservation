const prisma = require("../db/index");

async function getAllUser() {
  const users = await prisma.user.findMany();

  if (!users) {
    throw Error("Users Not Found");
  }
  return users;
}

module.exports = getAllUser;
