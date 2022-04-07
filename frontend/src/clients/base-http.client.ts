import axios, { AxiosResponse } from "axios";

export class HttpClient {
  _handleResponse(axiosResponse: AxiosResponse<any>) {
    return axiosResponse.data;
  }

  async get(url: string) {
    return this._handleResponse(await axios.get(url, {}));
  }

  async post(url: string, params: any) {
    await axios.post(url, params, {});
  }

  async patch(url: string, params: any) {
    await axios.patch(url, params, {});
  }

  async put(url: string, params: any) {
    await axios.put(url, params, {});
  }

  async delete(url: string) {
    await axios.delete(url, {});
  }
}
