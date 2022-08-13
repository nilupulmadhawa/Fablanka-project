from rest_framework import viewsets
from . import models
from . import serializers
from rest_framework import permissions


class ProjectMakanduraViewSet(viewsets.ModelViewSet):
    permission_classes = (permissions.AllowAny, )
    queryset = models.projectmakandura.objects.all()
    serializer_class = serializers.ProjectMakanduraSerializer