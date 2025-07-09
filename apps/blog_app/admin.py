from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from django.contrib import admin
from django.template.loader import render_to_string
from django.http import HttpResponseRedirect

from image_cropping import ImageCroppingMixin
from easy_thumbnails.files import get_thumbnailer
from django.utils.html import format_html
from django import forms

from django.urls import reverse

from .models import *

# class MyModelForm(forms.ModelForm):
#     class Meta:
#         model = BlogImageModel
#         fields = '__all__'

# from urllib.parse import urlencode
# class MyModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
#     form = MyModelForm

#     def response_add(self, request, obj, post_url_continue=None):
#         base_url = reverse('admin:blog_app_blogimagemodel_change', args=(obj.pk,))
#         get_params = request.GET.copy()  # копируем текущие GET параметры
#         query_string = urlencode(get_params)
#         url = f"{base_url}?{query_string}" if query_string else base_url
#         return HttpResponseRedirect(url)
    
#     def response_change(self, request, obj):
#         # Проверяем, что запрос идет из popup
#         if "_popup" in request.GET:
#             # Возвращаем скрипт для уведомления родителя об изменениях
#             popup_response_str = (
#                 f'data-popup-response="{{&quot;value&quot;: &quot;{obj.pk}&quot;, &quot;obj&quot;: &quot;{str(obj)}&quot;}}"'
#             )
#             return HttpResponse(
#                 '<html><head><title>Всплывающее окно закрывается...</title></head>'
#                 '<body>'
#                 '<script id="django-admin-popup-response-constants"'
#                 'src="/static/admin/js/popup_response.js"'
#                 f'{popup_response_str}>'
#                 '</script>'
#                 '</body></html>'
#             )
#         else:
#             # Стандартное поведение
#             return super().response_change(request, obj)

# admin.site.register(BlogImageModel, MyModelAdmin)


@admin.register(BlogImageModel)
class BlogImageModelAdmin(admin.ModelAdmin):
    pass

@admin.register(BlogBlocks)
class BlogBlocksAdmin(admin.ModelAdmin):
    pass


class ArticleAdmin(admin.ModelAdmin):
    change_form_template = "admin/article_change_form.html"

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path(
                '<path:object_id>/preview/',
                self.admin_site.admin_view(self.preview_view),
                name='article-preview',
            ),
        ]
        return custom_urls + urls

    def preview_view(self, request, object_id):
        obj = self.get_object(request, object_id)
        if not obj:
            return HttpResponse("Объект не найден", status=404)

        html_content = render_to_string('admin/article-preview.html', {'blog_obj': obj})

        return HttpResponse(html_content)

admin.site.register(Article, ArticleAdmin)