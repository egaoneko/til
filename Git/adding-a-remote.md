# Adding a remote

```bash
git remote add origin https://github.com/user/repo.git
# Set a new remote

git remote -v
# Verify new remote
origin  https://github.com/user/repo.git (fetch)
origin  https://github.com/user/repo.git (push)
```

### Troubleshooting

```bash
git remote add origin https://github.com/octocat/Spoon-Knife
fatal: remote origin already exists.
````

#### [Rename](https://help.github.com/articles/renaming-a-remote/)

```bash
git remote -v
# View existing remotes
origin  https://github.com/OWNER/REPOSITORY.git (fetch)
origin  https://github.com/OWNER/REPOSITORY.git (push)

git remote rename origin destination
# Change remote name from 'origin' to 'destination'

git remote -v
# Verify remote's new name
destination  https://github.com/OWNER/REPOSITORY.git (fetch)
destination  https://github.com/OWNER/REPOSITORY.git (push)
```

#### [Delete](https://help.github.com/articles/removing-a-remote/)

```bash
git remote -v
# View current remotes
origin  https://github.com/OWNER/REPOSITORY.git (fetch)
origin  https://github.com/OWNER/REPOSITORY.git (push)
destination  https://github.com/FORKER/REPOSITORY.git (fetch)
destination  https://github.com/FORKER/REPOSITORY.git (push)

git remote rm destination
# Remove remote
git remote -v
# Verify it's gone
origin  https://github.com/OWNER/REPOSITORY.git (fetch)
origin  https://github.com/OWNER/REPOSITORY.git (push)
```

### Reference

* [Adding a remote](https://help.github.com/articles/adding-a-remote/)