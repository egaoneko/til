# Login Script

### login.sh

```bash
#!/bin/bash
echo "password" | certification

case "$1" in
        *) server="server";;
esac

case "$2" in
        su) rlogin -l rootuser $server;;
        *) rlogin -l user $server;;
esac
```

### profile

```bash
alias los="/home/user/login.sh" # bash
alias los '/home/user/login.sh' # csh
```