// /comments/some-event-id

function handler(req, res) {
  const eventId = req.query.eventId;

  // post comment
  if (req.method === "POST") {
    const { email, name, text } = req.body;

    if (
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !text ||
      text.trim() === ""
    ) {
      res.status(442).json({ message: "Invalid input!" });
      return;
    }

    const newComment = {
        id: new Date().toISOString();
        ...req.body
    }

    console.log(newComment);

    res.status(201).json({message: 'Added comment.', comment: newComment})
  }

  // get comments by id
  if (req.method === "GET") {
    const DUMMY_COMMENTS = [
        {id: 'c1', name: 'Max', text: 'First comment'},
        {id: 'c2', name: 'Manuel', text: 'Second comment'},
    ]

    res.status(200).json({comments: DUMMY_COMMENTS})
  }
}

export default handler;
