# mobileautomation--codeceptjs

# Description

# Tools
- Visual Studio Code
- Codeceptjs
- Appium
- Real Devices

# How to setup tools
## Appium
- Check your system is ready for mobile testing
```bash
npm i -g appium-doctor
```
- Download and install Appium
```bash
npm i -g appium
```
- Launch Appium
```bash
appium
```
To run mobile test you need either an device emulator (available with Android SDK or iOS), real device connected for mobile testing.

## ADB (Android Debug Bridge)
- Download the [ADB zip](https://dl.google.com/android/repository/platform-tools-latest-darwin.zip) file for the macOS
- Extract the ZIP to an easily-accessible location (ex: Desktop)
- Open terminal & browse to the folder you extracted ADB into
```bash 
cd /Users/kevan/Desktop/platform-tools/
```
- Connect your device to your Mac with a compatible USB cable. Change the USB connection mode to “file transfer (MTP)” mode.
- Once the Terminal, you can execute the following command to launch the ADB daemon: 
```bash
adb devices
```
- On your device, you’ll see an “Allow USB debugging” prompt. Allow the connection
- Re-enter the command and you should now see your device’s serial number in macOS’s Terminal.
```bash
adb devices
```
## Codeceptjs
- Install codeceptJS
```bash
npx create-codeceptjs .
```
- Initialize CodeceptJS & select Appium helper
```bash
npx codeceptjs init
```
- Edit appium helper on codecept.conf.js file 
```
  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      app: "/Users/kata/Desktop/automation/Flutter Galery/app/Flutter Gallery_2.8.1_apk-dl.com.apk",
      platform: "Android",
      desiredCapabilities: {
        platformName: "Android",
        platformVersion: "your device OS version",
        deviceName: "your device name",
        appActivity: "io.flutter.demo.gallery.MainActivity",
      }
    }
  }
```
- Initialize BDD
```bash
npx codeceptjs gherkin:init
```

# How to run 
- Install npm 
```bash 
npm i 
```
- Run the script
```bash
npx codeceptjs run --features
```