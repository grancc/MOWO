#!/bin/sh

echo "Происходит минификация CSS-файлов..."
for file in /usr/src/app/static/css/*.css; do
    uglifycss "$file" > temp.css
    mv temp.css "$file"
    echo "Файл $file минифицирован"
done

echo "Происходит минификация JS-файлов..."
for file in /usr/src/app/static/js/*.js; do
    uglifyjs "$file" --compress --mangle -o "$file"
    echo "Файл $file минифицирован"
done

python manage.py runserver 0.0.0.0:8000

wait