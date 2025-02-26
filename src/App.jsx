import React, { useState } from "react";
import Form from "./Components/Form";
import Ticket from "./Components/Ticket";
import './App.css';

const App = () => {
  const [ticketData, setTicketData] = useState(null);

  return (
    <div className="bg-[#0c162d] min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-md md:max-w-lg bg-[#112240] p-6 rounded-lg shadow-lg">
        {!ticketData ? (
          <Form setTicketData={setTicketData} />
        ) : (
          <Ticket data={ticketData} />
        )}
      </div>
    </div>
  );
};

export default App;
