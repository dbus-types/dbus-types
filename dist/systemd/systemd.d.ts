import {ObjectPath, Variant, SigVal} from '@dbus-types/common'
export type Interfaces = {
  "org.freedesktop.LogControl1": org.freedesktop.LogControl1
  "org.freedesktop.home1.Home": org.freedesktop.home1.Home
  "org.freedesktop.home1.Manager": org.freedesktop.home1.Manager
  "org.freedesktop.hostname1": org.freedesktop.hostname1
  "org.freedesktop.import1.Manager": org.freedesktop.import1.Manager
  "org.freedesktop.import1.Transfer": org.freedesktop.import1.Transfer
  "org.freedesktop.locale1": org.freedesktop.locale1
  "org.freedesktop.login1.Manager": org.freedesktop.login1.Manager
  "org.freedesktop.login1.Seat": org.freedesktop.login1.Seat
  "org.freedesktop.login1.Session": org.freedesktop.login1.Session
  "org.freedesktop.login1.User": org.freedesktop.login1.User
  "org.freedesktop.machine1.Image": org.freedesktop.machine1.Image
  "org.freedesktop.machine1.Machine": org.freedesktop.machine1.Machine
  "org.freedesktop.machine1.Manager": org.freedesktop.machine1.Manager
  "org.freedesktop.network1.DHCPServer": org.freedesktop.network1.DHCPServer
  "org.freedesktop.network1.Link": org.freedesktop.network1.Link
  "org.freedesktop.network1.Manager": org.freedesktop.network1.Manager
  "org.freedesktop.network1.Network": org.freedesktop.network1.Network
  "org.freedesktop.oom1.Manager": org.freedesktop.oom1.Manager
  "org.freedesktop.portable1.Image": org.freedesktop.portable1.Image
  "org.freedesktop.portable1.Manager": org.freedesktop.portable1.Manager
  "org.freedesktop.resolve1.DnssdService": org.freedesktop.resolve1.DnssdService
  "org.freedesktop.resolve1.Link": org.freedesktop.resolve1.Link
  "org.freedesktop.resolve1.Manager": org.freedesktop.resolve1.Manager
  "org.freedesktop.systemd1.Automount": org.freedesktop.systemd1.Automount
  "org.freedesktop.systemd1.Device": org.freedesktop.systemd1.Device
  "org.freedesktop.systemd1.Job": org.freedesktop.systemd1.Job
  "org.freedesktop.systemd1.Manager": org.freedesktop.systemd1.Manager
  "org.freedesktop.systemd1.Mount": org.freedesktop.systemd1.Mount
  "org.freedesktop.systemd1.Path": org.freedesktop.systemd1.Path
  "org.freedesktop.systemd1.Scope": org.freedesktop.systemd1.Scope
  "org.freedesktop.systemd1.Service": org.freedesktop.systemd1.Service
  "org.freedesktop.systemd1.Slice": org.freedesktop.systemd1.Slice
  "org.freedesktop.systemd1.Socket": org.freedesktop.systemd1.Socket
  "org.freedesktop.systemd1.Swap": org.freedesktop.systemd1.Swap
  "org.freedesktop.systemd1.Target": org.freedesktop.systemd1.Target
  "org.freedesktop.systemd1.Timer": org.freedesktop.systemd1.Timer
  "org.freedesktop.systemd1.Unit": org.freedesktop.systemd1.Unit
  "org.freedesktop.timedate1": org.freedesktop.timedate1
}
export namespace org {
  export namespace freedesktop {
    export interface LogControl1 {
      get LogLevel(): Promise<string>
      get LogTarget(): Promise<string>
      get SyslogIdentifier(): Promise<string>
    }
    export interface hostname1 {
      get Hostname(): Promise<string>
      get StaticHostname(): Promise<string>
      get PrettyHostname(): Promise<string>
      get DefaultHostname(): Promise<string>
      get HostnameSource(): Promise<string>
      get IconName(): Promise<string>
      get Chassis(): Promise<string>
      get Deployment(): Promise<string>
      get Location(): Promise<string>
      get KernelName(): Promise<string>
      get KernelRelease(): Promise<string>
      get KernelVersion(): Promise<string>
      get OperatingSystemPrettyName(): Promise<string>
      get OperatingSystemCPEName(): Promise<string>
      get OperatingSystemSupportEnd(): Promise<number>
      get HomeURL(): Promise<string>
      get HardwareVendor(): Promise<string>
      get HardwareModel(): Promise<string>
      get FirmwareVersion(): Promise<string>
      get FirmwareVendor(): Promise<string>
      get FirmwareDate(): Promise<number>
      SetHostname(hostname: string, interactive: boolean): Promise<[]>
      SetStaticHostname(hostname: string, interactive: boolean): Promise<[]>
      SetPrettyHostname(hostname: string, interactive: boolean): Promise<[]>
      SetIconName(icon: string, interactive: boolean): Promise<[]>
      SetChassis(chassis: string, interactive: boolean): Promise<[]>
      SetDeployment(deployment: string, interactive: boolean): Promise<[]>
      SetLocation(location: string, interactive: boolean): Promise<[]>
      GetProductUUID(interactive: boolean): Promise<[/*uuid*/Buffer]>
      GetHardwareSerial(): Promise<[/*serial*/string]>
      Describe(): Promise<[/*json*/string]>
    }
    export interface locale1 {
      get Locale(): Promise<string[]>
      get X11Layout(): Promise<string>
      get X11Model(): Promise<string>
      get X11Variant(): Promise<string>
      get X11Options(): Promise<string>
      get VConsoleKeymap(): Promise<string>
      get VConsoleKeymapToggle(): Promise<string>
      SetLocale(locale: string[], interactive: boolean): Promise<[]>
      SetVConsoleKeyboard(keymap: string, keymap_toggle: string, convert: boolean, interactive: boolean): Promise<[]>
      SetX11Keyboard(layout: string, model: string, variant: string, options: string, convert: boolean, interactive: boolean): Promise<[]>
    }
    export interface timedate1 {
      get Timezone(): Promise<string>
      get LocalRTC(): Promise<boolean>
      get CanNTP(): Promise<boolean>
      get NTP(): Promise<boolean>
      get NTPSynchronized(): Promise<boolean>
      get TimeUSec(): Promise<number>
      get RTCTimeUSec(): Promise<number>
      SetTime(usec_utc: number, relative: boolean, interactive: boolean): Promise<[]>
      SetTimezone(timezone: string, interactive: boolean): Promise<[]>
      SetLocalRTC(local_rtc: boolean, fix_system: boolean, interactive: boolean): Promise<[]>
      SetNTP(use_ntp: boolean, interactive: boolean): Promise<[]>
      ListTimezones(): Promise<[/*timezones*/string[]]>
    }
    export namespace DBus {
      export interface Introspectable {
        Introspect(): Promise<[/*xml_data*/string]>
      }
      export interface ObjectManager {
        on(ev: "InterfacesAdded", cb: (object_path: ObjectPath, interfaces_and_properties: {[key:string]:{[key:string]:Variant}}) => void): Promise<void>
        on(ev: "InterfacesRemoved", cb: (object_path: ObjectPath, interfaces: string[]) => void): Promise<void>
        GetManagedObjects(): Promise<[/*object_paths_interfaces_and_properties*/{[key:ObjectPath]:{[key:string]:{[key:string]:Variant}}}]>
      }
      export interface Peer {
        Ping(): Promise<[]>
        GetMachineId(): Promise<[/*machine_uuid*/string]>
      }
      export interface Properties {
        on(ev: "PropertiesChanged", cb: (interface_name: string, changed_properties: {[key:string]:Variant}, invalidated_properties: string[]) => void): Promise<void>
        Get(interface_name: string, property_name: string): Promise<[/*value*/Variant]>
        GetAll(interface_name: string): Promise<[/*props*/{[key:string]:Variant}]>
        Set(interface_name: string, property_name: string, value: SigVal): Promise<[]>
      }
    }
    export namespace home1 {
      export interface Home {
        get UserName(): Promise<string>
        get UID(): Promise<number>
        get UnixRecord(): Promise<[string,number,number,string,string,string]>
        get State(): Promise<string>
        get UserRecord(): Promise<[string,boolean]>
        Activate(secret: string): Promise<[]>
        Deactivate(): Promise<[]>
        Unregister(): Promise<[]>
        Realize(secret: string): Promise<[]>
        Remove(): Promise<[]>
        Fixate(secret: string): Promise<[]>
        Authenticate(secret: string): Promise<[]>
        Update(user_record: string): Promise<[]>
        Resize(size: number, secret: string): Promise<[]>
        ChangePassword(new_secret: string, old_secret: string): Promise<[]>
        Lock(): Promise<[]>
        Unlock(secret: string): Promise<[]>
        Acquire(secret: string, please_suspend: boolean): Promise<[/*send_fd*/any]>
        Ref(please_suspend: boolean): Promise<[/*send_fd*/any]>
        Release(): Promise<[]>
      }
      export interface Manager {
        get AutoLogin(): Promise<[string,string,ObjectPath][]>
        GetHomeByName(user_name: string): Promise<[/*uid*/number, /*home_state*/string, /*gid*/number, /*real_name*/string, /*home_directory*/string, /*shell*/string, /*bus_path*/ObjectPath]>
        GetHomeByUID(uid: number): Promise<[/*user_name*/string, /*home_state*/string, /*gid*/number, /*real_name*/string, /*home_directory*/string, /*shell*/string, /*bus_path*/ObjectPath]>
        GetUserRecordByName(user_name: string): Promise<[/*user_record*/string, /*incomplete*/boolean, /*bus_path*/ObjectPath]>
        GetUserRecordByUID(uid: number): Promise<[/*user_record*/string, /*incomplete*/boolean, /*bus_path*/ObjectPath]>
        ListHomes(): Promise<[/*home_areas*/[string,number,string,number,string,string,string,ObjectPath][]]>
        ActivateHome(user_name: string, secret: string): Promise<[]>
        DeactivateHome(user_name: string): Promise<[]>
        RegisterHome(user_record: string): Promise<[]>
        UnregisterHome(user_name: string): Promise<[]>
        CreateHome(user_record: string): Promise<[]>
        RealizeHome(user_name: string, secret: string): Promise<[]>
        RemoveHome(user_name: string): Promise<[]>
        FixateHome(user_name: string, secret: string): Promise<[]>
        AuthenticateHome(user_name: string, secret: string): Promise<[]>
        UpdateHome(user_record: string): Promise<[]>
        ResizeHome(user_name: string, size: number, secret: string): Promise<[]>
        ChangePasswordHome(user_name: string, new_secret: string, old_secret: string): Promise<[]>
        LockHome(user_name: string): Promise<[]>
        UnlockHome(user_name: string, secret: string): Promise<[]>
        AcquireHome(user_name: string, secret: string, please_suspend: boolean): Promise<[/*send_fd*/any]>
        RefHome(user_name: string, please_suspend: boolean): Promise<[/*send_fd*/any]>
        ReleaseHome(user_name: string): Promise<[]>
        LockAllHomes(): Promise<[]>
        DeactivateAllHomes(): Promise<[]>
        Rebalance(): Promise<[]>
      }
    }
    export namespace import1 {
      export interface Manager {
        on(ev: "TransferNew", cb: (transfer_id: number, transfer_path: ObjectPath) => void): Promise<void>
        on(ev: "TransferRemoved", cb: (transfer_id: number, transfer_path: ObjectPath, result: string) => void): Promise<void>
        ImportTar(fd: any, local_name: string, force: boolean, read_only: boolean): Promise<[/*transfer_id*/number, /*transfer_path*/ObjectPath]>
        ImportRaw(fd: any, local_name: string, force: boolean, read_only: boolean): Promise<[/*transfer_id*/number, /*transfer_path*/ObjectPath]>
        ImportFileSystem(fd: any, local_name: string, force: boolean, read_only: boolean): Promise<[/*transfer_id*/number, /*transfer_path*/ObjectPath]>
        ExportTar(local_name: string, fd: any, format: string): Promise<[/*transfer_id*/number, /*transfer_path*/ObjectPath]>
        ExportRaw(local_name: string, fd: any, format: string): Promise<[/*transfer_id*/number, /*transfer_path*/ObjectPath]>
        PullTar(url: string, local_name: string, verify_mode: string, force: boolean): Promise<[/*transfer_id*/number, /*transfer_path*/ObjectPath]>
        PullRaw(url: string, local_name: string, verify_mode: string, force: boolean): Promise<[/*transfer_id*/number, /*transfer_path*/ObjectPath]>
        ListTransfers(): Promise<[/*transfers*/[number,string,string,string,number,ObjectPath][]]>
        CancelTransfer(transfer_id: number): Promise<[]>
      }
      export interface Transfer {
        on(ev: "LogMessage", cb: (priority: number, line: string) => void): Promise<void>
        get Id(): Promise<number>
        get Local(): Promise<string>
        get Remote(): Promise<string>
        get Type(): Promise<string>
        get Verify(): Promise<string>
        get Progress(): Promise<number>
        Cancel(): Promise<[]>
      }
    }
    export namespace login1 {
      export interface Manager {
        on(ev: "SessionNew", cb: (session_id: string, object_path: ObjectPath) => void): Promise<void>
        on(ev: "SessionRemoved", cb: (session_id: string, object_path: ObjectPath) => void): Promise<void>
        on(ev: "UserNew", cb: (uid: number, object_path: ObjectPath) => void): Promise<void>
        on(ev: "UserRemoved", cb: (uid: number, object_path: ObjectPath) => void): Promise<void>
        on(ev: "SeatNew", cb: (seat_id: string, object_path: ObjectPath) => void): Promise<void>
        on(ev: "SeatRemoved", cb: (seat_id: string, object_path: ObjectPath) => void): Promise<void>
        on(ev: "PrepareForShutdown", cb: (start: boolean) => void): Promise<void>
        on(ev: "PrepareForSleep", cb: (start: boolean) => void): Promise<void>
        get EnableWallMessages(): Promise<boolean>
        get WallMessage(): Promise<string>
        get NAutoVTs(): Promise<number>
        get KillOnlyUsers(): Promise<string[]>
        get KillExcludeUsers(): Promise<string[]>
        get KillUserProcesses(): Promise<boolean>
        get RebootParameter(): Promise<string>
        get RebootToFirmwareSetup(): Promise<boolean>
        get RebootToBootLoaderMenu(): Promise<number>
        get RebootToBootLoaderEntry(): Promise<string>
        get BootLoaderEntries(): Promise<string[]>
        get IdleHint(): Promise<boolean>
        get IdleSinceHint(): Promise<number>
        get IdleSinceHintMonotonic(): Promise<number>
        get BlockInhibited(): Promise<string>
        get DelayInhibited(): Promise<string>
        get InhibitDelayMaxUSec(): Promise<number>
        get UserStopDelayUSec(): Promise<number>
        get HandlePowerKey(): Promise<string>
        get HandlePowerKeyLongPress(): Promise<string>
        get HandleRebootKey(): Promise<string>
        get HandleRebootKeyLongPress(): Promise<string>
        get HandleSuspendKey(): Promise<string>
        get HandleSuspendKeyLongPress(): Promise<string>
        get HandleHibernateKey(): Promise<string>
        get HandleHibernateKeyLongPress(): Promise<string>
        get HandleLidSwitch(): Promise<string>
        get HandleLidSwitchExternalPower(): Promise<string>
        get HandleLidSwitchDocked(): Promise<string>
        get HoldoffTimeoutUSec(): Promise<number>
        get IdleAction(): Promise<string>
        get IdleActionUSec(): Promise<number>
        get PreparingForShutdown(): Promise<boolean>
        get PreparingForSleep(): Promise<boolean>
        get ScheduledShutdown(): Promise<[string,number]>
        get Docked(): Promise<boolean>
        get LidClosed(): Promise<boolean>
        get OnExternalPower(): Promise<boolean>
        get RemoveIPC(): Promise<boolean>
        get RuntimeDirectorySize(): Promise<number>
        get RuntimeDirectoryInodesMax(): Promise<number>
        get InhibitorsMax(): Promise<number>
        get NCurrentInhibitors(): Promise<number>
        get SessionsMax(): Promise<number>
        get NCurrentSessions(): Promise<number>
        get StopIdleSessionUSec(): Promise<number>
        GetSession(session_id: string): Promise<[/*object_path*/ObjectPath]>
        GetSessionByPID(pid: number): Promise<[/*object_path*/ObjectPath]>
        GetUser(uid: number): Promise<[/*object_path*/ObjectPath]>
        GetUserByPID(pid: number): Promise<[/*object_path*/ObjectPath]>
        GetSeat(seat_id: string): Promise<[/*object_path*/ObjectPath]>
        ListSessions(): Promise<[/*sessions*/[string,number,string,string,ObjectPath][]]>
        ListUsers(): Promise<[/*users*/[number,string,ObjectPath][]]>
        ListSeats(): Promise<[/*seats*/[string,ObjectPath][]]>
        ListInhibitors(): Promise<[/*inhibitors*/[string,string,string,string,number,number][]]>
        CreateSession(uid: number, pid: number, service: string, type: string, class1: string, desktop: string, seat_id: string, vtnr: number, tty: string, display: string, remote: boolean, remote_user: string, remote_host: string, properties: [string,SigVal][]): Promise<[/*session_id*/string, /*object_path*/ObjectPath, /*runtime_path*/string, /*fifo_fd*/any, /*uid*/number, /*seat_id*/string, /*vtnr*/number, /*existing*/boolean]>
        ReleaseSession(session_id: string): Promise<[]>
        ActivateSession(session_id: string): Promise<[]>
        ActivateSessionOnSeat(session_id: string, seat_id: string): Promise<[]>
        LockSession(session_id: string): Promise<[]>
        UnlockSession(session_id: string): Promise<[]>
        LockSessions(): Promise<[]>
        UnlockSessions(): Promise<[]>
        KillSession(session_id: string, who: string, signal_number: number): Promise<[]>
        KillUser(uid: number, signal_number: number): Promise<[]>
        TerminateSession(session_id: string): Promise<[]>
        TerminateUser(uid: number): Promise<[]>
        TerminateSeat(seat_id: string): Promise<[]>
        SetUserLinger(uid: number, enable: boolean, interactive: boolean): Promise<[]>
        AttachDevice(seat_id: string, sysfs_path: string, interactive: boolean): Promise<[]>
        FlushDevices(interactive: boolean): Promise<[]>
        PowerOff(interactive: boolean): Promise<[]>
        PowerOffWithFlags(flags: number): Promise<[]>
        Reboot(interactive: boolean): Promise<[]>
        RebootWithFlags(flags: number): Promise<[]>
        Halt(interactive: boolean): Promise<[]>
        HaltWithFlags(flags: number): Promise<[]>
        Suspend(interactive: boolean): Promise<[]>
        SuspendWithFlags(flags: number): Promise<[]>
        Hibernate(interactive: boolean): Promise<[]>
        HibernateWithFlags(flags: number): Promise<[]>
        HybridSleep(interactive: boolean): Promise<[]>
        HybridSleepWithFlags(flags: number): Promise<[]>
        SuspendThenHibernate(interactive: boolean): Promise<[]>
        SuspendThenHibernateWithFlags(flags: number): Promise<[]>
        CanPowerOff(): Promise<[/*result*/string]>
        CanReboot(): Promise<[/*result*/string]>
        CanHalt(): Promise<[/*result*/string]>
        CanSuspend(): Promise<[/*result*/string]>
        CanHibernate(): Promise<[/*result*/string]>
        CanHybridSleep(): Promise<[/*result*/string]>
        CanSuspendThenHibernate(): Promise<[/*result*/string]>
        ScheduleShutdown(type: string, usec: number): Promise<[]>
        CancelScheduledShutdown(): Promise<[/*cancelled*/boolean]>
        Inhibit(what: string, who: string, why: string, mode: string): Promise<[/*pipe_fd*/any]>
        CanRebootParameter(): Promise<[/*result*/string]>
        SetRebootParameter(parameter: string): Promise<[]>
        CanRebootToFirmwareSetup(): Promise<[/*result*/string]>
        SetRebootToFirmwareSetup(enable: boolean): Promise<[]>
        CanRebootToBootLoaderMenu(): Promise<[/*result*/string]>
        SetRebootToBootLoaderMenu(timeout: number): Promise<[]>
        CanRebootToBootLoaderEntry(): Promise<[/*result*/string]>
        SetRebootToBootLoaderEntry(boot_loader_entry: string): Promise<[]>
        SetWallMessage(wall_message: string, enable: boolean): Promise<[]>
      }
      export interface Seat {
        get Id(): Promise<string>
        get ActiveSession(): Promise<[string,ObjectPath]>
        get CanTTY(): Promise<boolean>
        get CanGraphical(): Promise<boolean>
        get Sessions(): Promise<[string,ObjectPath][]>
        get IdleHint(): Promise<boolean>
        get IdleSinceHint(): Promise<number>
        get IdleSinceHintMonotonic(): Promise<number>
        Terminate(): Promise<[]>
        ActivateSession(session_id: string): Promise<[]>
        SwitchTo(vtnr: number): Promise<[]>
        SwitchToNext(): Promise<[]>
        SwitchToPrevious(): Promise<[]>
      }
      export interface Session {
        on(ev: "PauseDevice", cb: (major: number, minor: number, type: string) => void): Promise<void>
        on(ev: "ResumeDevice", cb: (major: number, minor: number, fd: any) => void): Promise<void>
        on(ev: "Lock", cb: () => void): Promise<void>
        on(ev: "Unlock", cb: () => void): Promise<void>
        get Id(): Promise<string>
        get User(): Promise<[number,ObjectPath]>
        get Name(): Promise<string>
        get Timestamp(): Promise<number>
        get TimestampMonotonic(): Promise<number>
        get VTNr(): Promise<number>
        get Seat(): Promise<[string,ObjectPath]>
        get TTY(): Promise<string>
        get Display(): Promise<string>
        get Remote(): Promise<boolean>
        get RemoteHost(): Promise<string>
        get RemoteUser(): Promise<string>
        get Service(): Promise<string>
        get Desktop(): Promise<string>
        get Scope(): Promise<string>
        get Leader(): Promise<number>
        get Audit(): Promise<number>
        get Type(): Promise<string>
        get Class(): Promise<string>
        get Active(): Promise<boolean>
        get State(): Promise<string>
        get IdleHint(): Promise<boolean>
        get IdleSinceHint(): Promise<number>
        get IdleSinceHintMonotonic(): Promise<number>
        get LockedHint(): Promise<boolean>
        Terminate(): Promise<[]>
        Activate(): Promise<[]>
        Lock(): Promise<[]>
        Unlock(): Promise<[]>
        SetIdleHint(idle: boolean): Promise<[]>
        SetLockedHint(locked: boolean): Promise<[]>
        Kill(who: string, signal_number: number): Promise<[]>
        TakeControl(force: boolean): Promise<[]>
        ReleaseControl(): Promise<[]>
        SetType(type: string): Promise<[]>
        SetDisplay(display: string): Promise<[]>
        TakeDevice(major: number, minor: number): Promise<[/*fd*/any, /*inactive*/boolean]>
        ReleaseDevice(major: number, minor: number): Promise<[]>
        PauseDeviceComplete(major: number, minor: number): Promise<[]>
        SetBrightness(subsystem: string, name: string, brightness: number): Promise<[]>
      }
      export interface User {
        get UID(): Promise<number>
        get GID(): Promise<number>
        get Name(): Promise<string>
        get Timestamp(): Promise<number>
        get TimestampMonotonic(): Promise<number>
        get RuntimePath(): Promise<string>
        get Service(): Promise<string>
        get Slice(): Promise<string>
        get Display(): Promise<[string,ObjectPath]>
        get State(): Promise<string>
        get Sessions(): Promise<[string,ObjectPath][]>
        get IdleHint(): Promise<boolean>
        get IdleSinceHint(): Promise<number>
        get IdleSinceHintMonotonic(): Promise<number>
        get Linger(): Promise<boolean>
        Terminate(): Promise<[]>
        Kill(signal_number: number): Promise<[]>
      }
    }
    export namespace machine1 {
      export interface Image {
        get Name(): Promise<string>
        get Path(): Promise<string>
        get Type(): Promise<string>
        get ReadOnly(): Promise<boolean>
        get CreationTimestamp(): Promise<number>
        get ModificationTimestamp(): Promise<number>
        get Usage(): Promise<number>
        get Limit(): Promise<number>
        get UsageExclusive(): Promise<number>
        get LimitExclusive(): Promise<number>
        Remove(): Promise<[]>
        Rename(v0: string): Promise<[]>
        Clone(v0: string, v1: boolean): Promise<[]>
        MarkReadOnly(v0: boolean): Promise<[]>
        SetLimit(v0: number): Promise<[]>
        GetHostname(): Promise<[/*v0*/string]>
        GetMachineID(): Promise<[/*v0*/Buffer]>
        GetMachineInfo(): Promise<[/*v0*/{[key:string]:string}]>
        GetOSRelease(): Promise<[/*v0*/{[key:string]:string}]>
      }
      export interface Machine {
        get Name(): Promise<string>
        get Id(): Promise<Buffer>
        get Timestamp(): Promise<number>
        get TimestampMonotonic(): Promise<number>
        get Service(): Promise<string>
        get Unit(): Promise<string>
        get Leader(): Promise<number>
        get Class(): Promise<string>
        get RootDirectory(): Promise<string>
        get NetworkInterfaces(): Promise<number[]>
        get State(): Promise<string>
        Terminate(): Promise<[]>
        Kill(who: string, signal: number): Promise<[]>
        GetAddresses(): Promise<[/*addresses*/[number,Buffer][]]>
        GetOSRelease(): Promise<[/*fields*/{[key:string]:string}]>
        GetUIDShift(): Promise<[/*shift*/number]>
        OpenPTY(): Promise<[/*pty*/any, /*pty_path*/string]>
        OpenLogin(): Promise<[/*pty*/any, /*pty_path*/string]>
        OpenShell(user: string, path: string, args: string[], environment: string[]): Promise<[/*pty*/any, /*pty_path*/string]>
        BindMount(source: string, destination: string, read_only: boolean, mkdir: boolean): Promise<[]>
        CopyFrom(source: string, destination: string): Promise<[]>
        CopyTo(source: string, destination: string): Promise<[]>
        CopyFromWithFlags(source: string, destination: string, flags: number): Promise<[]>
        CopyToWithFlags(source: string, destination: string, flags: number): Promise<[]>
        OpenRootDirectory(): Promise<[/*fd*/any]>
      }
      export interface Manager {
        on(ev: "MachineNew", cb: (machine: string, path: ObjectPath) => void): Promise<void>
        on(ev: "MachineRemoved", cb: (machine: string, path: ObjectPath) => void): Promise<void>
        get PoolPath(): Promise<string>
        get PoolUsage(): Promise<number>
        get PoolLimit(): Promise<number>
        GetMachine(name: string): Promise<[/*machine*/ObjectPath]>
        GetImage(name: string): Promise<[/*image*/ObjectPath]>
        GetMachineByPID(pid: number): Promise<[/*machine*/ObjectPath]>
        ListMachines(): Promise<[/*machines*/[string,string,string,ObjectPath][]]>
        ListImages(): Promise<[/*images*/[string,string,boolean,number,number,number,ObjectPath][]]>
        CreateMachine(name: string, id: Buffer, service: string, class1: string, leader: number, root_directory: string, scope_properties: [string,SigVal][]): Promise<[/*path*/ObjectPath]>
        CreateMachineWithNetwork(name: string, id: Buffer, service: string, class1: string, leader: number, root_directory: string, ifindices: number[], scope_properties: [string,SigVal][]): Promise<[/*path*/ObjectPath]>
        RegisterMachine(name: string, id: Buffer, service: string, class1: string, leader: number, root_directory: string): Promise<[/*path*/ObjectPath]>
        RegisterMachineWithNetwork(name: string, id: Buffer, service: string, class1: string, leader: number, root_directory: string, ifindices: number[]): Promise<[/*path*/ObjectPath]>
        UnregisterMachine(name: string): Promise<[]>
        TerminateMachine(id: string): Promise<[]>
        KillMachine(name: string, who: string, signal: number): Promise<[]>
        GetMachineAddresses(name: string): Promise<[/*addresses*/[number,Buffer][]]>
        GetMachineOSRelease(name: string): Promise<[/*fields*/{[key:string]:string}]>
        OpenMachinePTY(name: string): Promise<[/*pty*/any, /*pty_path*/string]>
        OpenMachineLogin(name: string): Promise<[/*pty*/any, /*pty_path*/string]>
        OpenMachineShell(name: string, user: string, path: string, args: string[], environment: string[]): Promise<[/*pty*/any, /*pty_path*/string]>
        BindMountMachine(name: string, source: string, destination: string, read_only: boolean, mkdir: boolean): Promise<[]>
        CopyFromMachine(name: string, source: string, destination: string): Promise<[]>
        CopyToMachine(name: string, source: string, destination: string): Promise<[]>
        CopyFromMachineWithFlags(name: string, source: string, destination: string, flags: number): Promise<[]>
        CopyToMachineWithFlags(name: string, source: string, destination: string, flags: number): Promise<[]>
        OpenMachineRootDirectory(name: string): Promise<[/*fd*/any]>
        GetMachineUIDShift(name: string): Promise<[/*shift*/number]>
        RemoveImage(name: string): Promise<[]>
        RenameImage(name: string, new_name: string): Promise<[]>
        CloneImage(name: string, new_name: string, read_only: boolean): Promise<[]>
        MarkImageReadOnly(name: string, read_only: boolean): Promise<[]>
        GetImageHostname(name: string): Promise<[/*hostname*/string]>
        GetImageMachineID(name: string): Promise<[/*id*/Buffer]>
        GetImageMachineInfo(name: string): Promise<[/*machine_info*/{[key:string]:string}]>
        GetImageOSRelease(name: string): Promise<[/*os_release*/{[key:string]:string}]>
        SetPoolLimit(size: number): Promise<[]>
        SetImageLimit(name: string, size: number): Promise<[]>
        CleanPool(mode: string): Promise<[/*images*/[string,number][]]>
        MapFromMachineUser(name: string, uid_inner: number): Promise<[/*uid_outer*/number]>
        MapToMachineUser(uid_outer: number): Promise<[/*machine_name*/string, /*machine_path*/ObjectPath, /*uid_inner*/number]>
        MapFromMachineGroup(name: string, gid_inner: number): Promise<[/*gid_outer*/number]>
        MapToMachineGroup(gid_outer: number): Promise<[/*machine_name*/string, /*machine_path*/ObjectPath, /*gid_inner*/number]>
      }
    }
    export namespace network1 {
      export interface DHCPServer {
        get Leases(): Promise<[number,Buffer,Buffer,Buffer,Buffer,number][]>
      }
      export interface Link {
        get OperationalState(): Promise<string>
        get CarrierState(): Promise<string>
        get AddressState(): Promise<string>
        get IPv4AddressState(): Promise<string>
        get IPv6AddressState(): Promise<string>
        get OnlineState(): Promise<string>
        get AdministrativeState(): Promise<string>
        get BitRates(): Promise<[number,number]>
        SetNTP(servers: string[]): Promise<[]>
        SetDNS(addresses: [number,Buffer][]): Promise<[]>
        SetDNSEx(addresses: [number,Buffer,number,string][]): Promise<[]>
        SetDomains(domains: [string,boolean][]): Promise<[]>
        SetDefaultRoute(enable: boolean): Promise<[]>
        SetLLMNR(mode: string): Promise<[]>
        SetMulticastDNS(mode: string): Promise<[]>
        SetDNSOverTLS(mode: string): Promise<[]>
        SetDNSSEC(mode: string): Promise<[]>
        SetDNSSECNegativeTrustAnchors(names: string[]): Promise<[]>
        RevertNTP(): Promise<[]>
        RevertDNS(): Promise<[]>
        Renew(): Promise<[]>
        ForceRenew(): Promise<[]>
        Reconfigure(): Promise<[]>
        Describe(): Promise<[/*json*/string]>
      }
      export interface Manager {
        get OperationalState(): Promise<string>
        get CarrierState(): Promise<string>
        get AddressState(): Promise<string>
        get IPv4AddressState(): Promise<string>
        get IPv6AddressState(): Promise<string>
        get OnlineState(): Promise<string>
        get NamespaceId(): Promise<number>
        ListLinks(): Promise<[/*links*/[number,string,ObjectPath][]]>
        GetLinkByName(name: string): Promise<[/*ifindex*/number, /*path*/ObjectPath]>
        GetLinkByIndex(ifindex: number): Promise<[/*name*/string, /*path*/ObjectPath]>
        SetLinkNTP(ifindex: number, servers: string[]): Promise<[]>
        SetLinkDNS(ifindex: number, addresses: [number,Buffer][]): Promise<[]>
        SetLinkDNSEx(ifindex: number, addresses: [number,Buffer,number,string][]): Promise<[]>
        SetLinkDomains(ifindex: number, domains: [string,boolean][]): Promise<[]>
        SetLinkDefaultRoute(ifindex: number, enable: boolean): Promise<[]>
        SetLinkLLMNR(ifindex: number, mode: string): Promise<[]>
        SetLinkMulticastDNS(ifindex: number, mode: string): Promise<[]>
        SetLinkDNSOverTLS(ifindex: number, mode: string): Promise<[]>
        SetLinkDNSSEC(ifindex: number, mode: string): Promise<[]>
        SetLinkDNSSECNegativeTrustAnchors(ifindex: number, names: string[]): Promise<[]>
        RevertLinkNTP(ifindex: number): Promise<[]>
        RevertLinkDNS(ifindex: number): Promise<[]>
        RenewLink(ifindex: number): Promise<[]>
        ForceRenewLink(ifindex: number): Promise<[]>
        ReconfigureLink(ifindex: number): Promise<[]>
        Reload(): Promise<[]>
        DescribeLink(ifindex: number): Promise<[/*json*/string]>
        Describe(): Promise<[/*json*/string]>
      }
      export interface Network {
        get Description(): Promise<string>
        get SourcePath(): Promise<string>
        get MatchMAC(): Promise<string[]>
        get MatchPath(): Promise<string[]>
        get MatchDriver(): Promise<string[]>
        get MatchType(): Promise<string[]>
        get MatchName(): Promise<string[]>
      }
    }
    export namespace oom1 {
      export interface Manager {
        on(ev: "Killed", cb: (cgroup: string, reason: string) => void): Promise<void>
        DumpByFileDescriptor(): Promise<[/*fd*/any]>
      }
    }
    export namespace portable1 {
      export interface Image {
        get Name(): Promise<string>
        get Path(): Promise<string>
        get Type(): Promise<string>
        get ReadOnly(): Promise<boolean>
        get CreationTimestamp(): Promise<number>
        get ModificationTimestamp(): Promise<number>
        get Usage(): Promise<number>
        get Limit(): Promise<number>
        get UsageExclusive(): Promise<number>
        get LimitExclusive(): Promise<number>
        GetOSRelease(): Promise<[/*os_release*/{[key:string]:string}]>
        GetMetadata(matches: string[]): Promise<[/*image*/string, /*os_release*/Buffer, /*units*/{[key:string]:Buffer}]>
        GetMetadataWithExtensions(extensions: string[], matches: string[], flags: number): Promise<[/*image*/string, /*os_release*/Buffer, /*extensions*/{[key:string]:Buffer}, /*units*/{[key:string]:Buffer}]>
        GetState(): Promise<[/*state*/string]>
        GetStateWithExtensions(extensions: string[], flags: number): Promise<[/*state*/string]>
        Attach(matches: string[], profile: string, runtime: boolean, copy_mode: string): Promise<[/*changes*/[string,string,string][]]>
        AttachWithExtensions(extensions: string[], matches: string[], profile: string, copy_mode: string, flags: number): Promise<[/*changes*/[string,string,string][]]>
        Detach(runtime: boolean): Promise<[/*changes*/[string,string,string][]]>
        DetachWithExtensions(extensions: string[], flags: number): Promise<[/*changes*/[string,string,string][]]>
        Reattach(matches: string[], profile: string, runtime: boolean, copy_mode: string): Promise<[/*changes_removed*/[string,string,string][], /*changes_updated*/[string,string,string][]]>
        ReattacheWithExtensions(extensions: string[], matches: string[], profile: string, copy_mode: string, flags: number): Promise<[/*changes_removed*/[string,string,string][], /*changes_updated*/[string,string,string][]]>
        Remove(): Promise<[]>
        MarkReadOnly(read_only: boolean): Promise<[]>
        SetLimit(limit: number): Promise<[]>
      }
      export interface Manager {
        get PoolPath(): Promise<string>
        get PoolUsage(): Promise<number>
        get PoolLimit(): Promise<number>
        get Profiles(): Promise<string[]>
        GetImage(image: string): Promise<[/*object*/ObjectPath]>
        ListImages(): Promise<[/*images*/[string,string,boolean,number,number,number,string,ObjectPath][]]>
        GetImageOSRelease(image: string): Promise<[/*os_release*/{[key:string]:string}]>
        GetImageMetadata(image: string, matches: string[]): Promise<[/*image*/string, /*os_release*/Buffer, /*units*/{[key:string]:Buffer}]>
        GetImageMetadataWithExtensions(image: string, extensions: string[], matches: string[], flags: number): Promise<[/*image*/string, /*os_release*/Buffer, /*extensions*/{[key:string]:Buffer}, /*units*/{[key:string]:Buffer}]>
        GetImageState(image: string): Promise<[/*state*/string]>
        GetImageStateWithExtensions(image: string, extensions: string[], flags: number): Promise<[/*state*/string]>
        AttachImage(image: string, matches: string[], profile: string, runtime: boolean, copy_mode: string): Promise<[/*changes*/[string,string,string][]]>
        AttachImageWithExtensions(image: string, extensions: string[], matches: string[], profile: string, copy_mode: string, flags: number): Promise<[/*changes*/[string,string,string][]]>
        DetachImage(image: string, runtime: boolean): Promise<[/*changes*/[string,string,string][]]>
        DetachImageWithExtensions(image: string, extensions: string[], flags: number): Promise<[/*changes*/[string,string,string][]]>
        ReattachImage(image: string, matches: string[], profile: string, runtime: boolean, copy_mode: string): Promise<[/*changes_removed*/[string,string,string][], /*changes_updated*/[string,string,string][]]>
        ReattachImageWithExtensions(image: string, extensions: string[], matches: string[], profile: string, copy_mode: string, flags: number): Promise<[/*changes_removed*/[string,string,string][], /*changes_updated*/[string,string,string][]]>
        RemoveImage(image: string): Promise<[]>
        MarkImageReadOnly(image: string, read_only: boolean): Promise<[]>
        SetImageLimit(image: string, limit: number): Promise<[]>
        SetPoolLimit(limit: number): Promise<[]>
      }
    }
    export namespace resolve1 {
      export interface DnssdService {
        on(ev: "Conflicted", cb: () => void): Promise<void>
        Unregister(): Promise<[]>
      }
      export interface Link {
        get ScopesMask(): Promise<number>
        get DNS(): Promise<[number,Buffer][]>
        get DNSEx(): Promise<[number,Buffer,number,string][]>
        get CurrentDNSServer(): Promise<[number,Buffer]>
        get CurrentDNSServerEx(): Promise<[number,Buffer,number,string]>
        get Domains(): Promise<[string,boolean][]>
        get DefaultRoute(): Promise<boolean>
        get LLMNR(): Promise<string>
        get MulticastDNS(): Promise<string>
        get DNSOverTLS(): Promise<string>
        get DNSSEC(): Promise<string>
        get DNSSECNegativeTrustAnchors(): Promise<string[]>
        get DNSSECSupported(): Promise<boolean>
        SetDNS(addresses: [number,Buffer][]): Promise<[]>
        SetDNSEx(addresses: [number,Buffer,number,string][]): Promise<[]>
        SetDomains(domains: [string,boolean][]): Promise<[]>
        SetDefaultRoute(enable: boolean): Promise<[]>
        SetLLMNR(mode: string): Promise<[]>
        SetMulticastDNS(mode: string): Promise<[]>
        SetDNSOverTLS(mode: string): Promise<[]>
        SetDNSSEC(mode: string): Promise<[]>
        SetDNSSECNegativeTrustAnchors(names: string[]): Promise<[]>
        Revert(): Promise<[]>
      }
      export interface Manager {
        get LLMNRHostname(): Promise<string>
        get LLMNR(): Promise<string>
        get MulticastDNS(): Promise<string>
        get DNSOverTLS(): Promise<string>
        get DNS(): Promise<[number,number,Buffer][]>
        get DNSEx(): Promise<[number,number,Buffer,number,string][]>
        get FallbackDNS(): Promise<[number,number,Buffer][]>
        get FallbackDNSEx(): Promise<[number,number,Buffer,number,string][]>
        get CurrentDNSServer(): Promise<[number,number,Buffer]>
        get CurrentDNSServerEx(): Promise<[number,number,Buffer,number,string]>
        get Domains(): Promise<[number,string,boolean][]>
        get TransactionStatistics(): Promise<[number,number]>
        get CacheStatistics(): Promise<[number,number,number]>
        get DNSSEC(): Promise<string>
        get DNSSECStatistics(): Promise<[number,number,number,number]>
        get DNSSECSupported(): Promise<boolean>
        get DNSSECNegativeTrustAnchors(): Promise<string[]>
        get DNSStubListener(): Promise<string>
        get ResolvConfMode(): Promise<string>
        ResolveHostname(ifindex: number, name: string, family: number, flags: number): Promise<[/*addresses*/[number,number,Buffer][], /*canonical*/string, /*flags*/number]>
        ResolveAddress(ifindex: number, family: number, address: Buffer, flags: number): Promise<[/*names*/[number,string][], /*flags*/number]>
        ResolveRecord(ifindex: number, name: string, class1: number, type: number, flags: number): Promise<[/*records*/[number,number,number,Buffer][], /*flags*/number]>
        ResolveService(ifindex: number, name: string, type: string, domain: string, family: number, flags: number): Promise<[/*srv_data*/[number,number,number,string,[number,number,Buffer][],string][], /*txt_data*/Buffer[], /*canonical_name*/string, /*canonical_type*/string, /*canonical_domain*/string, /*flags*/number]>
        GetLink(ifindex: number): Promise<[/*path*/ObjectPath]>
        SetLinkDNS(ifindex: number, addresses: [number,Buffer][]): Promise<[]>
        SetLinkDNSEx(ifindex: number, addresses: [number,Buffer,number,string][]): Promise<[]>
        SetLinkDomains(ifindex: number, domains: [string,boolean][]): Promise<[]>
        SetLinkDefaultRoute(ifindex: number, enable: boolean): Promise<[]>
        SetLinkLLMNR(ifindex: number, mode: string): Promise<[]>
        SetLinkMulticastDNS(ifindex: number, mode: string): Promise<[]>
        SetLinkDNSOverTLS(ifindex: number, mode: string): Promise<[]>
        SetLinkDNSSEC(ifindex: number, mode: string): Promise<[]>
        SetLinkDNSSECNegativeTrustAnchors(ifindex: number, names: string[]): Promise<[]>
        RevertLink(ifindex: number): Promise<[]>
        RegisterService(name: string, name_template: string, type: string, service_port: number, service_priority: number, service_weight: number, txt_datas: {[key:string]:Buffer}[]): Promise<[/*service_path*/ObjectPath]>
        UnregisterService(service_path: ObjectPath): Promise<[]>
        ResetStatistics(): Promise<[]>
        FlushCaches(): Promise<[]>
        ResetServerFeatures(): Promise<[]>
      }
    }
    export namespace systemd1 {
      export interface Automount {
        get Where(): Promise<string>
        get ExtraOptions(): Promise<string>
        get DirectoryMode(): Promise<number>
        get Result(): Promise<string>
        get TimeoutIdleUSec(): Promise<number>
      }
      export interface Device {
        get SysFSPath(): Promise<string>
      }
      export interface Job {
        get Id(): Promise<number>
        get Unit(): Promise<[string,ObjectPath]>
        get JobType(): Promise<string>
        get State(): Promise<string>
        get ActivationDetails(): Promise<[string,string][]>
        Cancel(): Promise<[]>
        GetAfter(): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]]>
        GetBefore(): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]]>
      }
      export interface Manager {
        on(ev: "UnitNew", cb: (id: string, unit: ObjectPath) => void): Promise<void>
        on(ev: "UnitRemoved", cb: (id: string, unit: ObjectPath) => void): Promise<void>
        on(ev: "JobNew", cb: (id: number, job: ObjectPath, unit: string) => void): Promise<void>
        on(ev: "JobRemoved", cb: (id: number, job: ObjectPath, unit: string, result: string) => void): Promise<void>
        on(ev: "StartupFinished", cb: (firmware: number, loader: number, kernel: number, initrd: number, userspace: number, total: number) => void): Promise<void>
        on(ev: "UnitFilesChanged", cb: () => void): Promise<void>
        on(ev: "Reloading", cb: (active: boolean) => void): Promise<void>
        get Version(): Promise<string>
        get Features(): Promise<string>
        get Virtualization(): Promise<string>
        get Architecture(): Promise<string>
        get Tainted(): Promise<string>
        get FirmwareTimestamp(): Promise<number>
        get FirmwareTimestampMonotonic(): Promise<number>
        get LoaderTimestamp(): Promise<number>
        get LoaderTimestampMonotonic(): Promise<number>
        get KernelTimestamp(): Promise<number>
        get KernelTimestampMonotonic(): Promise<number>
        get InitRDTimestamp(): Promise<number>
        get InitRDTimestampMonotonic(): Promise<number>
        get UserspaceTimestamp(): Promise<number>
        get UserspaceTimestampMonotonic(): Promise<number>
        get FinishTimestamp(): Promise<number>
        get FinishTimestampMonotonic(): Promise<number>
        get SecurityStartTimestamp(): Promise<number>
        get SecurityStartTimestampMonotonic(): Promise<number>
        get SecurityFinishTimestamp(): Promise<number>
        get SecurityFinishTimestampMonotonic(): Promise<number>
        get GeneratorsStartTimestamp(): Promise<number>
        get GeneratorsStartTimestampMonotonic(): Promise<number>
        get GeneratorsFinishTimestamp(): Promise<number>
        get GeneratorsFinishTimestampMonotonic(): Promise<number>
        get UnitsLoadStartTimestamp(): Promise<number>
        get UnitsLoadStartTimestampMonotonic(): Promise<number>
        get UnitsLoadFinishTimestamp(): Promise<number>
        get UnitsLoadFinishTimestampMonotonic(): Promise<number>
        get UnitsLoadTimestamp(): Promise<number>
        get UnitsLoadTimestampMonotonic(): Promise<number>
        get InitRDSecurityStartTimestamp(): Promise<number>
        get InitRDSecurityStartTimestampMonotonic(): Promise<number>
        get InitRDSecurityFinishTimestamp(): Promise<number>
        get InitRDSecurityFinishTimestampMonotonic(): Promise<number>
        get InitRDGeneratorsStartTimestamp(): Promise<number>
        get InitRDGeneratorsStartTimestampMonotonic(): Promise<number>
        get InitRDGeneratorsFinishTimestamp(): Promise<number>
        get InitRDGeneratorsFinishTimestampMonotonic(): Promise<number>
        get InitRDUnitsLoadStartTimestamp(): Promise<number>
        get InitRDUnitsLoadStartTimestampMonotonic(): Promise<number>
        get InitRDUnitsLoadFinishTimestamp(): Promise<number>
        get InitRDUnitsLoadFinishTimestampMonotonic(): Promise<number>
        get LogLevel(): Promise<string>
        get LogTarget(): Promise<string>
        get NNames(): Promise<number>
        get NFailedUnits(): Promise<number>
        get NJobs(): Promise<number>
        get NInstalledJobs(): Promise<number>
        get NFailedJobs(): Promise<number>
        get Progress(): Promise<number>
        get Environment(): Promise<string[]>
        get ConfirmSpawn(): Promise<boolean>
        get ShowStatus(): Promise<boolean>
        get UnitPath(): Promise<string[]>
        get DefaultStandardOutput(): Promise<string>
        get DefaultStandardError(): Promise<string>
        get WatchdogDevice(): Promise<string>
        get WatchdogLastPingTimestamp(): Promise<number>
        get WatchdogLastPingTimestampMonotonic(): Promise<number>
        get RuntimeWatchdogUSec(): Promise<number>
        get RuntimeWatchdogPreUSec(): Promise<number>
        get RuntimeWatchdogPreGovernor(): Promise<string>
        get RebootWatchdogUSec(): Promise<number>
        get KExecWatchdogUSec(): Promise<number>
        get ServiceWatchdogs(): Promise<boolean>
        get ControlGroup(): Promise<string>
        get SystemState(): Promise<string>
        get ExitCode(): Promise<number>
        get DefaultTimerAccuracyUSec(): Promise<number>
        get DefaultTimeoutStartUSec(): Promise<number>
        get DefaultTimeoutStopUSec(): Promise<number>
        get DefaultTimeoutAbortUSec(): Promise<number>
        get DefaultDeviceTimeoutUSec(): Promise<number>
        get DefaultRestartUSec(): Promise<number>
        get DefaultStartLimitIntervalUSec(): Promise<number>
        get DefaultStartLimitBurst(): Promise<number>
        get DefaultCPUAccounting(): Promise<boolean>
        get DefaultBlockIOAccounting(): Promise<boolean>
        get DefaultMemoryAccounting(): Promise<boolean>
        get DefaultTasksAccounting(): Promise<boolean>
        get DefaultLimitCPU(): Promise<number>
        get DefaultLimitCPUSoft(): Promise<number>
        get DefaultLimitFSIZE(): Promise<number>
        get DefaultLimitFSIZESoft(): Promise<number>
        get DefaultLimitDATA(): Promise<number>
        get DefaultLimitDATASoft(): Promise<number>
        get DefaultLimitSTACK(): Promise<number>
        get DefaultLimitSTACKSoft(): Promise<number>
        get DefaultLimitCORE(): Promise<number>
        get DefaultLimitCORESoft(): Promise<number>
        get DefaultLimitRSS(): Promise<number>
        get DefaultLimitRSSSoft(): Promise<number>
        get DefaultLimitNOFILE(): Promise<number>
        get DefaultLimitNOFILESoft(): Promise<number>
        get DefaultLimitAS(): Promise<number>
        get DefaultLimitASSoft(): Promise<number>
        get DefaultLimitNPROC(): Promise<number>
        get DefaultLimitNPROCSoft(): Promise<number>
        get DefaultLimitMEMLOCK(): Promise<number>
        get DefaultLimitMEMLOCKSoft(): Promise<number>
        get DefaultLimitLOCKS(): Promise<number>
        get DefaultLimitLOCKSSoft(): Promise<number>
        get DefaultLimitSIGPENDING(): Promise<number>
        get DefaultLimitSIGPENDINGSoft(): Promise<number>
        get DefaultLimitMSGQUEUE(): Promise<number>
        get DefaultLimitMSGQUEUESoft(): Promise<number>
        get DefaultLimitNICE(): Promise<number>
        get DefaultLimitNICESoft(): Promise<number>
        get DefaultLimitRTPRIO(): Promise<number>
        get DefaultLimitRTPRIOSoft(): Promise<number>
        get DefaultLimitRTTIME(): Promise<number>
        get DefaultLimitRTTIMESoft(): Promise<number>
        get DefaultTasksMax(): Promise<number>
        get TimerSlackNSec(): Promise<number>
        get DefaultOOMPolicy(): Promise<string>
        get DefaultOOMScoreAdjust(): Promise<number>
        get CtrlAltDelBurstAction(): Promise<string>
        GetUnit(name: string): Promise<[/*unit*/ObjectPath]>
        GetUnitByPID(pid: number): Promise<[/*unit*/ObjectPath]>
        GetUnitByInvocationID(invocation_id: Buffer): Promise<[/*unit*/ObjectPath]>
        GetUnitByControlGroup(cgroup: string): Promise<[/*unit*/ObjectPath]>
        GetUnitByPIDFD(pidfd: any): Promise<[/*unit*/ObjectPath, /*unit_id*/string, /*invocation_id*/Buffer]>
        LoadUnit(name: string): Promise<[/*unit*/ObjectPath]>
        StartUnit(name: string, mode: string): Promise<[/*job*/ObjectPath]>
        StartUnitWithFlags(name: string, mode: string, flags: number): Promise<[/*job*/ObjectPath]>
        StartUnitReplace(old_unit: string, new_unit: string, mode: string): Promise<[/*job*/ObjectPath]>
        StopUnit(name: string, mode: string): Promise<[/*job*/ObjectPath]>
        ReloadUnit(name: string, mode: string): Promise<[/*job*/ObjectPath]>
        RestartUnit(name: string, mode: string): Promise<[/*job*/ObjectPath]>
        TryRestartUnit(name: string, mode: string): Promise<[/*job*/ObjectPath]>
        ReloadOrRestartUnit(name: string, mode: string): Promise<[/*job*/ObjectPath]>
        ReloadOrTryRestartUnit(name: string, mode: string): Promise<[/*job*/ObjectPath]>
        EnqueueUnitJob(name: string, job_type: string, job_mode: string): Promise<[/*job_id*/number, /*job_path*/ObjectPath, /*unit_id*/string, /*unit_path*/ObjectPath, /*job_type*/string, /*affected_jobs*/[number,ObjectPath,string,ObjectPath,string][]]>
        KillUnit(name: string, whom: string, signal: number): Promise<[]>
        CleanUnit(name: string, mask: string[]): Promise<[]>
        FreezeUnit(name: string): Promise<[]>
        ThawUnit(name: string): Promise<[]>
        ResetFailedUnit(name: string): Promise<[]>
        SetUnitProperties(name: string, runtime: boolean, properties: [string,SigVal][]): Promise<[]>
        BindMountUnit(name: string, source: string, destination: string, read_only: boolean, mkdir: boolean): Promise<[]>
        MountImageUnit(name: string, source: string, destination: string, read_only: boolean, mkdir: boolean, options: [string,string][]): Promise<[]>
        RefUnit(name: string): Promise<[]>
        UnrefUnit(name: string): Promise<[]>
        StartTransientUnit(name: string, mode: string, properties: [string,SigVal][], aux: [string,[string,SigVal][]][]): Promise<[/*job*/ObjectPath]>
        GetUnitProcesses(name: string): Promise<[/*processes*/[string,number,string][]]>
        AttachProcessesToUnit(unit_name: string, subcgroup: string, pids: number[]): Promise<[]>
        AbandonScope(name: string): Promise<[]>
        GetJob(id: number): Promise<[/*job*/ObjectPath]>
        GetJobAfter(id: number): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]]>
        GetJobBefore(id: number): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]]>
        CancelJob(id: number): Promise<[]>
        ClearJobs(): Promise<[]>
        ResetFailed(): Promise<[]>
        SetShowStatus(mode: string): Promise<[]>
        ListUnits(): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]]>
        ListUnitsFiltered(states: string[]): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]]>
        ListUnitsByPatterns(states: string[], patterns: string[]): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]]>
        ListUnitsByNames(names: string[]): Promise<[/*units*/[string,string,string,string,string,string,ObjectPath,number,string,ObjectPath][]]>
        ListJobs(): Promise<[/*jobs*/[number,string,string,string,ObjectPath,ObjectPath][]]>
        Subscribe(): Promise<[]>
        Unsubscribe(): Promise<[]>
        Dump(): Promise<[/*output*/string]>
        DumpUnitsMatchingPatterns(patterns: string[]): Promise<[/*output*/string]>
        DumpByFileDescriptor(): Promise<[/*fd*/any]>
        DumpUnitsMatchingPatternsByFileDescriptor(patterns: string[]): Promise<[/*fd*/any]>
        Reload(): Promise<[]>
        Reexecute(): Promise<[]>
        Exit(): Promise<[]>
        Reboot(): Promise<[]>
        PowerOff(): Promise<[]>
        Halt(): Promise<[]>
        KExec(): Promise<[]>
        SwitchRoot(new_root: string, init: string): Promise<[]>
        SetEnvironment(assignments: string[]): Promise<[]>
        UnsetEnvironment(names: string[]): Promise<[]>
        UnsetAndSetEnvironment(names: string[], assignments: string[]): Promise<[]>
        EnqueueMarkedJobs(): Promise<[/*jobs*/ObjectPath[]]>
        ListUnitFiles(): Promise<[/*unit_files*/[string,string][]]>
        ListUnitFilesByPatterns(states: string[], patterns: string[]): Promise<[/*unit_files*/[string,string][]]>
        GetUnitFileState(file: string): Promise<[/*state*/string]>
        EnableUnitFiles(files: string[], runtime: boolean, force: boolean): Promise<[/*carries_install_info*/boolean, /*changes*/[string,string,string][]]>
        DisableUnitFiles(files: string[], runtime: boolean): Promise<[/*changes*/[string,string,string][]]>
        EnableUnitFilesWithFlags(files: string[], flags: number): Promise<[/*carries_install_info*/boolean, /*changes*/[string,string,string][]]>
        DisableUnitFilesWithFlags(files: string[], flags: number): Promise<[/*changes*/[string,string,string][]]>
        DisableUnitFilesWithFlagsAndInstallInfo(files: string[], flags: number): Promise<[/*carries_install_info*/boolean, /*changes*/[string,string,string][]]>
        ReenableUnitFiles(files: string[], runtime: boolean, force: boolean): Promise<[/*carries_install_info*/boolean, /*changes*/[string,string,string][]]>
        LinkUnitFiles(files: string[], runtime: boolean, force: boolean): Promise<[/*changes*/[string,string,string][]]>
        PresetUnitFiles(files: string[], runtime: boolean, force: boolean): Promise<[/*carries_install_info*/boolean, /*changes*/[string,string,string][]]>
        PresetUnitFilesWithMode(files: string[], mode: string, runtime: boolean, force: boolean): Promise<[/*carries_install_info*/boolean, /*changes*/[string,string,string][]]>
        MaskUnitFiles(files: string[], runtime: boolean, force: boolean): Promise<[/*changes*/[string,string,string][]]>
        UnmaskUnitFiles(files: string[], runtime: boolean): Promise<[/*changes*/[string,string,string][]]>
        RevertUnitFiles(files: string[]): Promise<[/*changes*/[string,string,string][]]>
        SetDefaultTarget(name: string, force: boolean): Promise<[/*changes*/[string,string,string][]]>
        GetDefaultTarget(): Promise<[/*name*/string]>
        PresetAllUnitFiles(mode: string, runtime: boolean, force: boolean): Promise<[/*changes*/[string,string,string][]]>
        AddDependencyUnitFiles(files: string[], target: string, type: string, runtime: boolean, force: boolean): Promise<[/*changes*/[string,string,string][]]>
        GetUnitFileLinks(name: string, runtime: boolean): Promise<[/*links*/string[]]>
        SetExitCode(number: number): Promise<[]>
        LookupDynamicUserByName(name: string): Promise<[/*uid*/number]>
        LookupDynamicUserByUID(uid: number): Promise<[/*name*/string]>
        GetDynamicUsers(): Promise<[/*users*/[number,string][]]>
      }
      export interface Mount {
        get Where(): Promise<string>
        get What(): Promise<string>
        get Options(): Promise<string>
        get Type(): Promise<string>
        get TimeoutUSec(): Promise<number>
        get ControlPID(): Promise<number>
        get DirectoryMode(): Promise<number>
        get SloppyOptions(): Promise<boolean>
        get LazyUnmount(): Promise<boolean>
        get ForceUnmount(): Promise<boolean>
        get ReadWriteOnly(): Promise<boolean>
        get Result(): Promise<string>
        get UID(): Promise<number>
        get GID(): Promise<number>
        get ExecMount(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecUnmount(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecRemount(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get Slice(): Promise<string>
        get ControlGroup(): Promise<string>
        get ControlGroupId(): Promise<number>
        get MemoryCurrent(): Promise<number>
        get MemoryAvailable(): Promise<number>
        get CPUUsageNSec(): Promise<number>
        get EffectiveCPUs(): Promise<Buffer>
        get EffectiveMemoryNodes(): Promise<Buffer>
        get TasksCurrent(): Promise<number>
        get IPIngressBytes(): Promise<number>
        get IPIngressPackets(): Promise<number>
        get IPEgressBytes(): Promise<number>
        get IPEgressPackets(): Promise<number>
        get IOReadBytes(): Promise<number>
        get IOReadOperations(): Promise<number>
        get IOWriteBytes(): Promise<number>
        get IOWriteOperations(): Promise<number>
        get Delegate(): Promise<boolean>
        get DelegateControllers(): Promise<string[]>
        get CPUAccounting(): Promise<boolean>
        get CPUWeight(): Promise<number>
        get StartupCPUWeight(): Promise<number>
        get CPUShares(): Promise<number>
        get StartupCPUShares(): Promise<number>
        get CPUQuotaPerSecUSec(): Promise<number>
        get CPUQuotaPeriodUSec(): Promise<number>
        get AllowedCPUs(): Promise<Buffer>
        get StartupAllowedCPUs(): Promise<Buffer>
        get AllowedMemoryNodes(): Promise<Buffer>
        get StartupAllowedMemoryNodes(): Promise<Buffer>
        get IOAccounting(): Promise<boolean>
        get IOWeight(): Promise<number>
        get StartupIOWeight(): Promise<number>
        get IODeviceWeight(): Promise<[string,number][]>
        get IOReadBandwidthMax(): Promise<[string,number][]>
        get IOWriteBandwidthMax(): Promise<[string,number][]>
        get IOReadIOPSMax(): Promise<[string,number][]>
        get IOWriteIOPSMax(): Promise<[string,number][]>
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]>
        get BlockIOAccounting(): Promise<boolean>
        get BlockIOWeight(): Promise<number>
        get StartupBlockIOWeight(): Promise<number>
        get BlockIODeviceWeight(): Promise<[string,number][]>
        get BlockIOReadBandwidth(): Promise<[string,number][]>
        get BlockIOWriteBandwidth(): Promise<[string,number][]>
        get MemoryAccounting(): Promise<boolean>
        get DefaultMemoryLow(): Promise<number>
        get DefaultMemoryMin(): Promise<number>
        get MemoryMin(): Promise<number>
        get MemoryLow(): Promise<number>
        get MemoryHigh(): Promise<number>
        get MemoryMax(): Promise<number>
        get MemorySwapMax(): Promise<number>
        get MemoryZSwapMax(): Promise<number>
        get MemoryLimit(): Promise<number>
        get DevicePolicy(): Promise<string>
        get DeviceAllow(): Promise<[string,string][]>
        get TasksAccounting(): Promise<boolean>
        get TasksMax(): Promise<number>
        get IPAccounting(): Promise<boolean>
        get IPAddressAllow(): Promise<[number,Buffer,number][]>
        get IPAddressDeny(): Promise<[number,Buffer,number][]>
        get IPIngressFilterPath(): Promise<string[]>
        get IPEgressFilterPath(): Promise<string[]>
        get DisableControllers(): Promise<string[]>
        get ManagedOOMSwap(): Promise<string>
        get ManagedOOMMemoryPressure(): Promise<string>
        get ManagedOOMMemoryPressureLimit(): Promise<number>
        get ManagedOOMPreference(): Promise<string>
        get BPFProgram(): Promise<[string,string][]>
        get SocketBindAllow(): Promise<[number,number,number,number][]>
        get SocketBindDeny(): Promise<[number,number,number,number][]>
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]>
        get Environment(): Promise<string[]>
        get EnvironmentFiles(): Promise<[string,boolean][]>
        get PassEnvironment(): Promise<string[]>
        get UnsetEnvironment(): Promise<string[]>
        get UMask(): Promise<number>
        get LimitCPU(): Promise<number>
        get LimitCPUSoft(): Promise<number>
        get LimitFSIZE(): Promise<number>
        get LimitFSIZESoft(): Promise<number>
        get LimitDATA(): Promise<number>
        get LimitDATASoft(): Promise<number>
        get LimitSTACK(): Promise<number>
        get LimitSTACKSoft(): Promise<number>
        get LimitCORE(): Promise<number>
        get LimitCORESoft(): Promise<number>
        get LimitRSS(): Promise<number>
        get LimitRSSSoft(): Promise<number>
        get LimitNOFILE(): Promise<number>
        get LimitNOFILESoft(): Promise<number>
        get LimitAS(): Promise<number>
        get LimitASSoft(): Promise<number>
        get LimitNPROC(): Promise<number>
        get LimitNPROCSoft(): Promise<number>
        get LimitMEMLOCK(): Promise<number>
        get LimitMEMLOCKSoft(): Promise<number>
        get LimitLOCKS(): Promise<number>
        get LimitLOCKSSoft(): Promise<number>
        get LimitSIGPENDING(): Promise<number>
        get LimitSIGPENDINGSoft(): Promise<number>
        get LimitMSGQUEUE(): Promise<number>
        get LimitMSGQUEUESoft(): Promise<number>
        get LimitNICE(): Promise<number>
        get LimitNICESoft(): Promise<number>
        get LimitRTPRIO(): Promise<number>
        get LimitRTPRIOSoft(): Promise<number>
        get LimitRTTIME(): Promise<number>
        get LimitRTTIMESoft(): Promise<number>
        get WorkingDirectory(): Promise<string>
        get RootDirectory(): Promise<string>
        get RootImage(): Promise<string>
        get RootImageOptions(): Promise<[string,string][]>
        get RootHash(): Promise<Buffer>
        get RootHashPath(): Promise<string>
        get RootHashSignature(): Promise<Buffer>
        get RootHashSignaturePath(): Promise<string>
        get RootVerity(): Promise<string>
        get ExtensionDirectories(): Promise<string[]>
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]>
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]>
        get OOMScoreAdjust(): Promise<number>
        get CoredumpFilter(): Promise<number>
        get Nice(): Promise<number>
        get IOSchedulingClass(): Promise<number>
        get IOSchedulingPriority(): Promise<number>
        get CPUSchedulingPolicy(): Promise<number>
        get CPUSchedulingPriority(): Promise<number>
        get CPUAffinity(): Promise<Buffer>
        get CPUAffinityFromNUMA(): Promise<boolean>
        get NUMAPolicy(): Promise<number>
        get NUMAMask(): Promise<Buffer>
        get TimerSlackNSec(): Promise<number>
        get CPUSchedulingResetOnFork(): Promise<boolean>
        get NonBlocking(): Promise<boolean>
        get StandardInput(): Promise<string>
        get StandardInputFileDescriptorName(): Promise<string>
        get StandardInputData(): Promise<Buffer>
        get StandardOutput(): Promise<string>
        get StandardOutputFileDescriptorName(): Promise<string>
        get StandardError(): Promise<string>
        get StandardErrorFileDescriptorName(): Promise<string>
        get TTYPath(): Promise<string>
        get TTYReset(): Promise<boolean>
        get TTYVHangup(): Promise<boolean>
        get TTYVTDisallocate(): Promise<boolean>
        get TTYRows(): Promise<number>
        get TTYColumns(): Promise<number>
        get SyslogPriority(): Promise<number>
        get SyslogIdentifier(): Promise<string>
        get SyslogLevelPrefix(): Promise<boolean>
        get SyslogLevel(): Promise<number>
        get SyslogFacility(): Promise<number>
        get LogLevelMax(): Promise<number>
        get LogRateLimitIntervalUSec(): Promise<number>
        get LogRateLimitBurst(): Promise<number>
        get LogExtraFields(): Promise<Buffer[]>
        get LogFilterPatterns(): Promise<[boolean,string][]>
        get LogNamespace(): Promise<string>
        get SecureBits(): Promise<number>
        get CapabilityBoundingSet(): Promise<number>
        get AmbientCapabilities(): Promise<number>
        get User(): Promise<string>
        get Group(): Promise<string>
        get DynamicUser(): Promise<boolean>
        get RemoveIPC(): Promise<boolean>
        get SetCredential(): Promise<[string,Buffer][]>
        get SetCredentialEncrypted(): Promise<[string,Buffer][]>
        get LoadCredential(): Promise<[string,string][]>
        get LoadCredentialEncrypted(): Promise<[string,string][]>
        get SupplementaryGroups(): Promise<string[]>
        get PAMName(): Promise<string>
        get ReadWritePaths(): Promise<string[]>
        get ReadOnlyPaths(): Promise<string[]>
        get InaccessiblePaths(): Promise<string[]>
        get ExecPaths(): Promise<string[]>
        get NoExecPaths(): Promise<string[]>
        get ExecSearchPath(): Promise<string[]>
        get MountFlags(): Promise<number>
        get PrivateTmp(): Promise<boolean>
        get PrivateDevices(): Promise<boolean>
        get ProtectClock(): Promise<boolean>
        get ProtectKernelTunables(): Promise<boolean>
        get ProtectKernelModules(): Promise<boolean>
        get ProtectKernelLogs(): Promise<boolean>
        get ProtectControlGroups(): Promise<boolean>
        get PrivateNetwork(): Promise<boolean>
        get PrivateUsers(): Promise<boolean>
        get PrivateMounts(): Promise<boolean>
        get PrivateIPC(): Promise<boolean>
        get ProtectHome(): Promise<string>
        get ProtectSystem(): Promise<string>
        get SameProcessGroup(): Promise<boolean>
        get UtmpIdentifier(): Promise<string>
        get UtmpMode(): Promise<string>
        get SELinuxContext(): Promise<[boolean,string]>
        get AppArmorProfile(): Promise<[boolean,string]>
        get SmackProcessLabel(): Promise<[boolean,string]>
        get IgnoreSIGPIPE(): Promise<boolean>
        get NoNewPrivileges(): Promise<boolean>
        get SystemCallFilter(): Promise<[boolean,string[]]>
        get SystemCallArchitectures(): Promise<string[]>
        get SystemCallErrorNumber(): Promise<number>
        get SystemCallLog(): Promise<[boolean,string[]]>
        get Personality(): Promise<string>
        get LockPersonality(): Promise<boolean>
        get RestrictAddressFamilies(): Promise<[boolean,string[]]>
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]>
        get RuntimeDirectoryPreserve(): Promise<string>
        get RuntimeDirectoryMode(): Promise<number>
        get RuntimeDirectory(): Promise<string[]>
        get StateDirectorySymlink(): Promise<[string,string,number][]>
        get StateDirectoryMode(): Promise<number>
        get StateDirectory(): Promise<string[]>
        get CacheDirectorySymlink(): Promise<[string,string,number][]>
        get CacheDirectoryMode(): Promise<number>
        get CacheDirectory(): Promise<string[]>
        get LogsDirectorySymlink(): Promise<[string,string,number][]>
        get LogsDirectoryMode(): Promise<number>
        get LogsDirectory(): Promise<string[]>
        get ConfigurationDirectoryMode(): Promise<number>
        get ConfigurationDirectory(): Promise<string[]>
        get TimeoutCleanUSec(): Promise<number>
        get MemoryDenyWriteExecute(): Promise<boolean>
        get RestrictRealtime(): Promise<boolean>
        get RestrictSUIDSGID(): Promise<boolean>
        get RestrictNamespaces(): Promise<number>
        get RestrictFileSystems(): Promise<[boolean,string[]]>
        get BindPaths(): Promise<[string,string,boolean,number][]>
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]>
        get TemporaryFileSystem(): Promise<[string,string][]>
        get MountAPIVFS(): Promise<boolean>
        get KeyringMode(): Promise<string>
        get ProtectProc(): Promise<string>
        get ProcSubset(): Promise<string>
        get ProtectHostname(): Promise<boolean>
        get NetworkNamespacePath(): Promise<string>
        get IPCNamespacePath(): Promise<string>
        get KillMode(): Promise<string>
        get KillSignal(): Promise<number>
        get RestartKillSignal(): Promise<number>
        get FinalKillSignal(): Promise<number>
        get SendSIGKILL(): Promise<boolean>
        get SendSIGHUP(): Promise<boolean>
        get WatchdogSignal(): Promise<number>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]]>
        AttachProcesses(subcgroup: string, pids: number[]): Promise<[]>
      }
      export interface Path {
        get Unit(): Promise<string>
        get Paths(): Promise<[string,string][]>
        get MakeDirectory(): Promise<boolean>
        get DirectoryMode(): Promise<number>
        get Result(): Promise<string>
        get TriggerLimitIntervalUSec(): Promise<number>
        get TriggerLimitBurst(): Promise<number>
      }
      export interface Scope {
        on(ev: "RequestStop", cb: () => void): Promise<void>
        get Controller(): Promise<string>
        get TimeoutStopUSec(): Promise<number>
        get Result(): Promise<string>
        get RuntimeMaxUSec(): Promise<number>
        get RuntimeRandomizedExtraUSec(): Promise<number>
        get OOMPolicy(): Promise<string>
        get Slice(): Promise<string>
        get ControlGroup(): Promise<string>
        get ControlGroupId(): Promise<number>
        get MemoryCurrent(): Promise<number>
        get MemoryAvailable(): Promise<number>
        get CPUUsageNSec(): Promise<number>
        get EffectiveCPUs(): Promise<Buffer>
        get EffectiveMemoryNodes(): Promise<Buffer>
        get TasksCurrent(): Promise<number>
        get IPIngressBytes(): Promise<number>
        get IPIngressPackets(): Promise<number>
        get IPEgressBytes(): Promise<number>
        get IPEgressPackets(): Promise<number>
        get IOReadBytes(): Promise<number>
        get IOReadOperations(): Promise<number>
        get IOWriteBytes(): Promise<number>
        get IOWriteOperations(): Promise<number>
        get Delegate(): Promise<boolean>
        get DelegateControllers(): Promise<string[]>
        get CPUAccounting(): Promise<boolean>
        get CPUWeight(): Promise<number>
        get StartupCPUWeight(): Promise<number>
        get CPUShares(): Promise<number>
        get StartupCPUShares(): Promise<number>
        get CPUQuotaPerSecUSec(): Promise<number>
        get CPUQuotaPeriodUSec(): Promise<number>
        get AllowedCPUs(): Promise<Buffer>
        get StartupAllowedCPUs(): Promise<Buffer>
        get AllowedMemoryNodes(): Promise<Buffer>
        get StartupAllowedMemoryNodes(): Promise<Buffer>
        get IOAccounting(): Promise<boolean>
        get IOWeight(): Promise<number>
        get StartupIOWeight(): Promise<number>
        get IODeviceWeight(): Promise<[string,number][]>
        get IOReadBandwidthMax(): Promise<[string,number][]>
        get IOWriteBandwidthMax(): Promise<[string,number][]>
        get IOReadIOPSMax(): Promise<[string,number][]>
        get IOWriteIOPSMax(): Promise<[string,number][]>
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]>
        get BlockIOAccounting(): Promise<boolean>
        get BlockIOWeight(): Promise<number>
        get StartupBlockIOWeight(): Promise<number>
        get BlockIODeviceWeight(): Promise<[string,number][]>
        get BlockIOReadBandwidth(): Promise<[string,number][]>
        get BlockIOWriteBandwidth(): Promise<[string,number][]>
        get MemoryAccounting(): Promise<boolean>
        get DefaultMemoryLow(): Promise<number>
        get DefaultMemoryMin(): Promise<number>
        get MemoryMin(): Promise<number>
        get MemoryLow(): Promise<number>
        get MemoryHigh(): Promise<number>
        get MemoryMax(): Promise<number>
        get MemorySwapMax(): Promise<number>
        get MemoryZSwapMax(): Promise<number>
        get MemoryLimit(): Promise<number>
        get DevicePolicy(): Promise<string>
        get DeviceAllow(): Promise<[string,string][]>
        get TasksAccounting(): Promise<boolean>
        get TasksMax(): Promise<number>
        get IPAccounting(): Promise<boolean>
        get IPAddressAllow(): Promise<[number,Buffer,number][]>
        get IPAddressDeny(): Promise<[number,Buffer,number][]>
        get IPIngressFilterPath(): Promise<string[]>
        get IPEgressFilterPath(): Promise<string[]>
        get DisableControllers(): Promise<string[]>
        get ManagedOOMSwap(): Promise<string>
        get ManagedOOMMemoryPressure(): Promise<string>
        get ManagedOOMMemoryPressureLimit(): Promise<number>
        get ManagedOOMPreference(): Promise<string>
        get BPFProgram(): Promise<[string,string][]>
        get SocketBindAllow(): Promise<[number,number,number,number][]>
        get SocketBindDeny(): Promise<[number,number,number,number][]>
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]>
        get KillMode(): Promise<string>
        get KillSignal(): Promise<number>
        get RestartKillSignal(): Promise<number>
        get FinalKillSignal(): Promise<number>
        get SendSIGKILL(): Promise<boolean>
        get SendSIGHUP(): Promise<boolean>
        get WatchdogSignal(): Promise<number>
        Abandon(): Promise<[]>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]]>
        AttachProcesses(subcgroup: string, pids: number[]): Promise<[]>
      }
      export interface Service {
        get Type(): Promise<string>
        get ExitType(): Promise<string>
        get Restart(): Promise<string>
        get PIDFile(): Promise<string>
        get NotifyAccess(): Promise<string>
        get RestartUSec(): Promise<number>
        get TimeoutStartUSec(): Promise<number>
        get TimeoutStopUSec(): Promise<number>
        get TimeoutAbortUSec(): Promise<number>
        get TimeoutStartFailureMode(): Promise<string>
        get TimeoutStopFailureMode(): Promise<string>
        get RuntimeMaxUSec(): Promise<number>
        get RuntimeRandomizedExtraUSec(): Promise<number>
        get WatchdogUSec(): Promise<number>
        get WatchdogTimestamp(): Promise<number>
        get WatchdogTimestampMonotonic(): Promise<number>
        get RootDirectoryStartOnly(): Promise<boolean>
        get RemainAfterExit(): Promise<boolean>
        get GuessMainPID(): Promise<boolean>
        get RestartPreventExitStatus(): Promise<[number[],number[]]>
        get RestartForceExitStatus(): Promise<[number[],number[]]>
        get SuccessExitStatus(): Promise<[number[],number[]]>
        get MainPID(): Promise<number>
        get ControlPID(): Promise<number>
        get BusName(): Promise<string>
        get FileDescriptorStoreMax(): Promise<number>
        get NFileDescriptorStore(): Promise<number>
        get StatusText(): Promise<string>
        get StatusErrno(): Promise<number>
        get Result(): Promise<string>
        get ReloadResult(): Promise<string>
        get CleanResult(): Promise<string>
        get USBFunctionDescriptors(): Promise<string>
        get USBFunctionStrings(): Promise<string>
        get UID(): Promise<number>
        get GID(): Promise<number>
        get NRestarts(): Promise<number>
        get OOMPolicy(): Promise<string>
        get OpenFile(): Promise<[string,string,number][]>
        get ReloadSignal(): Promise<number>
        get ExecMainStartTimestamp(): Promise<number>
        get ExecMainStartTimestampMonotonic(): Promise<number>
        get ExecMainExitTimestamp(): Promise<number>
        get ExecMainExitTimestampMonotonic(): Promise<number>
        get ExecMainPID(): Promise<number>
        get ExecMainCode(): Promise<number>
        get ExecMainStatus(): Promise<number>
        get ExecCondition(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecConditionEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]>
        get ExecStartPre(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStartPreEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]>
        get ExecStart(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStartEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]>
        get ExecStartPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStartPostEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]>
        get ExecReload(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecReloadEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]>
        get ExecStop(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStopEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]>
        get ExecStopPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStopPostEx(): Promise<[string,string[],string[],number,number,number,number,number,number,number][]>
        get Slice(): Promise<string>
        get ControlGroup(): Promise<string>
        get ControlGroupId(): Promise<number>
        get MemoryCurrent(): Promise<number>
        get MemoryAvailable(): Promise<number>
        get CPUUsageNSec(): Promise<number>
        get EffectiveCPUs(): Promise<Buffer>
        get EffectiveMemoryNodes(): Promise<Buffer>
        get TasksCurrent(): Promise<number>
        get IPIngressBytes(): Promise<number>
        get IPIngressPackets(): Promise<number>
        get IPEgressBytes(): Promise<number>
        get IPEgressPackets(): Promise<number>
        get IOReadBytes(): Promise<number>
        get IOReadOperations(): Promise<number>
        get IOWriteBytes(): Promise<number>
        get IOWriteOperations(): Promise<number>
        get Delegate(): Promise<boolean>
        get DelegateControllers(): Promise<string[]>
        get CPUAccounting(): Promise<boolean>
        get CPUWeight(): Promise<number>
        get StartupCPUWeight(): Promise<number>
        get CPUShares(): Promise<number>
        get StartupCPUShares(): Promise<number>
        get CPUQuotaPerSecUSec(): Promise<number>
        get CPUQuotaPeriodUSec(): Promise<number>
        get AllowedCPUs(): Promise<Buffer>
        get StartupAllowedCPUs(): Promise<Buffer>
        get AllowedMemoryNodes(): Promise<Buffer>
        get StartupAllowedMemoryNodes(): Promise<Buffer>
        get IOAccounting(): Promise<boolean>
        get IOWeight(): Promise<number>
        get StartupIOWeight(): Promise<number>
        get IODeviceWeight(): Promise<[string,number][]>
        get IOReadBandwidthMax(): Promise<[string,number][]>
        get IOWriteBandwidthMax(): Promise<[string,number][]>
        get IOReadIOPSMax(): Promise<[string,number][]>
        get IOWriteIOPSMax(): Promise<[string,number][]>
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]>
        get BlockIOAccounting(): Promise<boolean>
        get BlockIOWeight(): Promise<number>
        get StartupBlockIOWeight(): Promise<number>
        get BlockIODeviceWeight(): Promise<[string,number][]>
        get BlockIOReadBandwidth(): Promise<[string,number][]>
        get BlockIOWriteBandwidth(): Promise<[string,number][]>
        get MemoryAccounting(): Promise<boolean>
        get DefaultMemoryLow(): Promise<number>
        get DefaultMemoryMin(): Promise<number>
        get MemoryMin(): Promise<number>
        get MemoryLow(): Promise<number>
        get MemoryHigh(): Promise<number>
        get MemoryMax(): Promise<number>
        get MemorySwapMax(): Promise<number>
        get MemoryZSwapMax(): Promise<number>
        get MemoryLimit(): Promise<number>
        get DevicePolicy(): Promise<string>
        get DeviceAllow(): Promise<[string,string][]>
        get TasksAccounting(): Promise<boolean>
        get TasksMax(): Promise<number>
        get IPAccounting(): Promise<boolean>
        get IPAddressAllow(): Promise<[number,Buffer,number][]>
        get IPAddressDeny(): Promise<[number,Buffer,number][]>
        get IPIngressFilterPath(): Promise<string[]>
        get IPEgressFilterPath(): Promise<string[]>
        get DisableControllers(): Promise<string[]>
        get ManagedOOMSwap(): Promise<string>
        get ManagedOOMMemoryPressure(): Promise<string>
        get ManagedOOMMemoryPressureLimit(): Promise<number>
        get ManagedOOMPreference(): Promise<string>
        get BPFProgram(): Promise<[string,string][]>
        get SocketBindAllow(): Promise<[number,number,number,number][]>
        get SocketBindDeny(): Promise<[number,number,number,number][]>
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]>
        get Environment(): Promise<string[]>
        get EnvironmentFiles(): Promise<[string,boolean][]>
        get PassEnvironment(): Promise<string[]>
        get UnsetEnvironment(): Promise<string[]>
        get UMask(): Promise<number>
        get LimitCPU(): Promise<number>
        get LimitCPUSoft(): Promise<number>
        get LimitFSIZE(): Promise<number>
        get LimitFSIZESoft(): Promise<number>
        get LimitDATA(): Promise<number>
        get LimitDATASoft(): Promise<number>
        get LimitSTACK(): Promise<number>
        get LimitSTACKSoft(): Promise<number>
        get LimitCORE(): Promise<number>
        get LimitCORESoft(): Promise<number>
        get LimitRSS(): Promise<number>
        get LimitRSSSoft(): Promise<number>
        get LimitNOFILE(): Promise<number>
        get LimitNOFILESoft(): Promise<number>
        get LimitAS(): Promise<number>
        get LimitASSoft(): Promise<number>
        get LimitNPROC(): Promise<number>
        get LimitNPROCSoft(): Promise<number>
        get LimitMEMLOCK(): Promise<number>
        get LimitMEMLOCKSoft(): Promise<number>
        get LimitLOCKS(): Promise<number>
        get LimitLOCKSSoft(): Promise<number>
        get LimitSIGPENDING(): Promise<number>
        get LimitSIGPENDINGSoft(): Promise<number>
        get LimitMSGQUEUE(): Promise<number>
        get LimitMSGQUEUESoft(): Promise<number>
        get LimitNICE(): Promise<number>
        get LimitNICESoft(): Promise<number>
        get LimitRTPRIO(): Promise<number>
        get LimitRTPRIOSoft(): Promise<number>
        get LimitRTTIME(): Promise<number>
        get LimitRTTIMESoft(): Promise<number>
        get WorkingDirectory(): Promise<string>
        get RootDirectory(): Promise<string>
        get RootImage(): Promise<string>
        get RootImageOptions(): Promise<[string,string][]>
        get RootHash(): Promise<Buffer>
        get RootHashPath(): Promise<string>
        get RootHashSignature(): Promise<Buffer>
        get RootHashSignaturePath(): Promise<string>
        get RootVerity(): Promise<string>
        get ExtensionDirectories(): Promise<string[]>
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]>
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]>
        get OOMScoreAdjust(): Promise<number>
        get CoredumpFilter(): Promise<number>
        get Nice(): Promise<number>
        get IOSchedulingClass(): Promise<number>
        get IOSchedulingPriority(): Promise<number>
        get CPUSchedulingPolicy(): Promise<number>
        get CPUSchedulingPriority(): Promise<number>
        get CPUAffinity(): Promise<Buffer>
        get CPUAffinityFromNUMA(): Promise<boolean>
        get NUMAPolicy(): Promise<number>
        get NUMAMask(): Promise<Buffer>
        get TimerSlackNSec(): Promise<number>
        get CPUSchedulingResetOnFork(): Promise<boolean>
        get NonBlocking(): Promise<boolean>
        get StandardInput(): Promise<string>
        get StandardInputFileDescriptorName(): Promise<string>
        get StandardInputData(): Promise<Buffer>
        get StandardOutput(): Promise<string>
        get StandardOutputFileDescriptorName(): Promise<string>
        get StandardError(): Promise<string>
        get StandardErrorFileDescriptorName(): Promise<string>
        get TTYPath(): Promise<string>
        get TTYReset(): Promise<boolean>
        get TTYVHangup(): Promise<boolean>
        get TTYVTDisallocate(): Promise<boolean>
        get TTYRows(): Promise<number>
        get TTYColumns(): Promise<number>
        get SyslogPriority(): Promise<number>
        get SyslogIdentifier(): Promise<string>
        get SyslogLevelPrefix(): Promise<boolean>
        get SyslogLevel(): Promise<number>
        get SyslogFacility(): Promise<number>
        get LogLevelMax(): Promise<number>
        get LogRateLimitIntervalUSec(): Promise<number>
        get LogRateLimitBurst(): Promise<number>
        get LogExtraFields(): Promise<Buffer[]>
        get LogFilterPatterns(): Promise<[boolean,string][]>
        get LogNamespace(): Promise<string>
        get SecureBits(): Promise<number>
        get CapabilityBoundingSet(): Promise<number>
        get AmbientCapabilities(): Promise<number>
        get User(): Promise<string>
        get Group(): Promise<string>
        get DynamicUser(): Promise<boolean>
        get RemoveIPC(): Promise<boolean>
        get SetCredential(): Promise<[string,Buffer][]>
        get SetCredentialEncrypted(): Promise<[string,Buffer][]>
        get LoadCredential(): Promise<[string,string][]>
        get LoadCredentialEncrypted(): Promise<[string,string][]>
        get SupplementaryGroups(): Promise<string[]>
        get PAMName(): Promise<string>
        get ReadWritePaths(): Promise<string[]>
        get ReadOnlyPaths(): Promise<string[]>
        get InaccessiblePaths(): Promise<string[]>
        get ExecPaths(): Promise<string[]>
        get NoExecPaths(): Promise<string[]>
        get ExecSearchPath(): Promise<string[]>
        get MountFlags(): Promise<number>
        get PrivateTmp(): Promise<boolean>
        get PrivateDevices(): Promise<boolean>
        get ProtectClock(): Promise<boolean>
        get ProtectKernelTunables(): Promise<boolean>
        get ProtectKernelModules(): Promise<boolean>
        get ProtectKernelLogs(): Promise<boolean>
        get ProtectControlGroups(): Promise<boolean>
        get PrivateNetwork(): Promise<boolean>
        get PrivateUsers(): Promise<boolean>
        get PrivateMounts(): Promise<boolean>
        get PrivateIPC(): Promise<boolean>
        get ProtectHome(): Promise<string>
        get ProtectSystem(): Promise<string>
        get SameProcessGroup(): Promise<boolean>
        get UtmpIdentifier(): Promise<string>
        get UtmpMode(): Promise<string>
        get SELinuxContext(): Promise<[boolean,string]>
        get AppArmorProfile(): Promise<[boolean,string]>
        get SmackProcessLabel(): Promise<[boolean,string]>
        get IgnoreSIGPIPE(): Promise<boolean>
        get NoNewPrivileges(): Promise<boolean>
        get SystemCallFilter(): Promise<[boolean,string[]]>
        get SystemCallArchitectures(): Promise<string[]>
        get SystemCallErrorNumber(): Promise<number>
        get SystemCallLog(): Promise<[boolean,string[]]>
        get Personality(): Promise<string>
        get LockPersonality(): Promise<boolean>
        get RestrictAddressFamilies(): Promise<[boolean,string[]]>
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]>
        get RuntimeDirectoryPreserve(): Promise<string>
        get RuntimeDirectoryMode(): Promise<number>
        get RuntimeDirectory(): Promise<string[]>
        get StateDirectorySymlink(): Promise<[string,string,number][]>
        get StateDirectoryMode(): Promise<number>
        get StateDirectory(): Promise<string[]>
        get CacheDirectorySymlink(): Promise<[string,string,number][]>
        get CacheDirectoryMode(): Promise<number>
        get CacheDirectory(): Promise<string[]>
        get LogsDirectorySymlink(): Promise<[string,string,number][]>
        get LogsDirectoryMode(): Promise<number>
        get LogsDirectory(): Promise<string[]>
        get ConfigurationDirectoryMode(): Promise<number>
        get ConfigurationDirectory(): Promise<string[]>
        get TimeoutCleanUSec(): Promise<number>
        get MemoryDenyWriteExecute(): Promise<boolean>
        get RestrictRealtime(): Promise<boolean>
        get RestrictSUIDSGID(): Promise<boolean>
        get RestrictNamespaces(): Promise<number>
        get RestrictFileSystems(): Promise<[boolean,string[]]>
        get BindPaths(): Promise<[string,string,boolean,number][]>
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]>
        get TemporaryFileSystem(): Promise<[string,string][]>
        get MountAPIVFS(): Promise<boolean>
        get KeyringMode(): Promise<string>
        get ProtectProc(): Promise<string>
        get ProcSubset(): Promise<string>
        get ProtectHostname(): Promise<boolean>
        get NetworkNamespacePath(): Promise<string>
        get IPCNamespacePath(): Promise<string>
        get KillMode(): Promise<string>
        get KillSignal(): Promise<number>
        get RestartKillSignal(): Promise<number>
        get FinalKillSignal(): Promise<number>
        get SendSIGKILL(): Promise<boolean>
        get SendSIGHUP(): Promise<boolean>
        get WatchdogSignal(): Promise<number>
        BindMount(source: string, destination: string, read_only: boolean, mkdir: boolean): Promise<[]>
        MountImage(source: string, destination: string, read_only: boolean, mkdir: boolean, options: [string,string][]): Promise<[]>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]]>
        AttachProcesses(subcgroup: string, pids: number[]): Promise<[]>
      }
      export interface Slice {
        get Slice(): Promise<string>
        get ControlGroup(): Promise<string>
        get ControlGroupId(): Promise<number>
        get MemoryCurrent(): Promise<number>
        get MemoryAvailable(): Promise<number>
        get CPUUsageNSec(): Promise<number>
        get EffectiveCPUs(): Promise<Buffer>
        get EffectiveMemoryNodes(): Promise<Buffer>
        get TasksCurrent(): Promise<number>
        get IPIngressBytes(): Promise<number>
        get IPIngressPackets(): Promise<number>
        get IPEgressBytes(): Promise<number>
        get IPEgressPackets(): Promise<number>
        get IOReadBytes(): Promise<number>
        get IOReadOperations(): Promise<number>
        get IOWriteBytes(): Promise<number>
        get IOWriteOperations(): Promise<number>
        get Delegate(): Promise<boolean>
        get DelegateControllers(): Promise<string[]>
        get CPUAccounting(): Promise<boolean>
        get CPUWeight(): Promise<number>
        get StartupCPUWeight(): Promise<number>
        get CPUShares(): Promise<number>
        get StartupCPUShares(): Promise<number>
        get CPUQuotaPerSecUSec(): Promise<number>
        get CPUQuotaPeriodUSec(): Promise<number>
        get AllowedCPUs(): Promise<Buffer>
        get StartupAllowedCPUs(): Promise<Buffer>
        get AllowedMemoryNodes(): Promise<Buffer>
        get StartupAllowedMemoryNodes(): Promise<Buffer>
        get IOAccounting(): Promise<boolean>
        get IOWeight(): Promise<number>
        get StartupIOWeight(): Promise<number>
        get IODeviceWeight(): Promise<[string,number][]>
        get IOReadBandwidthMax(): Promise<[string,number][]>
        get IOWriteBandwidthMax(): Promise<[string,number][]>
        get IOReadIOPSMax(): Promise<[string,number][]>
        get IOWriteIOPSMax(): Promise<[string,number][]>
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]>
        get BlockIOAccounting(): Promise<boolean>
        get BlockIOWeight(): Promise<number>
        get StartupBlockIOWeight(): Promise<number>
        get BlockIODeviceWeight(): Promise<[string,number][]>
        get BlockIOReadBandwidth(): Promise<[string,number][]>
        get BlockIOWriteBandwidth(): Promise<[string,number][]>
        get MemoryAccounting(): Promise<boolean>
        get DefaultMemoryLow(): Promise<number>
        get DefaultMemoryMin(): Promise<number>
        get MemoryMin(): Promise<number>
        get MemoryLow(): Promise<number>
        get MemoryHigh(): Promise<number>
        get MemoryMax(): Promise<number>
        get MemorySwapMax(): Promise<number>
        get MemoryZSwapMax(): Promise<number>
        get MemoryLimit(): Promise<number>
        get DevicePolicy(): Promise<string>
        get DeviceAllow(): Promise<[string,string][]>
        get TasksAccounting(): Promise<boolean>
        get TasksMax(): Promise<number>
        get IPAccounting(): Promise<boolean>
        get IPAddressAllow(): Promise<[number,Buffer,number][]>
        get IPAddressDeny(): Promise<[number,Buffer,number][]>
        get IPIngressFilterPath(): Promise<string[]>
        get IPEgressFilterPath(): Promise<string[]>
        get DisableControllers(): Promise<string[]>
        get ManagedOOMSwap(): Promise<string>
        get ManagedOOMMemoryPressure(): Promise<string>
        get ManagedOOMMemoryPressureLimit(): Promise<number>
        get ManagedOOMPreference(): Promise<string>
        get BPFProgram(): Promise<[string,string][]>
        get SocketBindAllow(): Promise<[number,number,number,number][]>
        get SocketBindDeny(): Promise<[number,number,number,number][]>
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]]>
        AttachProcesses(subcgroup: string, pids: number[]): Promise<[]>
      }
      export interface Socket {
        get BindIPv6Only(): Promise<string>
        get Backlog(): Promise<number>
        get TimeoutUSec(): Promise<number>
        get BindToDevice(): Promise<string>
        get SocketUser(): Promise<string>
        get SocketGroup(): Promise<string>
        get SocketMode(): Promise<number>
        get DirectoryMode(): Promise<number>
        get Accept(): Promise<boolean>
        get FlushPending(): Promise<boolean>
        get Writable(): Promise<boolean>
        get KeepAlive(): Promise<boolean>
        get KeepAliveTimeUSec(): Promise<number>
        get KeepAliveIntervalUSec(): Promise<number>
        get KeepAliveProbes(): Promise<number>
        get DeferAcceptUSec(): Promise<number>
        get NoDelay(): Promise<boolean>
        get Priority(): Promise<number>
        get ReceiveBuffer(): Promise<number>
        get SendBuffer(): Promise<number>
        get IPTOS(): Promise<number>
        get IPTTL(): Promise<number>
        get PipeSize(): Promise<number>
        get FreeBind(): Promise<boolean>
        get Transparent(): Promise<boolean>
        get Broadcast(): Promise<boolean>
        get PassCredentials(): Promise<boolean>
        get PassSecurity(): Promise<boolean>
        get PassPacketInfo(): Promise<boolean>
        get Timestamping(): Promise<string>
        get RemoveOnStop(): Promise<boolean>
        get Listen(): Promise<[string,string][]>
        get Symlinks(): Promise<string[]>
        get Mark(): Promise<number>
        get MaxConnections(): Promise<number>
        get MaxConnectionsPerSource(): Promise<number>
        get MessageQueueMaxMessages(): Promise<number>
        get MessageQueueMessageSize(): Promise<number>
        get TCPCongestion(): Promise<string>
        get ReusePort(): Promise<boolean>
        get SmackLabel(): Promise<string>
        get SmackLabelIPIn(): Promise<string>
        get SmackLabelIPOut(): Promise<string>
        get ControlPID(): Promise<number>
        get Result(): Promise<string>
        get NConnections(): Promise<number>
        get NAccepted(): Promise<number>
        get NRefused(): Promise<number>
        get FileDescriptorName(): Promise<string>
        get SocketProtocol(): Promise<number>
        get TriggerLimitIntervalUSec(): Promise<number>
        get TriggerLimitBurst(): Promise<number>
        get UID(): Promise<number>
        get GID(): Promise<number>
        get ExecStartPre(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStartPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStopPre(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecStopPost(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get Slice(): Promise<string>
        get ControlGroup(): Promise<string>
        get ControlGroupId(): Promise<number>
        get MemoryCurrent(): Promise<number>
        get MemoryAvailable(): Promise<number>
        get CPUUsageNSec(): Promise<number>
        get EffectiveCPUs(): Promise<Buffer>
        get EffectiveMemoryNodes(): Promise<Buffer>
        get TasksCurrent(): Promise<number>
        get IPIngressBytes(): Promise<number>
        get IPIngressPackets(): Promise<number>
        get IPEgressBytes(): Promise<number>
        get IPEgressPackets(): Promise<number>
        get IOReadBytes(): Promise<number>
        get IOReadOperations(): Promise<number>
        get IOWriteBytes(): Promise<number>
        get IOWriteOperations(): Promise<number>
        get Delegate(): Promise<boolean>
        get DelegateControllers(): Promise<string[]>
        get CPUAccounting(): Promise<boolean>
        get CPUWeight(): Promise<number>
        get StartupCPUWeight(): Promise<number>
        get CPUShares(): Promise<number>
        get StartupCPUShares(): Promise<number>
        get CPUQuotaPerSecUSec(): Promise<number>
        get CPUQuotaPeriodUSec(): Promise<number>
        get AllowedCPUs(): Promise<Buffer>
        get StartupAllowedCPUs(): Promise<Buffer>
        get AllowedMemoryNodes(): Promise<Buffer>
        get StartupAllowedMemoryNodes(): Promise<Buffer>
        get IOAccounting(): Promise<boolean>
        get IOWeight(): Promise<number>
        get StartupIOWeight(): Promise<number>
        get IODeviceWeight(): Promise<[string,number][]>
        get IOReadBandwidthMax(): Promise<[string,number][]>
        get IOWriteBandwidthMax(): Promise<[string,number][]>
        get IOReadIOPSMax(): Promise<[string,number][]>
        get IOWriteIOPSMax(): Promise<[string,number][]>
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]>
        get BlockIOAccounting(): Promise<boolean>
        get BlockIOWeight(): Promise<number>
        get StartupBlockIOWeight(): Promise<number>
        get BlockIODeviceWeight(): Promise<[string,number][]>
        get BlockIOReadBandwidth(): Promise<[string,number][]>
        get BlockIOWriteBandwidth(): Promise<[string,number][]>
        get MemoryAccounting(): Promise<boolean>
        get DefaultMemoryLow(): Promise<number>
        get DefaultMemoryMin(): Promise<number>
        get MemoryMin(): Promise<number>
        get MemoryLow(): Promise<number>
        get MemoryHigh(): Promise<number>
        get MemoryMax(): Promise<number>
        get MemorySwapMax(): Promise<number>
        get MemoryZSwapMax(): Promise<number>
        get MemoryLimit(): Promise<number>
        get DevicePolicy(): Promise<string>
        get DeviceAllow(): Promise<[string,string][]>
        get TasksAccounting(): Promise<boolean>
        get TasksMax(): Promise<number>
        get IPAccounting(): Promise<boolean>
        get IPAddressAllow(): Promise<[number,Buffer,number][]>
        get IPAddressDeny(): Promise<[number,Buffer,number][]>
        get IPIngressFilterPath(): Promise<string[]>
        get IPEgressFilterPath(): Promise<string[]>
        get DisableControllers(): Promise<string[]>
        get ManagedOOMSwap(): Promise<string>
        get ManagedOOMMemoryPressure(): Promise<string>
        get ManagedOOMMemoryPressureLimit(): Promise<number>
        get ManagedOOMPreference(): Promise<string>
        get BPFProgram(): Promise<[string,string][]>
        get SocketBindAllow(): Promise<[number,number,number,number][]>
        get SocketBindDeny(): Promise<[number,number,number,number][]>
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]>
        get Environment(): Promise<string[]>
        get EnvironmentFiles(): Promise<[string,boolean][]>
        get PassEnvironment(): Promise<string[]>
        get UnsetEnvironment(): Promise<string[]>
        get UMask(): Promise<number>
        get LimitCPU(): Promise<number>
        get LimitCPUSoft(): Promise<number>
        get LimitFSIZE(): Promise<number>
        get LimitFSIZESoft(): Promise<number>
        get LimitDATA(): Promise<number>
        get LimitDATASoft(): Promise<number>
        get LimitSTACK(): Promise<number>
        get LimitSTACKSoft(): Promise<number>
        get LimitCORE(): Promise<number>
        get LimitCORESoft(): Promise<number>
        get LimitRSS(): Promise<number>
        get LimitRSSSoft(): Promise<number>
        get LimitNOFILE(): Promise<number>
        get LimitNOFILESoft(): Promise<number>
        get LimitAS(): Promise<number>
        get LimitASSoft(): Promise<number>
        get LimitNPROC(): Promise<number>
        get LimitNPROCSoft(): Promise<number>
        get LimitMEMLOCK(): Promise<number>
        get LimitMEMLOCKSoft(): Promise<number>
        get LimitLOCKS(): Promise<number>
        get LimitLOCKSSoft(): Promise<number>
        get LimitSIGPENDING(): Promise<number>
        get LimitSIGPENDINGSoft(): Promise<number>
        get LimitMSGQUEUE(): Promise<number>
        get LimitMSGQUEUESoft(): Promise<number>
        get LimitNICE(): Promise<number>
        get LimitNICESoft(): Promise<number>
        get LimitRTPRIO(): Promise<number>
        get LimitRTPRIOSoft(): Promise<number>
        get LimitRTTIME(): Promise<number>
        get LimitRTTIMESoft(): Promise<number>
        get WorkingDirectory(): Promise<string>
        get RootDirectory(): Promise<string>
        get RootImage(): Promise<string>
        get RootImageOptions(): Promise<[string,string][]>
        get RootHash(): Promise<Buffer>
        get RootHashPath(): Promise<string>
        get RootHashSignature(): Promise<Buffer>
        get RootHashSignaturePath(): Promise<string>
        get RootVerity(): Promise<string>
        get ExtensionDirectories(): Promise<string[]>
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]>
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]>
        get OOMScoreAdjust(): Promise<number>
        get CoredumpFilter(): Promise<number>
        get Nice(): Promise<number>
        get IOSchedulingClass(): Promise<number>
        get IOSchedulingPriority(): Promise<number>
        get CPUSchedulingPolicy(): Promise<number>
        get CPUSchedulingPriority(): Promise<number>
        get CPUAffinity(): Promise<Buffer>
        get CPUAffinityFromNUMA(): Promise<boolean>
        get NUMAPolicy(): Promise<number>
        get NUMAMask(): Promise<Buffer>
        get TimerSlackNSec(): Promise<number>
        get CPUSchedulingResetOnFork(): Promise<boolean>
        get NonBlocking(): Promise<boolean>
        get StandardInput(): Promise<string>
        get StandardInputFileDescriptorName(): Promise<string>
        get StandardInputData(): Promise<Buffer>
        get StandardOutput(): Promise<string>
        get StandardOutputFileDescriptorName(): Promise<string>
        get StandardError(): Promise<string>
        get StandardErrorFileDescriptorName(): Promise<string>
        get TTYPath(): Promise<string>
        get TTYReset(): Promise<boolean>
        get TTYVHangup(): Promise<boolean>
        get TTYVTDisallocate(): Promise<boolean>
        get TTYRows(): Promise<number>
        get TTYColumns(): Promise<number>
        get SyslogPriority(): Promise<number>
        get SyslogIdentifier(): Promise<string>
        get SyslogLevelPrefix(): Promise<boolean>
        get SyslogLevel(): Promise<number>
        get SyslogFacility(): Promise<number>
        get LogLevelMax(): Promise<number>
        get LogRateLimitIntervalUSec(): Promise<number>
        get LogRateLimitBurst(): Promise<number>
        get LogExtraFields(): Promise<Buffer[]>
        get LogFilterPatterns(): Promise<[boolean,string][]>
        get LogNamespace(): Promise<string>
        get SecureBits(): Promise<number>
        get CapabilityBoundingSet(): Promise<number>
        get AmbientCapabilities(): Promise<number>
        get User(): Promise<string>
        get Group(): Promise<string>
        get DynamicUser(): Promise<boolean>
        get RemoveIPC(): Promise<boolean>
        get SetCredential(): Promise<[string,Buffer][]>
        get SetCredentialEncrypted(): Promise<[string,Buffer][]>
        get LoadCredential(): Promise<[string,string][]>
        get LoadCredentialEncrypted(): Promise<[string,string][]>
        get SupplementaryGroups(): Promise<string[]>
        get PAMName(): Promise<string>
        get ReadWritePaths(): Promise<string[]>
        get ReadOnlyPaths(): Promise<string[]>
        get InaccessiblePaths(): Promise<string[]>
        get ExecPaths(): Promise<string[]>
        get NoExecPaths(): Promise<string[]>
        get ExecSearchPath(): Promise<string[]>
        get MountFlags(): Promise<number>
        get PrivateTmp(): Promise<boolean>
        get PrivateDevices(): Promise<boolean>
        get ProtectClock(): Promise<boolean>
        get ProtectKernelTunables(): Promise<boolean>
        get ProtectKernelModules(): Promise<boolean>
        get ProtectKernelLogs(): Promise<boolean>
        get ProtectControlGroups(): Promise<boolean>
        get PrivateNetwork(): Promise<boolean>
        get PrivateUsers(): Promise<boolean>
        get PrivateMounts(): Promise<boolean>
        get PrivateIPC(): Promise<boolean>
        get ProtectHome(): Promise<string>
        get ProtectSystem(): Promise<string>
        get SameProcessGroup(): Promise<boolean>
        get UtmpIdentifier(): Promise<string>
        get UtmpMode(): Promise<string>
        get SELinuxContext(): Promise<[boolean,string]>
        get AppArmorProfile(): Promise<[boolean,string]>
        get SmackProcessLabel(): Promise<[boolean,string]>
        get IgnoreSIGPIPE(): Promise<boolean>
        get NoNewPrivileges(): Promise<boolean>
        get SystemCallFilter(): Promise<[boolean,string[]]>
        get SystemCallArchitectures(): Promise<string[]>
        get SystemCallErrorNumber(): Promise<number>
        get SystemCallLog(): Promise<[boolean,string[]]>
        get Personality(): Promise<string>
        get LockPersonality(): Promise<boolean>
        get RestrictAddressFamilies(): Promise<[boolean,string[]]>
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]>
        get RuntimeDirectoryPreserve(): Promise<string>
        get RuntimeDirectoryMode(): Promise<number>
        get RuntimeDirectory(): Promise<string[]>
        get StateDirectorySymlink(): Promise<[string,string,number][]>
        get StateDirectoryMode(): Promise<number>
        get StateDirectory(): Promise<string[]>
        get CacheDirectorySymlink(): Promise<[string,string,number][]>
        get CacheDirectoryMode(): Promise<number>
        get CacheDirectory(): Promise<string[]>
        get LogsDirectorySymlink(): Promise<[string,string,number][]>
        get LogsDirectoryMode(): Promise<number>
        get LogsDirectory(): Promise<string[]>
        get ConfigurationDirectoryMode(): Promise<number>
        get ConfigurationDirectory(): Promise<string[]>
        get TimeoutCleanUSec(): Promise<number>
        get MemoryDenyWriteExecute(): Promise<boolean>
        get RestrictRealtime(): Promise<boolean>
        get RestrictSUIDSGID(): Promise<boolean>
        get RestrictNamespaces(): Promise<number>
        get RestrictFileSystems(): Promise<[boolean,string[]]>
        get BindPaths(): Promise<[string,string,boolean,number][]>
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]>
        get TemporaryFileSystem(): Promise<[string,string][]>
        get MountAPIVFS(): Promise<boolean>
        get KeyringMode(): Promise<string>
        get ProtectProc(): Promise<string>
        get ProcSubset(): Promise<string>
        get ProtectHostname(): Promise<boolean>
        get NetworkNamespacePath(): Promise<string>
        get IPCNamespacePath(): Promise<string>
        get KillMode(): Promise<string>
        get KillSignal(): Promise<number>
        get RestartKillSignal(): Promise<number>
        get FinalKillSignal(): Promise<number>
        get SendSIGKILL(): Promise<boolean>
        get SendSIGHUP(): Promise<boolean>
        get WatchdogSignal(): Promise<number>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]]>
        AttachProcesses(subcgroup: string, pids: number[]): Promise<[]>
      }
      export interface Swap {
        get What(): Promise<string>
        get Priority(): Promise<number>
        get Options(): Promise<string>
        get TimeoutUSec(): Promise<number>
        get ControlPID(): Promise<number>
        get Result(): Promise<string>
        get UID(): Promise<number>
        get GID(): Promise<number>
        get ExecActivate(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get ExecDeactivate(): Promise<[string,string[],boolean,number,number,number,number,number,number,number][]>
        get Slice(): Promise<string>
        get ControlGroup(): Promise<string>
        get ControlGroupId(): Promise<number>
        get MemoryCurrent(): Promise<number>
        get MemoryAvailable(): Promise<number>
        get CPUUsageNSec(): Promise<number>
        get EffectiveCPUs(): Promise<Buffer>
        get EffectiveMemoryNodes(): Promise<Buffer>
        get TasksCurrent(): Promise<number>
        get IPIngressBytes(): Promise<number>
        get IPIngressPackets(): Promise<number>
        get IPEgressBytes(): Promise<number>
        get IPEgressPackets(): Promise<number>
        get IOReadBytes(): Promise<number>
        get IOReadOperations(): Promise<number>
        get IOWriteBytes(): Promise<number>
        get IOWriteOperations(): Promise<number>
        get Delegate(): Promise<boolean>
        get DelegateControllers(): Promise<string[]>
        get CPUAccounting(): Promise<boolean>
        get CPUWeight(): Promise<number>
        get StartupCPUWeight(): Promise<number>
        get CPUShares(): Promise<number>
        get StartupCPUShares(): Promise<number>
        get CPUQuotaPerSecUSec(): Promise<number>
        get CPUQuotaPeriodUSec(): Promise<number>
        get AllowedCPUs(): Promise<Buffer>
        get StartupAllowedCPUs(): Promise<Buffer>
        get AllowedMemoryNodes(): Promise<Buffer>
        get StartupAllowedMemoryNodes(): Promise<Buffer>
        get IOAccounting(): Promise<boolean>
        get IOWeight(): Promise<number>
        get StartupIOWeight(): Promise<number>
        get IODeviceWeight(): Promise<[string,number][]>
        get IOReadBandwidthMax(): Promise<[string,number][]>
        get IOWriteBandwidthMax(): Promise<[string,number][]>
        get IOReadIOPSMax(): Promise<[string,number][]>
        get IOWriteIOPSMax(): Promise<[string,number][]>
        get IODeviceLatencyTargetUSec(): Promise<[string,number][]>
        get BlockIOAccounting(): Promise<boolean>
        get BlockIOWeight(): Promise<number>
        get StartupBlockIOWeight(): Promise<number>
        get BlockIODeviceWeight(): Promise<[string,number][]>
        get BlockIOReadBandwidth(): Promise<[string,number][]>
        get BlockIOWriteBandwidth(): Promise<[string,number][]>
        get MemoryAccounting(): Promise<boolean>
        get DefaultMemoryLow(): Promise<number>
        get DefaultMemoryMin(): Promise<number>
        get MemoryMin(): Promise<number>
        get MemoryLow(): Promise<number>
        get MemoryHigh(): Promise<number>
        get MemoryMax(): Promise<number>
        get MemorySwapMax(): Promise<number>
        get MemoryZSwapMax(): Promise<number>
        get MemoryLimit(): Promise<number>
        get DevicePolicy(): Promise<string>
        get DeviceAllow(): Promise<[string,string][]>
        get TasksAccounting(): Promise<boolean>
        get TasksMax(): Promise<number>
        get IPAccounting(): Promise<boolean>
        get IPAddressAllow(): Promise<[number,Buffer,number][]>
        get IPAddressDeny(): Promise<[number,Buffer,number][]>
        get IPIngressFilterPath(): Promise<string[]>
        get IPEgressFilterPath(): Promise<string[]>
        get DisableControllers(): Promise<string[]>
        get ManagedOOMSwap(): Promise<string>
        get ManagedOOMMemoryPressure(): Promise<string>
        get ManagedOOMMemoryPressureLimit(): Promise<number>
        get ManagedOOMPreference(): Promise<string>
        get BPFProgram(): Promise<[string,string][]>
        get SocketBindAllow(): Promise<[number,number,number,number][]>
        get SocketBindDeny(): Promise<[number,number,number,number][]>
        get RestrictNetworkInterfaces(): Promise<[boolean,string[]]>
        get Environment(): Promise<string[]>
        get EnvironmentFiles(): Promise<[string,boolean][]>
        get PassEnvironment(): Promise<string[]>
        get UnsetEnvironment(): Promise<string[]>
        get UMask(): Promise<number>
        get LimitCPU(): Promise<number>
        get LimitCPUSoft(): Promise<number>
        get LimitFSIZE(): Promise<number>
        get LimitFSIZESoft(): Promise<number>
        get LimitDATA(): Promise<number>
        get LimitDATASoft(): Promise<number>
        get LimitSTACK(): Promise<number>
        get LimitSTACKSoft(): Promise<number>
        get LimitCORE(): Promise<number>
        get LimitCORESoft(): Promise<number>
        get LimitRSS(): Promise<number>
        get LimitRSSSoft(): Promise<number>
        get LimitNOFILE(): Promise<number>
        get LimitNOFILESoft(): Promise<number>
        get LimitAS(): Promise<number>
        get LimitASSoft(): Promise<number>
        get LimitNPROC(): Promise<number>
        get LimitNPROCSoft(): Promise<number>
        get LimitMEMLOCK(): Promise<number>
        get LimitMEMLOCKSoft(): Promise<number>
        get LimitLOCKS(): Promise<number>
        get LimitLOCKSSoft(): Promise<number>
        get LimitSIGPENDING(): Promise<number>
        get LimitSIGPENDINGSoft(): Promise<number>
        get LimitMSGQUEUE(): Promise<number>
        get LimitMSGQUEUESoft(): Promise<number>
        get LimitNICE(): Promise<number>
        get LimitNICESoft(): Promise<number>
        get LimitRTPRIO(): Promise<number>
        get LimitRTPRIOSoft(): Promise<number>
        get LimitRTTIME(): Promise<number>
        get LimitRTTIMESoft(): Promise<number>
        get WorkingDirectory(): Promise<string>
        get RootDirectory(): Promise<string>
        get RootImage(): Promise<string>
        get RootImageOptions(): Promise<[string,string][]>
        get RootHash(): Promise<Buffer>
        get RootHashPath(): Promise<string>
        get RootHashSignature(): Promise<Buffer>
        get RootHashSignaturePath(): Promise<string>
        get RootVerity(): Promise<string>
        get ExtensionDirectories(): Promise<string[]>
        get ExtensionImages(): Promise<[string,boolean,[string,string][]][]>
        get MountImages(): Promise<[string,string,boolean,[string,string][]][]>
        get OOMScoreAdjust(): Promise<number>
        get CoredumpFilter(): Promise<number>
        get Nice(): Promise<number>
        get IOSchedulingClass(): Promise<number>
        get IOSchedulingPriority(): Promise<number>
        get CPUSchedulingPolicy(): Promise<number>
        get CPUSchedulingPriority(): Promise<number>
        get CPUAffinity(): Promise<Buffer>
        get CPUAffinityFromNUMA(): Promise<boolean>
        get NUMAPolicy(): Promise<number>
        get NUMAMask(): Promise<Buffer>
        get TimerSlackNSec(): Promise<number>
        get CPUSchedulingResetOnFork(): Promise<boolean>
        get NonBlocking(): Promise<boolean>
        get StandardInput(): Promise<string>
        get StandardInputFileDescriptorName(): Promise<string>
        get StandardInputData(): Promise<Buffer>
        get StandardOutput(): Promise<string>
        get StandardOutputFileDescriptorName(): Promise<string>
        get StandardError(): Promise<string>
        get StandardErrorFileDescriptorName(): Promise<string>
        get TTYPath(): Promise<string>
        get TTYReset(): Promise<boolean>
        get TTYVHangup(): Promise<boolean>
        get TTYVTDisallocate(): Promise<boolean>
        get TTYRows(): Promise<number>
        get TTYColumns(): Promise<number>
        get SyslogPriority(): Promise<number>
        get SyslogIdentifier(): Promise<string>
        get SyslogLevelPrefix(): Promise<boolean>
        get SyslogLevel(): Promise<number>
        get SyslogFacility(): Promise<number>
        get LogLevelMax(): Promise<number>
        get LogRateLimitIntervalUSec(): Promise<number>
        get LogRateLimitBurst(): Promise<number>
        get LogExtraFields(): Promise<Buffer[]>
        get LogFilterPatterns(): Promise<[boolean,string][]>
        get LogNamespace(): Promise<string>
        get SecureBits(): Promise<number>
        get CapabilityBoundingSet(): Promise<number>
        get AmbientCapabilities(): Promise<number>
        get User(): Promise<string>
        get Group(): Promise<string>
        get DynamicUser(): Promise<boolean>
        get RemoveIPC(): Promise<boolean>
        get SetCredential(): Promise<[string,Buffer][]>
        get SetCredentialEncrypted(): Promise<[string,Buffer][]>
        get LoadCredential(): Promise<[string,string][]>
        get LoadCredentialEncrypted(): Promise<[string,string][]>
        get SupplementaryGroups(): Promise<string[]>
        get PAMName(): Promise<string>
        get ReadWritePaths(): Promise<string[]>
        get ReadOnlyPaths(): Promise<string[]>
        get InaccessiblePaths(): Promise<string[]>
        get ExecPaths(): Promise<string[]>
        get NoExecPaths(): Promise<string[]>
        get ExecSearchPath(): Promise<string[]>
        get MountFlags(): Promise<number>
        get PrivateTmp(): Promise<boolean>
        get PrivateDevices(): Promise<boolean>
        get ProtectClock(): Promise<boolean>
        get ProtectKernelTunables(): Promise<boolean>
        get ProtectKernelModules(): Promise<boolean>
        get ProtectKernelLogs(): Promise<boolean>
        get ProtectControlGroups(): Promise<boolean>
        get PrivateNetwork(): Promise<boolean>
        get PrivateUsers(): Promise<boolean>
        get PrivateMounts(): Promise<boolean>
        get PrivateIPC(): Promise<boolean>
        get ProtectHome(): Promise<string>
        get ProtectSystem(): Promise<string>
        get SameProcessGroup(): Promise<boolean>
        get UtmpIdentifier(): Promise<string>
        get UtmpMode(): Promise<string>
        get SELinuxContext(): Promise<[boolean,string]>
        get AppArmorProfile(): Promise<[boolean,string]>
        get SmackProcessLabel(): Promise<[boolean,string]>
        get IgnoreSIGPIPE(): Promise<boolean>
        get NoNewPrivileges(): Promise<boolean>
        get SystemCallFilter(): Promise<[boolean,string[]]>
        get SystemCallArchitectures(): Promise<string[]>
        get SystemCallErrorNumber(): Promise<number>
        get SystemCallLog(): Promise<[boolean,string[]]>
        get Personality(): Promise<string>
        get LockPersonality(): Promise<boolean>
        get RestrictAddressFamilies(): Promise<[boolean,string[]]>
        get RuntimeDirectorySymlink(): Promise<[string,string,number][]>
        get RuntimeDirectoryPreserve(): Promise<string>
        get RuntimeDirectoryMode(): Promise<number>
        get RuntimeDirectory(): Promise<string[]>
        get StateDirectorySymlink(): Promise<[string,string,number][]>
        get StateDirectoryMode(): Promise<number>
        get StateDirectory(): Promise<string[]>
        get CacheDirectorySymlink(): Promise<[string,string,number][]>
        get CacheDirectoryMode(): Promise<number>
        get CacheDirectory(): Promise<string[]>
        get LogsDirectorySymlink(): Promise<[string,string,number][]>
        get LogsDirectoryMode(): Promise<number>
        get LogsDirectory(): Promise<string[]>
        get ConfigurationDirectoryMode(): Promise<number>
        get ConfigurationDirectory(): Promise<string[]>
        get TimeoutCleanUSec(): Promise<number>
        get MemoryDenyWriteExecute(): Promise<boolean>
        get RestrictRealtime(): Promise<boolean>
        get RestrictSUIDSGID(): Promise<boolean>
        get RestrictNamespaces(): Promise<number>
        get RestrictFileSystems(): Promise<[boolean,string[]]>
        get BindPaths(): Promise<[string,string,boolean,number][]>
        get BindReadOnlyPaths(): Promise<[string,string,boolean,number][]>
        get TemporaryFileSystem(): Promise<[string,string][]>
        get MountAPIVFS(): Promise<boolean>
        get KeyringMode(): Promise<string>
        get ProtectProc(): Promise<string>
        get ProcSubset(): Promise<string>
        get ProtectHostname(): Promise<boolean>
        get NetworkNamespacePath(): Promise<string>
        get IPCNamespacePath(): Promise<string>
        get KillMode(): Promise<string>
        get KillSignal(): Promise<number>
        get RestartKillSignal(): Promise<number>
        get FinalKillSignal(): Promise<number>
        get SendSIGKILL(): Promise<boolean>
        get SendSIGHUP(): Promise<boolean>
        get WatchdogSignal(): Promise<number>
        GetProcesses(): Promise<[/*processes*/[string,number,string][]]>
        AttachProcesses(subcgroup: string, pids: number[]): Promise<[]>
      }
      export interface Target {
      }
      export interface Timer {
        get Unit(): Promise<string>
        get TimersMonotonic(): Promise<[string,number,number][]>
        get TimersCalendar(): Promise<[string,string,number][]>
        get OnClockChange(): Promise<boolean>
        get OnTimezoneChange(): Promise<boolean>
        get NextElapseUSecRealtime(): Promise<number>
        get NextElapseUSecMonotonic(): Promise<number>
        get LastTriggerUSec(): Promise<number>
        get LastTriggerUSecMonotonic(): Promise<number>
        get Result(): Promise<string>
        get AccuracyUSec(): Promise<number>
        get RandomizedDelayUSec(): Promise<number>
        get FixedRandomDelay(): Promise<boolean>
        get Persistent(): Promise<boolean>
        get WakeSystem(): Promise<boolean>
        get RemainAfterElapse(): Promise<boolean>
      }
      export interface Unit {
        get Id(): Promise<string>
        get Names(): Promise<string[]>
        get Following(): Promise<string>
        get Requires(): Promise<string[]>
        get Requisite(): Promise<string[]>
        get Wants(): Promise<string[]>
        get BindsTo(): Promise<string[]>
        get PartOf(): Promise<string[]>
        get Upholds(): Promise<string[]>
        get RequiredBy(): Promise<string[]>
        get RequisiteOf(): Promise<string[]>
        get WantedBy(): Promise<string[]>
        get BoundBy(): Promise<string[]>
        get UpheldBy(): Promise<string[]>
        get ConsistsOf(): Promise<string[]>
        get Conflicts(): Promise<string[]>
        get ConflictedBy(): Promise<string[]>
        get Before(): Promise<string[]>
        get After(): Promise<string[]>
        get OnSuccess(): Promise<string[]>
        get OnSuccessOf(): Promise<string[]>
        get OnFailure(): Promise<string[]>
        get OnFailureOf(): Promise<string[]>
        get Triggers(): Promise<string[]>
        get TriggeredBy(): Promise<string[]>
        get PropagatesReloadTo(): Promise<string[]>
        get ReloadPropagatedFrom(): Promise<string[]>
        get PropagatesStopTo(): Promise<string[]>
        get StopPropagatedFrom(): Promise<string[]>
        get JoinsNamespaceOf(): Promise<string[]>
        get SliceOf(): Promise<string[]>
        get RequiresMountsFor(): Promise<string[]>
        get Documentation(): Promise<string[]>
        get Description(): Promise<string>
        get AccessSELinuxContext(): Promise<string>
        get LoadState(): Promise<string>
        get ActiveState(): Promise<string>
        get FreezerState(): Promise<string>
        get SubState(): Promise<string>
        get FragmentPath(): Promise<string>
        get SourcePath(): Promise<string>
        get DropInPaths(): Promise<string[]>
        get UnitFileState(): Promise<string>
        get UnitFilePreset(): Promise<string>
        get StateChangeTimestamp(): Promise<number>
        get StateChangeTimestampMonotonic(): Promise<number>
        get InactiveExitTimestamp(): Promise<number>
        get InactiveExitTimestampMonotonic(): Promise<number>
        get ActiveEnterTimestamp(): Promise<number>
        get ActiveEnterTimestampMonotonic(): Promise<number>
        get ActiveExitTimestamp(): Promise<number>
        get ActiveExitTimestampMonotonic(): Promise<number>
        get InactiveEnterTimestamp(): Promise<number>
        get InactiveEnterTimestampMonotonic(): Promise<number>
        get CanStart(): Promise<boolean>
        get CanStop(): Promise<boolean>
        get CanReload(): Promise<boolean>
        get CanIsolate(): Promise<boolean>
        get CanClean(): Promise<string[]>
        get CanFreeze(): Promise<boolean>
        get Job(): Promise<[number,ObjectPath]>
        get StopWhenUnneeded(): Promise<boolean>
        get RefuseManualStart(): Promise<boolean>
        get RefuseManualStop(): Promise<boolean>
        get AllowIsolate(): Promise<boolean>
        get DefaultDependencies(): Promise<boolean>
        get OnSuccessJobMode(): Promise<string>
        get OnFailureJobMode(): Promise<string>
        get IgnoreOnIsolate(): Promise<boolean>
        get NeedDaemonReload(): Promise<boolean>
        get Markers(): Promise<string[]>
        get JobTimeoutUSec(): Promise<number>
        get JobRunningTimeoutUSec(): Promise<number>
        get JobTimeoutAction(): Promise<string>
        get JobTimeoutRebootArgument(): Promise<string>
        get ConditionResult(): Promise<boolean>
        get AssertResult(): Promise<boolean>
        get ConditionTimestamp(): Promise<number>
        get ConditionTimestampMonotonic(): Promise<number>
        get AssertTimestamp(): Promise<number>
        get AssertTimestampMonotonic(): Promise<number>
        get Conditions(): Promise<[string,boolean,boolean,string,number][]>
        get Asserts(): Promise<[string,boolean,boolean,string,number][]>
        get LoadError(): Promise<[string,string]>
        get Transient(): Promise<boolean>
        get Perpetual(): Promise<boolean>
        get StartLimitIntervalUSec(): Promise<number>
        get StartLimitBurst(): Promise<number>
        get StartLimitAction(): Promise<string>
        get FailureAction(): Promise<string>
        get FailureActionExitStatus(): Promise<number>
        get SuccessAction(): Promise<string>
        get SuccessActionExitStatus(): Promise<number>
        get RebootArgument(): Promise<string>
        get InvocationID(): Promise<Buffer>
        get CollectMode(): Promise<string>
        get Refs(): Promise<string[]>
        get ActivationDetails(): Promise<[string,string][]>
        Start(mode: string): Promise<[/*job*/ObjectPath]>
        Stop(mode: string): Promise<[/*job*/ObjectPath]>
        Reload(mode: string): Promise<[/*job*/ObjectPath]>
        Restart(mode: string): Promise<[/*job*/ObjectPath]>
        TryRestart(mode: string): Promise<[/*job*/ObjectPath]>
        ReloadOrRestart(mode: string): Promise<[/*job*/ObjectPath]>
        ReloadOrTryRestart(mode: string): Promise<[/*job*/ObjectPath]>
        EnqueueJob(job_type: string, job_mode: string): Promise<[/*job_id*/number, /*job_path*/ObjectPath, /*unit_id*/string, /*unit_path*/ObjectPath, /*job_type*/string, /*affected_jobs*/[number,ObjectPath,string,ObjectPath,string][]]>
        Kill(whom: string, signal: number): Promise<[]>
        ResetFailed(): Promise<[]>
        SetProperties(runtime: boolean, properties: [string,SigVal][]): Promise<[]>
        Ref(): Promise<[]>
        Unref(): Promise<[]>
        Clean(mask: string[]): Promise<[]>
        Freeze(): Promise<[]>
        Thaw(): Promise<[]>
      }
    }
  }
}
