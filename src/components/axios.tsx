'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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

export default function Api (Ticket:Ticket,User:User){
  const [data, setData] = useState<{ tickets: Ticket[]; users: User[] }>({ tickets: [], users: [] });

  useEffect(() => {
    // Define an async function to fetch data using Axios
    const fetchData = async () => {
      try {
        const response = await axios.get('https://tfyincvdrafxe7ut2ziwuhe5cm0xvsdu.lambda-url.ap-south-1.on.aws/ticketAndUsers');
        setData(response.data);
        console.log('res',response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    // Call the async function
    fetchData();
  }, []); // Empty dependency array ensures useEffect runs only once on mount
  console.log("data",data);
  return (
    <div>
      <h1>Tickets and Users</h1>
      <h2>Tickets:</h2>
      <ul>
        {data.tickets.map((ticket) => (
          <li key={ticket.id}>{ticket.title}</li>
        ))}
      </ul>
      <h2>Users:</h2>
      <ul>
        {data.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};


