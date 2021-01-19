# Gatsblog notes
This is an intro project to start a blog with Gatsby and deploy it via s3 (because I'm cheap)

## WHY
I think it's important to know how to write 

## How
It takes posts written in markdown from the `src/posts` directory and displays them on the page

You can create new posts with the `new-post.js` file. Admittedly I didn't add a lot of validation to it, but titles should be url friendly and dasherized.

## Deploy
- Build the project `npm run build`
- Setup the bucket (if applicable) by running terraform apply
- deploy with `aws s3 cp --recursive public/ s3://blog4`

LOOK HOW EASY IT IS

## TODO
Whether it's in this project or a brand new one:

 - Add Tailwind for layout stuff
 - Decide whether you _really_ want css modules
 - Style it with something other than a css reset...
 - Make `new-post.js` more foolproof

Setup a github action to deploy on commits (since that's how you'd need to post)