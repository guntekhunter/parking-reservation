const prisma = require("../db/index");

async function getAllPayment() {
  const payment = await prisma.payment.findMany();

  if (!payment) {
    throw Error("Payment Not Found");
  }
  return payment;
}
async function getOnePayment(payment_id) {
  const payment = await prisma.payment.findFirst({
    where: {
      id: payment_id,
    },
  });

  if (!payment) {
    throw Error("Payment Not Found");
  }
  return payment;
}
async function postPayment(newPayment) {
  console.log(newPayment);
  const user = await prisma.payment.create({
    data: {
      reservation_id: newPayment.reservation_id,
      amount: newPayment.amount,
      method: newPayment.method,
      date: newPayment.date,
    },
  });

  if (!user) {
    throw Error("Payment Not Found");
  }
  return user;
}

module.exports = { getAllPayment, getOnePayment, postPayment };
