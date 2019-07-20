gridsome build
mv dist ../docs
cd ..
git add .
git commit -m "publishing"
git push origin dev
git push origin dev:master