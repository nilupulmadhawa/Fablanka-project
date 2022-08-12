from rest_framework import viewsets
from . import models
from . import serializers
from rest_framework import permissions, status

class NewsViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = models.News.objects.all()
    serializer_class = serializers.NewsSerializer

