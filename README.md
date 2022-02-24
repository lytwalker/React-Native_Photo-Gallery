# Woof App - (React-Native_Photo-Gallery)

General

-   Using Expo instead of React Native CLI seemed like the quickest way for someone like me whose working getting a handle on the fundamentals...Plus I don't have an Apple laptop or other device so I thought it would be easier to test when I borrowed one.

-   App structure started from:

    -   React Native Express - [Photo Gallery](https://www.reactnative.express/exercises/photo_gallery) Exercise.

          -   Sticking with the fetch API to make requests seemed to the easiest way to modify for use with the DOG API.

          -   Postman used to testing API.

-   "@react-navigation/native" & "@react-navigation/stack" as recommended by 2 tutorials:

    -   React Native Express - [Navigation](https://www.reactnative.express/app/navigation).

    -   React Navigation - [Hello React Navigation](https://reactnavigation.org/docs/hello-react-navigation).

-   Configured App Icons and Splash Screen using Expo Docs - [Configuring a splash screen and app icon](https://docs.expo.dev/tutorial/configuration/) guide.

    -   Althought the new versions don't appear to be reflecting on my devices. I'm thinking caching. I haven't figured out how to correct it.

-   Unfortunately not yet setup to work offline.

Welcome Screen

-   Used "expo-linear-gradient"

    -   Seemed like the easiest to implement using Expo.

-   Background styling approach tweaked from [Expo Docs](https://docs.expo.dev/versions/latest/sdk/linear-gradient/) as well as [How to Create Gradients in React Native](https://instamobile.io/mobile-development/gradients-react-native/) tutorial.

-   Background image sourced from [Dreamstime](https://www.dreamstime.com/royalty-free-stock-images-dogs-dog-park-training-image4492729).

-   [How to Build an Android News App with React Native and Native Base](https://www.freecodecamp.org/news/build-an-android-news-app-with-react-native-and-native-base/) tutorial to retrieve the list of breeds.

-   I haven't been able properly/uniformly style the grid of buttons on the screen.

  
  Details Screen

-   I used the first recommended approach from this [Downloading a file (with expo) - Why is this so hard?](https://stackoverflow.com/questions/51353224/downloading-a-file-with-expo-why-is-this-so-hard) Stack Overflow page because it was the easiest to get up and running quickly. However, despite working, it uses a deprecated "*expo-permissions*" library.

    -   I started looking into the approach suggested the Expo - API Reference - [FileSystem](https://docs.expo.dev/versions/latest/sdk/filesystem/), however I didn't manage to get it working with a chosen dog image from the Dog Details screen on time.

-   Sharing functionality using "expo-image-picker" and "expo-sharing" I picked up from the Expo Docs [Sharing the image](https://docs.expo.dev/tutorial/sharing/) section.
