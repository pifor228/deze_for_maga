from django.views import generic
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User

from orders.models import Game
from .serializers import GameSerilizer
from orders import serializers

class GameListCreateView(generics.ListCreateAPIView):
    queryset = Game.objects.all().order_by('-created_at')
    serializer_class =  GameSerilizer
# @api_view(['GET'])
# def get_users(request):
#     users = User.objects.all()
#     search = request.GET.get('search', '').strip()
#     email = request.GET.get('email', '').strip()

#     if search:
#         users = users.filter(username__icontains=search)
#     if email:
#         users = users.filter(email__icontains=email)

#     return Response(list(users.values('id', 'username', 'email')))
