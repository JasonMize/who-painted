from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name



class Artwork(models.Model):
    title = models.CharField(max_length=80)
    artist = models.ForeignKey(Artist)
    # image = models.ImageField(upload_to='static/images/', blank=True, null=True)

    def __str__(self):
        return self.title
