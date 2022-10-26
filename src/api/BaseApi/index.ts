import { AxiosInstance } from 'axios';

export type ConstructorParam = {
  instance: AxiosInstance;
};

export default class BaseApi {
  protected instance: AxiosInstance;

  constructor (payload: ConstructorParam) {
    this.instance = payload.instance;
  }
}
