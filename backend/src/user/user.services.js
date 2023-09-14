const prisma = require("../db/index");

async function getAllUser() {
  const users = await prisma.user.findMany();

  if (!users) {
    throw Error("Users Not Found");
  }
  return users;
}
async function postUser(newUserData) {
  console.log(newUserData);
  const user = await prisma.user.create({
    data: {
      email: newUserData.email,
      name: newUserData.name,
      password: newUserData.password,
      phone_number: newUserData.phone_number,
      isOfficer: newUserData.isOfficer,
    },
  });

  if (!user) {
    throw Error("user Not Found");
  }
  return user;
}

module.exports = { getAllUser, postUser };
