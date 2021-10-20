/**
 * 所有的api统一管理
 */

import { get, post } from "./http";

export const login = (options = "") => post("login", options);
export const chartData = (options = "") => get("chartdata",options);