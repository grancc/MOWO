from PIL import Image
import uuid
from io import BytesIO

from django.core.files.uploadedfile import InMemoryUploadedFile
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
    

class Indexblocks(models.Model):
    title = models.CharField(max_length=255, verbose_name='название')
    desc = models.TextField(verbose_name="краткое описание")
    image = models.ImageField(verbose_name='фоновое фото', upload_to='index_blocks/')

    class Meta:
        abstract = True


    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        name = str(uuid.uuid1())
        img = Image.open(self.image)
        img_io = BytesIO()
        img.save(img_io, format="WebP")
        img_file = InMemoryUploadedFile(
            img_io, None, f"{name}.webp", "image/webp", img_io.tell(), None
        )
        self.image.save(f"{name}.webp", img_file, save=False)

        super(Indexblocks, self).save(*args, **kwargs)


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
