import {ObjectPath, Variant, SigVal} from '@dbus-types/common'
export type Interfaces = {
  "org.freedesktop.Accounts": org.freedesktop.Accounts
  "org.freedesktop.Accounts.User": org.freedesktop.Accounts.User
}
export namespace org {
  export namespace freedesktop {
    export interface Accounts {

      /**
      ************************************************************
      **/
      on(ev: "UserAdded", cb: (user: ObjectPath) => void): Promise<void>

      /**
      ************************************************************
      **/
      on(ev: "UserDeleted", cb: (user: ObjectPath) => void): Promise<void>

      /**
      ************************************************************
      **/
      get DaemonVersion(): Promise<string>

      /**
      ************************************************************
      **/
      get HasNoUsers(): Promise<boolean>

      /**
      ************************************************************
      **/
      get HasMultipleUsers(): Promise<boolean>

      /**
      ************************************************************
      **/
      get AutomaticLoginUsers(): Promise<ObjectPath[]>

      /**
      ************************************************************
      **/
      ListCachedUsers(): Promise<[/*users*/ObjectPath[]]>

      /**
      ************************************************************
      **/
      FindUserById(id: number): Promise<[/*user*/ObjectPath]>

      /**
      ************************************************************
      **/
      FindUserByName(name: string): Promise<[/*user*/ObjectPath]>

      /**
      ************************************************************
      **/
      CreateUser(name: string, fullname: string, accountType: number): Promise<[/*user*/ObjectPath]>

      /**
      ************************************************************
      **/
      CacheUser(name: string): Promise<[/*user*/ObjectPath]>

      /**
      ************************************************************
      **/
      UncacheUser(name: string): Promise<[]>

      /**
      ************************************************************
      **/
      DeleteUser(id: number, removeFiles: boolean): Promise<[]>
    }
    export namespace Accounts {
      export interface User {
        on(ev: "Changed", cb: () => void): Promise<void>
        get Uid(): Promise<number>
        get UserName(): Promise<string>
        get RealName(): Promise<string>
        get AccountType(): Promise<number>
        get HomeDirectory(): Promise<string>
        get Shell(): Promise<string>
        get Email(): Promise<string>
        get Language(): Promise<string>
        get Session(): Promise<string>
        get SessionType(): Promise<string>
        get XSession(): Promise<string>
        get Location(): Promise<string>
        get LoginFrequency(): Promise<number>
        get LoginTime(): Promise<number>
        get LoginHistory(): Promise<[number,number,{[key:string]:Variant}][]>
        get IconFile(): Promise<string>
        get Saved(): Promise<boolean>
        get Locked(): Promise<boolean>
        get PasswordMode(): Promise<number>
        get PasswordHint(): Promise<string>
        get AutomaticLogin(): Promise<boolean>
        get SystemAccount(): Promise<boolean>
        get LocalAccount(): Promise<boolean>
        SetUserName(name: string): Promise<[]>
        SetRealName(name: string): Promise<[]>
        SetEmail(email: string): Promise<[]>
        SetLanguage(language: string): Promise<[]>
        SetXSession(x_session: string): Promise<[]>
        SetSession(session: string): Promise<[]>
        SetSessionType(session_type: string): Promise<[]>
        SetLocation(location: string): Promise<[]>
        SetHomeDirectory(homedir: string): Promise<[]>
        SetShell(shell: string): Promise<[]>
        SetIconFile(filename: string): Promise<[]>
        SetLocked(locked: boolean): Promise<[]>
        SetAccountType(accountType: number): Promise<[]>
        SetPasswordMode(mode: number): Promise<[]>
        SetPassword(password: string, hint: string): Promise<[]>
        SetPasswordHint(hint: string): Promise<[]>
        SetAutomaticLogin(enabled: boolean): Promise<[]>
        GetPasswordExpirationPolicy(): Promise<[/*expiration_time*/number, /*last_change_time*/number, /*min_days_between_changes*/number, /*max_days_between_changes*/number, /*days_to_warn*/number, /*days_after_expiration_until_lock*/number]>
        SetPasswordExpirationPolicy(min_days_between_changes: number, max_days_between_changes: number, days_to_warn: number, days_after_expiration_until_lock: number): Promise<[]>
        SetUserExpirationPolicy(expiration_time: number): Promise<[]>
      }
    }
  }
}
