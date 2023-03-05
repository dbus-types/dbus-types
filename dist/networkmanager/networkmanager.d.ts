import {ObjectPath, Variant, SigVal} from '@dbus-types/common'
export type Interfaces = {
  "org.freedesktop.NetworkManager": org.freedesktop.NetworkManager
  "org.freedesktop.NetworkManager.AccessPoint": org.freedesktop.NetworkManager.AccessPoint
  "org.freedesktop.NetworkManager.AgentManager": org.freedesktop.NetworkManager.AgentManager
  "org.freedesktop.NetworkManager.Checkpoint": org.freedesktop.NetworkManager.Checkpoint
  "org.freedesktop.NetworkManager.Connection.Active": org.freedesktop.NetworkManager.Connection.Active
  "org.freedesktop.NetworkManager.DHCP4Config": org.freedesktop.NetworkManager.DHCP4Config
  "org.freedesktop.NetworkManager.DHCP6Config": org.freedesktop.NetworkManager.DHCP6Config
  "org.freedesktop.NetworkManager.Device": org.freedesktop.NetworkManager.Device
  "org.freedesktop.NetworkManager.Device.Adsl": org.freedesktop.NetworkManager.Device.Adsl
  "org.freedesktop.NetworkManager.Device.Bluetooth": org.freedesktop.NetworkManager.Device.Bluetooth
  "org.freedesktop.NetworkManager.Device.Bond": org.freedesktop.NetworkManager.Device.Bond
  "org.freedesktop.NetworkManager.Device.Bridge": org.freedesktop.NetworkManager.Device.Bridge
  "org.freedesktop.NetworkManager.Device.Dummy": org.freedesktop.NetworkManager.Device.Dummy
  "org.freedesktop.NetworkManager.Device.Generic": org.freedesktop.NetworkManager.Device.Generic
  "org.freedesktop.NetworkManager.Device.IPTunnel": org.freedesktop.NetworkManager.Device.IPTunnel
  "org.freedesktop.NetworkManager.Device.Infiniband": org.freedesktop.NetworkManager.Device.Infiniband
  "org.freedesktop.NetworkManager.Device.Loopback": org.freedesktop.NetworkManager.Device.Loopback
  "org.freedesktop.NetworkManager.Device.Lowpan": org.freedesktop.NetworkManager.Device.Lowpan
  "org.freedesktop.NetworkManager.Device.Macsec": org.freedesktop.NetworkManager.Device.Macsec
  "org.freedesktop.NetworkManager.Device.Macvlan": org.freedesktop.NetworkManager.Device.Macvlan
  "org.freedesktop.NetworkManager.Device.Modem": org.freedesktop.NetworkManager.Device.Modem
  "org.freedesktop.NetworkManager.Device.OlpcMesh": org.freedesktop.NetworkManager.Device.OlpcMesh
  "org.freedesktop.NetworkManager.Device.OvsBridge": org.freedesktop.NetworkManager.Device.OvsBridge
  "org.freedesktop.NetworkManager.Device.OvsInterface": org.freedesktop.NetworkManager.Device.OvsInterface
  "org.freedesktop.NetworkManager.Device.OvsPort": org.freedesktop.NetworkManager.Device.OvsPort
  "org.freedesktop.NetworkManager.Device.Ppp": org.freedesktop.NetworkManager.Device.Ppp
  "org.freedesktop.NetworkManager.Device.Statistics": org.freedesktop.NetworkManager.Device.Statistics
  "org.freedesktop.NetworkManager.Device.Team": org.freedesktop.NetworkManager.Device.Team
  "org.freedesktop.NetworkManager.Device.Tun": org.freedesktop.NetworkManager.Device.Tun
  "org.freedesktop.NetworkManager.Device.Veth": org.freedesktop.NetworkManager.Device.Veth
  "org.freedesktop.NetworkManager.Device.Vlan": org.freedesktop.NetworkManager.Device.Vlan
  "org.freedesktop.NetworkManager.Device.Vrf": org.freedesktop.NetworkManager.Device.Vrf
  "org.freedesktop.NetworkManager.Device.Vxlan": org.freedesktop.NetworkManager.Device.Vxlan
  "org.freedesktop.NetworkManager.Device.WiMax": org.freedesktop.NetworkManager.Device.WiMax
  "org.freedesktop.NetworkManager.Device.WifiP2P": org.freedesktop.NetworkManager.Device.WifiP2P
  "org.freedesktop.NetworkManager.Device.WireGuard": org.freedesktop.NetworkManager.Device.WireGuard
  "org.freedesktop.NetworkManager.Device.Wired": org.freedesktop.NetworkManager.Device.Wired
  "org.freedesktop.NetworkManager.Device.Wireless": org.freedesktop.NetworkManager.Device.Wireless
  "org.freedesktop.NetworkManager.Device.Wpan": org.freedesktop.NetworkManager.Device.Wpan
  "org.freedesktop.NetworkManager.DnsManager": org.freedesktop.NetworkManager.DnsManager
  "org.freedesktop.NetworkManager.IP4Config": org.freedesktop.NetworkManager.IP4Config
  "org.freedesktop.NetworkManager.IP6Config": org.freedesktop.NetworkManager.IP6Config
  "org.freedesktop.NetworkManager.PPP": org.freedesktop.NetworkManager.PPP
  "org.freedesktop.NetworkManager.SecretAgent": org.freedesktop.NetworkManager.SecretAgent
  "org.freedesktop.NetworkManager.Settings": org.freedesktop.NetworkManager.Settings
  "org.freedesktop.NetworkManager.Settings.Connection": org.freedesktop.NetworkManager.Settings.Connection
  "org.freedesktop.NetworkManager.VPN.Connection": org.freedesktop.NetworkManager.VPN.Connection
  "org.freedesktop.NetworkManager.VPN.Plugin": org.freedesktop.NetworkManager.VPN.Plugin
  "org.freedesktop.NetworkManager.WiMax.Nsp": org.freedesktop.NetworkManager.WiMax.Nsp
  "org.freedesktop.NetworkManager.WifiP2PPeer": org.freedesktop.NetworkManager.WifiP2PPeer
}
export namespace org {
  export namespace freedesktop {

    /**
    org.freedesktop.NetworkManager:
    @short_description: Connection Manager.
    **/
    export interface NetworkManager {

      /**
      CheckPermissions:

      Emitted when system authorization details change, indicating that clients
      may wish to recheck permissions with GetPermissions.
      **/
      on(ev: "CheckPermissions", cb: () => void): Promise<void>

      /**
      StateChanged:
      @state: (<link linkend="NMState">NMState</link>) The new state of NetworkManager.

      NetworkManager's state changed.
      **/
      on(ev: "StateChanged", cb: (state: number) => void): Promise<void>

      /**
      DeviceAdded:
      @device_path: The object path of the newly added device.

      A device was added to the system
      **/
      on(ev: "DeviceAdded", cb: (device_path: ObjectPath) => void): Promise<void>

      /**
      DeviceRemoved:
      @device_path: The object path of the device that was just removed.

      A device was removed from the system, and is no longer available.
      **/
      on(ev: "DeviceRemoved", cb: (device_path: ObjectPath) => void): Promise<void>

      /**
      Devices:

      The list of realized network devices. Realized devices are those which
      have backing resources (eg from the kernel or a management daemon like
      ModemManager, teamd, etc).
      **/
      get Devices(): Promise<ObjectPath[]>

      /**
      AllDevices:

      The list of both realized and un-realized network devices. Un-realized
      devices are software devices which do not yet have backing resources, but
      for which backing resources can be created if the device is activated.
      **/
      get AllDevices(): Promise<ObjectPath[]>

      /**
      Checkpoints:

      The list of active checkpoints.
      **/
      get Checkpoints(): Promise<ObjectPath[]>

      /**
      NetworkingEnabled:

      Indicates if overall networking is currently enabled or not. See the
      Enable() method.
      **/
      get NetworkingEnabled(): Promise<boolean>

      /**
      WirelessEnabled:

      Indicates if wireless is currently enabled or not.
      **/
      get WirelessEnabled(): Promise<boolean>

      /**
      WirelessHardwareEnabled:

      Indicates if the wireless hardware is currently enabled, i.e. the state of
      the RF kill switch.
      **/
      get WirelessHardwareEnabled(): Promise<boolean>

      /**
      WwanEnabled:

      Indicates if mobile broadband devices are currently enabled or not.
      **/
      get WwanEnabled(): Promise<boolean>

      /**
      WwanHardwareEnabled:

      Indicates if the mobile broadband hardware is currently enabled, i.e. the
      state of the RF kill switch.
      **/
      get WwanHardwareEnabled(): Promise<boolean>

      /**
      WimaxEnabled:

      DEPRECATED. Doesn't have any meaning and is around only for
      compatibility reasons.
      **/
      get WimaxEnabled(): Promise<boolean>

      /**
      WimaxHardwareEnabled:

      DEPRECATED. Doesn't have any meaning and is around only for
      compatibility reasons.
      **/
      get WimaxHardwareEnabled(): Promise<boolean>

      /**
      RadioFlags:
      @since: 1.38

      Flags related to radio devices. See <link
      linkend="NMRadioFlags">NMRadioFlags</link> for the list of flags
      supported.
      **/
      get RadioFlags(): Promise<number>

      /**
      ActiveConnections:

      List of active connection object paths.
      **/
      get ActiveConnections(): Promise<ObjectPath[]>

      /**
      PrimaryConnection:

      The object path of the "primary" active connection being used to access
      the network. In particular, if there is no VPN active, or the VPN does not
      have the default route, then this indicates the connection that has the
      default route. If there is a VPN active with the default route, then this
      indicates the connection that contains the route to the VPN endpoint.
      **/
      get PrimaryConnection(): Promise<ObjectPath>

      /**
      PrimaryConnectionType:

      The connection type of the "primary" active connection being used to
      access the network. This is the same as the Type property on the object
      indicated by PrimaryConnection.
      **/
      get PrimaryConnectionType(): Promise<string>

      /**
      Metered:

      Indicates whether the connectivity is metered. This is equivalent to the
      metered property of the device associated with the primary connection.

      Returns: <link linkend="NMMetered">NMMetered</link>
      **/
      get Metered(): Promise<number>

      /**
      ActivatingConnection:

      The object path of an active connection that is currently being activated
      and which is expected to become the new PrimaryConnection when it finishes
      activating.
      **/
      get ActivatingConnection(): Promise<ObjectPath>

      /**
      Startup:

      Indicates whether NM is still starting up; this becomes FALSE when NM has
      finished attempting to activate every connection that it might be able to
      activate at startup.
      **/
      get Startup(): Promise<boolean>

      /**
      Version:

      NetworkManager version.
      **/
      get Version(): Promise<string>

      /**
      VersionInfo:

      NetworkManager version and capabilities.

      The first element in the array is the NM_VERSION of the daemon. It is a binary representation
      of the "Version" and can be compared numerically. The version is encoded as
      "(major &lt;&lt; 16 | minor &lt;&lt; 8 | micro)".

      The following elements are a bitfield of static capabilities of the daemon. See
      #NMVersionInfoCapability for the available capability numbers.

      Since: 1.42
      **/
      get VersionInfo(): Promise<number[]>

      /**
      Capabilities:

      The current set of capabilities. See <link
      linkend="NMCapability">NMCapability</link> for currently
      defined capability numbers. The array is guaranteed to
      be sorted in ascending order without duplicates.
      **/
      get Capabilities(): Promise<number[]>

      /**
      State:

      The overall state of the NetworkManager daemon.

      This takes state of all active connections and the connectivity state into account
      to produce a single indicator of the network accessibility status.

      The graphical shells may use this property to provide network connection status
      indication and applications may use this to check if Internet connection is
      accessible. Shell that is able to cope with captive portals should use the
      "Connectivity" property to decide whether to present a captive portal authentication
      dialog.

      Returns: <link linkend="NMState">NMState</link>
      **/
      get State(): Promise<number>

      /**
      Connectivity:

      The result of the last connectivity check. The connectivity check is triggered
      automatically when a default connection becomes available, periodically and by
      calling a CheckConnectivity() method.

      This property is in general useful for the graphical shell to determine whether
      the Internet access is being hijacked by an authentication gateway (a "captive
      portal"). In such case it would typically present a web browser window to give
      the user a chance to authenticate and call CheckConnectivity() when the user
      submits a form or dismisses the window.

      To determine the whether the user is able to access the Internet without dealing
      with captive portals (e.g. to provide a network connection indicator or disable
      controls that require Internet access), the "State" property is more suitable.

      Returns: <link linkend="NMConnectivityState">NMConnectivityState</link>
      **/
      get Connectivity(): Promise<number>

      /**
      ConnectivityCheckAvailable:

      Indicates whether connectivity checking service has been
      configured.  This may return true even if the service is not
      currently enabled.

      This is primarily intended for use in a privacy control panel,
      as a way to determine whether to show an option to
      enable/disable the feature.
      **/
      get ConnectivityCheckAvailable(): Promise<boolean>

      /**
      ConnectivityCheckEnabled:

      Indicates whether connectivity checking is enabled.  This
      property can also be written to disable connectivity
      checking (as a privacy control panel might want to do).
      **/
      get ConnectivityCheckEnabled(): Promise<boolean>

      /**
      ConnectivityCheckUri:

      The URI that NetworkManager will hit to check if there is internet connectivity.
      **/
      get ConnectivityCheckUri(): Promise<string>

      /**
      GlobalDnsConfiguration:

      Dictionary of global DNS settings where the key is one of "searches",
      "options" and "domains". The values for the "searches" and "options" keys
      are string arrays describing the list of search domains and resolver
      options, respectively. The value of the "domains" key is a second-level
      dictionary, where each key is a domain name, and each key's value is a
      third-level dictionary with the keys "servers" and "options". "servers" is
      a string array of DNS servers, "options" is a string array of
      domain-specific options.
      **/
      get GlobalDnsConfiguration(): Promise<{[key:string]:Variant}>

      /**
      Reload:
      @flags: Optional flags to specify which parts shall be reloaded.

      Reload NetworkManager's configuration and perform certain updates, like flushing a cache or
      rewriting external state to disk. This is similar to sending SIGHUP to NetworkManager but it
      allows for more fine-grained control over what to reload (see @flags). It also allows
      non-root access via PolicyKit and contrary to signals it is synchronous.

      No flags (0x00) means to reload everything that is supported which is identical to
      sending a SIGHUP.
      (0x01) means to reload the NetworkManager.conf configuration from disk. Note that this
      does not include connections, which can be reloaded via Setting's ReloadConnections.
      (0x02) means to update DNS configuration, which usually involves writing /etc/resolv.conf
      anew.
      (0x04) means to restart the DNS plugin. This is for example useful when using
      dnsmasq plugin, which uses additional configuration in /etc/NetworkManager/dnsmasq.d.
      If you edit those files, you can restart the DNS plugin. This action shortly interrupts
      name resolution.
      Note that flags may affect each other. For example, restarting the DNS plugin (0x04)
      implicitly updates DNS too (0x02). Or when reloading the configuration (0x01), changes
      to DNS setting also cause a DNS update (0x02). However, (0x01) does not involve restarting
      the DNS plugin (0x04) or update resolv.conf (0x02), unless the DNS related configuration
      changes in NetworkManager.conf.
      **/
      Reload(flags: number): Promise<[]>

      /**
      GetDevices:
      @devices: List of object paths of network devices known to the system. This list does not include device placeholders (see GetAllDevices()).

      Get the list of realized network devices.
      **/
      GetDevices(): Promise<[/*devices*/ObjectPath[]]>

      /**
      GetAllDevices:
      @devices: List of object paths of network devices and device placeholders (eg, devices that do not yet exist but which can be automatically created by NetworkManager if one of their AvailableConnections was activated).

      Get the list of all network devices.
      **/
      GetAllDevices(): Promise<[/*devices*/ObjectPath[]]>

      /**
      GetDeviceByIpIface:
      @iface: Interface name of the device to find.
      @device: Object path of the network device.

      Return the object path of the network device referenced by its IP
      interface name. Note that some devices (usually modems) only have an IP
      interface name when they are connected.
      **/
      GetDeviceByIpIface(iface: string): Promise<[/*device*/ObjectPath]>

      /**
      ActivateConnection:
      @connection: The connection to activate. If "/" is given, a valid device path must be given, and NetworkManager picks the best connection to activate for the given device. VPN connections must always pass a valid connection path.
      @device: The object path of device to be activated for physical connections. This parameter is ignored for VPN connections, because the specific_object (if provided) specifies the device to use.
      @specific_object: The path of a connection-type-specific object this activation should use. This parameter is currently ignored for wired and mobile broadband connections, and the value of "/" should be used (ie, no specific object). For Wi-Fi connections, pass the object path of a specific AP from the card's scan list, or "/" to pick an AP automatically. For VPN connections, pass the object path of an ActiveConnection object that should serve as the "base" connection (to which the VPN connections lifetime will be tied), or pass "/" and NM will automatically use the current default device.
      @active_connection: The path of the active connection object representing this active connection.

      Activate a connection using the supplied device.
      **/
      ActivateConnection(connection: ObjectPath, device: ObjectPath, specific_object: ObjectPath): Promise<[/*active_connection*/ObjectPath]>

      /**
      AddAndActivateConnection:
      @connection: Connection settings and properties; if incomplete missing settings will be automatically completed using the given device and specific object.
      @device: The object path of device to be activated using the given connection.
      @specific_object: The path of a connection-type-specific object this activation should use. This parameter is currently ignored for wired and mobile broadband connections, and the value of "/" should be used (ie, no specific object). For Wi-Fi connections, pass the object path of a specific AP from the card's scan list, which will be used to complete the details of the newly added connection.
      @path: Object path of the new connection that was just added.
      @active_connection: The path of the active connection object representing this active connection.

      Adds a new connection using the given details (if any) as a template
      (automatically filling in missing settings with the capabilities of the
      given device and specific object), then activate the new connection.
      Cannot be used for VPN connections at this time.

      See also AddAndActivateConnection2.
      **/
      AddAndActivateConnection(connection: {[key:string]:{[key:string]:SigVal}}, device: ObjectPath, specific_object: ObjectPath): Promise<[/*path*/ObjectPath, /*active_connection*/ObjectPath]>

      /**
      AddAndActivateConnection2:
      @connection: Connection settings and properties; if incomplete missing settings will be automatically completed using the given device and specific object.
      @device: The object path of device to be activated using the given connection.
      @specific_object: The path of a connection-type-specific object this activation should use. This parameter is currently ignored for wired and mobile broadband connections, and the value of "/" should be used (ie, no specific object). For Wi-Fi connections, pass the object path of a specific AP from the card's scan list, which will be used to complete the details of the newly added connection.
      @options: Further options for the method call.
      @path: Object path of the new connection that was just added.
      @active_connection: The path of the active connection object representing this active connection.
      @result: A dictionary of additional output arguments for future extension. Currently, not additional output arguments are supported.

      Adds a new connection using the given details (if any) as a template
      (automatically filling in missing settings with the capabilities of the
      given device and specific object), then activate the new connection.
      Cannot be used for VPN connections at this time.

      This method extends AddAndActivateConnection to allow passing further
      parameters. At this time the following options are supported:

      * persist: A string value of either "disk" (default), "memory" or "volatile". If "memory" is passed, the connection will not be saved to disk. If "volatile" is passed, the connection will not be saved to disk and will be destroyed when disconnected.
      * bind-activation: Bind the activation lifetime. Set to "dbus-client" to automatically disconnect when the requesting process disappears from the bus. The default of "none" means the connection is kept activated normally.
      **/
      AddAndActivateConnection2(connection: {[key:string]:{[key:string]:SigVal}}, device: ObjectPath, specific_object: ObjectPath, options: {[key:string]:SigVal}): Promise<[/*path*/ObjectPath, /*active_connection*/ObjectPath, /*result*/{[key:string]:Variant}]>

      /**
      DeactivateConnection:
      @active_connection: The currently active connection to deactivate.

      Deactivate an active connection.
      **/
      DeactivateConnection(active_connection: ObjectPath): Promise<[]>

      /**
      Sleep:
      @sleep: Indicates whether the NetworkManager daemon should sleep or wake.

      Control the NetworkManager daemon's sleep state. When asleep, all
      interfaces that it manages are deactivated. When awake, devices are
      available to be activated. This command should not be called directly by
      users or clients; it is intended for system suspend/resume tracking.
      **/
      Sleep(sleep: boolean): Promise<[]>

      /**
      Enable:
      @enable: If FALSE, indicates that all networking should be disabled. If TRUE, indicates that NetworkManager should begin managing network devices.

      Control whether overall networking is enabled or disabled. When disabled,
      all interfaces that NM manages are deactivated. When enabled, all managed
      interfaces are re-enabled and available to be activated. This command
      should be used by clients that provide to users the ability to
      enable/disable all networking.
      **/
      Enable(enable: boolean): Promise<[]>

      /**
      GetPermissions:
      @permissions: Dictionary of available permissions and results. Each permission is represented by a name (ie "org.freedesktop.NetworkManager.Foobar") and each result is one of the following values: "yes" (the permission is available), "auth" (the permission is available after a successful authentication), or "no" (the permission is denied). Clients may use these values in the UI to indicate the ability to perform certain operations.

      Returns the permissions a caller has for various authenticated operations
      that NetworkManager provides, like Enable/Disable networking, changing
      Wi-Fi, WWAN, and WiMAX state, etc.
      **/
      GetPermissions(): Promise<[/*permissions*/{[key:string]:string}]>

      /**
      SetLogging:
      @level: One of [ERR, WARN, INFO, DEBUG, TRACE, OFF, KEEP]. This level is applied to the domains as specified in the domains argument. Except for the special level "KEEP", all unmentioned domains are disabled entirely. "KEEP" is special and allows not to change the current setting except for the specified domains. E.g. level=KEEP and domains=PLATFORM:DEBUG will only touch the platform domain.
      @domains: A combination of logging domains separated by commas (','), or "NONE" to disable logging. Each domain enables logging for operations related to that domain. Available domains are: [PLATFORM, RFKILL, ETHER, WIFI, BT, MB, DHCP4, DHCP6, PPP, WIFI_SCAN, IP4, IP6, AUTOIP4, DNS, VPN, SHARING, SUPPLICANT, AGENTS, SETTINGS, SUSPEND, CORE, DEVICE, OLPC, WIMAX, INFINIBAND, FIREWALL, ADSL, BOND, VLAN, BRIDGE, DBUS_PROPS, TEAM, CONCHECK, DCB, DISPATCH, AUDIT]. In addition to these domains, the following special domains can be used: [NONE, ALL, DEFAULT, DHCP, IP]. You can also specify that some domains should log at a different level from the default by appending a colon (':') and a log level (eg, 'WIFI:DEBUG'). If an empty string is given, the log level is changed but the current set of log domains remains unchanged.

      Set logging verbosity and which operations are logged.
      **/
      SetLogging(level: string, domains: string): Promise<[]>

      /**
      GetLogging:
      @level: One of [ERR, WARN, INFO, DEBUG, TRACE].
      @domains: For available domains see SetLogging() call.

      Get current logging verbosity level and operations domains.
      **/
      GetLogging(): Promise<[/*level*/string, /*domains*/string]>

      /**
      CheckConnectivity:
      @connectivity: (<link linkend="NMConnectivityState">NMConnectivityState</link>) The current connectivity state.

      Re-check the network connectivity state.
      **/
      CheckConnectivity(): Promise<[/*connectivity*/number]>

      /**
      state:
      @state: <link linkend="NMState">NMState</link>

      The overall networking state as determined by the NetworkManager daemon,
      based on the state of network devices under its management.
      **/
      state(): Promise<[/*state*/number]>

      /**
      CheckpointCreate:
      @devices: A list of device paths for which a checkpoint should be created. An empty list means all devices.
      @rollback_timeout: The time in seconds until NetworkManager will automatically rollback to the checkpoint. Set to zero for infinite.
      @flags: (<link linkend="NMCheckpointCreateFlags">NMCheckpointCreateFlags</link>) Flags for the creation.
      @checkpoint: On success, the path of the new checkpoint.

      Create a checkpoint of the current networking configuration
      for given interfaces. If @rollback_timeout is not zero, a
      rollback is automatically performed after the given timeout.
      **/
      CheckpointCreate(devices: ObjectPath[], rollback_timeout: number, flags: number): Promise<[/*checkpoint*/ObjectPath]>

      /**
      CheckpointDestroy:
      @checkpoint: The checkpoint to be destroyed. Set to empty to cancel all pending checkpoints.

      Destroy a previously created checkpoint.
      **/
      CheckpointDestroy(checkpoint: ObjectPath): Promise<[]>

      /**
      CheckpointRollback:
      @checkpoint: The checkpoint to be rolled back.
      @result: On return, a dictionary of devices and results. Devices are represented by their original D-Bus path; each result is a <link linkend="NMRollbackResult">RollbackResult</link>.

      Rollback a checkpoint before the timeout is reached.
      **/
      CheckpointRollback(checkpoint: ObjectPath): Promise<[/*result*/{[key:string]:number}]>

      /**
      CheckpointAdjustRollbackTimeout:
      @checkpoint: The checkpoint to be rolled back.
      @add_timeout: Number of seconds from <emphasis>now</emphasis> in which the timeout will expire. Set to 0 to disable the timeout.
      @since: 1.12

      Reset the timeout for rollback for the checkpoint.

      Note that the added seconds start counting from now,
      not "Created" timestamp or the previous expiration
      time. Note that the "Created" property of the checkpoint
      will stay unchanged by this call. However, the "RollbackTimeout"
      will be recalculated to give the approximate new expiration time.
      The new "RollbackTimeout" property will be approximate up to
      one second precision, which is the accuracy of the property.
      **/
      CheckpointAdjustRollbackTimeout(checkpoint: ObjectPath, add_timeout: number): Promise<[]>
    }
    export namespace NetworkManager {

      /**
      org.freedesktop.NetworkManager.AccessPoint:
      @short_description: Wi-Fi Access Point.
      **/
      export interface AccessPoint {

        /**
        Flags:

        Flags describing the capabilities of the access point.

        Returns: <link linkend="NM80211ApFlags">NM80211ApFlags</link>
        **/
        get Flags(): Promise<number>

        /**
        WpaFlags:

        Flags describing the access point's capabilities according to WPA (Wifi
        Protected Access).

        Returns: <link linkend="NM80211ApSecurityFlags">NM80211ApSecurityFlags</link>
        **/
        get WpaFlags(): Promise<number>

        /**
        RsnFlags:

        Flags describing the access point's capabilities according to the RSN
        (Robust Secure Network) protocol.

        Returns: <link linkend="NM80211ApSecurityFlags">NM80211ApSecurityFlags</link>
        **/
        get RsnFlags(): Promise<number>

        /**
        Ssid:

        The Service Set Identifier identifying the access point.
        **/
        get Ssid(): Promise<Buffer>

        /**
        Frequency:

        The radio channel frequency in use by the access point, in MHz.
        **/
        get Frequency(): Promise<number>

        /**
        HwAddress:

        The hardware address (BSSID) of the access point.
        **/
        get HwAddress(): Promise<string>

        /**
        Mode:

        Describes the operating mode of the access point.

        Returns: <link linkend="NM80211Mode">NM80211Mode</link>
        **/
        get Mode(): Promise<number>

        /**
        MaxBitrate:

        The maximum bitrate this access point is capable of, in kilobits/second
        (Kb/s).
        **/
        get MaxBitrate(): Promise<number>

        /**
        Strength:

        The current signal quality of the access point, in percent.
        **/
        get Strength(): Promise<number>

        /**
        LastSeen:

        The timestamp (in CLOCK_BOOTTIME seconds) for the last time the access
        point was found in scan results. A value of -1 means the access point has
        never been found in scan results.
        **/
        get LastSeen(): Promise<number>
      }

      /**
      org.freedesktop.NetworkManager.AgentManager:
      @short_description: Secret Agent Manager.
      **/
      export interface AgentManager {

        /**
        Register:
        @identifier: Identifies this agent; only one agent in each user session may use the same identifier. Identifier formatting follows the same rules as D-Bus bus names with the exception that the ':' character is not allowed. The valid set of characters is "[A-Z][a-z][0-9]_-." and the identifier is limited in length to 255 characters with a minimum of 3 characters. An example valid identifier is 'org.gnome.nm-applet' (without quotes).

        Called by secret Agents to register their ability to provide and save
        network secrets.
        **/
        Register(identifier: string): Promise<[]>

        /**
        RegisterWithCapabilities:
        @identifier: See the Register() method's identifier argument.
        @capabilities: (<link linkend="NMSecretAgentCapabilities">NMSecretAgentCapabilities</link>) Indicates various agent capabilities to NetworkManager.

        Like Register() but indicates agent capabilities to NetworkManager.
        **/
        RegisterWithCapabilities(identifier: string, capabilities: number): Promise<[]>

        /**
        Unregister:

        Called by secret Agents to notify NetworkManager that they will no longer
        handle requests for network secrets. Agents are automatically unregistered
        when they disconnect from D-Bus.
        **/
        Unregister(): Promise<[]>
      }

      /**
      org.freedesktop.NetworkManager.Checkpoint:
      @short_description: Configuration and State Snapshot.

      A snapshot of NetworkManager state for a given device list
      **/
      export interface Checkpoint {

        /**
        Devices:

        Array of object paths for devices which are part of this
        checkpoint.
        **/
        get Devices(): Promise<ObjectPath[]>

        /**
        Created:

        The timestamp (in CLOCK_BOOTTIME milliseconds) of checkpoint creation.
        **/
        get Created(): Promise<number>

        /**
        RollbackTimeout:

        Timeout in seconds for automatic rollback, or zero.
        **/
        get RollbackTimeout(): Promise<number>
      }

      /**
      org.freedesktop.NetworkManager.DHCP4Config:
      @short_description: IPv4 DHCP Client State.

      Options and configuration returned by the IPv4 DHCP server.
      **/
      export interface DHCP4Config {

        /**
        Options:

        Configuration options returned by a DHCP server, if any.
        **/
        get Options(): Promise<{[key:string]:Variant}>
      }

      /**
      org.freedesktop.NetworkManager.DHCP6Config:
      @short_description: IPv6 DHCP Client State.

      Options and configuration returned by the IPv6 DHCP server.
      **/
      export interface DHCP6Config {

        /**
        Options:

        Configuration options returned by a DHCP server, if any.
        **/
        get Options(): Promise<{[key:string]:Variant}>
      }

      /**
      org.freedesktop.NetworkManager.Device:
      @short_description: Device.
      **/
      export interface Device {

        /**
        StateChanged:
        @new_state: (<link linkend="NMDeviceState">NMDeviceState</link>) The new state of the device.
        @old_state: (<link linkend="NMDeviceState">NMDeviceState</link>) The previous state of the device.
        @reason: (<link linkend="NMDeviceStateReason">NMDeviceStateReason</link>) A reason for the state transition.
        **/
        on(ev: "StateChanged", cb: (new_state: number, old_state: number, reason: number) => void): Promise<void>

        /**
        Udi:

        Operating-system specific transient device hardware identifier. This is an
        opaque string representing the underlying hardware for the device, and
        shouldn't be used to keep track of individual devices. For some device
        types (Bluetooth, Modems) it is an identifier used by the hardware service
        (ie bluez or ModemManager) to refer to that device, and client programs
        use it get additional information from those services which NM does not
        provide. The Udi is not guaranteed to be consistent across reboots or
        hotplugs of the hardware. If you're looking for a way to uniquely track
        each device in your application, use the object path. If you're looking
        for a way to track a specific piece of hardware across reboot or hotplug,
        use a MAC address or USB serial number.

        Note that non-UTF-8 characters are backslash escaped. Use g_strcompress()
        to obtain the true (non-UTF-8) string.
        **/
        get Udi(): Promise<string>

        /**
        Path:

        The path of the device as exposed by the udev property ID_PATH.

        Note that non-UTF-8 characters are backslash escaped. Use g_strcompress()
        to obtain the true (non-UTF-8) string.
        **/
        get Path(): Promise<string>

        /**
        Interface:

        The name of the device's control (and often data) interface.
        Note that non UTF-8 characters are backslash escaped, so the
        resulting name may be longer then 15 characters. Use g_strcompress()
        to revert the escaping.
        **/
        get Interface(): Promise<string>

        /**
        IpInterface:

        The name of the device's data interface when available. This property may
        not refer to the actual data interface until the device has successfully
        established a data connection, indicated by the device's State becoming
        ACTIVATED.
        Note that non UTF-8 characters are backslash escaped, so the
        resulting name may be longer then 15 characters. Use g_strcompress()
        to revert the escaping.
        **/
        get IpInterface(): Promise<string>

        /**
        Driver:

        The driver handling the device.
        Non-UTF-8 sequences are backslash escaped. Use g_strcompress()
        to revert.
        **/
        get Driver(): Promise<string>

        /**
        DriverVersion:

        The version of the driver handling the device.
        Non-UTF-8 sequences are backslash escaped. Use g_strcompress()
        to revert.
        **/
        get DriverVersion(): Promise<string>

        /**
        FirmwareVersion:

        The firmware version for the device.
        Non-UTF-8 sequences are backslash escaped. Use g_strcompress()
        to revert.
        **/
        get FirmwareVersion(): Promise<string>

        /**
        Capabilities:

        Flags describing the capabilities of the device.

        Returns: <link linkend="NMDeviceCapabilities">NMDeviceCapabilities</link>
        **/
        get Capabilities(): Promise<number>

        /**
        Ip4Address:

        DEPRECATED; use the 'Addresses' property of the 'Ip4Config' object
        instead. This property always returns 0.0.0.0 (numeric 0) as address.
        **/
        get Ip4Address(): Promise<number>

        /**
        State:

        The current state of the device.

        Returns: <link linkend="NMDeviceState">NMDeviceState</link>
        **/
        get State(): Promise<number>

        /**
        StateReason:

        The current state and reason for changing to that state.

        Returns: A tuple of  <link linkend="NMDeviceState">NMDeviceState</link> and  <link linkend="NMDeviceStateReason">NMDeviceStateReason</link>.
        **/
        get StateReason(): Promise<[number,number]>

        /**
        ActiveConnection:

        Object path of an ActiveConnection object that "owns" this device during
        activation. The ActiveConnection object tracks the life-cycle of a
        connection to a specific network and implements the
        org.freedesktop.NetworkManager.Connection.Active D-Bus interface.
        **/
        get ActiveConnection(): Promise<ObjectPath>

        /**
        Ip4Config:

        Object path of the Ip4Config object describing the configuration of the
        device. Only valid when the device is in the NM_DEVICE_STATE_ACTIVATED
        state.
        **/
        get Ip4Config(): Promise<ObjectPath>

        /**
        Dhcp4Config:

        Object path of the Dhcp4Config object describing the DHCP options returned
        by the DHCP server. Only valid when the device is in the
        NM_DEVICE_STATE_ACTIVATED state.
        **/
        get Dhcp4Config(): Promise<ObjectPath>

        /**
        Ip6Config:

        Object path of the Ip6Config object describing the configuration of the
        device. Only valid when the device is in the NM_DEVICE_STATE_ACTIVATED
        state.
        **/
        get Ip6Config(): Promise<ObjectPath>

        /**
        Dhcp6Config:

        Object path of the Dhcp6Config object describing the DHCP options returned
        by the DHCP server. Only valid when the device is in the
        NM_DEVICE_STATE_ACTIVATED state.
        **/
        get Dhcp6Config(): Promise<ObjectPath>

        /**
        Managed:

        Whether or not this device is managed by NetworkManager. Setting this
        property has a similar effect to configuring the device as unmanaged via
        the keyfile.unmanaged-devices setting in NetworkManager.conf. Changes to
        this value are not persistent and lost after NetworkManager restart.
        **/
        get Managed(): Promise<boolean>

        /**
        Autoconnect:

        If TRUE, indicates the device is allowed to autoconnect. If FALSE, manual
        intervention is required before the device will automatically connect to a
        known network, such as activating a connection using the device, or
        setting this property to TRUE. This property cannot be set to TRUE for
        default-unmanaged devices, since they never autoconnect.
        **/
        get Autoconnect(): Promise<boolean>

        /**
        FirmwareMissing:

        If TRUE, indicates the device is likely missing firmware necessary for its
        operation.
        **/
        get FirmwareMissing(): Promise<boolean>

        /**
        NmPluginMissing:

        If TRUE, indicates the NetworkManager plugin for the device is likely
        missing or misconfigured.
        **/
        get NmPluginMissing(): Promise<boolean>

        /**
        DeviceType:

        The general type of the network device; ie Ethernet, Wi-Fi, etc.

        Returns: <link linkend="NMDeviceType">NMDeviceType</link>
        **/
        get DeviceType(): Promise<number>

        /**
        AvailableConnections:

        An array of object paths of every configured connection that is currently
        'available' through this device.
        **/
        get AvailableConnections(): Promise<ObjectPath[]>

        /**
        PhysicalPortId:

        If non-empty, an (opaque) indicator of the physical network port
        associated with the device. This can be used to recognize when two
        seemingly-separate hardware devices are actually just different virtual
        interfaces to the same physical port.
        **/
        get PhysicalPortId(): Promise<string>

        /**
        Mtu:

        The device MTU (maximum transmission unit).
        **/
        get Mtu(): Promise<number>

        /**
        Metered:

        Whether the amount of traffic flowing through the device is subject to
        limitations, for example set by service providers.

        Returns: <link linkend="NMMetered">NMMetered</link>
        **/
        get Metered(): Promise<number>

        /**
        LldpNeighbors:

        Array of LLDP neighbors; each element is a dictionary mapping LLDP TLV
        names to variant boxed values.
        **/
        get LldpNeighbors(): Promise<{[key:string]:Variant}[]>

        /**
        Real:

        True if the device exists, or False for placeholder devices that do not
        yet exist but could be automatically created by NetworkManager if one of
        their AvailableConnections was activated.
        **/
        get Real(): Promise<boolean>

        /**
        Ip4Connectivity:
        @since: 1.16

        The result of the last IPv4 connectivity check.

        Returns: <link linkend="NMConnectivityState">NMConnectivityState</link>
        **/
        get Ip4Connectivity(): Promise<number>

        /**
        Ip6Connectivity:
        @since: 1.16

        The result of the last IPv6 connectivity check.

        Returns: <link linkend="NMConnectivityState">NMConnectivityState</link>
        **/
        get Ip6Connectivity(): Promise<number>

        /**
        InterfaceFlags:
        @since: 1.22

        The flags of the network interface. See
        <link linkend="NMDeviceInterfaceFlags">NMDeviceInterfaceFlags</link> for
        the currently defined flags.
        **/
        get InterfaceFlags(): Promise<number>

        /**
        HwAddress:
        @since: 1.24

        The hardware address of the device.

        This replaces the other 'HwAddress' properties on the device-specific D-Bus interfaces.
        **/
        get HwAddress(): Promise<string>

        /**
        Ports:
        @since: 1.34

        The port devices of the controller device.

        Array of object paths representing devices which are currently set as
        port of this device. This replaces the 'Slaves' properties on the
        device-specific D-Bus interfaces.
        **/
        get Ports(): Promise<ObjectPath[]>

        /**
        Reapply:
        @connection: The optional connection settings that will be reapplied on the device. If empty, the currently active settings-connection will be used. The connection cannot arbitrarily differ from the current applied-connection otherwise the call will fail. Only certain changes are supported, like adding or removing IP addresses.
        @version_id: If non-zero, the current version id of the applied-connection must match. The current version id can be retrieved via GetAppliedConnection. This optional argument allows to catch concurrent modifications between the GetAppliedConnection call and Reapply.
        @flags: Flags which would modify the behavior of the Reapply call. Invalid flags are rejected.

        Attempts to update the configuration of a device without deactivating it.
        NetworkManager has the concept of connections, which are profiles that
        contain the configuration for a networking device. Those connections are
        exposed via D-Bus as individual objects that can be created, modified and
        deleted. When activating such a settings-connection on a device, the
        settings-connection is cloned to become an applied-connection and used to
        configure the device (see GetAppliedConnection). Subsequent modification
        of the settings-connection don't propagate automatically to the device's
        applied-connection (with exception of the firewall-zone and the metered
        property). For the changes to take effect, you can either re-activate the
        settings-connection, or call Reapply. The Reapply call allows you to
        directly update the applied-connection and reconfigure the device. Reapply
        can also be useful if the currently applied-connection is equal to the
        connection that is about to be reapplied. This allows to reconfigure the
        device and revert external changes like removing or adding an IP address
        (which NetworkManager doesn't revert automatically because it is assumed
        that the user made these changes intentionally outside of NetworkManager).
        Reapply can make the applied-connection different from the
        settings-connection, just like updating the settings-connection can make
        them different.

        Since 1.42, "preserve-external-ip" flag (0x1) is supported to not remove
        externally added IP addresses and routes on the device during reapply.
        **/
        Reapply(connection: {[key:string]:{[key:string]:SigVal}}, version_id: number, flags: number): Promise<[]>

        /**
        GetAppliedConnection:
        @flags: Flags which would modify the behavior of the GetAppliedConnection call. There are no flags defined currently and the users should use the value of 0.
        @connection: The effective connection settings that the connection has currently applied.
        @version_id: The version-id of the currently applied connection. This can be specified during Reapply to avoid races where you first fetch the applied connection, modify it and try to reapply it. If the applied connection is modified in the meantime, the version_id gets incremented and Reapply will fail.

        Get the currently applied connection on the device. This is a snapshot of
        the last activated connection on the device, that is the configuration
        that is currently applied on the device. Usually this is the same as
        GetSettings of the referenced settings connection. However, it can differ
        if the settings connection was subsequently modified or the applied
        connection was modified by Reapply. The applied connection is set when
        activating a device or when calling Reapply.
        **/
        GetAppliedConnection(flags: number): Promise<[/*connection*/{[key:string]:{[key:string]:Variant}}, /*version_id*/number]>

        /**
        Disconnect:

        Disconnects a device and prevents the device from automatically activating
        further connections without user intervention.
        **/
        Disconnect(): Promise<[]>

        /**
        Delete:

        Deletes a software device from NetworkManager and removes the interface
        from the system. The method returns an error when called for a hardware
        device.
        **/
        Delete(): Promise<[]>
      }

      /**
      org.freedesktop.NetworkManager.DnsManager:
      @short_description: DNS Configuration State.

      The interface contains DNS-related information.
      **/
      export interface DnsManager {

        /**
        Mode:

        The current DNS processing mode.
        **/
        get Mode(): Promise<string>

        /**
        RcManager:

        The current resolv.conf management mode.
        **/
        get RcManager(): Promise<string>

        /**
        Configuration:

        The current DNS configuration represented as an array of
        dictionaries.  Each dictionary has the "nameservers",
        "priority" keys and, optionally, "interface" and "vpn".
        "nameservers" is the list of DNS servers, "priority" their
        relative priority, "interface" the interface on which these
        servers are contacted, "vpn" a boolean telling whether the
        configuration was obtained from a VPN connection.
        **/
        get Configuration(): Promise<{[key:string]:Variant}[]>
      }

      /**
      org.freedesktop.NetworkManager.IP4Config:
      @short_description: IPv4 Configuration Set.
      **/
      export interface IP4Config {

        /**
        Addresses:

        Array of arrays of IPv4 address/prefix/gateway. All 3 elements of each
        array are in network byte order. Essentially: [(addr, prefix, gateway),
        (addr, prefix, gateway), ...] Deprecated: use AddressData and Gateway
        **/
        get Addresses(): Promise<number[][]>

        /**
        AddressData:

        Array of IP address data objects. All addresses will include "address" (an
        IP address string), and "prefix" (a uint). Some addresses may include
        additional attributes.
        **/
        get AddressData(): Promise<{[key:string]:Variant}[]>

        /**
        Gateway:

        The gateway in use.
        **/
        get Gateway(): Promise<string>

        /**
        Routes:

        Arrays of IPv4 route/prefix/next-hop/metric. All 4 elements of each tuple
        are in network byte order. 'route' and 'next hop' are IPv4 addresses,
        while prefix and metric are simple unsigned integers. Essentially:
        [(route, prefix, next-hop, metric), (route, prefix, next-hop, metric),
        ...] Deprecated: use RouteData
        **/
        get Routes(): Promise<number[][]>

        /**
        RouteData:

        Array of IP route data objects. All routes will include "dest" (an IP
        address string) and "prefix" (a uint). Some routes may include "next-hop"
        (an IP address string), "metric" (a uint), and additional attributes.
        **/
        get RouteData(): Promise<{[key:string]:Variant}[]>

        /**
        Nameservers:

        The nameservers in use. Deprecated: use NameserverData
        **/
        get Nameservers(): Promise<number[]>

        /**
        NameserverData:
        @since: 1.14

        The nameservers in use. Currently, only the value "address"
        is recognized (with an IP address string).
        **/
        get NameserverData(): Promise<{[key:string]:Variant}[]>

        /**
        Domains:

        A list of domains this address belongs to.
        **/
        get Domains(): Promise<string[]>

        /**
        Searches:

        A list of dns searches.
        **/
        get Searches(): Promise<string[]>

        /**
        DnsOptions:

        A list of DNS options that modify the behavior of the DNS resolver. See
        resolv.conf(5) manual page for the list of supported options.
        **/
        get DnsOptions(): Promise<string[]>

        /**
        DnsPriority:

        The relative priority of DNS servers.
        **/
        get DnsPriority(): Promise<number>

        /**
        WinsServers:

        The Windows Internet Name Service servers associated with the connection.
        Each address is in network byte order. Deprecated: use WinsServerData
        **/
        get WinsServers(): Promise<number[]>

        /**
        WinsServerData:
        @since: 1.14

        The Windows Internet Name Service servers associated with the connection.
        **/
        get WinsServerData(): Promise<string[]>
      }

      /**
      org.freedesktop.NetworkManager.IP6Config:
      @short_description: IPv6 Configuration Set.
      **/
      export interface IP6Config {

        /**
        Addresses:

        Array of tuples of IPv6 address/prefix/gateway. Deprecated: use
        AddressData and Gateway.
        **/
        get Addresses(): Promise<[Buffer,number,Buffer][]>

        /**
        AddressData:

        Array of IP address data objects. All addresses will include "address" (an
        IP address string), and "prefix" (a uint). Some addresses may include
        additional attributes.
        **/
        get AddressData(): Promise<{[key:string]:Variant}[]>

        /**
        Gateway:

        The gateway in use.
        **/
        get Gateway(): Promise<string>

        /**
        Routes:

        Tuples of IPv6 route/prefix/next-hop/metric. Deprecated: use RouteData
        **/
        get Routes(): Promise<[Buffer,number,Buffer,number][]>

        /**
        RouteData:

        Array of IP route data objects. All routes will include "dest" (an IP
        address string) and "prefix" (a uint). Some routes may include "next-hop"
        (an IP address string), "metric" (a uint), and additional attributes.
        **/
        get RouteData(): Promise<{[key:string]:Variant}[]>

        /**
        Nameservers:

        The nameservers in use.
        **/
        get Nameservers(): Promise<Buffer[]>

        /**
        Domains:

        A list of domains this address belongs to.
        **/
        get Domains(): Promise<string[]>

        /**
        Searches:

        A list of dns searches.
        **/
        get Searches(): Promise<string[]>

        /**
        DnsOptions:

        A list of DNS options that modify the behavior of the DNS resolver. See
        resolv.conf(5) manual page for the list of supported options.
        **/
        get DnsOptions(): Promise<string[]>

        /**
        DnsPriority:

        The relative priority of DNS servers.
        **/
        get DnsPriority(): Promise<number>
      }

      /**
      org.freedesktop.NetworkManager.PPP:
      @short_description: Helper interface for a PPP plugin.
      **/
      export interface PPP {

        /**
        org.freedesktop.NetworkManager.PPP:
        @short_description: Helper interface for a PPP plugin.
        **/
        NeedSecrets(): Promise<[/*username*/string, /*password*/string]>

        /**
        org.freedesktop.NetworkManager.PPP:
        @short_description: Helper interface for a PPP plugin.
        **/
        SetIp4Config(config: {[key:string]:SigVal}): Promise<[]>

        /**
        org.freedesktop.NetworkManager.PPP:
        @short_description: Helper interface for a PPP plugin.
        **/
        SetIp6Config(config: {[key:string]:SigVal}): Promise<[]>

        /**
        org.freedesktop.NetworkManager.PPP:
        @short_description: Helper interface for a PPP plugin.
        **/
        SetState(state: number): Promise<[]>

        /**
        org.freedesktop.NetworkManager.PPP:
        @short_description: Helper interface for a PPP plugin.
        **/
        SetIfindex(ifindex: number): Promise<[]>
      }

      /**
      org.freedesktop.NetworkManager.SecretAgent:
      @short_description: User Secret Agent.

      Private D-Bus interface used by secret agents that store and provide
      secrets to NetworkManager. If an agent provides secrets to NetworkManager
      as part of connection creation, and the some of those secrets are "agent
      owned" the agent should store those secrets itself and should not expect
      its SaveSecrets() method to be called. SaveSecrets() will be called eg if
      some program other than the agent itself (like a connection editor)
      changes the secrets out of band. The agent should implement this D-Bus
      interface on an object with the path
      /org/freedesktop/NetworkManager/SecretAgent.
      **/
      export interface SecretAgent {

        /**
        GetSecrets:
        @connection: Nested settings maps containing the connection for which secrets are being requested. This may contain system-owned secrets if the agent has successfully authenticated to modify system network settings and the GetSecrets request flags allow user interaction.
        @connection_path: Object path of the connection for which secrets are being requested.
        @setting_name: Setting name for which secrets are being requested.
        @hints: Array of strings of key names in the requested setting for which NetworkManager thinks a secrets may be required, and/or well-known identifiers and data that may be useful to the client in processing the secrets request. Note that it's not always possible to determine which secret is required, so in some cases no hints may be given. The Agent should return any secrets it has, or that it thinks are required, regardless of what hints NetworkManager sends in this request. Some hints have special prefixes that provide information to the agent; for example, VPN requests may send server-specific messages prefixed with "x-vpn-message:".
        @flags: (<link linkend="NMSecretAgentGetSecretsFlags">NMSecretAgentGetSecretsFlags</link>) Flags which modify the behavior of the secrets request. If true, new secrets are assumed to be invalid or incorrect, and the agent should ask the user for new secrets. If false, existing secrets should be retrieved from storage and returned without interrupting the user.
        @secrets: Nested settings maps containing secrets. Each setting MUST contain at least the 'name' field, containing the name of the setting, and one or more secrets.

        Retrieve and return stored secrets, if any, or request new secrets from
        the agent's user. If user interaction is allowed and the user enters new
        secrets, the agent is expected to save the new secrets to persistent
        storage (if the secret's flags include AGENT_OWNED) as NetworkManager will
        not send these secrets back to the same agent via a SaveSecrets() call. If
        the user canceled any interaction, the agent should return the
        UserCanceled error (see below).
        **/
        GetSecrets(connection: {[key:string]:{[key:string]:SigVal}}, connection_path: ObjectPath, setting_name: string, hints: string[], flags: number): Promise<[/*secrets*/{[key:string]:{[key:string]:Variant}}]>

        /**
        CancelGetSecrets:
        @connection_path: Object path of the connection for which, if secrets for the given 'setting_name' are being requested, the request should be canceled.
        @setting_name: Setting name for which secrets for this connection were originally being requested.

        Cancel a pending GetSecrets request for secrets of the given connection.
        Any GetSecrets request with the same 'connection_path' and 'setting_name'
        that are given in a CancelGetSecrets request should be canceled.
        **/
        CancelGetSecrets(connection_path: ObjectPath, setting_name: string): Promise<[]>

        /**
        SaveSecrets:
        @connection: Nested settings maps containing the entire connection (including secrets), for which the agent should save the secrets to backing storage. This method will not be called when the agent itself is the process creating or updating a connection; in that case the agent is assumed to have already saved those secrets since it had them already.
        @connection_path: Object path of the connection for which the agent should save secrets to backing storage.

        Save given secrets to backing storage.
        **/
        SaveSecrets(connection: {[key:string]:{[key:string]:SigVal}}, connection_path: ObjectPath): Promise<[]>

        /**
        DeleteSecrets:
        @connection: Nested settings maps containing the connection properties (sans secrets), for which the agent should delete the secrets from backing storage.
        @connection_path: Object path of the connection for which the agent should delete secrets from backing storage.

        Delete secrets from backing storage.
        **/
        DeleteSecrets(connection: {[key:string]:{[key:string]:SigVal}}, connection_path: ObjectPath): Promise<[]>
      }

      /**
      org.freedesktop.NetworkManager.Settings:
      @short_description: Connection Settings Profile Manager.

      The Settings interface allows clients to view and administrate the
      connections stored and used by NetworkManager.
      **/
      export interface Settings {

        /**
        NewConnection:
        @connection: Object path of the new connection.

        Emitted when a new connection has been added after NetworkManager has
        started up and initialized. This signal is not emitted for connections
        read while starting up, because NetworkManager's D-Bus service is only
        available after all connections have been read, and to prevent spamming
        listeners with too many signals at one time. To retrieve the initial
        connection list, call the ListConnections() method once, and then listen
        for individual Settings.NewConnection and Settings.Connection.Deleted
        signals for further updates.
        **/
        on(ev: "NewConnection", cb: (connection: ObjectPath) => void): Promise<void>

        /**
        ConnectionRemoved:
        @connection: Object path of the removed connection.

        Emitted when a connection is no longer available. This happens when the
        connection is deleted or if it is no longer accessible by any of the
        system's logged-in users. After receipt of this signal, the connection no
        longer exists and cannot be used. Also see the Settings.Connection.Removed
        signal.
        **/
        on(ev: "ConnectionRemoved", cb: (connection: ObjectPath) => void): Promise<void>

        /**
        Connections:

        List of object paths of available network connection profiles.
        **/
        get Connections(): Promise<ObjectPath[]>

        /**
        Hostname:

        The machine hostname stored in persistent configuration.
        **/
        get Hostname(): Promise<string>

        /**
        CanModify:

        If true, adding and modifying connections is supported.
        **/
        get CanModify(): Promise<boolean>

        /**
        ListConnections:
        @connections: List of connections.

        List the saved network connections known to NetworkManager.
        **/
        ListConnections(): Promise<[/*connections*/ObjectPath[]]>

        /**
        GetConnectionByUuid:
        @uuid: The UUID to find the connection object path for.
        @connection: The connection's object path.

        Retrieve the object path of a connection, given that connection's UUID.
        **/
        GetConnectionByUuid(uuid: string): Promise<[/*connection*/ObjectPath]>

        /**
        AddConnection:
        @connection: Connection settings and properties.
        @path: Object path of the new connection that was just added.

        Add new connection and save it to disk. This operation does not start the
        network connection unless (1) device is idle and able to connect to the
        network described by the new connection, and (2) the connection is allowed
        to be started automatically.
        **/
        AddConnection(connection: {[key:string]:{[key:string]:SigVal}}): Promise<[/*path*/ObjectPath]>

        /**
        AddConnectionUnsaved:
        @connection: Connection settings and properties.
        @path: Object path of the new connection that was just added.

        Add new connection but do not save it to disk immediately. This operation
        does not start the network connection unless (1) device is idle and able
        to connect to the network described by the new connection, and (2) the
        connection is allowed to be started automatically. Use the 'Save' method
        on the connection to save these changes to disk.
        **/
        AddConnectionUnsaved(connection: {[key:string]:{[key:string]:SigVal}}): Promise<[/*path*/ObjectPath]>

        /**
        AddConnection2:
        @settings: New connection settings, properties, and (optionally) secrets.
        @flags: Flags. Unknown flags cause the call to fail.
        @args: Optional arguments dictionary, for extentibility. Specifying unknown keys causes the call to fail.
        @path: Object path of the new connection that was just added.
        @result: Output argument, currently no additional results are returned.
        @since: 1.20

        Add a new connection profile.

        AddConnection2 is an alternative to
        <link linkend="gdbus-method-org-freedesktop-NetworkManager-Settings.AddConnection">AddConnection</link> and
        <link linkend="gdbus-method-org-freedesktop-NetworkManager-Settings.AddConnectionUnsaved">AddConnectionUnsaved</link>.
        The new variant can do everything that the older variants could, and more.
        Its behavior is extensible via extra %flags and %args arguments.

        The %flags argument accepts the combination of following values,
        logically or-ed together:

        <variablelist>
        <varlistentry>
        <term><literal>0x1 (to-disk)</literal>:</term>
        <listitem><para>The connection is persisted to disk.</para></listitem>
        </varlistentry>
        <varlistentry>
        <term><literal>0x2 (in-memory)</literal>:</term>
        <listitem><para>The change is only made in memory (without touching an eventual
        profile on disk). If neither 0x1 nor 0x2 is set, the change is made in memory
        only, if the connection is already in memory only.</para></listitem>
        </varlistentry>
        <varlistentry>
        <term><literal>0x20 (block-autoconnect)</literal>:</term>
        <listitem><para>Blocks auto-connect on the new profile</para></listitem>
        </varlistentry>
        </variablelist>

        The %args argument accepts the following keys:

        <variablelist>
        <varlistentry>
        <term><literal>plugin</literal>:</term>
        <listitem><para>The settings plugin the newly added connection will
        use, such as "keyfile" or "ifcfg-rh".</para>
        <para role="since">Since 1.38</para></listitem>
        </varlistentry>
        </variablelist>

        Either the flags 0x1 (to-disk) or 0x2 (in-memory) must be specified.
        The effect is whether to behave like
        <link linkend="gdbus-method-org-freedesktop-NetworkManager-Settings.AddConnection">AddConnection</link> or
        <link linkend="gdbus-method-org-freedesktop-NetworkManager-Settings.AddConnectionUnsaved">AddConnectionUnsaved</link>.
        **/
        AddConnection2(settings: {[key:string]:{[key:string]:SigVal}}, flags: number, args: {[key:string]:SigVal}): Promise<[/*path*/ObjectPath, /*result*/{[key:string]:Variant}]>

        /**
        LoadConnections:
        @filenames: Array of paths to on-disk connection profiles in directories monitored by NetworkManager.
        @status: Success or failure of the operation as a whole. True if NetworkManager at least tried to load the indicated connections, even if it did not succeed. False if an error occurred before trying to load the connections (eg, permission denied).
        @failures: Paths of connection files that could not be loaded.

        Loads or reloads the indicated connections from disk. You should call this
        after making changes directly to an on-disk connection file to make sure
        that NetworkManager sees the changes.
        As with AddConnection(), this operation does not necessarily
        start the network connection.

        Note that before 1.20, NetworkManager had a bug and this @status value was wrong.
        It is better to assume success if the method does not return with a D-Bus error.
        On top of that, you can look at @failures to know whether any of the requested files failed.
        **/
        LoadConnections(filenames: string[]): Promise<[/*status*/boolean, /*failures*/string[]]>

        /**
        ReloadConnections:
        @status: This always returns %TRUE.

        Tells NetworkManager to reload all connection files from disk, including
        noticing any added or deleted connection files.
        **/
        ReloadConnections(): Promise<[/*status*/boolean]>

        /**
        SaveHostname:
        @hostname: The hostname to save to persistent configuration. If blank, the persistent hostname is cleared.

        Save the hostname to persistent configuration.
        **/
        SaveHostname(hostname: string): Promise<[]>
      }

      /**
      org.freedesktop.NetworkManager.WifiP2PPeer:
      @short_description: Wi-Fi P2P Peer.
      @since: 1.16
      **/
      export interface WifiP2PPeer {

        /**
        Name:

        Device name.
        **/
        get Name(): Promise<string>

        /**
        Flags:

        Flags describing the capabilities of the access point.

        Returns: <link linkend="NM80211ApFlags">NM80211ApFlags</link>
        **/
        get Flags(): Promise<number>

        /**
        Manufacturer:

        The manufacturer of the Wi-Fi P2P peer.
        **/
        get Manufacturer(): Promise<string>

        /**
        Model:

        The model of the Wi-Fi P2P peer.
        **/
        get Model(): Promise<string>

        /**
        ModelNumber:

        The model number of the Wi-Fi P2P peer.
        **/
        get ModelNumber(): Promise<string>

        /**
        Serial:

        The serial number of the Wi-Fi P2P peer.
        **/
        get Serial(): Promise<string>

        /**
        WfdIEs:

        The Wi-Fi Display Information Elements of the Wi-Fi P2P peer.
        **/
        get WfdIEs(): Promise<Buffer>

        /**
        HwAddress:

        The hardware address (BSSID) of the access point.
        **/
        get HwAddress(): Promise<string>

        /**
        Strength:

        The current signal quality of the access point, in percent.
        **/
        get Strength(): Promise<number>

        /**
        LastSeen:

        The timestamp (in CLOCK_BOOTTIME seconds) for the last time the access
        point was found in scan results. A value of -1 means the access point has
        never been found in scan results.
        **/
        get LastSeen(): Promise<number>
      }
      export namespace Connection {

        /**
        org.freedesktop.NetworkManager.Connection.Active:
        @short_description: Active Connection.

        Objects that implement the Connection.Active interface represent an
        attempt to connect to a network using the details provided by a Connection
        object. The Connection.Active object tracks the life-cycle of the
        connection attempt and if successful indicates whether the connected
        network is the "default" or preferred network for access. NetworkManager
        has the concept of connections, which can be thought of as settings, a
        profile or a configuration that can be applied on a networking device.
        Such settings-connections are exposed as D-Bus object and the
        active-connection expresses this relationship between device and
        settings-connection. At any time a settings-connection can only be
        activated on one device and vice versa. However, during activation and
        deactivation multiple active-connections can reference the same device or
        settings-connection as they are waiting to be activated or to be
        deactivated.
        **/
        export interface Active {

          /**
          StateChanged:
          @state: (<link linkend="NMActiveConnectionState">NMActiveConnectionState</link>) The new state of the active connection.
          @reason: (<link linkend="NMActiveConnectionStateReason">NMActiveConnectionStateReason</link>) Reason code describing the change to the new state.
          @since: 1.8

          Emitted when the state of the active connection has changed.
          **/
          on(ev: "StateChanged", cb: (state: number, reason: number) => void): Promise<void>

          /**
          Connection:

          The path of the connection.
          **/
          get Connection(): Promise<ObjectPath>

          /**
          SpecificObject:

          A specific object associated with the active connection. This property
          reflects the specific object used during connection activation, and will
          not change over the lifetime of the ActiveConnection once set.
          **/
          get SpecificObject(): Promise<ObjectPath>

          /**
          Id:

          The ID of the connection, provided as a convenience so that clients do not
          have to retrieve all connection details.
          **/
          get Id(): Promise<string>

          /**
          Uuid:

          The UUID of the connection, provided as a convenience so that clients do
          not have to retrieve all connection details.
          **/
          get Uuid(): Promise<string>

          /**
          Type:

          The type of the connection, provided as a convenience so that clients do
          not have to retrieve all connection details.
          **/
          get Type(): Promise<string>

          /**
          Devices:

          Array of object paths representing devices which are part of this active
          connection.
          **/
          get Devices(): Promise<ObjectPath[]>

          /**
          State:

          The state of this active connection.

          Returns: <link linkend="NMActiveConnectionState">NMActiveConnectionState</link>
          **/
          get State(): Promise<number>

          /**
          StateFlags:

          The state flags of this active connection.

          Returns: <link linkend="NMActivationStateFlags">NMActivationStateFlags</link>
          **/
          get StateFlags(): Promise<number>

          /**
          Default:

          Whether this active connection is the default IPv4 connection, i.e.
          whether it currently owns the default IPv4 route.
          **/
          get Default(): Promise<boolean>

          /**
          Ip4Config:

          Object path of the Ip4Config object describing the configuration of the
          connection. Only valid when the connection is in the
          NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
          **/
          get Ip4Config(): Promise<ObjectPath>

          /**
          Dhcp4Config:

          Object path of the Dhcp4Config object describing the DHCP options returned
          by the DHCP server (assuming the connection used DHCP). Only valid when
          the connection is in the NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
          **/
          get Dhcp4Config(): Promise<ObjectPath>

          /**
          Default6:

          Whether this active connection is the default IPv6 connection, i.e.
          whether it currently owns the default IPv6 route.
          **/
          get Default6(): Promise<boolean>

          /**
          Ip6Config:

          Object path of the Ip6Config object describing the configuration of the
          connection. Only valid when the connection is in the
          NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
          **/
          get Ip6Config(): Promise<ObjectPath>

          /**
          Dhcp6Config:

          Object path of the Dhcp6Config object describing the DHCP options returned
          by the DHCP server (assuming the connection used DHCP). Only valid when
          the connection is in the NM_ACTIVE_CONNECTION_STATE_ACTIVATED state.
          **/
          get Dhcp6Config(): Promise<ObjectPath>

          /**
          Vpn:

          Whether this active connection is also a VPN connection.
          **/
          get Vpn(): Promise<boolean>

          /**
          Controller:
          @Since: 1.44, 1.42.2

          The path to the controller device if the connection is a port. This
          property replaces the deprecated 'Master' property.
          **/
          get Controller(): Promise<ObjectPath>

          /**
          Master:

          The path to the controller device if the connection is a port.

          This property is deprecated in favor of the 'Controller'
          property since 1.44 and 1.42.2.
          **/
          get Master(): Promise<ObjectPath>
        }
      }
      export namespace Device {

        /**
        org.freedesktop.NetworkManager.Device.Adsl:
        @short_description: ADSL Device.
        **/
        export interface Adsl {

          /**
          Carrier:

          Indicates whether the physical carrier is found.

          DEPRECATED: check for the "carrier" flag in the "InterfaceFlags"
          property on the "org.freedesktop.NetworkManager.Device" interface.
          **/
          get Carrier(): Promise<boolean>
        }

        /**
        org.freedesktop.NetworkManager.Device.Bluetooth:
        @short_description: Bluetooth Device.
        **/
        export interface Bluetooth {

          /**
          HwAddress:

          Bluetooth hardware address of the device.

          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Name:

          Bluetooth name of the device.
          **/
          get Name(): Promise<string>

          /**
          BtCapabilities:

          Bluetooth capabilities of the device (either DUN or NAP).

          Returns: <link linkend="NMBluetoothCapabilities">NMBluetoothCapabilities</link>
          **/
          get BtCapabilities(): Promise<number>
        }

        /**
        org.freedesktop.NetworkManager.Device.Bond:
        @short_description: Bonding Device.
        **/
        export interface Bond {

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Carrier:

          Indicates whether the physical carrier is found (e.g. whether a cable is
          plugged in or not).

          DEPRECATED: check for the "lower-up" flag in the "InterfaceFlags"
          property on the "org.freedesktop.NetworkManager.Device" interface.
          **/
          get Carrier(): Promise<boolean>

          /**
          Slaves:

          DEPRECATED. Use the "Ports" property in
          "org.freedesktop.NetworkManager.Device" instead which exists since
          version NetworkManager 1.34.0.
          **/
          get Slaves(): Promise<ObjectPath[]>
        }

        /**
        org.freedesktop.NetworkManager.Device.Bridge:
        @short_description: Bridging Device.
        **/
        export interface Bridge {

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Carrier:

          Indicates whether the physical carrier is found (e.g. whether a cable is
          plugged in or not).

          DEPRECATED: check for the "carrier" flag in the "InterfaceFlags"
          property on the "org.freedesktop.NetworkManager.Device" interface.
          **/
          get Carrier(): Promise<boolean>

          /**
          Slaves:

          DEPRECATED. Use the "Ports" property in
          "org.freedesktop.NetworkManager.Device" instead which exists since
          version NetworkManager 1.34.0.
          **/
          get Slaves(): Promise<ObjectPath[]>
        }

        /**
        org.freedesktop.NetworkManager.Device.Dummy:
        @short_description: Dummy Device.
        **/
        export interface Dummy {

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>
        }

        /**
        org.freedesktop.NetworkManager.Device.Generic:
        @short_description: Unrecognized Device.
        **/
        export interface Generic {

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          TypeDescription:

          A (non-localized) description of the interface type, if known.
          **/
          get TypeDescription(): Promise<string>
        }

        /**
        org.freedesktop.NetworkManager.Device.IPTunnel:
        @short_description: IP Tunneling Device.
        **/
        export interface IPTunnel {

          /**
          Mode:

          The tunneling mode.
          **/
          get Mode(): Promise<number>

          /**
          Parent:

          The object path of the parent device.
          **/
          get Parent(): Promise<ObjectPath>

          /**
          Local:

          The local endpoint of the tunnel.
          **/
          get Local(): Promise<string>

          /**
          Remote:

          The remote endpoint of the tunnel.
          **/
          get Remote(): Promise<string>

          /**
          Ttl:

          The TTL assigned to tunneled packets. 0 is a special value meaning that
          packets inherit the TTL value
          **/
          get Ttl(): Promise<number>

          /**
          Tos:

          The type of service (IPv4) or traffic class (IPv6) assigned to tunneled
          packets.
          **/
          get Tos(): Promise<number>

          /**
          PathMtuDiscovery:

          Whether path MTU discovery is enabled on this tunnel.
          **/
          get PathMtuDiscovery(): Promise<boolean>

          /**
          InputKey:

          The key used for incoming packets.
          **/
          get InputKey(): Promise<string>

          /**
          OutputKey:

          The key used for outgoing packets.
          **/
          get OutputKey(): Promise<string>

          /**
          EncapsulationLimit:

          How many additional levels of encapsulation are permitted to be prepended
          to packets. This property applies only to IPv6 tunnels.
          **/
          get EncapsulationLimit(): Promise<number>

          /**
          FlowLabel:

          The flow label to assign to tunnel packets. This property applies only to
          IPv6 tunnels.
          **/
          get FlowLabel(): Promise<number>

          /**
          FwMark:

          The fwmark value to assign to tunnel packets. This property applies only to
          VTI tunnels.
          **/
          get FwMark(): Promise<number>

          /**
          Flags:

          Tunnel flags.
          **/
          get Flags(): Promise<number>
        }

        /**
        org.freedesktop.NetworkManager.Device.Infiniband:
        @short_description: Infiniband Device.
        **/
        export interface Infiniband {

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Carrier:

          Indicates whether the physical carrier is found (e.g. whether a cable is
          plugged in or not).

          DEPRECATED: check for the "lower-up" flag in the "InterfaceFlags"
          property on the "org.freedesktop.NetworkManager.Device" interface.
          **/
          get Carrier(): Promise<boolean>
        }

        /**
        org.freedesktop.NetworkManager.Device.Loopback:
        @short_description: Loopback Device.
        **/
        export interface Loopback {
        }

        /**
        org.freedesktop.NetworkManager.Device.Lowpan:
        @short_description: 6LoWPAN Device.
        **/
        export interface Lowpan {

          /**
          HwAddress:

          The active hardware address of the device.

          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Parent:

          The object path of the parent device.
          **/
          get Parent(): Promise<ObjectPath>
        }

        /**
        org.freedesktop.NetworkManager.Device.Macsec:
        @short_description: MACSec Device.
        **/
        export interface Macsec {

          /**
          Parent:

          The object path of the parent device.
          **/
          get Parent(): Promise<ObjectPath>

          /**
          Sci:

          The Secure Channel Identifier in use.
          **/
          get Sci(): Promise<number>

          /**
          IcvLength:

          The length of ICV (Integrity Check Value).
          **/
          get IcvLength(): Promise<number>

          /**
          CipherSuite:

          The set of cryptographic algorithms in use
          (e.g. 0x0080020001000001 for GCM-AES-128).
          **/
          get CipherSuite(): Promise<number>

          /**
          Window:

          The size of the replay window.
          **/
          get Window(): Promise<number>

          /**
          EncodingSa:

          The value of the Association Number (0..3) for the Security
          Association in use.
          **/
          get EncodingSa(): Promise<number>

          /**
          Validation:

          The validation mode for incoming packets (strict, check,
          disabled).
          **/
          get Validation(): Promise<string>

          /**
          Encrypt:

          Whether encryption of transmitted frames is enabled.
          **/
          get Encrypt(): Promise<boolean>

          /**
          Protect:

          Whether protection of transmitted frames is enabled.
          **/
          get Protect(): Promise<boolean>

          /**
          IncludeSci:

          Whether the SCI is always included in SecTAG for transmitted
          frames.
          **/
          get IncludeSci(): Promise<boolean>

          /**
          Es:

          Whether the ES (End station) bit is enabled in SecTAG for
          transmitted frames.
          **/
          get Es(): Promise<boolean>

          /**
          Scb:

          Whether the SCB (Single Copy Broadcast) bit is enabled in
          SecTAG for transmitted frames.
          **/
          get Scb(): Promise<boolean>

          /**
          ReplayProtect:

          Whether replay protection is enabled.
          **/
          get ReplayProtect(): Promise<boolean>
        }

        /**
        org.freedesktop.NetworkManager.Device.Macvlan:
        @short_description: MAC VLAN Device.
        **/
        export interface Macvlan {

          /**
          Parent:

          The object path of the parent device.
          **/
          get Parent(): Promise<ObjectPath>

          /**
          Mode:

          The macvlan mode, one of "private", "vepa", "bridge", or "passthru".
          **/
          get Mode(): Promise<string>

          /**
          NoPromisc:

          Whether the device is blocked from going into promiscuous mode.
          **/
          get NoPromisc(): Promise<boolean>

          /**
          Tap:

          Whether the device is a macvtap.
          **/
          get Tap(): Promise<boolean>
        }

        /**
        org.freedesktop.NetworkManager.Device.Modem:
        @short_description: Modem Device.
        **/
        export interface Modem {

          /**
          ModemCapabilities:

          The generic family of access technologies the modem supports. Not all
          capabilities are available at the same time however; some modems require a
          firmware reload or other reinitialization to switch between eg CDMA/EVDO
          and GSM/UMTS.

          Returns: <link linkend="NMDeviceModemCapabilities">NMDeviceModemCapabilities</link>
          **/
          get ModemCapabilities(): Promise<number>

          /**
          CurrentCapabilities:

          The generic family of access technologies the modem currently supports
          without a firmware reload or reinitialization.

          Returns: <link linkend="NMDeviceModemCapabilities">NMDeviceModemCapabilities</link>
          **/
          get CurrentCapabilities(): Promise<number>

          /**
          DeviceId:
          @since: 1.20

          An identifier used by the modem backend (ModemManager) that aims to
          uniquely identify the a device. Can be used to match a connection to a
          particular device.
          **/
          get DeviceId(): Promise<string>

          /**
          OperatorCode:
          @since: 1.20

          The MCC and MNC (concatenated) of the network the modem is connected to.
          Blank if disconnected or not a 3GPP modem.
          **/
          get OperatorCode(): Promise<string>

          /**
          Apn:
          @since: 1.20

          The access point name the modem is connected to. Blank if disconnected.
          **/
          get Apn(): Promise<string>
        }

        /**
        org.freedesktop.NetworkManager.Device.OlpcMesh:
        @short_description: OLPC Wireless Mesh Device.
        **/
        export interface OlpcMesh {

          /**
          HwAddress:

          The hardware address of the device.

          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Companion:

          The object path of the companion device.
          **/
          get Companion(): Promise<ObjectPath>

          /**
          ActiveChannel:

          The currently active channel.
          **/
          get ActiveChannel(): Promise<number>
        }

        /**
        org.freedesktop.NetworkManager.Device.OvsBridge:
        @short_description: OvsBridge Device.
        **/
        export interface OvsBridge {

          /**
          Slaves:
          @since: 1.14

          DEPRECATED. Use the "Ports" property in
          "org.freedesktop.NetworkManager.Device" instead which exists since
          version NetworkManager 1.34.0.
          **/
          get Slaves(): Promise<ObjectPath[]>
        }

        /**
        org.freedesktop.NetworkManager.Device.OvsInterface:
        @short_description: OvsInterface Device.
        **/
        export interface OvsInterface {
        }

        /**
        org.freedesktop.NetworkManager.Device.OvsPort:
        @short_description: OvsPort Device.
        **/
        export interface OvsPort {

          /**
          Slaves:
          @since: 1.14

          DEPRECATED. Use the "Ports" property in
          "org.freedesktop.NetworkManager.Device" instead which exists since
          version NetworkManager 1.34.0.
          **/
          get Slaves(): Promise<ObjectPath[]>
        }

        /**
        org.freedesktop.NetworkManager.Device.Ppp:
        @short_description: PPP Device.
        **/
        export interface Ppp {
        }

        /**
        org.freedesktop.NetworkManager.Device.Statistics:
        @short_description: Device Statistic Counters.
        **/
        export interface Statistics {

          /**
          RefreshRateMs:

          Refresh rate of the rest of properties of this interface. The properties
          are guaranteed to be refreshed each RefreshRateMs milliseconds in case
          the underlying counter has changed too.
          If zero, there is no guaranteed refresh rate of the properties.
          **/
          get RefreshRateMs(): Promise<number>

          /**
          TxBytes:

          Number of transmitted bytes
          **/
          get TxBytes(): Promise<number>

          /**
          RxBytes:

          Number of received bytes
          **/
          get RxBytes(): Promise<number>
        }

        /**
        org.freedesktop.NetworkManager.Device.Team:
        @short_description: Teaming Device.
        **/
        export interface Team {

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Carrier:

          Indicates whether the physical carrier is found (e.g. whether a cable is
          plugged in or not).

          DEPRECATED: check for the "lower-up" flag in the "InterfaceFlags"
          property on the "org.freedesktop.NetworkManager.Device" interface.
          **/
          get Carrier(): Promise<boolean>

          /**
          Slaves:

          DEPRECATED. Use the "Ports" property in
          "org.freedesktop.NetworkManager.Device" instead which exists since
          version NetworkManager 1.34.0.
          **/
          get Slaves(): Promise<ObjectPath[]>

          /**
          Config:

          The JSON configuration currently applied on the device.
          **/
          get Config(): Promise<string>
        }

        /**
        org.freedesktop.NetworkManager.Device.Tun:
        @short_description: Userspace Tunneling Device.
        **/
        export interface Tun {

          /**
          Owner:

          The uid of the tunnel owner, or -1 if it has no owner.
          **/
          get Owner(): Promise<number>

          /**
          Group:

          The gid of the tunnel group, or -1 if it has no owner.
          **/
          get Group(): Promise<number>

          /**
          Mode:

          The tunnel mode, either "tun" or "tap".
          **/
          get Mode(): Promise<string>

          /**
          NoPi:

          The tunnel's "TUN_NO_PI" flag; true if no protocol info is prepended to
          the tunnel packets.
          **/
          get NoPi(): Promise<boolean>

          /**
          VnetHdr:

          The tunnel's "TUN_VNET_HDR" flag; true if the tunnel packets include a
          virtio network header.
          **/
          get VnetHdr(): Promise<boolean>

          /**
          MultiQueue:

          The tunnel's "TUN_TAP_MQ" flag; true if callers can connect to the tap
          device multiple times, for multiple send/receive queues.
          **/
          get MultiQueue(): Promise<boolean>

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>
        }

        /**
        org.freedesktop.NetworkManager.Device.Veth:
        @short_description: Virtual Ethernet Device.
        **/
        export interface Veth {

          /**
          Peer:

          The object path of the device's peer.
          **/
          get Peer(): Promise<ObjectPath>
        }

        /**
        org.freedesktop.NetworkManager.Device.Vlan:
        @short_description: Virtual LAN Device.
        **/
        export interface Vlan {

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Carrier:

          Indicates whether the physical carrier is found (e.g. whether a cable is
          plugged in or not).

          DEPRECATED: check for the "carrier" flag in the "InterfaceFlags"
          property on the "org.freedesktop.NetworkManager.Device" interface.
          **/
          get Carrier(): Promise<boolean>

          /**
          Parent:

          Object path of the parent device of this VLAN device.
          **/
          get Parent(): Promise<ObjectPath>

          /**
          VlanId:

          The VLAN ID of this VLAN interface.
          **/
          get VlanId(): Promise<number>
        }

        /**
        org.freedesktop.NetworkManager.Device.Vrf:
        @short_description: VRF Device.
        **/
        export interface Vrf {

          /**
          Table:

          The routing table of the VRF.
          **/
          get Table(): Promise<number>
        }

        /**
        org.freedesktop.NetworkManager.Device.Vxlan:
        @short_description: VXLAN Device.
        **/
        export interface Vxlan {

          /**
          Parent:

          The object path of the parent device (if the VXLAN is not purely internal
          to this host).
          **/
          get Parent(): Promise<ObjectPath>

          /**
          HwAddress:

          Hardware address of the device.
          n
          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Id:

          The VXLAN Network Identifier (VNI).
          **/
          get Id(): Promise<number>

          /**
          Group:

          The IP (v4 or v6) multicast group used to communicate with other physical
          hosts on this VXLAN.
          **/
          get Group(): Promise<string>

          /**
          Local:

          The local IPv4 or IPv6 address to use when sending VXLAN packets to other
          physical hosts.
          **/
          get Local(): Promise<string>

          /**
          Tos:

          The value to use in the IP ToS field for VXLAN packets sent to other
          physical hosts.
          **/
          get Tos(): Promise<number>

          /**
          Ttl:

          The value to use in the IP TTL field for VXLAN packets sent to other
          physical hosts.
          **/
          get Ttl(): Promise<number>

          /**
          Learning:

          True if the VXLAN dynamically learns remote IP addresses.
          **/
          get Learning(): Promise<boolean>

          /**
          Ageing:

          The interval in seconds at which the kernel purges stale cached addresses.
          **/
          get Ageing(): Promise<number>

          /**
          Limit:

          The maximum number of entries that can be added to the VXLAN's forwarding
          table.
          **/
          get Limit(): Promise<number>

          /**
          DstPort:

          Destination port for outgoing VXLAN packets.
          **/
          get DstPort(): Promise<number>

          /**
          SrcPortMin:

          The lowest source port number to use for outgoing VXLAN packets.
          **/
          get SrcPortMin(): Promise<number>

          /**
          SrcPortMax:

          The highest source port number to use for outgoing VXLAN packets.
          **/
          get SrcPortMax(): Promise<number>

          /**
          Proxy:

          True if the VXLAN is implementing DOVE ARP proxying for remote clients.
          **/
          get Proxy(): Promise<boolean>

          /**
          Rsc:

          True if the VXLAN is implementing DOVE route short-circuiting of known
          remote IP addresses.
          **/
          get Rsc(): Promise<boolean>

          /**
          L2miss:

          True if the VXLAN will emit netlink notifications of L2 switch misses.
          **/
          get L2miss(): Promise<boolean>

          /**
          L3miss:

          True if the VXLAN will emit netlink notifications of L3 switch misses.
          **/
          get L3miss(): Promise<boolean>
        }

        /**
        org.freedesktop.NetworkManager.Device.WiMax:
        @short_description: WiMax Device.

        DEPRECATED: NetworkManager no longer supports WiMAX since version 1.2. This interface is no longer used.
        **/
        export interface WiMax {

          /**
          NspAdded:
          @nsp: The object path of the newly found NSP.

          Emitted when a new NSP is found by the device.
          **/
          on(ev: "NspAdded", cb: (nsp: ObjectPath) => void): Promise<void>

          /**
          NspRemoved:
          @nsp: The object path of the NSP that has disappeared.

          Emitted when an NSP disappears from view of the device.
          **/
          on(ev: "NspRemoved", cb: (nsp: ObjectPath) => void): Promise<void>

          /**
          Nsps:

          List of object paths of Network Service Providers (NSPs) visible to this
          WiMAX device.
          **/
          get Nsps(): Promise<ObjectPath[]>

          /**
          HwAddress:

          Hardware address of the device.
          **/
          get HwAddress(): Promise<string>

          /**
          CenterFrequency:

          Center frequency (in KHz) of the radio channel the device is using to
          communicate with the network when connected. Has no meaning when the
          device is not connected.
          **/
          get CenterFrequency(): Promise<number>

          /**
          Rssi:

          RSSI of the current radio link in dBm. This value indicates how strong the
          raw received RF signal from the base station is, but does not indicate the
          overall quality of the radio link. Has no meaning when the device is not
          connected.
          **/
          get Rssi(): Promise<number>

          /**
          Cinr:

          CINR (Carrier to Interference + Noise Ratio) of the current radio link in
          dB. CINR is a more accurate measure of radio link quality. Has no meaning
          when the device is not connected.
          **/
          get Cinr(): Promise<number>

          /**
          TxPower:

          Average power of the last burst transmitted by the device, in units of 0.5
          dBm. i.e. a TxPower of -11 represents an actual device TX power of -5.5
          dBm. Has no meaning when the device is not connected.
          **/
          get TxPower(): Promise<number>

          /**
          Bsid:

          The ID of the serving base station as received from the network. Has no
          meaning when the device is not connected.
          **/
          get Bsid(): Promise<string>

          /**
          ActiveNsp:

          Object path of the NSP currently used by the WiMax device.
          **/
          get ActiveNsp(): Promise<ObjectPath>

          /**
          GetNspList:
          @nsps: List of NSP object paths.

          Get the list of NSPs visible to this device.
          **/
          GetNspList(): Promise<[/*nsps*/ObjectPath[]]>
        }

        /**
        org.freedesktop.NetworkManager.Device.WifiP2P:
        @short_description: Wi-Fi P2P Device.
        @since: 1.16
        **/
        export interface WifiP2P {

          /**
          PeerAdded:
          @peer: The object path of the newly found access point.

          Emitted when a new Wi-Fi P2P peer is found by the device.
          **/
          on(ev: "PeerAdded", cb: (peer: ObjectPath) => void): Promise<void>

          /**
          PeerRemoved:
          @peer: The object path of the Wi-Fi P2P peer that has disappeared.

          Emitted when a Wi-Fi P2P peer disappears from view of the device.
          **/
          on(ev: "PeerRemoved", cb: (peer: ObjectPath) => void): Promise<void>

          /**
          HwAddress:

          The active hardware address of the device.

          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          Peers:

          List of object paths of peers visible to this Wi-Fi P2P device.
          **/
          get Peers(): Promise<ObjectPath[]>

          /**
          StartFind:
          @options: Options of find.

          Start a find operation for Wi-Fi P2P peers.

          The %options argument accepts the following keys:

          <variablelist>
          <varlistentry>
          <term><literal>i timeout</literal>:</term>
          <listitem><para>Timeout value in the range of 1-600 seconds.</para>
          <para>The default is 30 seconds.</para></listitem>
          </varlistentry>
          </variablelist>
          **/
          StartFind(options: {[key:string]:SigVal}): Promise<[]>

          /**
          StopFind:

          Stop an ongoing find operation again.
          **/
          StopFind(): Promise<[]>
        }

        /**
        org.freedesktop.NetworkManager.Device.WireGuard:
        @short_description: WireGuard Device.
        **/
        export interface WireGuard {

          /**
          PublicKey:

          32-byte public WireGuard key.
          **/
          get PublicKey(): Promise<Buffer>

          /**
          ListenPort:

          Local UDP listening port.
          **/
          get ListenPort(): Promise<number>

          /**
          FwMark:

          Optional 32-bit mark used to set routing policy for outgoing encrypted packets.
          See: ip-rule(8)
          **/
          get FwMark(): Promise<number>
        }

        /**
        org.freedesktop.NetworkManager.Device.Wired:
        @short_description: Wired Ethernet Device.
        **/
        export interface Wired {

          /**
          HwAddress:

          Active hardware address of the device.

          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          PermHwAddress:

          Permanent hardware address of the device.
          **/
          get PermHwAddress(): Promise<string>

          /**
          Speed:

          Design speed of the device, in megabits/second (Mb/s).
          **/
          get Speed(): Promise<number>

          /**
          S390Subchannels:

          Array of S/390 subchannels for S/390 or z/Architecture devices.
          **/
          get S390Subchannels(): Promise<string[]>

          /**
          Carrier:

          Indicates whether the physical carrier is found (e.g. whether a cable is
          plugged in or not).

          DEPRECATED: check for the "carrier" flag in the "InterfaceFlags"
          property on the "org.freedesktop.NetworkManager.Device" interface.
          **/
          get Carrier(): Promise<boolean>
        }

        /**
        org.freedesktop.NetworkManager.Device.Wireless:
        @short_description: Wi-Fi Device.
        **/
        export interface Wireless {

          /**
          AccessPointAdded:
          @access_point: The object path of the newly found access point.

          Emitted when a new access point is found by the device.
          **/
          on(ev: "AccessPointAdded", cb: (access_point: ObjectPath) => void): Promise<void>

          /**
          AccessPointRemoved:
          @access_point: The object path of the access point that has disappeared.

          Emitted when an access point disappears from view of the device.
          **/
          on(ev: "AccessPointRemoved", cb: (access_point: ObjectPath) => void): Promise<void>

          /**
          HwAddress:

          The active hardware address of the device.

          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>

          /**
          PermHwAddress:

          The permanent hardware address of the device.
          **/
          get PermHwAddress(): Promise<string>

          /**
          Mode:

          The operating mode of the wireless device.

          Returns: <link linkend="NM80211Mode">NM80211Mode</link>
          **/
          get Mode(): Promise<number>

          /**
          Bitrate:

          The bit rate currently used by the wireless device, in kilobits/second
          (Kb/s).
          **/
          get Bitrate(): Promise<number>

          /**
          AccessPoints:

          List of object paths of access point visible to this wireless device.
          **/
          get AccessPoints(): Promise<ObjectPath[]>

          /**
          ActiveAccessPoint:

          Object path of the access point currently used by the wireless device.
          **/
          get ActiveAccessPoint(): Promise<ObjectPath>

          /**
          WirelessCapabilities:

          The capabilities of the wireless device.

          Returns: <link linkend="NMDeviceWifiCapabilities">NMDeviceWifiCapabilities</link>
          **/
          get WirelessCapabilities(): Promise<number>

          /**
          LastScan:
          @since: 1.12

          The timestamp (in CLOCK_BOOTTIME milliseconds) for the last finished network scan.
          A value of -1 means the device never scanned for access points.
          **/
          get LastScan(): Promise<number>

          /**
          GetAccessPoints:
          @access_points: List of access point object paths.

          DEPRECATED. Get the list of access points visible to this device. Note
          that this list does not include access points which hide their SSID. To
          retrieve a list of all access points (including hidden ones) use the
          GetAllAccessPoints() method.
          **/
          GetAccessPoints(): Promise<[/*access_points*/ObjectPath[]]>

          /**
          GetAllAccessPoints:
          @access_points: List of access point object paths.

          Get the list of all access points visible to this device, including hidden
          ones for which the SSID is not yet known.
          **/
          GetAllAccessPoints(): Promise<[/*access_points*/ObjectPath[]]>

          /**
          RequestScan:
          @options: Options of scan. Currently, 'ssids' option with value of "aay" type is supported.

          Request the device to scan. To know when the scan is finished, use the "PropertiesChanged" signal from "org.freedesktop.DBus.Properties" to listen to changes to the "LastScan" property.
          **/
          RequestScan(options: {[key:string]:SigVal}): Promise<[]>
        }

        /**
        org.freedesktop.NetworkManager.Device.Wpan:
        @short_description: IEEE 802.15.4 (WPAN) MAC Layer Device.
        **/
        export interface Wpan {

          /**
          HwAddress:

          The active hardware address of the device.

          DEPRECATED. Use the "HwAddress" property in "org.freedesktop.NetworkManager.Device" instead which exists since version NetworkManager 1.24.0.
          **/
          get HwAddress(): Promise<string>
        }
      }
      export namespace Settings {

        /**
        org.freedesktop.NetworkManager.Settings.Connection:
        @short_description: Connection Settings Profile.

        Represents a single network connection configuration.
        **/
        export interface Connection {

          /**
          Updated:

          Emitted when any settings or permissions change. When handling this
          signal, clients should re-read the connection using the GetSettings method
          to get the changes and to ensure the client still has permission to access
          the connection.
          **/
          on(ev: "Updated", cb: () => void): Promise<void>

          /**
          Removed:

          Emitted when this connection is no longer available. This happens when the
          connection is deleted or if it is no longer accessible by any of the
          system's logged-in users. After receipt of this signal, the object no
          longer exists. Also see the Settings.ConnectionRemoved signal.
          **/
          on(ev: "Removed", cb: () => void): Promise<void>

          /**
          Unsaved:

          If set, indicates that the in-memory state of the connection does not
          match the on-disk state. This flag will be set when UpdateUnsaved() is
          called or when any connection details change, and cleared when the
          connection is saved to disk via Save() or from internal operations.
          **/
          get Unsaved(): Promise<boolean>

          /**
          Flags:
          @since: 1.12

          Additional flags of the connection profile.

          Returns: <link linkend="NMSettingsConnectionFlags">NMSettingsConnectionFlags</link>
          **/
          get Flags(): Promise<number>

          /**
          Filename:
          @since: 1.12

          File that stores the connection in case the connection is file-backed.
          **/
          get Filename(): Promise<string>

          /**
          Update:
          @properties: New connection settings, properties, and (optionally) secrets.

          Update the connection with new settings and properties (replacing all
          previous settings and properties) and save the connection to disk. Secrets
          may be part of the update request, and will be either stored in persistent
          storage or sent to a Secret Agent for storage, depending on the flags
          associated with each secret.
          **/
          Update(properties: {[key:string]:{[key:string]:SigVal}}): Promise<[]>

          /**
          UpdateUnsaved:
          @properties: New connection settings, properties, and (optionally) secrets.

          Update the connection with new settings and properties (replacing all
          previous settings and properties) but do not immediately save the
          connection to disk. Secrets may be part of the update request and may sent
          to a Secret Agent for storage, depending on the flags associated with each
          secret. Use the 'Save' method to save these changes to disk. Note that
          unsaved changes will be lost if the connection is reloaded from disk
          (either automatically on file change or due to an explicit
          ReloadConnections call).
          **/
          UpdateUnsaved(properties: {[key:string]:{[key:string]:SigVal}}): Promise<[]>

          /**
          Delete:

          Delete the connection.
          **/
          Delete(): Promise<[]>

          /**
          GetSettings:
          @settings: The nested settings maps describing this object.

          Get the settings maps describing this network configuration. This will
          never include any secrets required for connection to the network, as those
          are often protected. Secrets must be requested separately using the
          GetSecrets() call.
          **/
          GetSettings(): Promise<[/*settings*/{[key:string]:{[key:string]:Variant}}]>

          /**
          GetSecrets:
          @setting_name: Name of the setting to return secrets for. If empty, all secrets will be returned.
          @secrets: Nested settings maps containing secrets.

          Get the secrets belonging to this network configuration. Only secrets from
          persistent storage or a Secret Agent running in the requestor's session
          will be returned. The user will never be prompted for secrets as a result
          of this request.
          **/
          GetSecrets(setting_name: string): Promise<[/*secrets*/{[key:string]:{[key:string]:Variant}}]>

          /**
          ClearSecrets:

          Clear the secrets belonging to this network connection profile.
          **/
          ClearSecrets(): Promise<[]>

          /**
          Save:

          Saves a "dirty" connection (that had previously been updated with
          UpdateUnsaved) to persistent storage.
          **/
          Save(): Promise<[]>

          /**
          Update2:
          @settings: New connection settings, properties, and (optionally) secrets. Provide an empty array to use the current settings.
          @flags: Optional flags. Unknown flags cause the call to fail.
          @args: Optional arguments dictionary, for extentibility. Specifying unknown keys causes the call to fail.
          @result: Currently no results are returned.
          @since: 1.12

          Update the connection with new settings and properties (replacing all
          previous settings and properties).

          Update2 is an alternative to
          <link linkend="gdbus-method-org-freedesktop-NetworkManager-Settings-Connection.Update">Update</link>,
          <link linkend="gdbus-method-org-freedesktop-NetworkManager-Settings-Connection.UpdateUnsaved">UpdateUnsaved</link>
          and <link linkend="gdbus-method-org-freedesktop-NetworkManager-Settings-Connection.Save">Save</link>
          extensible with extra %flags and %args arguments.

          The %flags argument accepts the combination of following values,
          logically or-ed together:

          <variablelist>
          <varlistentry>
          <term><literal>0x1 (to-disk)</literal>:</term>
          <listitem><para>The connection is persisted to disk.</para></listitem>
          </varlistentry>
          <varlistentry>
          <term><literal>0x2 (in-memory)</literal>:</term>
          <listitem><para>The change is only made in memory (without touching an eventual
          profile on disk). If neither 0x1 nor 0x2 is set, the change is made in memory
          only, if the connection is already in memory only.</para></listitem>
          </varlistentry>
          <varlistentry>
          <term><literal>0x4 (in-memory-detached)</literal>:</term>
          <listitem><para>Like "in-memory", but behaves slightly different when migrating
          the profile from disk to in-memory.</para></listitem>
          </varlistentry>
          <varlistentry>
          <term><literal>0x8 (in-memory-only)</literal>:</term>
          <listitem><para>Like "in-memory", but behaves slightly different when migrating
          the profile from disk to in-memory.</para></listitem>
          </varlistentry>
          <varlistentry>
          <term><literal>0x10 (volatile)</literal>:</term>
          </varlistentry>
          <varlistentry>
          <term><literal>0x20 (block-autoconnect)</literal>:</term>
          <listitem><para>Blocks auto-connect on the updated profile</para></listitem>
          </varlistentry>
          <varlistentry>
          <term><literal>0x40 (no-reapply)</literal>:</term>
          <listitem><para>Prevents "connection.zone" and "connection.metered" properties
          to take effect on currently active devices.</para></listitem>
          </varlistentry>
          </variablelist>

          The %args argument accepts the following keys:

          <variablelist>
          <varlistentry>
          <term><literal>plugin</literal>:</term>
          <listitem><para>The settings plugin the connection will be migrated to
          such as "keyfile" or "ifcfg-rh".</para>
          <para role="since">Since 1.38</para></listitem>
          </varlistentry>
          </variablelist>

          Secrets may be part of the update request, and will be either stored in persistent
          storage or sent to a Secret Agent for storage, depending on the flags
          associated with each secret.
          **/
          Update2(settings: {[key:string]:{[key:string]:SigVal}}, flags: number, args: {[key:string]:SigVal}): Promise<[/*result*/{[key:string]:Variant}]>
        }
      }
      export namespace VPN {

        /**
        org.freedesktop.NetworkManager.VPN.Connection:
        @short_description: Active VPN Connection.

        Represents an active connection to a Virtual Private Network.
        **/
        export interface Connection {

          /**
          VpnStateChanged:
          @state: (<link linkend="NMVpnConnectionState">NMVpnConnectionState</link>) The new state of the VPN connection.
          @reason: (<link linkend="NMActiveConnectionStateReason">NMActiveConnectionStateReason</link>) Reason code describing the change to the new state.

          Emitted when the state of the VPN connection has changed.
          **/
          on(ev: "VpnStateChanged", cb: (state: number, reason: number) => void): Promise<void>

          /**
          VpnState:

          The VPN-specific state of the connection.

          Returns: <link linkend="NMVpnConnectionState">NMVpnConnectionState</link>
          **/
          get VpnState(): Promise<number>

          /**
          Banner:

          The banner string of the VPN connection.
          **/
          get Banner(): Promise<string>
        }

        /**
        org.freedesktop.NetworkManager.VPN.Plugin:
        @short_description: VPN Service.

        This interface is provided by plugins providing VPN services to the
        NetworkManager daemon.
        **/
        export interface Plugin {

          /**
          StateChanged:
          @state: (<link linkend="NMVpnServiceState">NMVpnServiceState</link>) The new state of the plugin.

          Emitted when the plugin state changes.
          **/
          on(ev: "StateChanged", cb: (state: number) => void): Promise<void>

          /**
          SecretsRequired:
          @message: Informational message, if any, about the request. For example, if a second PIN is required, could indicate to the user to wait for the token code to change until entering the next PIN.
          @secrets: Array of strings of VPN secret names which the plugin thinks secrets may be required for, or other VPN-specific data to be processed by the VPN's front-end.

          Emitted during an ongoing ConnectInteractive() request when the plugin has
          determined that new secrets are required. NetworkManager will then call
          the NewSecrets() method with a connection hash including the new secrets.
          **/
          on(ev: "SecretsRequired", cb: () => void): Promise<void>

          /**
          Config:
          @config: The configuration information.

          The plugin obtained generic configuration information.
          **/
          on(ev: "Config", cb: (config: {[key:string]:Variant}) => void): Promise<void>

          /**
          Ip4Config:
          @ip4config: The IPv4 configuration.

          The plugin obtained an IPv4 configuration.
          **/
          on(ev: "Ip4Config", cb: (ip4config: {[key:string]:Variant}) => void): Promise<void>

          /**
          Ip6Config:
          @ip6config: The IPv6 configuration.

          The plugin obtained an IPv6 configuration.
          **/
          on(ev: "Ip6Config", cb: (ip6config: {[key:string]:Variant}) => void): Promise<void>

          /**
          LoginBanner:
          @banner: The login banner string.

          Emitted when the plugin receives a login banner from the VPN service.
          **/
          on(ev: "LoginBanner", cb: (banner: string) => void): Promise<void>

          /**
          Failure:
          @reason: (<link linkend="NMVpnPluginFailure">NMVpnPluginFailure</link>) Reason code for the failure.

          Emitted when a failure in the VPN plugin occurs.
          **/
          on(ev: "Failure", cb: (reason: number) => void): Promise<void>

          /**
          State:

          The state of the plugin.

          Returns: <link linkend="NMVpnServiceState">NMVpnServiceState</link>
          **/
          get State(): Promise<number>

          /**
          Connect:
          @connection: Describes the connection to be established.

          Tells the plugin to connect. Interactive secrets requests (eg, emitting
          the SecretsRequired signal) are not allowed.
          **/
          Connect(connection: {[key:string]:{[key:string]:SigVal}}): Promise<[]>

          /**
          ConnectInteractive:
          @connection: Describes the connection to be established.
          @details: Additional details about the Connect process.

          Tells the plugin to connect, allowing interactive secrets requests (eg the
          plugin is allowed to emit the SecretsRequired signal if the VPN service
          indicates that it needs additional secrets during the connect process).
          **/
          ConnectInteractive(connection: {[key:string]:{[key:string]:SigVal}}, details: {[key:string]:SigVal}): Promise<[]>

          /**
          NeedSecrets:
          @settings: Describes the connection that may need secrets.
          @setting_name: The setting name within the provided connection that requires secrets, if any.

          Asks the plugin whether the provided connection will require secrets to
          connect successfully.
          **/
          NeedSecrets(settings: {[key:string]:{[key:string]:SigVal}}): Promise<[/*setting_name*/string]>

          /**
          Disconnect:

          Disconnect the plugin.
          **/
          Disconnect(): Promise<[]>

          /**
          SetConfig:
          @config: Generic configuration details for the connection.

          Set generic connection details on the connection.
          **/
          SetConfig(config: {[key:string]:SigVal}): Promise<[]>

          /**
          SetIp4Config:
          @config: Ip4Config details for the connection. You must call SetConfig() before calling this.

          Set IPv4 details on the connection.
          **/
          SetIp4Config(config: {[key:string]:SigVal}): Promise<[]>

          /**
          SetIp6Config:
          @config: Ip6Config details for the connection. You must call SetConfig() before calling this.

          Set IPv6 details on the connection.
          **/
          SetIp6Config(config: {[key:string]:SigVal}): Promise<[]>

          /**
          SetFailure:
          @reason: The reason for the failure.

          Indicate a failure to the plugin.
          **/
          SetFailure(reason: string): Promise<[]>

          /**
          NewSecrets:
          @connection: Describes the connection including the new secrets.

          Called in response to a SecretsRequired signal to deliver updated secrets
          or other information to the plugin.
          **/
          NewSecrets(connection: {[key:string]:{[key:string]:SigVal}}): Promise<[]>
        }
      }
      export namespace WiMax {

        /**
        org.freedesktop.NetworkManager.WiMax.Nsp:
        @short_description: WiMax Network Service Provider.

        DEPRECATED: NetworkManager no longer supports WiMAX since version 1.2. This interface is no longer used.
        **/
        export interface Nsp {

          /**
          Name:

          The name of the NSP.
          **/
          get Name(): Promise<string>

          /**
          SignalQuality:

          The current signal quality of the NSP, in percent.
          **/
          get SignalQuality(): Promise<number>

          /**
          NetworkType:

          The network type of the NSP.

          Returns: <link linkend="NMWimaxNspNetworkType">NMWimaxNspNetworkType</link>
          **/
          get NetworkType(): Promise<number>
        }
      }
    }
  }
}
