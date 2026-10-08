import express from "express"
import { createMedia, deleteMedia, getAllMedias, getMediabyId, updateMedia } from "../controller/mediaControllers";

const router = express.Router();

router.get("/media", getAllMedias);
router.get("/media/:id", getMediabyId);

router.post("/media", createMedia);
router.put("/media/:id", updateMedia);
router.delete("/media/:id", deleteMedia);

export default router;