from django.conf.urls import include, url
from rest_framework import routers

from art.viewsets import ArtistViewSet, ArtworkViewSet

from accounts.views import CurrentUserDetails


router = routers.DefaultRouter()

router.register(r'artwork', ArtworkViewSet)
router.register(r'artist', ArtistViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^me/$', CurrentUserDetails.as_view(), name="me"),
]
