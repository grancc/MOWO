from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from main.views import main, demoV1, demoV3, demoV4_2, article, demoV4_3

urlpatterns = [
    path("", include("pages.urls")),
    path('admin/', admin.site.urls),
    path('', main),
    #path('v1', demoV1),
    #path('v3', demoV3),
    path('v4_2', demoV4_2),
    path('v4_3', demoV4_3),
    path('blog/article/<int:id>', article),
   
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATICFILES_DIRS)
