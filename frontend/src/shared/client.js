import axios from "axios";

// export const apiClient = axios.create({
//     baseURL: process.env.NODE_ENV === "production"
//     ? "https://food-wine.onrender.com/api/v1"
//     : "http://localhost:4000/api/v1",
   
//     // headers: {
//     //     "Content-Type": "application/json",
//     //     Authorization: `Bearer ${localStorage.getItem("token")}`,
//     // },
// })

export const apiClient = axios.create({
    baseURL: "http://localhost:4000/api/v1"
});