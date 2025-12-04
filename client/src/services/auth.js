import { api } from "./api";

export const loginUser = (data) => api.post("/auth/login", data);
export const signupUser = (data) => api.post("/auth/register", data);
