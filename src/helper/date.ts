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
