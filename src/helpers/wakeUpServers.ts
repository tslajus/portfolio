import axios from "axios";

const servers = [process.env.HAIKU_APP_HEALTH_URL || ""].filter(Boolean);

const wakeUpServers = async () => {
  try {
    const wakeUpPromises = servers.map((server) => axios.get(server));
    await Promise.all(wakeUpPromises);
    console.log("Servers are awake!");
  } catch (error) {
    console.error("Error waking up one or more servers:", error);
  }
};

export default wakeUpServers;
