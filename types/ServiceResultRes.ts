import { STATUS_SUCCESS, STATUS_ERROR, DEFAULT_SUCCESS, DEFAULT_ERROR } from '../constants';

export class ServiceResultRes {
  public description: string;
  public statusCode: string;
  public errorCode: string;
  public result: any;

  constructor() {
    this.description = '';
    this.statusCode = '';
    this.errorCode = '';
    this.result = {};
  }

  makeRes({ result = {}, statusCode = '', errorCode = '', description = '' } = {}) {
    this.result = result;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.description = description;
  }

  /**
   * Success Res
   */

  makeSuccess(result = {}, statusCode = STATUS_SUCCESS, errorCode = DEFAULT_SUCCESS, description = '') {
    this.result = result;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.description = description;
  }

  /**
   * Error Res
   */

  makeError(result = {}, statusCode = STATUS_ERROR, errorCode = DEFAULT_ERROR, description = '') {
    this.result = result;
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.description = description;
  }
}
