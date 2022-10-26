import Task from '../../../Task';

export type ConstructorParam = {
  handleCertificationRequestFailed: () => Promise<void>;
};

export default class RequestCertification extends Task<string> {
  handleCertificationRequestFailed: () => Promise<void>;

  constructor (payload: ConstructorParam) {
    super();
    this.handleCertificationRequestFailed = payload.handleCertificationRequestFailed;
  }

  async execute (payload: string) {
    try {
      this.requestCertification();
    } catch (e) {
      this.handleCertificationRequestFailed();
    }
  }

  async requestCertification () {
    // pass
  }
}
