/**
 * 유저 계정. FE와 통신하는 데이터는 Account 가 아닌, Member 로 함.
 * Account 는 내부 계정 데이터 용도.
 */

export interface Account {
  accountId?: number;
  username?: string;
  nickname?: string;
  token?: string;
  email?: string;
  crateDatetime?: number;
  updateDatetime?: number;
}
