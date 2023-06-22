import { getFeaturedEvents } from "../dummy-data";
import EventList from "../pages/events";

function HomePage() {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
