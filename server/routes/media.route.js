import express from "express";
import upload from "../utils/multer.js";
import { uploadMedia } from "../utils/cloudinary.js";

const router = express.Router();

router.route("/upload-video").post(upload.single("file"), async(req,res) => {
    try {

        console.log("Uploaded file:", req.file); // ✅ Kiểm tra xem file có thực sự nhận được không

        if (!req.file) {
            return res.status(400).json({ success: false, message: "No file uploaded" });
        }

        const result = await uploadMedia(req.file.path);

        console.log("Cloudinary response:", result);
        res.status(200).json({
            success:true,
            message:"File uploaded successfully.",
            data:result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Error uploading file"})
    }
});
export default router;