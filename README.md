> **(notice)** There is an even better way to deploy to Firebase functions with  `adapter-node`, so I am no longer recommending this way. I am making a new video about this and will update this repo for that (subscribe to know when it's becomes available - yes, I unashamedly growing my Youtube channel https://youtube.com/@melchisedekdulcio, and it costs you nothing to subscribe 😉)
>
> For the time being here is a real example of where I am using this new and simpler structure:: https://github.com/wfleu445/feeling-haiti-project/tree/main/landing-page. Pay attention to the `package.json`, `firebase_functions.js` and `svelte.config.js` of course. Also take note of where the Firebase files are and you will get a pretty decent idea of how to structure things.

# sveltekit-firebase-functions-deployment
This is the structure for a Sveltekit Firebase Hosting and Functions project. This was worth the 2 weeks spent trying to make everything work.

- make sure to `npm i` and `npm run build` which should generate the public directory for you.

# Notes
### Caveats
- Understand that you are working with a framework when you're working with Firebase functions.
  - There are things that you are not necessarily compatible within the 2 frameworks. For example,
    you need to create an entirely new Request when trying to interop between Firebase functions.
  - Cookies are complicated, you can read up about them in the Firebase Functions docs.
 
But seriously, if you don't remember anything else, remember this: Sveltekit and Firebase Functions and Hosting are completely separate frameworks. You'll have to learn the assumptions and implications of each framework for things to work well.

Hope this helps, thanks!

# Give this repo a star if it was helpful 😁
- Watch demo video here: https://youtu.be/Yle8DtdMYmo
  - Like and subscribe too if it was helpful since I'm still building the Youtube channel😁.
