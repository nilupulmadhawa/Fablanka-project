from rest_framework import viewsets
from . import models
from . import serializers
from rest_framework import permissions


class NewsPageViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = models.newspage.objects.all()
    serializer_class = serializers.NewsPageSerializer