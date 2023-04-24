import { server } from "./server.js";

const port = 8003;
server.listen(port, () => {
  console.log(`RandomText Server running at http://127.0.0.1:${port}`);
});
// import { server } from "./server.js";

// server.listen(…
