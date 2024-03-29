/* eslint-disable */
/*
 * Automatically generated by 'ng g ng-alain:sta'
 * @see https://ng-alain.com/cli/sta
 *
 * Inspired by: https://github.com/acacode/swagger-typescript-api
 */

import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import type {BaseResponseListSaSession, SearchSessionDto} from '../models';
import {STABaseService, STAHttpOptions} from '../_base.service';

@Injectable({providedIn: 'root'})
export class SearchSessionService extends STABaseService {
  /**
   * 会话查询接口----根据分页参数获取会话列表
   *
   * @request POST:/searchSession/list
   */
  list1(req: SearchSessionDto, options?: STAHttpOptions): Observable<BaseResponseListSaSession> {
    return this.request('POST', `/searchSession/list`, {
      body: req,
      ...options
    });
  }
}
