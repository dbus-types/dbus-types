import {ObjectPath, Variant, SigVal} from '@dbus-types/common'
export type Interfaces = {
  "org.gnome.Shell.Extensions": org.gnome.Shell.Extensions
  "org.gnome.Shell.Introspect": org.gnome.Shell.Introspect
  "org.gnome.Shell.Screencast": org.gnome.Shell.Screencast
  "org.gnome.Shell.Screenshot": org.gnome.Shell.Screenshot
  "org.gnome.Shell.SearchProvider": org.gnome.Shell.SearchProvider
  "org.gnome.Shell.SearchProvider2": org.gnome.Shell.SearchProvider2
  "org.gnome.Shell.Wacom.PadOsd": org.gnome.Shell.Wacom.PadOsd
}
export namespace org {
  export namespace gnome {
    export namespace Shell {

      /**
      org.gnome.Shell.Extensions:
      @short_description: Extensions interface

      The interface used to query and manage extensions.
      **/
      export interface Extensions {

        /**
        CheckForUpdates:
        Update all extensions for which updates are available
        **/
        on(ev: "ExtensionStateChanged", cb: (uuid: string, state: {[key:string]:Variant}) => void): Promise<void>

        /**
        ExtensionStatusChanged:
        Deprecated for ExtensionStateChanged
        **/
        on(ev: "ExtensionStatusChanged", cb: (uuid: string, state: number, error: string) => void): Promise<void>

        /**
        ShellVersion:
        The GNOME Shell version
        **/
        get ShellVersion(): Promise<string>

        /**
        UserExtensionsEnabled:
        Whether user extensions are enabled
        **/
        get UserExtensionsEnabled(): Promise<boolean>

        /**
        ListExtensions:
        @extensions: A dictionary of extension infos

        Get a list of installed extensions. The returned @extensions
        dictionary maps extension UUIDs to info vardicts. See
        GetExtensionInfo() for documentation on possible keys.
        **/
        ListExtensions(): Promise<[/*extensions*/{[key:string]:{[key:string]:Variant}}]>

        /**
        GetExtensionInfo:
        @uuid: The UUID of the extension
        @info: The returned extension info

        The information returned in the @info vardict depends on the
        metadata the extension provides, however it is guaranteed to
        contain the following keys:

        <variablelist>
        <varlistentry>
        <term>uuid s</term>
        <listitem><para>The UUID of the extension</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>name s</term>
        <listitem><para>The name of the extension</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>description s</term>
        <listitem><para>
        A short summary that describes what the extension does
        </para></listitem>
        </varlistentry>

        <varlistentry>
        <term>shell-version as</term>
        <listitem><para>An array of support shell versions</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>type d</term>
        <listitem><para>
        The type of extension:
        <simplelist>
        <member>1: SYSTEM</member>
        <member>2: PER_USER</member>
        </simplelist>
        </para></listitem>
        </varlistentry>

        <varlistentry>
        <term>state d</term>
        <listitem><para>
        The state the extension is in:
        <simplelist>
        <member>1: ENABLED</member>
        <member>2: DISABLED</member>
        <member>3: ERROR</member>
        <member>4: OUT_OF_DATE</member>
        <member>5: DOWNLOADING</member>
        <member>6: INITIALIZED</member>
        <member>99: UNINSTALLED</member>
        </simplelist>
        </para></listitem>
        </varlistentry>

        <varlistentry>
        <term>path s</term>
        <listitem><para>The extension directory</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>error s</term>
        <listitem><para>The most recent error caught in init(), enable() or disable()</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>hasPrefs b</term>
        <listitem><para>Whether the extension includes preference UI</para></listitem>
        </varlistentry>
        </variablelist>

        By convention, many extensions will also include the following keys:
        <variablelist>
        <varlistentry>
        <term>version d</term>
        <listitem><para>The extension version</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>url s</term>
        <listitem><para>The URL to the extension homepage or repository</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>settings-schema s</term>
        <listitem><para>The ID of a bundled GSettings schema</para></listitem>
        </varlistentry>

        <varlistentry>
        <term>gettext-domain s</term>
        <listitem><para>The domain used for translations</para></listitem>
        </varlistentry>
        </variablelist>
        **/
        GetExtensionInfo(uuid: string): Promise<[/*info*/{[key:string]:Variant}]>

        /**
        GetExtensionErrors:
        @uuid: The UUID of the extension
        @errors: The returned errors

        Get the list of errors that caused the extension
        to be in ERROR state.
        **/
        GetExtensionErrors(uuid: string): Promise<[/*errors*/string[]]>

        /**
        InstallRemoteExtension:
        @uuid: The UUID of the extension
        @result: The result of the operation

        Download and install an extension.
        **/
        InstallRemoteExtension(uuid: string): Promise<[/*result*/string]>

        /**
        UninstallExtension:
        @uuid: The UUID of the extension
        @success: Whether the operation was successful

        Uninstall an extension.
        **/
        UninstallExtension(uuid: string): Promise<[/*success*/boolean]>

        /**
        ReloadExtension:
        @uuid: The UUID of the extension

        Reload an extension.
        **/
        ReloadExtension(uuid: string): Promise<[]>

        /**
        EnableExtension:
        @uuid: The UUID of the extension
        @success: Whether the operation was successful

        Enable an extension.
        **/
        EnableExtension(uuid: string): Promise<[/*success*/boolean]>

        /**
        DisableExtension:
        @uuid: The UUID of the extension
        @success: Whether the operation was successful

        Disable an extension.
        **/
        DisableExtension(uuid: string): Promise<[/*success*/boolean]>

        /**
        LaunchExtensionPrefs:
        Deprecated for OpenExtensionPrefs
        **/
        LaunchExtensionPrefs(uuid: string): Promise<[]>

        /**
        OpenExtensionPrefs:
        @uuid: The UUID of the extension
        @parent_window: Identifier for the application window
        @options: Vardict with further options

        Opens the prefs dialog of extension @uuid.

        The following @options are recognized:

        <variablelist>
        <varlistentry>
        <term>modal b</term>
        <listitem>
        <para>Whether the prefs window should be modal, default: false</para>
        </listitem>
        </varlistentry>
        </variablelist>
        **/
        OpenExtensionPrefs(uuid: string, parent_window: string, options: {[key:string]:SigVal}): Promise<[]>

        /**
        CheckForUpdates:
        Update all extensions for which updates are available
        **/
        CheckForUpdates(): Promise<[]>
      }

      /**
      org.gnome.Shell.Introspect:
      @short_description: Introspection interface

      The interface used to introspect the state of Shell, such as running
      applications, currently active application, etc.
      **/
      export interface Introspect {

        /**
        RunningApplicationsChanged:
        @short_description: Notifies when the running applications changes
        **/
        on(ev: "RunningApplicationsChanged", cb: () => void): Promise<void>

        /**
        WindowsChanged:
        @short_description: Notifies when any window opens or closes
        **/
        on(ev: "WindowsChanged", cb: () => void): Promise<void>

        /**
        AnimationsEnabled:
        @short_description: Whether the shell animations are enabled

        By default determined by the org.gnome.desktop.interface enable-animations
        gsetting, but may be overridden, e.g. if there is an active screen cast or
        remote desktop session that asked for animations to be disabled.

        Since: 2
        **/
        get AnimationsEnabled(): Promise<boolean>

        /**
        ScreenSize:
        @short_description: The size of the screen

        Since: 3
        **/
        get ScreenSize(): Promise<[number,number]>

        /**
        ScreenSize:
        @short_description: The size of the screen

        Since: 3
        **/
        get version(): Promise<number>

        /**
        GetRunningApplications:
        @short_description: Retrieves the description of all running applications

        Each application is associated by an application ID. The details of
        each application consists of a varlist of keys and values. Available
        keys are listed below.

        'active-on-seats' - (as)   list of seats the application is active on
        (a seat only has at most one active
        application)
        **/
        GetRunningApplications(): Promise<[/*apps*/{[key:string]:{[key:string]:Variant}}]>

        /**
        GetWindows:
        @short_description: Retrieves the current list of windows and their properties

        A window is exposed as:
        * t ID: unique ID of the window
        * a{sv} properties: high-level properties

        Known properties:

        - "title"       (s): (readonly) title of the window
        - "app-id"      (s): (readonly) application ID of the window
        - "wm-class"    (s): (readonly) class of the window
        - "client-type" (u): (readonly) 0 for Wayland, 1 for X11
        - "is-hidden"   (b): (readonly) if the window is currently hidden
        - "has-focus"   (b): (readonly) if the window currently have
        keyboard focus
        - "width"       (u): (readonly) width of the window
        - "height"      (u): (readonly) height of the window
        **/
        GetWindows(): Promise<[/*windows*/{[key:number]:{[key:string]:Variant}}]>
      }

      /**
      org.gnome.Shell.Screencast:
      @short_description: Screencast interface

      The interface used to record screen contents.
      **/
      export interface Screencast {

        /**
        org.gnome.Shell.Screencast:
        @short_description: Screencast interface

        The interface used to record screen contents.
        **/
        get ScreencastSupported(): Promise<boolean>

        /**
        Screencast:
        @file_template: the template for the filename to use
        @options: a dictionary of optional parameters
        @success: whether the screencast was started successfully
        @filename_used: the file where the screencast is being saved

        Records a screencast of the whole screen and saves it
        (by default) as webm video under a filename derived from
        @file_template. The template is either a relative or absolute
        filename which may contain some escape sequences - %d and %t
        will be replaced by the start date and time of the recording.
        If a relative name is used, the screencast will be saved in the
        $XDG_VIDEOS_DIR if it exists, or the home directory otherwise.
        The actual filename of the saved video is returned in @filename_used.
        The set of optional parameters in @options currently consists of:
        'draw-cursor'(b): whether the cursor should be included in the
        recording (true)
        'framerate'(i): the number of frames per second that should be
        recorded if possible (30)
        'pipeline'(s): the GStreamer pipeline used to encode recordings
        in gst-launch format; if not specified, the
        recorder will produce vp8 (webm) video (unset)
        **/
        Screencast(file_template: string, options: {[key:string]:SigVal}): Promise<[/*success*/boolean, /*filename_used*/string]>

        /**
        ScreencastArea:
        @x: the X coordinate of the area to capture
        @y: the Y coordinate of the area to capture
        @width: the width of the area to capture
        @height: the height of the area to capture
        @file_template: the template for the filename to use
        @options: a dictionary of optional parameters
        @success: whether the screencast was started successfully
        @filename_used: the file where the screencast is being saved

        Records a screencast of the passed in area and saves it
        (by default) as webm video under a filename derived from
        @file_template. The template is either a relative or absolute
        filename which may contain some escape sequences - %d and %t
        will be replaced by the start date and time of the recording.
        If a relative name is used, the screencast will be saved in the
        $XDG_VIDEOS_DIR if it exists, or the home directory otherwise.
        The actual filename of the saved video is returned in @filename_used.
        The set of optional parameters in @options currently consists of:
        'draw-cursor'(b): whether the cursor should be included in the
        recording (true)
        'framerate'(i): the number of frames per second that should be
        recorded if possible (30)
        'pipeline'(s): the GStreamer pipeline used to encode recordings
        in gst-launch format; if not specified, the
        recorder will produce vp8 (webm) video (unset)
        **/
        ScreencastArea(x: number, y: number, width: number, height: number, file_template: string, options: {[key:string]:SigVal}): Promise<[/*success*/boolean, /*filename_used*/string]>

        /**
        StopScreencast:
        @success: whether stopping the recording was successful

        Stop the recording started by either Screencast or ScreencastArea.
        **/
        StopScreencast(): Promise<[/*success*/boolean]>
      }

      /**
      org.gnome.Shell.Screenshot:
      @short_description: Screenshot interface

      The interface used to capture pictures of the screen contents.
      **/
      export interface Screenshot {

        /**
        Screenshot:
        @filename: The filename for the screenshot
        @include_cursor: Whether to include the cursor image or not
        @flash: Whether to flash the screen or not
        @success: whether the screenshot was captured
        @filename_used: the file where the screenshot was saved

        Takes a screenshot of the whole screen and saves it
        in @filename as png image, it returns a boolean
        indicating whether the operation was successful or not.
        @filename can either be an absolute path or a basename, in
        which case the screenshot will be saved in the $XDG_PICTURES_DIR
        or the home directory if it doesn't exist. The filename used
        to save the screenshot will be returned in @filename_used.
        **/
        Screenshot(include_cursor: boolean, flash: boolean, filename: string): Promise<[/*success*/boolean, /*filename_used*/string]>

        /**
        ScreenshotWindow:
        @include_frame: Whether to include the frame or not
        @include_cursor: Whether to include the cursor image or not
        @flash: Whether to flash the window area or not
        @filename: The filename for the screenshot
        @success: whether the screenshot was captured
        @filename_used: the file where the screenshot was saved

        Takes a screenshot of the focused window (optionally omitting the frame)
        and saves it in @filename as png image, it returns a boolean
        indicating whether the operation was successful or not.
        @filename can either be an absolute path or a basename, in
        which case the screenshot will be saved in the $XDG_PICTURES_DIR
        or the home directory if it doesn't exist. The filename used
        to save the screenshot will be returned in @filename_used.
        **/
        ScreenshotWindow(include_frame: boolean, include_cursor: boolean, flash: boolean, filename: string): Promise<[/*success*/boolean, /*filename_used*/string]>

        /**
        ScreenshotArea:
        @x: the X coordinate of the area to capture
        @y: the Y coordinate of the area to capture
        @width: the width of the area to capture
        @height: the height of the area to capture
        @flash: whether to flash the area or not
        @filename: the filename for the screenshot
        @success: whether the screenshot was captured
        @filename_used: the file where the screenshot was saved

        Takes a screenshot of the passed in area and saves it
        in @filename as png image, it returns a boolean
        indicating whether the operation was successful or not.
        @filename can either be an absolute path or a basename, in
        which case the screenshot will be saved in the $XDG_PICTURES_DIR
        or the home directory if it doesn't exist. The filename used
        to save the screenshot will be returned in @filename_used.
        **/
        ScreenshotArea(x: number, y: number, width: number, height: number, flash: boolean, filename: string): Promise<[/*success*/boolean, /*filename_used*/string]>

        /**
        PickColor:

        Picks a color and returns the result.

        The @result vardict contains:
        <variablelist>
        <varlistentry>
        <term>color (ddd)</term>
        <listitem><para>The color, RGB values in the range [0,1].</para></listitem>
        </varlistentry>
        </variablelist>
        **/
        PickColor(): Promise<[/*result*/{[key:string]:Variant}]>

        /**
        FlashArea:
        @x: the X coordinate of the area to flash
        @y: the Y coordinate of the area to flash
        @width: the width of the area to flash
        @height: the height of the area to flash

        Renders a flash spot effect in the specified rectangle of the screen.
        **/
        FlashArea(x: number, y: number, width: number, height: number): Promise<[]>

        /**
        SelectArea:
        @x: the X coordinate of the selected area
        @y: the Y coordinate of the selected area
        @width: the width of the selected area
        @height: the height of the selected area

        Interactively allows the user to select a rectangular area of
        the screen, and returns its coordinates.
        **/
        SelectArea(): Promise<[/*x*/number, /*y*/number, /*width*/number, /*height*/number]>
      }

      /**
      org.gnome.Shell.SearchProvider:
      @short_description: Search provider interface

      The interface used for integrating into GNOME Shell's search
      interface. This interface is deprecated, and org.gnome.Shell.SearchProvider2 should be used instead.
      **/
      export interface SearchProvider {

        /**
        GetInitialResultSet:
        @terms: Array of search terms, which the provider should treat as logical AND.
        @results: An array of result identifier strings representing items which match the given search terms. Identifiers must be unique within the provider's domain, but other than that may be chosen freely by the provider.

        Called when the user first begins a search.
        **/
        GetInitialResultSet(terms: string[]): Promise<[/*results*/string[]]>

        /**
        GetSubsearchResultSet:
        @previous_results: Array of results previously returned by GetInitialResultSet().
        @terms: Array of updated search terms, which the provider should treat as logical AND.
        @results: An array of result identifier strings representing items which match the given search terms. Identifiers must be unique within the provider's domain, but other than that may be chosen freely by the provider.

        Called when a search is performed which is a "subsearch" of
        the previous search, e.g. the method may return less results, but
        not more or different results.

        This allows search providers to only search through the previous
        result set, rather than possibly performing a full re-query.
        **/
        GetSubsearchResultSet(previous_results: string[], terms: string[]): Promise<[/*results*/string[]]>

        /**
        GetResultMetas:
        @identifiers: An array of result identifiers as returned by GetInitialResultSet() or GetSubsearchResultSet()
        @metas: A dictionary describing the given search result, containing a human-readable 'name' (string), along with the result identifier this meta is for, 'id' (string). Optionally, either 'gicon' (a serialized GIcon) or 'icon-data' (raw image data as (iiibiiay) - width, height, rowstride, has-alpha, bits per sample, channels, data) can be specified if the result can be better served with a thumbnail of the content (such as with images). A 'description' field (string) may also be specified if more context would help the user find the desired result.

        Return an array of meta data used to display each given result
        **/
        GetResultMetas(identifiers: string[]): Promise<[/*metas*/{[key:string]:Variant}[]]>

        /**
        ActivateResult:
        @identifier: A result identifier as returned by GetInitialResultSet() or GetSubsearchResultSet()

        Called when the users chooses a given result. The result should
        be displayed in the application associated with the corresponding
        provider.

        This method is deprecated, and providers should implement ActivateResult2()
        instead.
        **/
        ActivateResult(identifier: string): Promise<[]>
      }

      /**
      org.gnome.Shell.SearchProvider2:
      @short_description: Search provider interface

      The interface used for integrating into GNOME Shell's search
      interface (version 2).
      **/
      export interface SearchProvider2 {

        /**
        GetInitialResultSet:
        @terms: Array of search terms, which the provider should treat as logical AND.
        @results: An array of result identifier strings representing items which match the given search terms. Identifiers must be unique within the provider's domain, but other than that may be chosen freely by the provider.

        Called when the user first begins a search.
        **/
        GetInitialResultSet(terms: string[]): Promise<[/*results*/string[]]>

        /**
        GetSubsearchResultSet:
        @previous_results: Array of results previously returned by GetInitialResultSet().
        @terms: Array of updated search terms, which the provider should treat as logical AND.
        @results: An array of result identifier strings representing items which match the given search terms. Identifiers must be unique within the provider's domain, but other than that may be chosen freely by the provider.

        Called when a search is performed which is a "subsearch" of
        the previous search, e.g. the method may return less results, but
        not more or different results.

        This allows search providers to only search through the previous
        result set, rather than possibly performing a full re-query.
        **/
        GetSubsearchResultSet(previous_results: string[], terms: string[]): Promise<[/*results*/string[]]>

        /**
        GetResultMetas:
        @identifiers: An array of result identifiers as returned by GetInitialResultSet() or GetSubsearchResultSet()
        @metas: A dictionary describing the given search result, containing a human-readable 'name' (string), along with the result identifier this meta is for, 'id' (string). Optionally, 'icon' (a serialized GIcon as obtained by g_icon_serialize) can be specified if the result can be better served with a thumbnail of the content (such as with images). 'gicon' (a serialized GIcon as obtained by g_icon_to_string) or 'icon-data' (raw image data as (iiibiiay) - width, height, rowstride, has-alpha, bits per sample, channels, data) are deprecated values that can also be used for that purpose. A 'description' field (string) may also be specified if more context would help the user find the desired result.

        Return an array of meta data used to display each given result
        **/
        GetResultMetas(identifiers: string[]): Promise<[/*metas*/{[key:string]:Variant}[]]>

        /**
        ActivateResult:
        @identifier: A result identifier as returned by GetInitialResultSet() or GetSubsearchResultSet()
        @terms: Array of search terms, which the provider should treat as logical AND.
        @timestamp: A timestamp of the user interaction that triggered this call

        Called when the users chooses a given result. The result should
        be displayed in the application associated with the corresponding
        provider. The provided search terms can be used to allow launching a full search in
        the application.
        **/
        ActivateResult(identifier: string, terms: string[], timestamp: number): Promise<[]>

        /**
        LaunchSearch:
        @terms: Array of search terms, which the provider should treat as logical AND.
        @timestamp: A timestamp of the user interaction that triggered this call

        Asks the search provider to launch a full search in the application for the provided terms.
        **/
        LaunchSearch(terms: string[], timestamp: number): Promise<[]>
      }
      export namespace Wacom {

        /**
        org.gnome.Shell.PadOSD:
        @short_description: Pad OSD interface

        The interface used to show button map OSD on pad devices.
        **/
        export interface PadOsd {

          /**
          Show:
          @device_node: device node file, usually in /dev/input/...
          @edition_mode: whether toggling edition mode on when showing

          Shows the pad button map OSD for the requested device, the OSD
          will be shown according the current device settings (output
          mapping, left handed mode, ...)
          **/
          Show(device_node: ObjectPath, edition_mode: boolean): Promise<[]>
        }
      }
    }
  }
}
