from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from orders.models import Charaters
from .serializers import BurgerOrdersSerilizer, CharatersSerilizer

@api_view(['POST'])
def create_orders(request):
    serializer = BurgerOrdersSerilizer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CharatersCreatersView(APIView):
    def post(self, request):
        serializer = CharatersSerilizer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_201_CREATED,
            )
        
        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST,
        )

    def get(self, request):
        characters = Charaters.objects.all()

        serializer = CharatersSerilizer(characters, many=True)

        return Response(serializer.data)