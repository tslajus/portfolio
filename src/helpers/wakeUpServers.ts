import axios from "axios";

const servers = import.meta.env.VITE_PROJECTS_SERVERS?.split(",") || [];

const wakeUpServers = async () => {
  try {
    const wakeUpPromises = servers.map((server: string) => axios.get(server));
    await Promise.all(wakeUpPromises);
  } catch (error) {
    console.error("Error waking up one or more servers:", error);
  }
};

export default wakeUpServers;
