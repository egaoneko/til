# Today I Learned

Donghyun's TIL

## References
- [JayJin's TIL](https://github.com/milooy/TIL)
- [thoughtbot til](https://github.com/thoughtbot/til)

## Guides
- [Guides](https://github.com/thoughtbot/guides)
- [GFM (Github Flavored Markdown)](https://help.github.com/articles/github-flavored-markdown/)
- Create folder by using a name about language or technology. (avoid creating a document in root)

## Avoid
- Avoid writing more than 60 lines of content.
- Avoid writing more than 2 examples.
- Avoid going into too much detail.
- Avoid writing TIL's that explicitly violate our guides.

## Local Environment
- [gollum](https://github.com/gollum/gollum)
- [pow](http://pow.cx/)
- [anvil](http://anvilformac.com/)

### Install gollum
```bash
$ [sudo] gem install gollum
```

### Install & Uninstall pow
```bash
$ curl get.pow.cx | sh

$ curl get.pow.cx/uninstall.sh | sh
```

Set up a Rack app, just symlink it into ``~/.pow`` and open [http://til.wiki.dev/](http://til.wiki.dev/)

```bash
$ cd ~/.pow
$ ln -s path/to/this_local_repo til.wiki
```




### Install Anvil
GUI pow tool Anvil [http://anvilformac.com/](http://anvilformac.com/)