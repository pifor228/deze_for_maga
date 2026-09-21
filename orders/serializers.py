from rest_framework import serializers
from .models import BurgerOrder
class BurgerOrdersSerilizer(serializers.ModelSerializer):
    class Meta:
        model = BurgerOrder
        fields = ['id', 'customer', 'bun', 'meat', 'ingredients', 'quantity']