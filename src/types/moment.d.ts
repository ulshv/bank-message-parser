import * as moment from 'moment';

declare module "moment" {
  export interface Moment extends Object {
    _tzm: number | undefined
  }
}
