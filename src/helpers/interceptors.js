import axios from "axios";
import {updateToken}from "@/middlewares/update-token";

export default function setup() {
    const AUTHORIZATION_HEADER = "Authorization";
    axios.interceptors.request.use(async config => {
        const token = await updateToken();
        config.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`;
        return config;
    });
}