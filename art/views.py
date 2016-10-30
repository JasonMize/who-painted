from django.views.generic import TemplateView
from rest_framework import generics
from rest_framework.parsers import MultiPartParser

from .models import Artwork, Artist, ArtPack
from .serializers import ArtworkSerializer, ArtistSerializer





class ArtworkSerializer(generics.CreateAPIView):
    parser_classes = (MultiPartParser,)

class AppView(TemplateView):
    template_name = 'art/app.html'


    