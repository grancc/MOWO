from typing import Any

from django.views.generic import TemplateView

from apps.about_app.models import Employees
from apps.pages_meta.models import PagesMeta

class HomeView(TemplateView):
    """View для отображения главной страницы"""

    template_name = "home/v4.html"
    success_url = "/"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)



        context["employees"] = Employees.objects.all()

        page_obj = PagesMeta.objects.get(name='Главная')
        context["title"] = page_obj.title
        context["description"] = page_obj.desc
        
        return context



