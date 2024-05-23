export class UserModel {
  username: string;
  password: string;
  accountId: string;
  fullName: string;
  accessToken: string;
  expiredDate: string;

  constructor(){
    this.username = '';
    this.password = '';
    this.accountId = '';
    this.fullName = '';
    this.accessToken = '';
    this.expiredDate = '';
  }
}
