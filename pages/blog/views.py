from typing import Any

from django.views.generic import ListView, DetailView
from apps.pages_meta.models import PagesMeta
from apps.blog_app.models import Article

#from image_cropping.utils import get_backend

class BlogView(ListView):
    """View для отображения страницы Блог"""

    template_name = "blog/index.html"
    success_url = "/"
    model = Article
    context_object_name = "articles"
    paginate_by = 6

    def get_queryset(self):
        queryset =  super().get_queryset().filter(view=True)
        # for item in queryset:
        #     thumbnail_url = get_backend().get_thumbnail_url(
        #         item.photo.image,
        #         {
        #             'size': (430, 360),
        #             'box': item.photo.cropping,
        #             'crop': True,
        #             'detail': True,
        #         }
        #     )

        #     item.url = thumbnail_url
        return queryset


    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        page_obj = PagesMeta.objects.get(name='Блог')
        context["title"] = page_obj.title
        context["description"] = page_obj.desc
        
        return context
    

class ArticleView(DetailView):
    """View для отображения страницы Статьи"""

    template_name = "blog/articles/article_template.html"
    success_url = "/"
    model = Article
    context_object_name = "blog_obj"

    
    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        page_obj = PagesMeta.objects.get(name='Блог')
        context["title"] = page_obj.title
        context["description"] = page_obj.desc
        
        return context


