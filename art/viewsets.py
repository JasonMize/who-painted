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


class ArtPackArtworkViewSet(viewsets.ModelViewSet):
    queryset = ArtPack.objects.all()
    serializer_class = ArtPackArtworkSerializer


class ArtPackLevelViewSet(viewsets.ModelViewSet):
    queryset = ArtPack.objects.all()
    serializer_class = ArtPackLevelSerializer
    

class LevelViewSet(viewsets.ModelViewSet):
    queryset = Level.objects.all()
    serializer_class = LevelSerializer


class UserLevelViewSet(viewsets.ModelViewSet):
    queryset = UserLevel.objects.all()
    serializer_class = UserLevelSerializer


class UserArtPackViewSet(viewsets.ModelViewSet):
    queryset = UserArtPack.objects.all()
    serializer_class = UserArtPackSerializer





