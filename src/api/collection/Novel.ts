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

import { apiUrl } from "@utils/ConfigsKit";
import request from "../request";
import {
  ApidocsNovelBookCatalogResponse,
  ApidocsNovelBookChapterResponse,
  ApidocsNovelUserLoginResponse,
} from "./data-contracts";

interface Option {
  ignoreFailToast: boolean;
}

/**
 * @description 文档详情：http://apidoc.tangzhe.name/#/home/project/inside/api/detail?groupID=279&apiID=974&projectName=%E5%B0%8F%E8%AF%B4&projectID=40
 *
 * @tags 小说 API
 * @name BookCatalogList
 * @summary 书籍目录
 * @request GET:/novel/book/catalog
 */

export const bookCatalogList = async (
  query: { book_id: string },
  option?: Option,
): Promise<ApidocsNovelBookCatalogResponse> => {
  return await request(`${apiUrl}/novel/book/catalog`, {
    method: "GET",
    body: query,
    headers: {
      "content-type": "application/json",
    },
    ...option,
  });
};

/**
 * @description 文档详情：http://apidoc.tangzhe.name/#/home/project/inside/api/detail?groupID=-1&apiID=975&projectName=%E5%B0%8F%E8%AF%B4&projectID=40
 *
 * @tags 小说 API
 * @name BookChapterList
 * @summary 获取章节内容
 * @request GET:/novel/book/chapter
 */

export const bookChapterList = async (
  query: { book_id: string },
  option?: Option,
): Promise<ApidocsNovelBookChapterResponse> => {
  return await request(`${apiUrl}/novel/book/chapter`, {
    method: "GET",
    body: query,
    headers: {
      "content-type": "application/json",
    },
    ...option,
  });
};

/**
 * @description 根据认证中心获取到的 wxMpAuthToken 来换取小说系统的 UserToken。 后端拿到 wxmp_auth_token 后会检查此用户是否已经在系统中注册，已注册直接返回 UserToken，未注则注册后再返回 文档详情：http://apidoc.tangzhe.name/#/home/project/inside/api/detail?groupID=279&apiID=972&projectName=%E5%B0%8F%E8%AF%B4&projectID=40 【UserToken】访问小说系统的用户唯一标识 【ExpireTime】此UserToken的失效时间，格式：2021-08-08
 *
 * @tags 小说 API
 * @name UserLoginByAuthcenterCreate
 * @summary 获取 userToken (登录)
 * @request POST:/novel/user/login-by-authcenter
 */

export const userLoginByAuthcenterCreate = async (
  query: { wxmp_auth_token: string },
  option?: Option,
): Promise<ApidocsNovelUserLoginResponse> => {
  return await request(`${apiUrl}/novel/user/login-by-authcenter`, {
    method: "POST",
    body: query,
    headers: {
      "content-type": "application/json",
    },
    ...option,
  });
};
