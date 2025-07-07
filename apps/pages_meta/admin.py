from django.contrib import admin
from .models import *

@admin.register(PagesMeta)
class PagesMetaAdmin(admin.ModelAdmin):
    pass

@admin.register(VectorBlocks)
class VectorBlocksAdmin(admin.ModelAdmin):
    pass


@admin.register(ProjectsBlocks)
class ProjectsBlocksAdmin(admin.ModelAdmin):
    pass

@admin.register(TehnologyBlocks)
class TehnologyBlocksAdmin(admin.ModelAdmin):
    pass