from django.contrib import admin
from .models import *

@admin.register(PagesMeta)
class PagesMetaAdmin(admin.ModelAdmin):
    pass
