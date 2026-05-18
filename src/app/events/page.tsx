import React from "react";
import EventsClient from "./events-client";

export const metadata = {
  title: "Events | CEBAR Group",
  description: "Join our upcoming events, workshops, and the flagship Abuja Educators Conference to gain highly actionable insights and connect with top-tier professionals.",
};

export default function EventsPage() {
  return <EventsClient />;
}
