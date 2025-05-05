#!/bin/sh

echo "Waiting for Redis..."
while ! nc -z redis 6379; do
  sleep 0.5
done
echo "Redis is up!"

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

celery -A core worker -l info -P prefork &
celery -A core beat -l info &
celery -A core flower -l info &

python manage.py runserver 0.0.0.0:8000

wait