import axios from 'axios';

class Service {
    constructor() {
        let service = axios.create({
            'Authorization': 'Bearer ' + "test"
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    handleError = (error) => {
        switch (error.response.status) {
            // case 401:
            //     this.redirectTo(document, '/')
            //     break;
            // case 404:
            //     this.redirectTo(document, '/404')
            //     break;
            // default:
            //     this.redirectTo(document, '/500')
            //     break;
        }
        return Promise.reject(error)
    }

    redirectTo = (document, path) => {
        document.location = path
    }

    get(path, payload) {
        return this.service.request({
            method: 'GET',
            url: path,
            responseType: 'json',
            params: payload
        }).then((response) => response);
    }

    patch(path, payload) {
        return this.service.request({
            method: 'PATCH',
            url: path,
            responseType: 'json',
            params: payload
        }).then((response) => response);
    }

    post(path, payload) {
        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            params: payload
        }).then((response) => response);
    }
}

export default new Service;
