from django.urls import path

from .views import create_orders

urlpatterns = [
    path('orders/', create_orders, name='create_orders'),
]