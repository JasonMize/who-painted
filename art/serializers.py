from rest_framework import serializers

from .models import Artwork, Artist

class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = (
            'id',
            'title',
        )

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = (
            'id',
            'name',
        )
        
