import  clientPromise from "../../lib/mongodb";
import {withApiAuthRequired, getSession} from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function getBattles (req, res) {
  const {user} = getSession(req,res);
  // find by user.sub console.log(user.sub);
  const client  = await clientPromise;

  const battles = await client.db()
    .collection("battles")
    .find({createdBy: user.sub})
    .limit(20)
    .toArray();
  res.json(battles);
});
