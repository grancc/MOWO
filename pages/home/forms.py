from django.forms import ModelForm, TextInput, Textarea, EmailInput
from apps.feedback.models import FeedBack

class FeedbackForm(ModelForm):
    class Meta:
        model = FeedBack
        fields = ["name", "number", "message","email", "company"]

        widgets = {
            "name": TextInput(
                attrs={
                    "placeholder": "Имя",
                }
            ),
            "number": TextInput(
                attrs={
                    "type": "tel",
                    "placeholder": "Номер телефона",
                    "pattern": r"^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$",
                    "title": "+7 (XXX) XXX-XX-XX",
                }
            ),
            "email": EmailInput(
                attrs={
                    "placeholder": "Электронная почта",
                }
            ),
            "company": TextInput(
                attrs={
                    "placeholder": "Компания",
                }
            ),
            "message": Textarea(
                attrs={
                    'autocomplete': 'off',
                    'placeholder': 'Комментарий',
                    'style': 'height: auto;',
                    'rows': '3'
                }
            ),
        }