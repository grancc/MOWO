from typing import Any

from django.views.generic import TemplateView, DetailView

from apps.about_app.models import Employees, Vacancies

class OfficeView(TemplateView):
    """View для отображения страницы Офис"""

    template_name = "about/office.html"
    success_url = "/"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        context["employees"] = Employees.objects.all()
        context["vacancies"] = Vacancies.objects.all()

        context["title"] = 'Mowo'
        context["description"] = ''
        
        return context


class VacanciesView(DetailView):
    """View для отображения страницы вакансии"""

    template_name = "about/vacancies-page.html"
    success_url = "/"
    model = Vacancies
    slug_url_kwarg = 'slug'
    context_object_name = 'vacancie'

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

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