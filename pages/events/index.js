import EventsList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventsList items={events} />
    </div>
  );
}

export default AllEventsPage;
