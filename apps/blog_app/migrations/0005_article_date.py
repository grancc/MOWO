# Generated by Django 5.1.6 on 2025-07-08 23:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog_app', '0004_article_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='date',
            field=models.DateField(auto_now=True, verbose_name='дата написания'),
        ),
    ]
