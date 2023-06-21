import EventsList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data";

function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventsList items={featuredEvents} />
    </div>
  );
}

export default AllEventsPage;
