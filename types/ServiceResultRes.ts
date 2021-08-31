import { STATUS_SUCCESS, STATUS_ERROR, DEFAULT_SUCCESS, DEFAULT_ERROR } from '../constants';

export class ServiceResultRes {
  public description: string;
  public statusCode: string;
  public resultCode: string;
  public result: any;

  constructor() {
    this.description = '';
    this.statusCode = '';
    this.resultCode = '';
    this.result = {};
  }

  makeRes({ result = {}, statusCode = '', resultCode = '', description = '' } = {}) {
    this.result = result;
    this.statusCode = statusCode;
    this.resultCode = resultCode;
    this.description = description;
  }

  /**
   * Success Res
   */

  makeSuccess({ result = {}, statusCode = STATUS_SUCCESS, resultCode = DEFAULT_SUCCESS, description = '' } = {}) {
    this.result = result;
    this.statusCode = statusCode;
    this.resultCode = resultCode;
    this.description = description;
  }

  /**
   * Error Res
   */

  makeError({ result = {}, statusCode = STATUS_ERROR, resultCode = DEFAULT_ERROR, description = '' } = {}) {
    this.result = result;
    this.statusCode = statusCode;
    this.resultCode = resultCode;
    this.description = description;
  }
}
