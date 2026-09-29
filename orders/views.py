from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    search = request.GET.get('search', '').strip()
    email = request.GET.get('email', '').strip()

    if search:
        users = users.filter(username__icontains=search)
    if email:
        users = users.filter(email__icontains=email)

    return Response(list(users.values('id', 'username', 'email')))
