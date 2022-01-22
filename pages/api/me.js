import {withApiAuthRequired, getSession} from "@auth0/nextjs-auth0";

export default withApiAuthRequired(async function me (req, res) {
  const {user} = getSession(req,res);
  console.log(user);
  res.json({user:user});
});
