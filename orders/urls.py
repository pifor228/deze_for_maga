from django.urls import path

from .views import GameListCreateView #get_users

urlpatterns = [
    #path('users/', get_users, name='get_users'),
    path('game/', GameListCreateView.as_view(), name='game'),
]