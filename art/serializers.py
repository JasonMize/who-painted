from rest_framework import serializers

from .models import Artist, Artwork, ArtPack


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = (
            'id',
            'name',
        )


class ArtworkSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer()
    class Meta:
        model = Artwork
        fields = (
            'id',
            'artist',
            'title',
            'image',
            'artPack'
        )


class ArtPackSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtPack
        fields = (
            'id',
            'title',
        )
