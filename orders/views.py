from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['GET'])
def get_users(request):
    users = [
        {"id": 1, "username": "magamet", "email": "test@gmail.com"},
        {"id": 2, "username": "ali", "email": "ali@gmail.com"},
    ]
    return Response(users)


@api_view(['POST'])
def create_note(request):
    user_id = request.data.get('user_id')
    text = request.data.get('text')

    if user_id is None or text is None:
        return Response(
            {"detail": "user_id and text are required"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    return Response(
        {
            "message": "Заметка создана",
            "user_id": user_id,
            "text": text,
        },
        status=status.HTTP_201_CREATED,
    )
