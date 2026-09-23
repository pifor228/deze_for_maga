from rest_framework import serializers 

from .models import BurgerOrder, Charaters


class BurgerOrdersSerilizer(serializers.ModelSerializer):
    class Meta:
        model = BurgerOrder
        fields = ['id', 'customer', 'bun', 'meat', 'ingredients', 'quantity']

class CharatersSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Charaters
        fields = ['id', 'name', 'level', 'weapon', 'description']