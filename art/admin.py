from django.contrib import admin
from .models import Artist, Artwork


class ArtistAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


class ArtworkAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'artist',
        'image',
    )


admin.site.register(Artist, ArtistAdmin)
admin.site.register(Artwork, ArtworkAdmin)

