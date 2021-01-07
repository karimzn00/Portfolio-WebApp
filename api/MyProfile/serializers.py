from rest_framework import serializers
from MyProfile.models import MyProfile
class MyProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = MyProfile
		fields = ['name', 'country', 'job', 'email', 
		'languages', 'biography', 'skills', 'social_media', 'image', 'quote', 'cover']