import { axiosInstance } from "lib/axiosInstance";

class WarpGanService {
  uploadImage = async (file: any): Promise<any> => {
    let formData = new FormData();
    formData.append("file", file);
    const { data } = await axiosInstance.post(
      `/caricature/upload-file`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return data;
  };
}

export const warpGanService = new WarpGanService();
