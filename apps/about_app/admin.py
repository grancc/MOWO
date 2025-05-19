from django.contrib import admin
from .models import *

@admin.register(Employees)
class EmployeesAdmin(admin.ModelAdmin):
    pass

@admin.register(Vacancies)
class VacanciesAdmin(admin.ModelAdmin):
    pass

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    pass