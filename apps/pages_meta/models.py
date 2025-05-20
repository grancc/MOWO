from django.db import models


class PagesMeta(models.Model):
    name = models.CharField(max_length=255, verbose_name='страница')
    title = models.CharField(max_length=255, verbose_name='тег title страницы')
    desc = models.TextField(
        verbose_name="тег description страницы"
    )

    class Meta:
        verbose_name = "страница"
        verbose_name_plural = "описание страниц"


    def __str__(self):
        return self.name
    

