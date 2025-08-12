from django.contrib import admin
from .models import PagesMeta, VectorBlocks, ProjectsBlocks, TehnologyBlocks, LoaderWord

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


@admin.register(LoaderWord)
class LoaderWordAdmin(admin.ModelAdmin):
    list_display = ("text", "position", "is_active")
    list_editable = ("position", "is_active")
    search_fields = ("text",)