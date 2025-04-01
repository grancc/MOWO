from django.contrib import admin
from django.urls import path
from main.views import main, demoV1, demoV3

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', main),
    path('v1', demoV1),
    path('v3', demoV3),
]
