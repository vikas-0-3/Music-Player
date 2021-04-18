from django.urls import path, include
from Player import views
urlpatterns = [
    path('', views.home, name="home"),
]