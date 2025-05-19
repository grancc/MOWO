from PIL import Image
import uuid
from io import BytesIO

from django.core.files.uploadedfile import InMemoryUploadedFile
from django.db import models


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
    

class Employees(models.Model):
    name = models.CharField(max_length=255, verbose_name='имя')
    position = models.CharField(max_length=255, verbose_name='должность')
    image = models.ImageField(verbose_name='фотография сотрудника', upload_to='employees/')


    class Meta:
        verbose_name = "сотрудник"
        verbose_name_plural = "сотрудники"


    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        name = str(uuid.uuid1())
        img = Image.open(self.image)
        img_io = BytesIO()
        img.save(img_io, format="WebP")
        img_file = InMemoryUploadedFile(
            img_io, None, f"{name}.webp", "image/webp", img_io.tell(), None
        )
        self.image.save(f"{name}.webp", img_file, save=False)

        super(Employees, self).save(*args, **kwargs)
