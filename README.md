# CHBS Passwords

CHBS passwords generates passwords in the style of Correct Horse Battery Staple as shown by the xkcd comic [Password Strength](https://xkcd.com/936/). It works entirely through the CLI making all passwords generated local on your hardware.

Just install and run `chbs` or if you're on macOS run `npx chbs-passwords`

Directly inspired by [quantum5](https://github.com/quantum5/correcthorsebatterystaplehttps://github.com/quantum5) and his [correcthorsebatterystaple website](https://correcthorse.pw/).

## Requirements

- Node.js

## Options

```bash
chbs                  generate password

--mw, --minwords      set the minimum amount of words. [number] [default: 4]

--wl, --wordlist      set the word list length (small: 4096, large: 8192) [string] [default: "small"]

--s, --separator      separator used between letters. [string] [default: "-"]

--tc, --titlecase     every word is title cased. [boolean] [default: true]

--rn, --randomnumber  append a random number to the end. [boolean] [default: true]

--h, --help           Show help
```

## Install

```bash
npm install -g chbs-passwords
```

## Uninstall

```bash
npm uninstall -g chbs-passwords
```
