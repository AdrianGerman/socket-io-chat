const express = require("express")
const { createServer } = require("http")
const path = require("path")
const realtimeServer = require("./realtimeServer")

const app = express()
const httpServer = createServer(app)

// settings
app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views"))

// routes
app.use(require("./routes"))

// public
app.use(express.static(path.join(__dirname, "public")))

// up the server
httpServer.listen(app.get("port"), () => {
  console.log("El servidor está corriendo en el puerto", app.get("port"))
})

// call socket server
realtimeServer(httpServer)
