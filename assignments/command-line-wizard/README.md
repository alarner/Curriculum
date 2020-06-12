# Command Line Wizard

Your goal is to complete all of the following tasks by **only using the command line and your code editor**. At the end of the assignment you'll submit a history of all of the commands you typed into your terminal.

## First some practice...

1. In your home directory create a new directory called `codefriends`. This is where we will keep all of the notes and projects that we work on together. Each lesson will have it's own directory inside of `codefriends`.
2. Inside of the newly created `codefriends` directory create a new directory called `001-command-line`.
3. Inside of `001-command-line` create a new file called `notes.md` and a new directory called `projects`.
4. Using the command line open `notes.md` in your code editor. Write down at least three things you learned in class and save the file.
5. Go back to your the `codefriends` directory and run the `tree` command. The output should look like this:
    ```
    ~/codefriends: tree
    .
    └── 001-command-line
        ├── notes.md
        └── projects
    ```
6. If your tree looks different then use `mv`, `rm`, and / or `rmdir` to restructure it to match above.
7. Inside of the `~/codefriends/001-command-line/projects` directory create a new directory called `command-line-wizard`.
7. Copy the output of the `tree` command you ran above and put it inside of `~/codefriends/001-command-line/projects/command-line-wizard/tree.out`.

## Let's make this easier for next time...

Notice the directory structure that you have created inside of `codefriends`. Each day we meet we will replicate this directory structure with a slightly different name, but it will always have `notes.md` and a `projects` directory. Create a bash script called `newday.sh` that will perform the necessary commands to replicate this directory structure. The bash script should take one argument that is the name of the day (eg. `./newday.sh 001-command-line`) and create that directory with a `notes.md` file and a `projects` directory.

## Bonus #1

> Not required but a good challenge if you have extra time

[Read this article on PATH variables](http://www.linfo.org/path_env_var.html) and see if you can figure out how to improve your terminal setup so that you can run `newday.sh` from anywhere.

## Bonus #2

> Not required but a good challenge if you have extra time

Wouldn't it be cool to automatically increment the number at the beginning of the day rather than having to remember if it's day 5 or 6 or 7? Update your bash script to automatically prefix the directory with the next day number. For example `./newday.sh html-css` should automatically create a directory called `002-html-css` if there is already a directory that starts with 001 or `003-html-css` if there are already directories that start with 001 and 002.