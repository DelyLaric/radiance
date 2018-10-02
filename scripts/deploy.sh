#!/usr/bin/env sh

set -e

yarn run docs:build

cd ./dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:vue-radiance/vue-radiance.github.io.git master

cd -
