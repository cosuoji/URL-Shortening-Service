import { Router } from "express";
import * as shortenController from "../controller/shortenController.js"
import {generateMiddleware} from "../middleware/generatedMiddleware.js"
import { urlSchema } from "../validations/urlValidations.js";




const shortenRoute = Router();

shortenRoute.get("/:url", shortenController.getUrlInfo)
shortenRoute.get("/:url/stats", shortenController.getUrlStats)
shortenRoute.post("/", generateMiddleware(urlSchema), shortenController.shortenUrl)
shortenRoute.put("/:url", shortenController.updateUrl)
shortenRoute.delete("/:url", shortenController.deleteUrl)


export default shortenRoute