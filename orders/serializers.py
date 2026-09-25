from rest_framework import serializers 

from .models import BurgerOrder, Charaters, Notes


class BurgerOrdersSerilizer(serializers.ModelSerializer):
    class Meta:
        model = BurgerOrder
        fields = ['id', 'customer', 'bun', 'meat', 'ingredients', 'quantity']

class CharatersSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Charaters
        fields = ['id', 'name', 'level', 'charater_class', 'weapon', 'description']

class NotesSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ['id', 'name', 'description']