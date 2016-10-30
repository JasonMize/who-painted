from rest_framework import viewsets
import random

from .models import Artist, Artwork, ArtPack
from .serializers import ArtistSerializer, ArtworkSerializer, ArtPackSerializer


class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer



class ArtworkViewSet(viewsets.ModelViewSet):
    queryset = Artwork.objects.all()
    serializer_class = ArtworkSerializer
    

class ArtPackViewSet(viewsets.ModelViewSet):
    queryset = ArtPack.objects.all()
    serializer_class = ArtPackSerializer

