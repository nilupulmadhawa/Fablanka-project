from rest_framework import serializers
from .models import makandurateam

class MakanduraTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = makandurateam
        fields = '__all__'