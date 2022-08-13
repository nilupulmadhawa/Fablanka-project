from rest_framework import serializers
from .models import newspage

class NewsPageSerializer(serializers.ModelSerializer):
    class Meta:
        model = newspage
        fields = '__all__'