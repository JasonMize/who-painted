from django.db import models


class Artist(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name


class ArtPack(models.Model):
    title = models.CharField(max_length=80)

    def __str__(self):
        return self.title

    # def artPackPaintings (self):
    #     paintingSet = ArtPack.objects.get(title='Famous Western Paintings')
    #     pack = paintingSet.artwork_set.all()
    #     return pack


class Artwork(models.Model):
    title = models.CharField(max_length=80)
    artist = models.ForeignKey(Artist, blank=True, null=True)
    image = models.ImageField(upload_to='artworks', blank=True, null=True)
    artPack = models.ForeignKey(ArtPack, blank=True, null=True)

    def __str__(self):
        return self.title
        



