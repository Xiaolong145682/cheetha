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
import { ApidocsTigerWechatEditMpMenuStruct } from "./data-contracts";

interface Option {
  ignoreFailToast: boolean;
}

/**
 * @description 从数据库拉取自定义菜单发送到微信服务端去生成菜单
 *
 * @tags 管理后台接口
 * @name WechatEditMpMenuList
 * @summary 创建自定义菜单
 * @request GET:/tiger/wechat/edit-mp-menu
 */

export const wechatEditMpMenuList = async (
  query: { contextid: string },
  option?: Option,
): Promise<ApidocsTigerWechatEditMpMenuStruct> => {
  return await request(`${apiUrl}/tiger/wechat/edit-mp-menu`, {
    method: "GET",
    body: query,
    headers: {
      "content-type": "application/json",
    },
    ...option,
  });
};
