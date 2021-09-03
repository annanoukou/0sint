from rest_framework import status
from django.http import Http404
from django.http import JsonResponse
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Contact
from .serializers import ContactSerializer


class ContactForm(APIView):
    def post(self, request):

        contact = {
            'name': request.data.get('name'),
            'email': request.data.get('email'),
            'message': request.data.get('message'),
        }

        print (contact)

        serializer = ContactSerializer(data = contact)
        if serializer.is_valid():
            answer_saved = serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
