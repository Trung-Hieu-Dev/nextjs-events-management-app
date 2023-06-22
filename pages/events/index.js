import { useState } from "react";

import { getAllEvents, getFilteredEvents } from "../../dummy-data";

import { useRouter } from "next/router";

import EventsList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage() {
  const events = getAllEvents();
  const router = useRouter();

  const searchEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <EventsSearch onSearch={searchEventHandler} />
      <EventsList items={events} />
    </div>
  );
}

export default AllEventsPage;
