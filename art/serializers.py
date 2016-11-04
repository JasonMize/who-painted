from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Artist, Artwork, ArtPack, Level, UserLevel, UserArtPack
from accounts.serializers import CurrentUserSerializer


class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = (
            'id',
            'name',
        )


class ArtPackSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArtPack
        fields = (
            'id',
            'title',
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
            'artPack',
        )


class ArtPackArtworkSerializer(serializers.ModelSerializer):
    artwork_set = ArtworkSerializer(many=True)
    class Meta:
        model = ArtPack
        fields = (
            'id',
            'title',
            'artwork_set',
        )


class LevelSerializer(serializers.ModelSerializer):
    artPack = ArtPackSerializer()
    class Meta:
        model = Level
        fields = (
            'id', 
            'title',
            'artPack',
        )


class ArtPackLevelSerializer(serializers.ModelSerializer):
    level_set = LevelSerializer(many=True)
    class Meta:
        model = ArtPack
        fields = (
            'id',
            'title',
            'level_set',
        )


class UserLevelSerializer(serializers.ModelSerializer):
    user = CurrentUserSerializer()
    level = LevelSerializer()
    class Meta:
        model = UserLevel
        fields = (
            'id',
            'user',
            'level',
        )


class UserArtPackSerializer(serializers.ModelSerializer):
    user = CurrentUserSerializer()
    artPack = ArtPackSerializer()
    class Meta:
        model = UserArtPack
        fields = (
            'id',
            'user',
            'artPack',
        )













