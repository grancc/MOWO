from django.contrib import admin
from .models import *

@admin.register(Employees)
class EmployeesAdmin(admin.ModelAdmin):
    pass

