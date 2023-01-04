import Config from "./config";

const Playgroundapi = async (params) =>
  await Config.post("/ai/AI", params, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

const data = { Playgroundapi };
export default data;
