from django.db import models

class BurgerOrder(models.Model):
    customer = models.CharField(max_length=100)
    bun = models.CharField(max_length=50)
    meat = models.CharField(max_length=50)
    ingredients = models.JSONField(default=list)
    quantity = models.IntegerField(default=1)

    def __str__(self) -> str:
        return f"заказ от {self.customer}"

class Charaters(models.Model):
    name = models.CharField(max_length=50)
    level = models.IntegerField()
    weapon = models.CharField(max_length=50)
    description = models.TextField()

    def __str__(self):
        return self.name