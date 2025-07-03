from typing import Any

from django.http import JsonResponse
from django.views.generic import TemplateView
from django.views import View

from apps.about_app.models import Employees
from apps.pages_meta.models import PagesMeta

from .forms import FeedbackForm
from business.send_mail import send_mail

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


class FeedBackView(View):
    def post(self, request, *args, **kwargs):
        form = FeedbackForm(request.POST)
        print(form.errors)
        if form.is_valid():
            questionnaire = form.save(commit=False)
            questionnaire.save()

            subject = 'Заявка с сайта mowo.world'
            message = (
                f'Имя: {form.cleaned_data["name"]}\n'
                f'Номер телефона: {form.cleaned_data["number"]}\n'
                f'Электронная почта: {form.cleaned_data["email"]}\n'
                f'Компания: {form.cleaned_data["company"]}\n'
                f'Сообщение: {form.cleaned_data["message"]}\n'
            )
            print(f"{subject} \n {message}")
            #send_mail(subject, message)
        return JsonResponse({}, status=200)
