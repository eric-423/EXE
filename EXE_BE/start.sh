#!/bin/sh

npx sequelize-cli db:create

if [ "$(npx sequelize-cli db:migrate:status | grep -c 'up')" -eq 0 ]; then
    echo "Thực hiện migrate..."
    npx sequelize-cli db:migrate
fi

if [ ! -f /path/to/seed_done.flag ]; then
    echo "Thêm dữ liệu mẫu..."
    npx sequelize-cli db:seed:all
    touch /path/to/seed_done.flag 
else
    echo "Seed đã được thực hiện, bỏ qua bước này."
fi

node server.js

node server.js
