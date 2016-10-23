from django.contrib import admin
from .models import Artwork, Artist


class ArtworkAdmin(admin.ModelAdmin):
    list_display = (
        'title',
    )


class ArtistAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


admin.site.register(Artwork, ArtworkAdmin)
admin.site.register(Artist, ArtistAdmin)

