import { connectToDatabase } from "../../lib/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const { uuid } = req.query;

  const entries = db.collection("entries");
  const query = { uuid: uuid };

  const user = await entries.findOne(query);

  if (req.method === "POST") {
    try {
      await entries.updateOne(
        { uuid: req.body.uuid },
        {
          $set: { url: req.body.url },
        }
      );
      res.status(200).end();
    } catch (error) {
      console.error(error);
      res.status(500).end();
    }
  } else {
    if (user.url) {
      return res.redirect(user.url);
    } else {
      return res.redirect(`/edit/${uuid}`);
    }
  }
};
