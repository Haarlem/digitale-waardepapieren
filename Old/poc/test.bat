REM set %DEBUG="claimattest,dciota"

del state.tmp
del *.png
del *.dat

node claimattest.js
move attestedClaim.dat a1.dat
move test.png t1.png
node claimattest.js
move attestedClaim.dat a2.dat
move test.png t2.png
node claimattest.js
move attestedClaim.dat a3.dat
move test.png t3.png

node verifier-app.js a2.dat
node verifier-app.js a1.dat
node verifier-app.js a3.dat
