from django.contrib import admin
from .models import *

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    pass


@admin.register(ImageModel)
class ImageModelAdmin(admin.ModelAdmin):
    pass