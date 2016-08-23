# Update a GitHub forked repository

```bash
# Add the remote, call it "upstream":

git remote add upstream https://github.com/whoever/whatever.git

# Fetch all the branches of that remote into remote-tracking branches,
# such as upstream/master:

git fetch upstream

# Make sure that you're on your master branch:

git checkout master

# Rewrite your master branch so that any commits of yours that
# aren't already in upstream/master are replayed on top of that
# other branch:

git rebase upstream/master
```

```bash
# If you've rebased your branch onto upstream/master
# you may need to force the push in order to push it
# to your own forked repository on GitHub.

git push -f origin master
```

### Reference

* [stack overflow](http://stackoverflow.com/questions/7244321/how-do-i-update-a-github-forked-repository)