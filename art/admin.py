from django.contrib import admin
from .models import Artist, Artwork, ArtPack


class ArtistAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


class ArtworkAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'artist',
        'image',
        'artPack',
    )


class ArtPackAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        # 'artPackPaintings',
    )


admin.site.register(Artist, ArtistAdmin)
admin.site.register(Artwork, ArtworkAdmin)
admin.site.register(ArtPack, ArtPackAdmin)

