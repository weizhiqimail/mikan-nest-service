import moment from 'moment';
import { MomentInput } from 'moment/moment';

/**
 * 格式化日期
 * @param date
 */
export function formatDate(date: MomentInput = new Date()) {
  return moment(date).format('YYYY-MM-DD');
}

/**
 * 格式化时间
 * @param date
 */
export function formatTime(date: MomentInput = new Date()) {
  return moment(date).format('HH:mm:ss');
}

/**
 * 格式化日期时间
 * @param date
 */
export function formatDateTime(date: MomentInput = new Date()) {
  return moment(date).format('YYYY-MM-DD HH:mm:ss');
}
