gridsome build
rm ../docs
mv dist ../docs
cd ..
git add .
git commit -m "publishing"
git push origin dev
git push origin dev:master