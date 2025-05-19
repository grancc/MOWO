from typing import Any

from django.views.generic import TemplateView

from apps.about_app.models import Employees


class OfficeView(TemplateView):
    """View для отображения страницы Офис"""

    template_name = "about/office.html"
    success_url = "/"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        context["employees"] = Employees.objects.all()

        context["title"] = 'Mowo'
        context["description"] = ''
        
        return context


class PortfolioView(TemplateView):
    """View для отображения страницы Работы"""

    template_name = "about/portfolio.html"
    success_url = "/"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        context["title"] = 'Mowo'
        context["description"] = ''
        
        return context