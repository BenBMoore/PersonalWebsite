#!/bin/bash

touch ~/.profile && source ~/.profile;
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc
nvm current || echo "SSH NVM is being installed" &&  touch ~/.profile && curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh -o install_nvm.sh && bash install_nvm.sh && source ~/.profile

echo "checking nvm"
bash ~/.nvm/nvm.sh;
nvm --version || exit 1;

echo "Checking Node"
nvm use default || nvm install node || nvm use default || exit 1

echo "Is Gulp Installed?"
gulp --version || npm install -g gulp || exit 1;

gulp || exit 1