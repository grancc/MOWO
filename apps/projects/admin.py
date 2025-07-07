from django.contrib import admin
from .models import *
from django.urls import path
from django.http import HttpResponse
from django.template.response import TemplateResponse
from django.contrib import admin
from .models import ProjectPage
from django.template.loader import render_to_string

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


class ProjectPageAdmin(admin.ModelAdmin):
    change_form_template = "admin/projectpage_change_form.html"

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path(
                '<path:object_id>/preview/',
                self.admin_site.admin_view(self.preview_view),
                name='projectpage-preview',
            ),
        ]
        return custom_urls + urls

    def preview_view(self, request, object_id):
        obj = self.get_object(request, object_id)
        if not obj:
            return HttpResponse("Объект не найден", status=404)

        html_content = render_to_string('admin/project-preview.html', {'project': obj})

        return HttpResponse(html_content)

admin.site.register(ProjectPage, ProjectPageAdmin)