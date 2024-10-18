export declare namespace AccountModuleTypes {
  interface IRegisterAccountDto {
    email: string;
    password: string;
  }

  interface ILoginAccountDto {
    email: string;
    password: string;
  }

  interface IResetPasswordAccountDto {
    email: string;
    newPassword: string;
  }
}
