import axios from "axios";
import axiosApiInstance from "../../../helper/axios";
import Swal from "sweetalert2";

const signUpRequest = () => {
    return { type: "SIGN_UP_REQUEST" };
};

const signUpSuccess = (data) => {
    return { type: "SIGN_UP_SUCCESS", payload: data };
};

const signUpFailure = (error) => {
    return { type: "SIGN_UP_FAILURE", payload: error };
};


export const signUp = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        dispatch(signUpRequest());
        axios
            .post(`${Url}/users/`, data)
            .then((res) => {
                dispatch(signUpSuccess(res.data.data));
                resolve(res.data.message);
            })
            .catch((err) => {
                dispatch(signUpFailure(err.response.data.message));
                reject(new Error(err.response.data.message));
            });
    });
};

export const verify = () => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axiosApiInstance
            .get(`${Url}/users/verify`)
            .then((res) => {
                resolve(res.data.message);
            })
            .catch((err) => {
                reject(new Error(err.response.data.message));
            });
    });
};


export const login = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {
        const Url = process.env.api;
        axios
            .post(`${Url}/users/auth/login`, data)
            .then((res) => {
                dispatch({
                    type: "LOGIN",
                    payload: res.data.data,
                    role: res.data.data.role,
                    status: true,
                });
                localStorage.setItem("id", res.data.data.id)
                localStorage.setItem("token", res.data.data.token);
                resolve(res.data.message);
            })
            .catch((err) => {
                if (err.response) {
                    reject(err.response.data.message);
                } else {
                    Swal.fire("Internal Server Error!.", "", "error");
                }
            });
    });
};