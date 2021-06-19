import server from "./app"
require("dotenv").config();

// @ts-ignore
const PORT: number = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log("Express run on http://localhost:" + PORT)
})
