import express from "express";
import {
  createService,
  deleteService,
  getAllService,
  getServiceById,
  updateService,
} from "../controllers/ServiceCmsController.js";

const router = express.Router();

router.post("/addServiceCms", createService);
router.get("/getAllServiceCms", getAllService);
router.get("/getServicebyId/:id", getServiceById);
router.put("/updateService/:id", updateService);
router.delete("/deleteService/:id", deleteService);

export default router;
