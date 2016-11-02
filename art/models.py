from django.db import models
from django.contrib.auth.models import User


class Artist(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name


class ArtPack(models.Model):
    title = models.CharField(max_length=80)

    def __str__(self):
        return self.title


class Artwork(models.Model):
    title = models.CharField(max_length=80)
    artist = models.ForeignKey(Artist, blank=True, null=True)
    image = models.ImageField(upload_to='artworks', blank=True, null=True)
    artPack = models.ForeignKey(ArtPack, blank=True, null=True)

    def __str__(self):
        return self.title

        
class UserArtPack(models.Model):
    user = models.ForeignKey(User, blank=True, null=True)
    artPack = models.ForeignKey(ArtPack, blank=True, null=True)


class Level(models.Model):
    title = models.CharField(max_length=40)
    artPack = models.ForeignKey(ArtPack, blank=True,null=True)

    def __str__(self):
        return self.title


class UserLevel(models.Model):
    user = models.ForeignKey(User, blank=True, null=True)
    level = models.ForeignKey(Level, blank=True, null=True)

        



