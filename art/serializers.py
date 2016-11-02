from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Artist, Artwork, ArtPack, Level, UserLevel, UserArtPack


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = (
            'id',
            'name',
        )


class ArtworkSerializer(serializers.ModelSerializer):
    artist = ArtistSerializer()
    artPack = ArtPackSerializer()
    class Meta:
        model = Artwork
        fields = (
            'id',
            'artist',
            'title',
            'image',
        )


class ArtPackSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtPack
        fields = (
            'id',
            'title',
        )


class LevelSerializer(serializers.ModelSerializer):
    artPack = ArtPackSerializer()
    class Meta:
        model = Level
        fields = (
            'id', 
            'title',
        )


class UserLevelSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    level = LevelSerializer()
    class Meta:
        model = UserLevel
        fields = (
            'id',
        )


class UserArtPackSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    artPack = ArtPackSerializer()
    class Meta:
        model = UserArtPack
        fields = (
            'id',
        )













