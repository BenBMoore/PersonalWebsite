#!/bin/bash

touch ~/.profile && source ~/.profile;
. ~/.nvm/nvm.sh
. ~/.profile
. ~/.bashrc
nvm current || echo "SSH NVM is being installed" &&  touch ~/.profile && curl -sL https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh -o install_nvm.sh && bash install_nvm.sh && source ~/.profile

echo "checking nvm"
bash ~/.nvm/nvm.sh;
nvm --version || exit 1;

nvm install node

nvm install -g gulp

gulp --version