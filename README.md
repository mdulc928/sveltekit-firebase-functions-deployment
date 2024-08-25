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
