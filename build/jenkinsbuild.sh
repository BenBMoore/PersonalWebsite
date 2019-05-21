#!/bin/bash

npm install
echo "Install Gulp and Dependancies"
gulp --version || npm install || exit 1;

gulp || exit 1