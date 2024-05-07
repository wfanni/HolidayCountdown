
# Holiday Countdown App - Frontend Challenge

This is a simple app that enables the user to personalize an event countdown to their selected date and add a title to it.

**Technologies used:**
- Angular & Typescript
- TailwindCSS & SASS
- additional package: [ng-fittext](https://www.npmjs.com/package/ng2-fittext)
- hosting: [angular-cli-ghpages](https://www.npmjs.com/package/angular-cli-ghpages) & Github

## Development

I started by setting up an Angular app, added the template html and set the logic behind.
- setting up template variables, event binding and interpolations
- writing logic for the variables and events to work in order to be able to change values of the event title and the datepicker
- using localstorage to save and keep the values entered by the user
- adding ng-fittext module to the template html to fit text to device width
- adding TailwindCSS to style the app according to the [mockup](https://www.figma.com/file/UPEugUz5jM9IzIkWft2Y9m/NC-challenge)
- refactoring and cleaning up the code
- setting up hosting with angular-cli-ghpages

## Additional thoughts

Last time I looked into Angular was years ago, so this was really a challenge for me. I started by watching an short course of Angular Essentials and read documentations on the go. Google also was my friend during the development. :grin: You can see I didn't really use Pipes and other useful features of Angular too much, for two reasons: this is a small app, that can be done without them in my opinion, and the fact that even though I looked into them, I'm still not that familiar with them.
I really liked the challenge, I took it on a personal level. Although it's for sure not the best solution, I'm really proud I could do it with close to zero experience with Angular.

**What I would improve/add:**

When developing, I like to think how apps can be improved, even if it includes bigger changes in the UI. I would make the text smaller, maybe even remove the fittext feature. I believe the text is just too big, and it could be difficult to use the app on different desktops, as they push the input fields out of view sometimes. I would also change the way the inputs work, maybe add a button to set and start the countdown. I feel like people are more used to using buttons in general. This would also result in changing the UI a little bit.\
:sparkles: I would also add a small firework gif or some animation if the countdown date get's to zero, just to show the user their event is today and bring a bit of playfulness into it.

# Link to the app

Please find the live app here: [Holiday Countdown App](https://wfanni.github.io/holiday-countdown/)

**Cheers!**
