import { useRouter } from "next/router";
import Head from "next/head";

import { getAllEvents } from "../../helpers/api-utils";

import EventsList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function AllEventsPage(props) {
  const events = props.events;
  const router = useRouter();

  const searchEventHandler = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };

  return (
    <div>
      <Head>
        <title>NextJS Events List</title>
        <meta name="description" content="All events list..." />
      </Head>
      <EventsSearch onSearch={searchEventHandler} />
      <EventsList items={events} />
    </div>
  );
}

export default AllEventsPage;

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
