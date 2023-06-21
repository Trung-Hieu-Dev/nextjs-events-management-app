import EventItem from "./event-item";

function EventsList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <EventItem
          key={item.id}
          id={item.id}
          title={item.title}
          image={item.image}
          location={item.location}
          date={item.date}
        />
      ))}
    </ul>
  );
}

export default EventsList;
