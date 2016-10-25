from rest_framework import serializers

from .models import Artist, Artwork


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = (
            'id',
            'name',
        )


class ArtworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artwork
        fields = (
            'id',
            'artist',
            'title',
            'image',
        )

        
