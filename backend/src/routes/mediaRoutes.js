import express from "express"

const router = express.Router();

router.get("/media", getAllMedia);
router.get("/media/:id", getMediaById);

router.post("/media", createMedia);
router.put("/media/:id", updatedMedia);
router.delete("/media/:id", deleteMedia);

export default router;