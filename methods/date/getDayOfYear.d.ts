/**
 * 返回某个年份的天数,可以指定前几个年或后几个年，默认当前
 * @param date 字符串/日期/时间戳
 * @param year 年(默认当年)、前几个年、后几个年
 */
export declare function getDayOfYear(date: string | Date | number, year?: number): Date;

export default getDayOfYear