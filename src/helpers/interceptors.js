import axios from "axios";
import {updateToken}from "@/middlewares/update-token";

export default function setup() {

    axios.interceptors.request.use(async config => {
        const token = await updateToken();
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    });
}