from django.contrib import admin
from django.urls import path
from main.views import main, demoV1, demoV3, demoV4, demoV4_2, article, portfolio, demoV4_3, office

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main),
    #path('v1', demoV1),
    #path('v3', demoV3),
    path('v4', demoV4),
    path('v4_2', demoV4_2),
    path('v4_3', demoV4_3),
    path('blog/article/<int:id>', article),
    path('portfolio', portfolio),
    path('office', office),
]
