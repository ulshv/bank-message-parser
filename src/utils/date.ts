import * as moment from 'moment';

/** Key - month name in English, value - month name in other languages (MMM format) */
const engMonthsRegexpMap: { [month: string]: RegExp } = {
  jan: /янв/i,
  feb: /фев/i,
  mar: /мар/i,
  apr: /апр/i,
  may: /май/i,
  jun: /июн/i,
  jul: /июл/i,
  aug: /авг/i,
  sep: /сен/i,
  oct: /окт/i,
  nov: /ноя/i,
  dec: /дек/i,
};

/** Provide month name in other language and get month name in English (MMM format) */
export const getEngMonth = (month: string): string | void => (
  Object.keys(engMonthsRegexpMap).find(k => engMonthsRegexpMap[k].test(month))
);

/** Create Moment.js object with better timezone handling */
export const getMomentDate = (
  date: string,
  format: string,
  timezone: string = "Z"
) : moment.Moment => (
  moment(date + timezone, format + "Z").utcOffset(timezone)
)

/**
 * Check Moment object which was created only using day and month
 * if it should have previous year's value (e.g. 2016, not 2017).
 * By default it has year from current system time.
 */
export const isLastYear = (date: moment.Moment): boolean => {
  const now = moment().utcOffset(date._tzm || 0)
  const dateWithTZ = moment(date).utcOffset(date._tzm || 0);
  return now.month() < dateWithTZ.month()
}

/**
 * Get timezone value in '+-HH:mm' format or 'Z' (UTC).
 * Provide number between -16 and 16 with timezone hours
 * or timezone string in '+-HH:mm' format.
 *
 * Examples:
 * 5.5 will return '+05:30'
 * '+07:30' will return '+07:30'
 * Any other input value will return 'Z' (UTC +00:00)
 */
export const parseTimezone = (input?: number | string | null): string => {
  if (typeof input === 'number' && (input > -16) && (input < 16))
    return numberToTimezone(input);

  if (typeof input === 'string' && /^[+-]\d{2}:\d{2}$/.test(input))
    return input;

  return 'Z' // 'Z' is UTC (+00:00)
}

/** Return string with 2 digits. Add '0' before number if it's less than 10 */
const add0 = (num: number): string => (num < 10 ? '0' : '') + num;

/**
 * Convert number to timezone in +-HH:mm format (or 'Z' for 0).
 * Examples: 5 => '+05:00', -10.5 => '-10:30', 0 => 'Z'
 */
export const numberToTimezone = (num: number): string => {
  if (!num) return 'Z';

  const hours = Math.floor(Math.abs(num));
  const mins = parseInt(((Math.abs(num) % 1) * 60).toFixed()) ;
  const sign = num < 0 ? '-' : '+';

  return `${sign}${add0(hours)}:${add0(mins)}`
}
