/* eslint-disable */
/*
 * Automatically generated by 'ng g ng-alain:sta'
 * @see https://ng-alain.com/cli/sta
 *
 * Inspired by: https://github.com/acacode/swagger-typescript-api
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import type {BaseResponseString} from '../models';
import {STABaseService, STAHttpOptions} from '../_base.service';
import type {KickoutKickoutRequest, KickoutLogoutRequest} from './dtos';

@Injectable({providedIn: 'root'})
export class KickoutService extends STABaseService {
  /**
   * 将指定账号强制注销
   *
   * @request POST:/kickout/logout
   */
  logout(req: KickoutLogoutRequest, options?: STAHttpOptions): Observable<BaseResponseString> {
    return this.request('POST', `/kickout/logout`, {
      params: req,
      ...options
    });
  }

  /**
   * 将指定账号踢下线
   *
   * @request POST:/kickout/kickout
   */
  kickout(req: KickoutKickoutRequest, options?: STAHttpOptions): Observable<BaseResponseString> {
    return this.request('POST', `/kickout/kickout`, {
      params: req,
      ...options
    });
  }
}