import axiosInstance from "./axiosService";

const userService = {
    getUserLogin: async () => {
        const response = await axiosInstance.get('/user');
        return response;
    },
};
export default userService;