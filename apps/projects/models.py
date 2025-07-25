import uuid
from PIL import Image
from io import BytesIO

from django.db import models
from django.core.files.uploadedfile import InMemoryUploadedFile

from apps.about_app.models import Employees

class ImageModel(models.Model):
    """Модель для изображений"""
    image = models.ImageField(upload_to="images/%Y/%m/%d/", verbose_name="изображение",
                            help_text="все форматы(кроме svg) конвертируются в webp",)

    # def save(self, *args, **kwargs):
    #     name = str(uuid.uuid1())
    #     img = Image.open(self.image)
    #     img_io = BytesIO()
    #     img.save(img_io, format="WebP")
    #     img_file = InMemoryUploadedFile(
    #         img_io, None, f"{name}.webp", "image/webp", img_io.tell(), None
    #     )
    #     self.image.save(f"{name}.webp", img_file, save=False)

    #     super(ImageModel, self).save(*args, **kwargs)

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
    

class ProjectBlocks(models.Model):
    text = models.TextField('текст')
    photo = models.ForeignKey(ImageModel, verbose_name="фото", blank=True, on_delete=models.CASCADE, null=True)
    class Meta:
        verbose_name = "блок"
        verbose_name_plural = "Блоки на страницах проектов"

    def __str__(self):
        return f'Блок {self.id}'


class ProjectPeople(models.Model):
    position = models.CharField(max_length=255, verbose_name='Позиция')
    #empl = models.ForeignKey(Employees, verbose_name="участник", blank=True, on_delete=models.CASCADE)
    empl = models.CharField('имя', max_length=255)
    class Meta:
        verbose_name = "участник"
        verbose_name_plural = "Участники команды для проектов"

    def __str__(self):
        return f'{self.empl} ({self.position})'

class ProjectPage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, verbose_name='Проект', related_name='project_page')
    slug = models.SlugField(verbose_name='ссылка на проект')
    description = models.TextField(verbose_name='краткое описание проекта')
    cektor = models.CharField(max_length=255, verbose_name='сектор')
    blocks = models.ManyToManyField(ProjectBlocks, verbose_name='блоки проекта на странице')
    command = models.ManyToManyField(ProjectPeople, verbose_name="команда проекта")
    slider_one = models.ManyToManyField(ImageModel, verbose_name="фотографии проекта", blank=True, related_name='project_slider_one')
    slider_two = models.ManyToManyField(ImageModel, verbose_name="фотографии чертежей и фасадов", blank=True, related_name='project_slider_two')

    view = models.BooleanField('Отображать?', help_text='Сделать видимым на сайте', default=False)
    
    class Meta:
        verbose_name = "проект"
        verbose_name_plural = "Страницы для проектов"


    def __str__(self):
        return self.project.name
    
    
