from rest_framework import viewsets
import random

from django.contrib.auth.models import User

from .models import *
from .serializers import *


class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer


class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer
    

class ArtPackViewSet(viewsets.ModelViewSet):
    queryset = ArtPack.objects.all()
    serializer_class = ArtPackSerializer


class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()
    serializer_class = LevelViewSerializer


class UserLevelViewSet(viewsets.ModelViewSet):
    queryset = level.objects.all()
    serializer_class = UserLevelSerializer


class UserArtPackViewSet(viewsets.ModelViewSet):
    queryset = level.objects.all()
    serializer_class = UserArtPackSerializer






