import Config from "./config";

export const CreateOrder = async (params) =>
  await Config.post("/razorpay/payment", params);

export const VerifyOrder = async (params) =>
  await Config.post("/razorpay/verify", params, {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  });
