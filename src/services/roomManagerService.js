import * as httpRequest from '~/utils/httpRequest';

export const getRoom = async () => {
    try {
        const res = await httpRequest.get('admin/quan-ly-phong');
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const remove = async (id) => {
    try {
        const res = await httpRequest.remove(`admin/quan-ly-phong/${id}`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const edit = async (id) => {
    try {
        const res = await httpRequest.get(`admin/quan-ly-phong/${id}/edit`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getRoomInfo = async (id) => {
    try {
        const res = await httpRequest.get(`admin/quan-ly-phong/${id}`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const put = async (id, data) => {
    try {
        const res = await httpRequest.put(`admin/quan-ly-phong/${id}`, data);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getCreate = async () => {
    try {
        const res = await httpRequest.get(`admin/quan-ly-phong/create`);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const post = async (data) => {
    try {
        const res = await httpRequest.post(`admin/quan-ly-phong/create`, data);
        console.log(res);
        return res;
    } catch (error) {
        console.log(error);
    }
};
