from typing import Any

from django.views.generic import TemplateView
from apps.pages_meta.models import PagesMeta

class BlogView(TemplateView):
    """View для отображения страницы Блог"""

    template_name = "blog/index.html"
    success_url = "/"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        page_obj = PagesMeta.objects.get(name='Блог')
        context["title"] = page_obj.title
        context["description"] = page_obj.desc
        
        return context


