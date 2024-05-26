import express from "express";

const router = express.Router();

router.get("/");
router.post("/login");
router.post("/signup");

export default router;
