import * as moment from 'moment';

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

export const getEngMonth = (month: string): string | void => (
  Object.keys(engMonthsRegexpMap).find(k => engMonthsRegexpMap[k].test(month))
);

const getSysTimezone = (): number => -(new Date()).getTimezoneOffset() / 60;

export const getMomentDate = (
  date: string,
  format: string,
  timezone: number = getSysTimezone()
) : moment.Moment => (
  moment(date, format).utcOffset(timezone)
)

export const isLastYear = (date: moment.Moment): boolean => {
  const now = moment().utcOffset(date._tzm || 0)
  const dateWithTZ = date.utcOffset(date._tzm || 0);
  return now.month() < dateWithTZ.month()
}
