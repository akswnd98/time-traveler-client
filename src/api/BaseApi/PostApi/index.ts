import { AxiosRequestConfig } from 'axios';
import BaseApi from '..';

export default class PostApi<RequestParam=any, ResponseParam=any> extends BaseApi {
  protected async post (url: string, body: RequestParam, config: AxiosRequestConfig): Promise<ResponseParam> {
    return (await this.instance.post<ResponseParam>(url, body, config)).data;
  }
}
