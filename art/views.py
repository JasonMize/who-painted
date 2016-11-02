from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework.parsers import MultiPartParser

from .serializers import ArtworkSerializer





class ArtworkSerializer(generics.CreateAPIView):
    parser_classes = (MultiPartParser,)

class AppView(TemplateView):
    template_name = 'art/app.html'


    