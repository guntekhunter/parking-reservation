const prisma = require("../db/index");

async function getAllReservation() {
  const reservation = await prisma.reservation.findMany();

  if (!reservation) {
    throw Error("reservation Not Found");
  }
  return reservation;
}

async function getOneReservation(id) {
  const users = await prisma.reservation.findFirst({
    where: { id: id },
  });

  if (!users) {
    throw Error("Users Not Found");
  }
  return users;
}
async function postReservation(newReservationData) {
  console.log(newReservationData);
  const reservation = await prisma.reservation.create({
    data: {
      user_id: newReservationData.user_id,
      parking_spot_id: newReservationData.parking_spot_id,
      start_date: newReservationData.start_date,
      end_date: newReservationData.end_date,
      payment_status: newReservationData.payment_status,
    },
  });

  if (!reservation) {
    throw Error("reservation Not Found");
  }
  return reservation;
}

module.exports = { getAllReservation, getOneReservation, postReservation };
