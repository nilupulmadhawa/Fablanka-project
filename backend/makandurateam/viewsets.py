import imp
from rest_framework import viewsets
from .import models
from . import serializers
from rest_framework import permissions

class MakanduraTeamViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny,)
    queryset = models.makandurateam.objects.all()
    serializer_class = serializers.MakanduraTeamSerializer