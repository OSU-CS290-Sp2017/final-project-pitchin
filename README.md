# How to make a new branch
First create the branch w/ this command: `git branch branch-name`

Then check out the branch with: `git checkout branch-name`

Then to add and commit changes to your branch use: `git add/commit/push w/ name of file`

Pushing branch to GitHub    `git push origin branch_name`

Use `git status` to check on your branch and see what branch you are on

Then to get onto the master you better **make a pull request fool**. 

To merge master into your branch: `git merge master`

Check this out! https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging

Font: 

Add this to html: `<link href="https://fonts.googleapis.com/css?family=Pragati+Narrow" rel="stylesheet">`

Add this to css: `font-family: 'Pragati Narrow', sans-serif;`

# How to compile React stuff
This is only if you want to add/edit react components. Otherwise, you can just open `react.html` in a browser from your file explorer. 

## Set it up to compile everytime you save a file
You have to do this on your local computer, not on putty!
1. Run `npm install`
2. Run `npm run dev`
3. Go to `localhost:8080/react.html` in a browser
4. Make dope components

## Compile manually
Run `webpack`