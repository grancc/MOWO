from typing import Any

from django.views.generic import TemplateView, DetailView

from apps.about_app.models import Employees, Vacancies
from apps.pages_meta.models import PagesMeta
from apps.projects.models import Project, ProjectPage

class OfficeView(TemplateView):
    """View для отображения страницы Офис"""

    template_name = "about/office.html"
    success_url = "/"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        context["employees"] = Employees.objects.all()
        context["vacancies"] = Vacancies.objects.all()

        page_obj = PagesMeta.objects.get(name='Офис')
        context["title"] = page_obj.title
        context["description"] = page_obj.desc
        
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

        # context["title"] = f'MOWO Вакансия {context['vacancie'].name}'
        # context["description"] = f'MOWO Вакансия {context['vacancie'].name}'
        
        return context
    

class PortfolioView(TemplateView):
    """View для отображения страницы Работы"""

    template_name = "about/portfolio.html"
    success_url = "/"

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        page_obj = PagesMeta.objects.get(name='Работы')
        context["projects"] = Project.objects.all().order_by('id')
        context["projects_main"] = Project.objects.filter(main=True).order_by('id')
        context["title"] = page_obj.title
        context["description"] = page_obj.desc
        
        return context
    

class ProjectView(DetailView):
    """View для отображения страницы Проекта"""

    template_name = "about/project-page.html"
    success_url = "/"
    model = ProjectPage
    slug_url_kwarg = 'slug'
    context_object_name = 'project'

    def get_context_data(self, **kwargs) -> dict[str, Any]:
        context = super().get_context_data(**kwargs)

        page_obj = PagesMeta.objects.get(name='Блог')
        context["title"] = context["project"].project.name
        context["description"] = context["project"].description
        
        return context