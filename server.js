import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongodb from "./src/config/db.js";
import http from "http";

//! Routes
import AboutRoutes from "./src/routes/AboutCmsRoutes.js";
import ServiceRoutes from "./src/routes/ServiceCmsRoutes.js";
import Hero from "./src/routes/HeroCmsRoutes.js";
import Course from "./src/routes/CourseCmsRoutes.js";
import Video from "./src/routes/VideoCmsRoutes.js";
import Student from "./src/routes/StudentsCmsRoutes.js";
import fileUploadRoutes from "./src/routes/uploadRoutes.js";

dotenv.config();

await mongodb();

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

//!  Middleware
app.use(cors()); // To allow cross-origin requests
app.use(express.json()); // To parse JSON request bodies
app.use("/api/uploads", fileUploadRoutes);

app.use("/cms/about", AboutRoutes);
app.use("/cms/service", ServiceRoutes);
app.use("/cms/hero", Hero);
app.use("/cms/course", Course);
app.use("/cms/video", Video);
app.use("/cms/student", Student);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
