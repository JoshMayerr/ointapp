import { connectToDatabase } from "../../lib/mongodb";
import isUUID from "is-uuid";
import requestIp from "request-ip";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const { uuid } = req.query;

  if (isUUID.v4(uuid)) {
    const entries = db.collection("entries");
    const query = { uuid: uuid };
    const user = await entries.findOne(query);

    if (user) {
      if (req.method === "POST") {
        try {
          await entries.updateOne(
            { uuid: req.body.uuid },
            {
              $set: { url: req.body.url },
            }
          );
          return res.status(200).end();
        } catch (error) {
          console.error(error);
          return res.status(500).end();
        }
      } else {
        if (user.url) {
          try {
            await entries.updateOne(
              { uuid: user.uuid },
              {
                $set: { counter: user.counter + 1 },
              }
            );
          } catch (error) {
            console.error(error);
          }
          return res.redirect(user.url);
        } else {
          return res.redirect(`/edit/${uuid}`);
        }
      }
    } else {
      try {
        const clientIp = requestIp.getClientIp(req);
        await entries.insertOne({
          uuid: uuid,
          url: "",
          date: new Date(),
          ip: clientIp,
          counter: 0,
        });
        return res.redirect(`/edit/${uuid}`);
      } catch (error) {
        console.error(error);
        return res.status(500).end();
      }
    }
  }
};
