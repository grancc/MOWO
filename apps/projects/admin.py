from django.contrib import admin
from .models import *

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    pass


@admin.register(ImageModel)
class ImageModelAdmin(admin.ModelAdmin):
    pass


@admin.register(ProjectBlocks)
class ProjectBlocksAdmin(admin.ModelAdmin):
    pass

@admin.register(ProjectPeople)
class ProjectPeoplesAdmin(admin.ModelAdmin):
    pass

@admin.register(ProjectPage)
class ProjectPageAdmin(admin.ModelAdmin):
    pass