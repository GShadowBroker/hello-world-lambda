#!/bin/bash

# Print commands
set -x

# Run the tests
npm test

# Check the exit code of the tests
if [ $? -eq 0 ]; then
  echo "All tests passed, deploying function..."
  # Deploy the function
  serverless deploy
else
  echo "Tests failed, fix it before deploying."
fi
