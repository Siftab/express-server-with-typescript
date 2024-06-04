
import { Server } from "http"
import app from "./app"
const PORT = 5000



// defining server
let server: Server

async function Main() {
    server = app.listen(PORT, () => {
        console.log(`Example app listening on port ${PORT}`)
    })

}

Main();

