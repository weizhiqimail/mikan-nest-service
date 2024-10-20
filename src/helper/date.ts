import moment from 'moment';
import { MomentInput } from 'moment/moment';

/**
 * 格式化日期
 * @param date
 * @param format
 */
export function formatDate(
  date: MomentInput = new Date(),
  format = 'YYYY-MM-DD',
) {
  return moment(date).format(format);
}

/**
 * 格式化时间
 * @param date
 * @param format
 */
export function formatTime(
  date: MomentInput = new Date(),
  format = 'HH:mm:ss',
) {
  return moment(date).format(format);
}

/**
 * 格式化日期时间
 * @param date
 * @param format
 */
export function formatDateTime(
  date: MomentInput = new Date(),
  format = 'YYYY-MM-DD HH:mm:ss',
) {
  return moment(date).format(format);
}

/**
 * 格式化日期时间
 * @param date
 * @param format
 */
export function formatDateTimeWithMilliseconds(
  date: MomentInput = new Date(),
  format = 'YYYY-MM-DD HH:mm:ss:SSS',
) {
  return moment(date).format(format);
}

export function isValidDate(date: any) {
  const dateStr = new Date(date).toString();
  return dateStr !== 'Invalid Date';
}

// 判断是否为标准 2020-01-01 日期格式
export function isStandardDate(date = '') {
  const regexp = /(^\d{4})-(\d{2})-(\d{2}$)/gi;
  const match = regexp.exec(date);
  if (!match) {
    return false;
  }
  const [, year, month, day] = match;
  const newYear = Number(year);
  const newMonth = Number(month);
  const newDay = Number(day);
  if (newYear < 1900 || newYear > 2100) {
    return false;
  }
  if (newMonth < 0 || newMonth > 12) {
    return false;
  }
  if (newDay < 0 || newDay > 31) {
    return false;
  }
  if (newMonth === 2 && newDay > 29) {
    return false;
  }
  return true;
}
