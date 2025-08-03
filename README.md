# QR Code Scanner & Generator App

A React Native app that allows users to scan QR codes and generate QR codes from text.

## Features

- **QR Code Scanner**: Scan QR codes using the device camera
- **QR Code Generator**: Generate QR codes from text input
- **Camera Capture**: Take pictures with the camera
- **Mobile Responsive**: Optimized for both iOS and Android
- **Modern UI**: Clean and intuitive user interface

## Screens

1. **Home Screen**: Main screen with navigation buttons
2. **Camera Screen**: Camera interface for scanning QR codes and taking pictures
3. **QR Generator Screen**: Generate QR codes from text input

## Navigation

- Tap "Open Camera" to access the camera scanner
- Tap "Generate QR Code" to create QR codes from text
- Use the back button to navigate between screens

## Camera Features

- Real-time QR code scanning
- Picture capture functionality
- Permission handling for camera access
- Flash control and camera settings

## QR Code Features

- Generate QR codes from any text input
- Real-time QR code preview
- Clean, scannable QR code output

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. For iOS:
   ```bash
   cd ios && pod install && cd ..
   ```
4. Run the app:

   ```bash
   # For iOS
   npx react-native run-ios

   # For Android
   npx react-native run-android
   ```

## Dependencies

- `react-native-camera`: Camera functionality
- `react-native-permissions`: Permission handling
- `react-native-qrcode-svg`: QR code generation
- `react-native-svg`: SVG support
- `@react-navigation/native`: Navigation
- `@react-navigation/stack`: Stack navigation
- `react-native-gesture-handler`: Gesture handling

## Permissions

The app requires camera permissions to function properly. The app will request permissions when needed.

## Development

The app is built with TypeScript and follows React Native best practices. All components are mobile responsive and optimized for performance.
