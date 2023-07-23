import express, {json} from "express";
import 'express-async-errors'
import cors from "cors";
import router from "./routes/routers.js";
import handleErrorsMiddleware from "./middlewares/errors.js";

const app = express();

app.use(json());
app.use(cors());

app.use(router);
app.use(handleErrorsMiddleware);


app.listen(5800, () => {
    console.log("Server is up on port 5800");
});
export default app;