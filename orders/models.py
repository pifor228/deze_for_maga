from django.db import models
from django.forms.fields import CharField

# class BurgerOrder(models.Model):
#     customer = models.CharField(max_length=100)
#     bun = models.CharField(max_length=50)
#     meat = models.CharField(max_length=50)
#     ingredients = models.JSONField(default=list)
#     quantity = models.IntegerField(default=1)

#     def __str__(self) -> str:
#         return f"заказ от {self.customer}"

# class Charaters(models.Model):
#     name = models.CharField(max_length=50)
#     level = models.IntegerField()
#     charater_class = models.CharField()
#     weapon = models.CharField(max_length=50)
#     description = models.TextField()

#     def __str__(self):
#         return self.name

# class Notes(models.Model):
#     name = models.CharField(max_length=50)
#     description = models.TextField()

#     def __str__(self):
#         return self.name

class Game(models.Model):
    RESULT_CHOICES = [
        ('win', 'Win'),
        ('lose', 'Lose'),
    ]

    player_name = models.CharField(max_length=100)
    attempts = models.IntegerField()
    result = models.CharField(max_length=4, choices=RESULT_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.player_name} - {self.result} ({self.attempts} attempts)"