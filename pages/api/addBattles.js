import  clientPromise from "../../lib/mongodb";
import {withApiAuthRequired, getSession} from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function addBattles (req, res) {
  const {user} = getSession(req,res);
  // find by user.sub console.log(user.sub);
  const client  = await clientPromise;
  let doc = JSON.parse(req.body);
  if(doc.player1) {
    await client.db().collection("battles").insertOne(doc, function (err, res) {
      if(err) throw err;
    });
    res.json({status: 'ok'});
  } else {
    res.json({status: 'err'});
  }
});
