from rest_framework import serializers
from .models import PastEvent

class PastEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = PastEvent
        fields = '__all__'