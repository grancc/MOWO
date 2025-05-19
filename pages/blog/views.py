from typing import Any

from django.views.generic import ListView

from apps.blog_app.models import Articles


class BlogView(ListView):
    """View для отображения страницы Блог"""

    template_name = "blog/index.html"
    success_url = "/"
    model = Articles

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        context["title"] = 'Mowo'
        context["description"] = ''
        
        return context


