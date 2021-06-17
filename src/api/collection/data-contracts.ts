/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApidocsNovelBookCatalogData1 {
  chargeNumber?: string;
  list?: ApidocsNovelBookCatalogData2;
}

export interface ApidocsNovelBookCatalogData2 {
  number?: string;
  title?: string;
  writetime?: string;
}

export interface ApidocsNovelBookCatalogResponse {
  data?: ApidocsNovelBookCatalogData1;
  errorCode?: number;
  message?: string;
}

export interface ApidocsNovelBookChapterResponse {
  data?: ApidocsNovelBookPartData;
  errorCode?: number;
  message?: string;
}

export interface ApidocsNovelBookPartData {
  charptDomain?: string;
  list?: ApidocsNovelBookPartDataList;
}

export interface ApidocsNovelBookPartDataList {
  file?: string;
  number?: string;
  title?: string;
  writetime?: string;
}

export interface ApidocsNovelUserLoginData {
  ExpireTime?: string;
  UserToken?: string;
}

export interface ApidocsNovelUserLoginResponse {
  Data?: ApidocsNovelUserLoginData;
  ErrorCode?: number;
  Message?: string;
}

export interface ApidocsTigerWechatEditMpMenuStruct {
  Data?: string;
  ErrorCode?: number;
  Message?: string;
}
