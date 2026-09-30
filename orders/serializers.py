from dataclasses import field

from rest_framework import serializers 

from .models import Game#BurgerOrder, Charaters, Notes


# class BurgerOrdersSerilizer(serializers.ModelSerializer):
#     class Meta:
#         model = BurgerOrder
#         fields = ['id', 'customer', 'bun', 'meat', 'ingredients', 'quantity']

# class CharatersSerilizer(serializers.ModelSerializer):
#     class Meta:
#         model = Charaters
#         fields = ['id', 'name', 'level', 'charater_class', 'weapon', 'description']

# class NotesSerilizer(serializers.ModelSerializer):
#     class Meta:
#         model = Notes
#         fields = ['id', 'name', 'description']

class GameSerilizer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'player_name', 'attempts', 'result', 'created_at']