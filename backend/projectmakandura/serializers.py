from rest_framework import serializers
from .models import projectmakandura

class ProjectMakanduraSerializer(serializers.ModelSerializer):
    class Meta:
        model = projectmakandura
        fields = '__all__'