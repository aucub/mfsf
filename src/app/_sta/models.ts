/* eslint-disable */
/*
 * Automatically generated by 'ng g ng-alain:sta'
 * @see https://ng-alain.com/cli/sta
 *
 * Inspired by: https://github.com/acacode/swagger-typescript-api
 */

export interface User {
  id?: string;
  username?: string;
  nickname?: string;
  creator?: string;
  /** @format date-time */
  createTime?: string;
  updater?: string;
  /** @format date-time */
  lastUpdateTime?: string;
  /** @format date-time */
  loginTime?: string;
  type?: boolean;
  note?: string;
  deleted?: boolean;
}

export interface BaseResponseString {
  /** @format int32 */
  code?: number;
  message?: string;
  data?: string;
}

export interface UserRegisterDto {
  id?: string;
  username?: string;
  password?: string;
  nickname?: string;
  /** @format date-time */
  createTime?: string;
  /** @format date-time */
  lastUpdateTime?: string;
  note?: string;
  deleted?: boolean;
}

export interface RoleRelationDto {
  userId?: string;
  roleIds?: string[];
}

export interface FindUserPageDto {
  keyword?: string;
  roleId?: string;
  /** @format int32 */
  pageSize?: number;
  /** @format int32 */
  pageNum?: number;
}

export interface BaseResponsePageUser {
  /** @format int32 */
  code?: number;
  message?: string;
  data?: PageUser;
}

export interface OrderItem {
  column?: string;
  asc?: boolean;
}

export interface PageUser {
  records?: User[];
  /** @format int64 */
  total?: number;
  /** @format int64 */
  size?: number;
  /** @format int64 */
  current?: number;
  /** @deprecated */
  orders?: OrderItem[];
  /** @deprecated */
  optimizeCountSql?: boolean;
  /** @deprecated */
  searchCount?: boolean;
  optimizeJoinOfCountSql?: boolean;
  /**
   * @deprecated
   * @format int64
   */
  maxLimit?: number;
  /** @deprecated */
  countId?: string;
  /** @format int64 */
  pages?: number;
}

export interface BaseResponseUser {
  /** @format int32 */
  code?: number;
  message?: string;
  data?: User;
}

export interface BaseResponseListRole {
  /** @format int32 */
  code?: number;
  message?: string;
  data: Role[];
}

export interface Role {
  id?: string;
  name: string;
  description?: string;
  /** @format int32 */
  deleted?: number;
}

export interface Roleui {
  label?: string;
  value?: string;
}

export interface JwtDto {
  jwtId?: string;
  issuer?: string;
  subject?: string;
  /** @format date-time */
  expiresAt?: string;
  audience?: string;
  /** @format date-time */
  notBefore?: string;
  /** @format date-time */
  issuedAt?: string;
  authorities?: string[];
}

export interface SearchSessionDto {
  /** @format int32 */
  start?: number;
  /** @format int32 */
  size?: number;
}

export interface BaseResponseListSaSession {
  /** @format int32 */
  code?: number;
  message?: string;
  data?: SaSession[];
}

export interface SaSession {
  id?: string;
  /** @format int64 */
  createTime?: number;
  dataMap?: Record<string, object>;
  tokenSignList?: TokenSign[];
  /** @format int64 */
  timeout?: number;
}

export interface TokenSign {
  value?: string;
  device?: string;
}

export interface RolePermissionDto {
  roleId?: string;
  permissionIds?: string[];
}

export interface UserLoginDto {
  username?: string;
  password?: string;
  isLastingCookie?: boolean;
}

export interface DisableAccountDto {
  userId?: string;
  /** @format int64 */
  time?: number;
}

export interface BaseResponseListPermission {
  /** @format int32 */
  code?: number;
  message?: string;
  data?: Permission[];
}

export interface Permission {
  id?: string;
  pid?: string;
  name?: string;
  value?: string;
  /** @format int32 */
  deleted?: number;
}

export interface BaseResponseLinkedHashMapStringListString {
  /** @format int32 */
  code?: number;
  message?: string;
  data?: Record<string, string[]>;
}

export interface PageListRes {
  code: number;
  message: string;
  data: {
    records: {
      id: string;
      username: string;
      nickname: string;
      creator: string;
      updater: string;
      deleted: boolean;
      createTime: Record<string, unknown>;
      lastUpdateTime: Record<string, unknown>;
      loginTime: Record<string, unknown>;
      type: string;
      note: string;
    }[];
    total: number;
    size: number;
    current: number;
    orders: {
      column: string;
      asc: boolean;
    }[];
    optimizeCountSql: boolean;
    searchCount: boolean;
    optimizeJoinOfCountSql: boolean;
    maxLimit: number;
    countId: string;
    pages: number;
  };
}

export interface DoLoginRes {
  code: number;
  message: string;
  data: string;
}
