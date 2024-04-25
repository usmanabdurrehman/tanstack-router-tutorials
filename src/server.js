import express from "express";
import cors from "cors";
const app = express();

app.use(cors({ credentials: true, origin: true }));
app.use(express.json());

let index = 0;

app.get("/data", (req, res) => {
  index += 1;
  if (index % 2 === 0) return res.sendStatus(500);
  return res.send({ numPosts: 10 });
});

app.listen(7000, () => {
  console.log("listening on port 7000");
});
