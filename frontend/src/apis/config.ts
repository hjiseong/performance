import axios from "axios";

export const AuthAPI = (function () {
  const api = axios.create({
    baseURL: "http://localhost:3000/auth/"
  });
  let token = "";

  return {
    setAccessToken: function (access_token: string) {
      token = access_token;
    },
    get: function (url: string, params?: any) {
      return api.get(url, {
        withCredentials: true,
        params: params || {}
      });
    },
    post: function (url: string, data: any) {
      return api.post(url, data, {
        withCredentials: true
      });
    },
    put: function (url: string, data: any) {
      return api.put(url, data, {
        withCredentials: true
      });
    },
    delete: function (url: string, params: any) {
      return api.delete(url, {
        withCredentials: true,
        params
      });
    }
  };
})();
