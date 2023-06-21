import EventsList from "../../components/events/event-list";
import { getFeaturedEvents } from "../../dummy-data";

function AllEventsPage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <h1>The All Events Page</h1>
      <EventsList items={featuredEvents} />
    </div>
  );
}

export default AllEventsPage;
