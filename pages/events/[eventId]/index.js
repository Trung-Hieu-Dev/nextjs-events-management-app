import { useRouter } from "next/router";

import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/eventDetail/event-summary";
import EventLogistics from "../../../components/eventDetail/event-logistics";
import EventContent from "../../../components/eventDetail/event-content";

function EventDetailPage() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  if (!eventId) {
    return <p>No event found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventDetailPage;
