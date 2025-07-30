from PIL import Image
import uuid
from io import BytesIO

from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models

from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver


class Vacancies(models.Model):
    name = models.CharField(max_length=255, verbose_name='имя')
    content = models.TextField(
        verbose_name="описание вакансии", 
        help_text='поддерживается markdown'
    )
    slug = models.SlugField(verbose_name='ссылка для вакансии', help_text='например, main-architect')

    class Meta:
        verbose_name = "вакансия"
        verbose_name_plural = "вакансии"


    def __str__(self):
        return self.name
    

class Contact(models.Model):
    name = models.CharField(max_length=255, verbose_name='наименование')
    url = models.CharField(max_length=255, verbose_name='ссылка')

    class Meta:
        verbose_name = "контакт"
        verbose_name_plural = "контакты"


    def __str__(self):
        return self.name
    

class Employees(models.Model):
    name = models.CharField(max_length=255, verbose_name='имя')
    position = models.CharField(max_length=255, verbose_name='должность')
    image = models.ImageField(verbose_name='фотография сотрудника', upload_to='employees/')


    class Meta:
        verbose_name = "сотрудник"
        verbose_name_plural = "сотрудники"


    def __str__(self):
        return self.name

@receiver(pre_delete, sender=Employees)
def image_model_delete(sender, instance, **kwargs):
    print(instance.image)
    if instance.image.name:
        instance.image.delete(False)

