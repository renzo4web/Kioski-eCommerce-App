# Kioski eCommerce App | React Native + Typescript

## Demo

<div>
<img src="https://res.cloudinary.com/turbopila/image/upload/v1632369109/e9787752-cb50-463b-a798-6571243b0452_lbrgbs.gif" alt="favorites" width="250">

<img src="https://res.cloudinary.com/turbopila/image/upload/v1632369105/7016be97-bb22-4c42-b15b-8da6190254ed_vzkpag.gif" alt="favorites" width="250">

<img src="https://res.cloudinary.com/turbopila/image/upload/v1632369105/3877e5f1-3440-48cb-a55f-a3a9d7d0fc7f_jhp4ej.gif" alt="favorites" width="250">
</div>


### Feautures

- Add product to favorites
- Filter products by categories
- Buy products and receive an order with quantity purchased and a order id


> use api context as global status handler

### Backend  | API

- https://fakestoreapi.com/

# How to build/run the projects

## General requirements before running any specific project

- `npm install` to install all the dependencies, React and React Native among others.

### With some versions of npm (>=v3.3.10 <=v3.6.0)

Some builds from npm included bugs while `npm install`. So if you are using a npm version within the range form 3.3.10 to 3.6.0 included, you must run `npm install` twice. Those versions including npm v3.3.12 are the ones bundled by default with node from version v5.1.0 to v5.5.0.

- `npm install npm`
- `npm install npm` run it twice, because of the packages won't be installed after the first run [#10985](https://github.com/npm/npm/issues/10985)

## The Mobile Apps (iOS & Android)

### Requirements for React Native

#### iOS

- OS X
- Xcode 6.3 or higher is recommended (Xcode only runs on Mac).
- Homebrew is the recommended way to install node, watchman, and flow.
- `brew install node`
- `brew install watchman`. We recommend installing watchman, otherwise you might hit a node file watching bug.
- `brew install flow`. If you want to use flow.

#### Android

- Follow the official documentation guide here: http://facebook.github.io/react-native/docs/getting-started.html#android-setup (includes experimental Windows & Linux support)

### Running the Mobile Apps

#### iOS

- Open iosApp.xcodeproj and hit run in Xcode.
- Hit cmd+R in your iOS simulator to reload the app and see your change!

#### Android

- Open an emulator. (Genymotion or run `android avd`)
- Run the `react-native run-android` in the root of this project.
- If trying to run on a device, read the following guide: http://facebook.github.io/react-native/docs/running-on-device-android.html#content

Congratulations! You've just successfully run the project as an iOS or Android App.
