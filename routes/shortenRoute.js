import { Router } from "express";
import * as shortenController from "../controller/shortenController.js"

const shortenRoute = Router();

shortenRoute.get("/:url", shortenController.getUrlInfo)
shortenRoute.get("/:url/stats", shortenController.getUrlStats)
shortenRoute.post("/", shortenController.shortenUrl)
shortenRoute.put("/:url", shortenController.updateUrl)
shortenRoute.delete("/:url", shortenController.deleteUrl)


export default shortenRoute