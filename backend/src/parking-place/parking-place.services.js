const prisma = require("../db/index");

async function getAllParking() {
  const parking = await prisma.parking_places.findMany();

  if (!parking) {
    throw Error("Parkings Spots Not Found");
  }
  return parking;
}
async function getOneParking(parking_id) {
  const parking = await prisma.parking_spots.findFirst({
    where: {
      id: parking_id,
    },
  });

  if (!parking) {
    throw Error("Parking Spots Not Found");
  }
  return parking;
}
async function postParkingSpots(newParkingSpots) {
  const parking = await prisma.parking_spots.create({
    data: {
      name: newParkingSpots.name,
      location: newParkingSpots.location,
      capacity: newParkingSpots.capacity,
      isAvailable: newParkingSpots.isAvailable,
    },
  });

  if (!parking) {
    throw Error("Parking Spots Not Found");
  }
  return parking;
}
async function deleteParking(parking_id) {
  const parking = await prisma.parking_spots.delete({
    where: {
      id: parking_id,
    },
  });

  if (!parking) {
    throw Error("Parking Spots Not Found");
  }
  return parking;
}

module.exports = {
  getAllParking,
  getOneParking,
  postParkingSpots,
  deleteParking,
};
