/*
 * 所有的api统一管理
 */

import { get, post } from "./http"

export const login = (options = {}) => post("login", options)
export const chartData = (options = {}) => get("echartsData", options)
export const tabData = (options = {}) => get("tabData", options)
export const userInfo = (options = {}) => post("userInfo", options)
export const logout = (options = {}) => post("logout", options)