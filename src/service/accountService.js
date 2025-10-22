import axiosInstance from "./axiosService";

const accountService = {
    getAccountLogin: async () => {
        const response = await axiosInstance.get('/account');
        return response;
    },
};

export default accountService;