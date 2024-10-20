/**
 * 判断是否是有效数字
 * @param value - 任意值
 */
export function isValidNumber(value: any) {
  const v = Number(value);
  if (Number.isNaN(v)) {
    return false;
  }
  
  if (v >= Number.MIN_SAFE_INTEGER && v <= Number.MAX_SAFE_INTEGER) {
    return true;
  }
  return false;
}

/**
 * 判断是否为无效数字
 * @param value - 任意值
 */
export function isInvalidNumber(value: any) {
  return !isValidNumber(value);
}
