// import dynamic from "next/dynamic";
// import React from "react";
// //add comment

// interface Props {
//   params: { id: string };
// }

// const TicketForm = dynamic(() => import("@/components/TicketForm"), {
//   ssr: false,
// });

// const EditTicket = async ({ params }: Props) => {
//   const ticket = await prisma?.ticket.findUnique({
//     where: { id: parseInt(params.id) },
//   });

//   if (!ticket) {
//     return <p className=" text-destructive">Ticket not found!</p>;
//   }

//   return <TicketForm ticket={ticket} />;
// };

// export default EditTicket;


import dynamic from "next/dynamic";
import React from "react";
import prisma from "@/prisma/db"; // Ensure Prisma is correctly imported

interface Props {
  params: { id: string };
}

// Dynamically import TicketForm component with server-side rendering disabled
const TicketForm = dynamic(() => import("@/components/TicketForm"), {
  ssr: false, // This ensures the component is only rendered on the client side
});

const EditTicket = async ({ params }: Props) => {
  try {
    // Validate and parse the ticket ID from params
    const ticketId = parseInt(params.id, 10);

    if (isNaN(ticketId)) {
      return <p className="text-destructive">Invalid Ticket ID.</p>;
    }

    // Fetch the ticket from the database
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
    });

    // Handle case where ticket is not found
    if (!ticket) {
      return <p className="text-destructive">Ticket not found!</p>;
    }

    // Render the TicketForm component with the ticket data
    return <TicketForm ticket={ticket} />;
  } catch (error) {
    // Log the error for debugging
    console.error("Error in EditTicket:", error);
    // Return a user-friendly error message
    return <p className="text-destructive">An error occurred while loading the ticket.</p>;
  }
};

export default EditTicket;
