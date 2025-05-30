from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from .sitemap import *
from django.contrib.sitemaps.views import sitemap

sitemaps = {
    'office': OfficeSitemap,
    'blog': BlogSitemap,
    'portfolio': PortfolioSitemap,
    'vacancy': VacancyItemSitemap,
    'home': MainPageSitemap,
}

urlpatterns = [
    path("", include("pages.urls")),
    path('admin/', admin.site.urls),
    path('robots.txt',TemplateView.as_view(template_name='robots.txt',content_type='text/plain')),
    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
    
   
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
