# Expo Workshop

## What is Expo?
Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.  [check the docs here](https://docs.expo.io/versions/latest/)

In other words, some cool guys decided to reduce our suffering by doing all the dirty work that we had to do with the mobile native code, deploying, and building so that we can just focus on what we're trying to build using our web development knowledge.

with Expo you spend most of your time writing react code and no dealing with native source code, which is awesome, right? because we're basicly web developers so this is heaven to us!


*BUT*, the sad thing is :cry: :cry: :cry: with all this magic there is some limitations, it doesn't contain all the libraries that you might need in your project and if you need one you just can't add it! OR you can eject and lose all the magic that Expo offers you! :cry: :cry: :cry:

Anyway for most of the projects this is not a problem unless you need something related to audio or video mostly.


## Enough talking, Let's get to business

### Installation

#### 1. Install Expo-cli

which is the local development tool

```npm install -g expo-cli```

#### 2. Install Expo client App for iOS and Android

Yes, you have to install a mobile app from your mobile store to run your project in development mode.

> Expo client is the tool you will use to run your projects while you're developing them. When you serve your project with Expo CLI, it generates a development URL that you can open in Expo client to preview your app.

You'll now what does this mean in a sec, just hold on with me...

#### Create a new app
in your command line:

```expo init```

You are adults you can figure out what to choose now!

But I prefer the tabs option because it initialize the routes and navigation for you, and you can look at the structure of their code which can inspire you in writing your own projects later.

after that write the name of your project and wait till it finish....


#### Start the app
```
cd yourApp
yarn start
```
A new window on your browser that looks like this will appear

![Expo Developer Window](Capture.PNG)

Now scan this QR code with your mobile camera and it should open the *Expo Client App* for you!

If you got lucky and there are no ports issues then _congratulations_ you've just run your first expo app! :tada: lololeesh

If you got stuck :cry: check the docs [here](https://docs.expo.io/versions/v35.0.0/get-started/create-a-new-app/)



