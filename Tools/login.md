# Login

## login.py

```python
import os
import configparser
import argparse
import subprocess


def run(args):
    config = get_cofig()
    servers = get_servers()
    server = servers[args.server]
    user = config['DEFUALT']['super_user'] if args.is_super else config['DEFAULT']['user']
    exec_cmd(user, server['name'])


def get_cofig():
    config = configparser.ConfigParser()
    config.read('settings.ini', encoding='utf8')
    return config


def get_servers():
    servers = {}
    with open('server.txt', 'r') as f:
        lines = f.readlines()
        for line in lines:
            if line[0] == '#':
                continue

            server = line.split()

            if len(server) != 3:
                continue

            servers[server[0]] = {
                'alias': server[0],
                'name': server[1],
                'ip': server[2]
            }
    return servers


def exec_cmd(user, server):
    args = ("rlogin", "-l", user, server)
    subprocess.call(args)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(prog = 'login', description='Login server helper', usage='%(prog) -s server [-su]')
    parser.add_argument('-s',
                        dest='server',
                        help='server name',
                        required=True)
    parser.add_argument('-su',
                        dest='is_super',
                        help='super user flag',
                        required=False,
                        action='store_true')
    args = parser.parse_args()

    run(args)
```

## server.txt

```
# description
alias  name   ip
```

## settings.ini

```ini
[DEFAULT]
user = user
super_user = root
```