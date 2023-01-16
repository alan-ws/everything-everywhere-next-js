#!/usr/bin/env bash

echo "CLEAN UP"
find .vercel -name '*.js.map' -print
find .vercel -name '*.js.map' -delete
