const prisma = require("../db/index");

async function getAllParking() {
  const users = await prisma.parking_spots.findMany();

  if (!users) {
    throw Error("Users Not Found");
  }
  return users;
}
async function postParkingSpots(newPrkingSpots) {
  console.log(newPrkingSpots);
  const user = await prisma.parking_spots.create({
    data: {
      name: newPrkingSpots.name,
      location: newPrkingSpots.location,
      capacity: newPrkingSpots.capacity,
      isAvailable: newPrkingSpots.isAvailable,
    },
  });

  if (!user) {
    throw Error("user Not Found");
  }
  return user;
}

module.exports = { getAllParking, postParkingSpots };
