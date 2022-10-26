import { AxiosRequestConfig } from 'axios';
import BaseApi from '..';

export default class GetApi<RequestParam=any, ResponseParam=any> extends BaseApi {
  protected async get (url: string, config: AxiosRequestConfig & { params: RequestParam }): Promise<ResponseParam> {
    return (await this.instance.get<ResponseParam>(url, config)).data;
  }
}
