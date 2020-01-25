#!/bin/bash

setup_homebrew() {
	if [[ ! $(which brew) ]] && [[ ! $(brew --version &> /dev/null) ]]; then
		echo -e "\nCould not find existing HOMEBREW installation."
		echo -e "\nNow installing..."
		/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
	fi
}
