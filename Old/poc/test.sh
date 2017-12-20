#!/bin/bash

# export DEBUG="claimattest,dciota"

rm state.tmp
rm *.png
rm *.dat

node claimattest.js
mv attestedClaim.dat a1.dat
mv test.png t1.png
node claimattest.js
mv attestedClaim.dat a2.dat
mv test.png t2.png
node claimattest.js
mv attestedClaim.dat a3.dat
mv test.png t3.png

node verifier-app.js a2.dat
node verifier-app.js a1.dat
node verifier-app.js a3.dat
