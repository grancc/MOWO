from apps.about_app.models import Contact
from pages.home.forms import FeedbackForm
import datetime


def get_base_context(request):
    phone = Contact.objects.get(name="Номер телефона").url
    phone_url = phone.replace(' ', '')
    context = {
        "feedback": FeedbackForm,
        "phone": phone,
        "phone_url": phone_url,
        "email":Contact.objects.get(name="Почта").url,
        "tg_url": Contact.objects.get(name="tg").url,
        "whatsapp": Contact.objects.get(name="wa").url
   }

    return context