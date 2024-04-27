import express from "express";
import cors from "cors";
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

app.get("/data", (req, res) => {
  return res.send({ numPosts: 10 });
});

app.listen(7000, () => {
  console.log("listening on port 7000");
});
