import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// // Token injector
// axiosInstance.interceptors.request.use(async (config) => {
//   if (firebaseApp.auth().currentUser) {
//     const accessToken = await firebaseApp.auth().currentUser.getIdToken()

//     config.headers = {
//       authorization: `Bearer ${accessToken}`,
//       ...config.headers,
//     }
//   }

//   return config
// })

// // Auth guards
// axiosInstance.interceptors.response.use(null, (error) => {
//   if (error.response && error.response.status === 401) {
//     firebaseApp.auth().signOut()
//   }
//   return Promise.reject(error)
// })

export { axiosInstance };
