from django.contrib import admin
from .models import *



class ArtistAdmin(admin.ModelAdmin):
    list_display = (
        'name',
    )


class ArtworkAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        'artist',
        'image',
        # 'artPack',
        'description'
    )


class ArtPackAdmin(admin.ModelAdmin):
    list_display = (
        'title',
    )


class LevelAdmin(admin.ModelAdmin):
    list_display = (
        'title',
        # 'artPack',
    )


# class UserLevelAdmin(admin.ModelAdmin):
#     list_display = (
#         'user',
#         'level',
#     )


# class UserArtPackAdmin(admin.ModelAdmin):
#     list_display = (
#         'user',
#         'artPack',
#     )


# admin.site.register(UserArtPack, UserArtPackAdmin)
# admin.site.register(UserLevel, UserLevelAdmin)
admin.site.register(Level, LevelAdmin)
admin.site.register(Artist, ArtistAdmin)
admin.site.register(Artwork, ArtworkAdmin)
admin.site.register(ArtPack, ArtPackAdmin)

