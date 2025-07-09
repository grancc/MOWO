import uuid
from PIL import Image
from io import BytesIO
from image_cropping import ImageRatioField

from django.db import models
from django.core.files.uploadedfile import InMemoryUploadedFile

class BlogImageModel(models.Model):
    """Модель для изображений"""
    image = models.ImageField(upload_to="images/%Y/%m/%d/", verbose_name="изображение",
                            help_text="все форматы(кроме svg) конвертируются в webp",)
    
    #cropping = ImageRatioField('image', free_crop=True, allow_fullsize=True)

    def save(self, *args, **kwargs):
        name = str(uuid.uuid1())
        img = Image.open(self.image)
        img_io = BytesIO()
        img.save(img_io, format="WebP")
        img_file = InMemoryUploadedFile(
            img_io, None, f"{name}.webp", "image/webp", img_io.tell(), None
        )
        self.image.save(f"{name}.webp", img_file, save=False)

        super(BlogImageModel, self).save(*args, **kwargs)

    class Meta:
        verbose_name = ("фото")
        verbose_name_plural = ("фото")

    def __str__(self):
        return f"{self.image}"

class BlogBlocks(models.Model):
    title = models.CharField('Заголовок', max_length=255, null=True, blank=True)
    text = models.TextField('текст')
    photo = models.ManyToManyField(BlogImageModel, verbose_name="фото", blank=True)
    slider = models.BooleanField('Слайдер?', default=False)
    class Meta:
        verbose_name = "блок"
        verbose_name_plural = "Блоки на страницах статьи"

    def __str__(self):
        return f'Блок {self.id}'

class Article(models.Model):
    name = models.CharField(max_length=255, verbose_name='наименование')
    slug = models.SlugField('ссылка на статью')
    photo = models.ForeignKey(BlogImageModel, verbose_name="главная фотография статьи", blank=True, on_delete=models.CASCADE, null=True)
    blocks = models.ManyToManyField(BlogBlocks, verbose_name='Блоки внутри статьи')
    date = models.DateField(auto_now_add=True, verbose_name='дата написания')
    view = models.BooleanField(default=False, verbose_name='Отображать на сайте?')

    class Meta:
        verbose_name = "статья"
        verbose_name_plural = "статьи"


    def __str__(self):
        return self.name
    
