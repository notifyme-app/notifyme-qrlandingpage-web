# NotifyMe QR Entry Landing Page Web App

[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://github.com/notifyme-app/notifyme-sdk-backend/blob/master/LICENSE)

## Introduction
NotifyMe is a decentralised check-in system for meetings and events. Users can check in to a venue by scanning a QR Code. The check in is stored locally and encrypted. In case one of the visitors tests positive subsequent to a gathering, all other participants can be easily informed via the app. The implementation is based on the [CrowdNotifier White Paper](https://github.com/CrowdNotifier/documents) by Wouter Lueks (EPFL) et al. The app design, UX and implementation was done by [Ubique](https://ubique.ch/). More information can be found [here](https://notify-me.ch).

This web app serves content to devices that don't have the [NotifyMe App](https://notify-me.ch) installed, displaying the decoded QR entry code data, as well as information on where to install the app.

## Repositories
* Android SDK: [crowdnotifier-sdk-android](https://github.com/CrowdNotifier/crowdnotifier-sdk-android)
* iOS SDK: [crowdnotifier-sdk-ios](https://github.com/CrowdNotifier/crowdnotifier-sdk-ios)
* Android Demo App: [notifyme-app-android](https://github.com/notifyme-app/notifyme-app-android)
* iOS Demo App: [notifyme-app-ios](https://github.com/notifyme-app/notifyme-app-ios)
* Backend SDK: [notifyme-sdk-backend](https://github.com/notifyme-app/notifyme-sdk-backend)
* QR Generator Web App: [notifyme-qrgenerator-web](https://github.com/notifyme-app/notifyme-qrgenerator-web)
* QR Landing Page Web App: [notifyme-qrlandingpage-web](https://github.com/notifyme-app/notifyme-qrlandingpage-web)
* QR Trace Upload Web App: [notifyme-upload-web](https://github.com/notifyme-app/notifyme-upload-web)

## Work in Progress
The NotifyMe SDK Backend contains alpha-quality code only and is not yet complete. It has not yet been reviewed or audited for security and compatibility. We are both continuing the development and have started a security review. This project is truly open-source and we welcome any feedback on the code regarding both the implementation and security aspects.

## Further Documentation
The full set of documents for CrowdNotifier is at https://github.com/CrowdNotifier/documents. Please refer to the technical documents and whitepapers for a description of the implementation.

## Build
To build you need to install [yarn](https://yarnpkg.com/). The build scripts are defined in [package.json](package.json).

### Build and run locally
```bash
yarn install
yarn dev-server
```

### Build for production
```bash
yarn install
yarn build:<environment_to_build>
```
The [dist](dist) content can then be hosted as a static site.

## License
This project is licensed under the terms of the MPL 2 license. See the [LICENSE](LICENSE) file.
