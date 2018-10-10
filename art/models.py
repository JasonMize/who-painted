from django.db import models
from django.contrib.auth.models import User


class UserRole(models.Model):
    pass


class Level(models.Model):
    title = models.CharField(max_length=40)

    def __str__(self):
        return self.title


class Artwork(models.Model):
    title = models.CharField(max_length=80)
    image = models.ImageField(upload_to='artworks', blank=True, null=True)
    description = models.TextField(blank=True, null=True)

    def __str__(self):
        return self.title


class Artist(models.Model):
    name = models.CharField(max_length=40)
    artwork = models.ManyToManyField(Artwork, blank=True, null=True)

    def __str__(self):
        return self.name


class ArtPack(models.Model):
    owner = models.ForeignKey(User, blank=True, null=True)
    title = models.CharField(max_length=80)
    isPrivate = models.BooleanField(default=False)
    level = models.ManyToManyField(Level)
    artwork = models.ManyToManyField(Artwork)

    def __str__(self):
        return self.title


class UserProgress(models.Model):
    user = models.ForeignKey(User, blank=True, null=True)
    artpack = models.ForeignKey(Artwork, blank=True, null=True)
    level = models.ForeignKey(Level, blank=True, null=True)














