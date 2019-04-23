

from django.contrib import admin
from django.urls import path, include
from .views import CurrentUserView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('info/' ,CurrentUserView.as_view(),name="page-info")
]
