#!/bin/bash

echo "Is Gulp Installed?"
gulp --version || npm install -g gulp || exit 1;

gulp || exit 1