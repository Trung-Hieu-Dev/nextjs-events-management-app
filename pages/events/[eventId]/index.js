import Head from "next/head";

import { getEventById, getFeaturedEvents } from "../../../helpers/api-utils";

import EventSummary from "../../../components/eventDetail/event-summary";
import EventLogistics from "../../../components/eventDetail/event-logistics";
import EventContent from "../../../components/eventDetail/event-content";
import Comments from "../../../components/input/comments";

function EventDetailPage(props) {
  const event = props.selectedEvent;

  if (!event) {
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
    </>
  );
}

export default EventDetailPage;

export async function getStaticProps(ctx) {
  const eventId = ctx.params.eventId;
  const event = await getEventById(eventId);

  if (!event) {
    return {
      notFound: true,
      // redirect: {
      //   destination: "/events",
      // },
    };
  }

  return {
    props: {
      selectedEvent: event,
    },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();

  const paths = events.map((event) => ({
    params: { eventId: event.id },
  }));

  return {
    paths: paths,
    fallback: "blocking",
  };
}
