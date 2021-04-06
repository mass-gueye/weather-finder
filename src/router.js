import express from 'express';
import {
    homePage,
    aboutPage,
    getWeather
} from '../controller/pages.js';

const router = express.Router();

router.get("/", homePage);
router.get("/about", aboutPage);

router.post("/", getWeather);


export default router;