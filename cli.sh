#!/bin/bash

# Always build before running CLI
npm run build > /dev/null

# Run the built CLI with all passed args
node dist/bin/cli.js "$@"