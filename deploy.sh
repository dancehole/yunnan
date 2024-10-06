#!/usr/bin/env sh

# 确保脚本抛出遇到错误
set -e

git init
git add -A
git commit -m 'auto update https://github.com/wugenqiang/vuepress-demo.git'
git push -f https://github.com/wugenqiang/vuepress-demo.git master

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'auto update https://github.com/wugenqiang/vuepress-demo.git'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

#git push -f https://github.com/wugenqiang/vuepress-demo.git master:gh-pages

git push -f https://github.com/wugenqiang/vuepress-demo.git master:gh-pages


cd -