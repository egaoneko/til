# cmder

## start directory change

* Settings > Tasks > Predefined tasks > `{cmd::Cmder}`

AS IS:

```sh
cmd /k "%ConEmuDir%\..\init.bat" -new_console:d:%USERPROFILE%
```

TO BE:

```sh
cmd /k "%ConEmuDir%\..\init.bat" -new_console:d:G:\myfoldername
```
