/* eslint-disable */
/*
 * Automatically generated by 'ng g ng-alain:sta'
 * @see https://ng-alain.com/cli/sta
 *
 * Inspired by: https://github.com/acacode/swagger-typescript-api
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import type {BaseResponseString, UserRegisterDto} from '../models';
import {STABaseService, STAHttpOptions} from '../_base.service';

@Injectable({providedIn: 'root'})
export class 用户注册Service extends STABaseService {
  /**
   * 用户注册
   *
   * @request POST:/register/user
   */
  user(req: UserRegisterDto, options?: STAHttpOptions): Observable<BaseResponseString> {
    return this.request('POST', `/register/user`, {
      body: req,
      ...options
    });
  }

  /**
   * 获取公钥
   *
   * @request GET:/register/getPublicKey
   */
  getPublicKey1(options?: STAHttpOptions): Observable<BaseResponseString> {
    return this.request('GET', `/register/getPublicKey`, {
      ...options
    });
  }
}
