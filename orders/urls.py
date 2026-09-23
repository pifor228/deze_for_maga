from django.urls import path

from .views import CharatersCreatersView, create_orders

urlpatterns = [
    path('orders/', create_orders, name='create_orders'),
    path('characters/', CharatersCreatersView.as_view(), name='create_character'),
]