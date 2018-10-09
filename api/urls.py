from django.conf.urls import include, url
from rest_framework import routers

from art.viewsets import *

from accounts.views import CurrentUserDetails


router = routers.DefaultRouter()

# router.register(r'userartpack', UserArtPackViewSet)
# router.register(r'userlevel', UserLevelViewSet)
router.register(r'level', LevelViewSet)
router.register(r'artpack', ArtPackViewSet)
router.register(r'artwork', ArtworkViewSet)
router.register(r'artist', ArtistViewSet)
router.register(r'artpackartwork', ArtPackArtworkViewSet)
router.register(r'artpacklevel', ArtPackLevelViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^me/$', CurrentUserDetails.as_view(), name="me"),
]
