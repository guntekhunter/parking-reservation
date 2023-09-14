const prisma = require("../db/index");

async function getAllReservation() {
  const reservation = await prisma.reservation.findMany();

  if (!reservation) {
    throw Error("reservation Not Found");
  }
  return reservation;
}

async function getOneReservation(id) {
  const reservation = await prisma.reservation.findFirst({
    where: { id: id },
  });

  if (!reservation) {
    throw Error("Reservation Not Found");
  }
  return reservation;
}
async function postReservation(newReservationData) {
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
    throw Error("failed to make reservation");
  }
  return reservation;
}

async function putReservation(reservation_id, newReservationData) {
  const reservation = await prisma.reservation.update({
    where: {
      id: reservation_id,
    },
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

async function deleteReservation(reservation_id) {
  const reservation = await prisma.reservation.delete({
    where: {
      id: reservation_id,
    },
  });

  if (!reservation) {
    throw Error("reservation Not Found");
  }
  return reservation;
}

module.exports = {
  getAllReservation,
  getOneReservation,
  postReservation,
  putReservation,
  deleteReservation,
};
