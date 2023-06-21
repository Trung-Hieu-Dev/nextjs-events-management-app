import EventItem from "./event-item";

import classes from "./event-list.module.css";

function EventsList({ items }) {
  return (
    <ul className={classes.list}>
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
