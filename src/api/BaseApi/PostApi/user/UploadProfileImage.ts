import defaultAxiosInstance from '@src/api/defaultAxiosInstance';
import PostApi from '..';

export type RequestParam = FormData;

export type ResponseParam = {
  imageUrl: string;
};

export default class UploadProfileImage extends PostApi<RequestParam, ResponseParam> {
  async uploadProfileImage (form: RequestParam) {
    return await this.post('/user/uploadProfileImage', form, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}

export const uploadProfileImageApi = new UploadProfileImage({ instance: defaultAxiosInstance });
