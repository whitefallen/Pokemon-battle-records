import  clientPromise from "../../lib/mongodb";

export default async (req, res) => {
  const client  = await clientPromise;

  const battles = await client.db()
    .collection("battles")
    .find()
    .limit(20)
    .toArray();
  res.json(battles);

};
