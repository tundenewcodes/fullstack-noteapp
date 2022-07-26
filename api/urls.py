from re import template
from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('notes/', views.getNotes, name='getNotes'),
    # path('notes/create/', views.createNote, name='createNote'),
    # path('notes/<str:pk>/update', views.updateNote, name='updateNote'),
    # path('notes/<str:pk>/delete', views.deleteNote, name='deleteNote'),
    path('notes/<str:pk>/', views.getNote, name='getNote'),

]