from django.contrib.auth.decorators import login_required
from django.conf.urls import url

from . import views

urlpatterns = [
    # url(r'^$', login_required(views.AppView.as_view()), name='app'),
    url(r'^$', (views.AppView.as_view()), name='app'),

]