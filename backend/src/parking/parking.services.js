const prisma = require("../db/index");

async function getAllParking() {
  const users = await prisma.parking_spots.findMany();

  if (!users) {
    throw Error("Parkings Spots Not Found");
  }
  return users;
}
async function getOneParking(parking_id) {
  const users = await prisma.parking_spots.findFirst({
    where: {
      id: parking_id,
    },
  });

  if (!users) {
    throw Error("Parking Spots Not Found");
  }
  return users;
}
async function postParkingSpots(newParkingSpots) {
  console.log(newParkingSpots);
  const user = await prisma.parking_spots.create({
    data: {
      name: newParkingSpots.name,
      location: newParkingSpots.location,
      capacity: newParkingSpots.capacity,
      isAvailable: newParkingSpots.isAvailable,
    },
  });

  if (!user) {
    throw Error("Parking Spots Not Found");
  }
  return user;
}

module.exports = { getAllParking, getOneParking, postParkingSpots };
