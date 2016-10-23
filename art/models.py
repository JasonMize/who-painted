from django.db import models

class Artwork(models.Model):
    title = models.CharField(max_length=80)

    def __str__(self):
        return self.title

class Artist(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name



