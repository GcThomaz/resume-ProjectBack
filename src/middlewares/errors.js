
import { statusCodeFromErrors , testError } from "../utils/errorUtills.js";

export default function handleErrorsMiddleware(err, req, res ,next) {
  console.log(err)
  
  if(testError(err)) {
    const statusCode = statusCodeFromErrors(err.type);
    return res.status(statusCode).send(err.message)
  }

  res.sendStatus(500);
}