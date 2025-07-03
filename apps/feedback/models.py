from django.db import models

class FeedBack(models.Model):
    name = models.CharField("Имя", max_length=255)
    number = models.CharField("Номер телефона", max_length=20)
    email = models.CharField("Почта", max_length=255)
    company = models.CharField("омпания", max_length=255)
    message = models.TextField("Сообщение", blank=True, null=True)

    class Meta:
        verbose_name = "заявка"
        verbose_name_plural = "Заявки"

    def __str__(self):
        return f"{self.name} {self.number}"