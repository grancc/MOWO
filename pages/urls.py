from django.urls import path


from pages.home.views import HomeView
from pages.about.views import PortfolioView, OfficeView, VacanciesView

urlpatterns = [
    path("v4", HomeView.as_view(), name="home"),
    path('portfolio', PortfolioView.as_view(), name="portfolio"),
    path('office', OfficeView.as_view(), name="office"),
    path('vacancies/<str:slug>/', VacanciesView.as_view(), name="vacancies-page"),
]