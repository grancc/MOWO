from PIL import Image
import uuid
from io import BytesIO

from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver


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
    

class Indexblocks(models.Model):
    title = models.CharField(max_length=255, verbose_name='название', null=True, blank=True)
    desc = models.TextField(verbose_name="краткое описание", null=True, blank=True)
    image = models.ImageField(verbose_name='фоновое фото', upload_to='index_blocks/')

    class Meta:
        abstract = True


    def __str__(self):
        return self.title
    
@receiver(pre_delete, sender=Indexblocks)
def image_model_delete(sender, instance, **kwargs):
    if instance.image.name:
        instance.image.delete(False)


class VectorBlocks(Indexblocks):
    class Meta:
        verbose_name = "блок"
        verbose_name_plural = "Блок с нашими направлениями"


class ProjectsBlocks(Indexblocks):
    class Meta:
        verbose_name = "блок"
        verbose_name_plural = "Блок с лучшими проектами"


class TehnologyBlocks(Indexblocks):
    class Meta:
        verbose_name = "блок"
        verbose_name_plural = "Блок с нашими технологиями"


class LoaderWord(models.Model):
    text = models.CharField(max_length=255, verbose_name="слово для прелоадера")
    position = models.PositiveIntegerField(default=0, verbose_name="порядок")
    is_active = models.BooleanField(default=True, verbose_name="активно")

    class Meta:
        ordering = ["position", "id"]
        verbose_name = "слово прелоадера"
        verbose_name_plural = "слова прелоадера"

    def __str__(self) -> str:
        return self.text