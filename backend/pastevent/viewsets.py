from rest_framework import viewsets
from . import models
from . import serializers
from rest_framework import permissions


class PastEventViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = models.PastEvent.objects.all()
    serializer_class = serializers.PastEventSerializer