from rest_framework import serializers
from .models import Facebook

class LocationSerializer(serializers.Serializer):
    street = serializers.CharField(required=False, allow_blank=True, max_length=100)
    city = serializers.CharField(required=False, allow_blank=True, max_length=100)
    country = serializers.CharField(required=False, allow_blank=True, max_length=100)

class FacebookSerializer(serializers.Serializer):
    name = serializers.CharField(required=False, allow_blank=True, max_length=100)
    about = serializers.CharField(required=False, allow_blank=True, max_length=100)
    location = LocationSerializer()
   
    
