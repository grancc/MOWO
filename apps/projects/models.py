import uuid
from PIL import Image
from io import BytesIO

from django.db import models
from django.core.files.uploadedfile import InMemoryUploadedFile

class ImageModel(models.Model):
    """Модель для изображений"""
    image = models.ImageField(upload_to="images/%Y/%m/%d/", verbose_name="изображение",
                            help_text="все форматы(кроме svg) конвертируются в webp",)

    def save(self, *args, **kwargs):
        name = str(uuid.uuid1())
        img = Image.open(self.image)
        img_io = BytesIO()
        img.save(img_io, format="WebP")
        img_file = InMemoryUploadedFile(
            img_io, None, f"{name}.webp", "image/webp", img_io.tell(), None
        )
        self.image.save(f"{name}.webp", img_file, save=False)

        super(ImageModel, self).save(*args, **kwargs)

    class Meta:
        verbose_name = ("фото")
        verbose_name_plural = ("фото")

    def __str__(self):
        return f"{self.image}"

class Project(models.Model):
    name = models.CharField(max_length=255, verbose_name='наименование')
    main = models.BooleanField(default=False, verbose_name='главный проект?')
    direction = models.CharField(max_length=255, verbose_name='направление')
    location = models.CharField(max_length=255, verbose_name='локация')
    status = models.CharField(max_length=255, verbose_name='статус')
    square = models.CharField(max_length=255, verbose_name='площадь')
    year = models.CharField(max_length=255, verbose_name='год')
    photos = models.ManyToManyField(ImageModel, verbose_name="фотографии проекта", blank=True)

    class Meta:
        verbose_name = "проект"
        verbose_name_plural = "проекты"


    def __str__(self):
        return self.name
    
    