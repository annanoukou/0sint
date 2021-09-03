from django.conf.urls import url
from .api import *

urlpatterns = [
    url(r'contact/', ContactForm.as_view()),
]
