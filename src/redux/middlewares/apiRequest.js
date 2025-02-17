import axiosInstance from '../axios';
const api = ({ dispatch }) => next => async action => {
    if(action.type !== 'apiRequest') {
        return next(action);
    }


    try {
        const { url, method, data, onSuccess, onError} = action.payload;
        console.log({url, method, data, onSuccess, onError});
        const response = await axiosInstance.get(url, {
            data,
            method,
            onSuccess,
            onError
        });
        console.log({response});
        dispatch({
            type: 'users/getUsers',
            payload: {
                users: response?.data
            }
        })
        dispatch({
            type: 'GLOBAL_MESSAGE',
            payload: {
                message: 'All data fetched successfully!',
                msgType: 'success'
            }
        })
    } catch (error) {
        console.log({error: error.response});
        dispatch({
            type: 'GLOBAL_MESSAGE',
            payload: {
                message: error.message,
                msgType: 'error'
            }
        })
    }

}

export default api;
