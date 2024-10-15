import { useEffect, useState } from "react";
import axios from "axios";

interface Ticket {
  id: string;
  title: string;
  tag: string[];
  userId: string;
  status: string;
  priority: number;
}

interface User {
  id: string;
  name: string;
  available: boolean;
}

const Api = () => {
  const [data, setData] = useState<{ tickets: Ticket[]; users: User[] }>({
    tickets: [],
    users: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers",
          
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return data;
};

export default Api;
