from django.urls import path


from pages.home.views import HomeView
from pages.about.views import PortfolioView, OfficeView, VacanciesView, ProjectView
from pages.blog.views import BlogView, ArticleView

urlpatterns = [
    path("", HomeView.as_view(), name="home"),
    path('portfolio', PortfolioView.as_view(), name="portfolio"),
    path('project/<str:slug>/', ProjectView.as_view(), name="portfolio-page"),
    path('office', OfficeView.as_view(), name="office"),
    path('vacancies/<str:slug>/', VacanciesView.as_view(), name="vacancies-page"),
    path('blog', BlogView.as_view(), name="blog"),
    path('blog/articles/<int:id>', ArticleView.as_view(), name="article"),
]