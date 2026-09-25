from django.urls import path

from .views import create_note, get_users

urlpatterns = [
    path('users/', get_users, name='get_users'),
    path('notes/', create_note, name='create_note'),
]