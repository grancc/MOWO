from django.contrib.sitemaps import  Sitemap
from django.db.models.base import Model
from django.urls import reverse
from urllib.parse import urlencode

from apps.about_app.models import Vacancies

class OfficeSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.8
    
    def items(self):
        return ['office'] 

    def location(self, item):
        return reverse(item)

class BlogSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.8
    
    def items(self):
        return ['blog']  

    def location(self, item):
        return reverse(item)

    
class MainPageSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 1.0
    
    def items(self):
        return ['home']  

    def location(self, item):
        return reverse(item)


class VacancyItemSitemap(Sitemap):
    changefreq = 'monthly' 
    priority = 0.8

    def items(self):
        return Vacancies.objects.all().order_by('id')  
    def location(self, item):
        urls = []
        return reverse('vacancies-page', args=[item.slug])


class PortfolioSitemap(Sitemap):
    changefreq = 'monthly'
    priority = 0.8
    
    def items(self):
        return ['portfolio']  

    def location(self, item):
        return reverse(item)
