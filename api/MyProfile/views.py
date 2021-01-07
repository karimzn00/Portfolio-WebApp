
from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from MyProfile.models import MyProfile
from MyProfile.serializers import MyProfileSerializer
# Create your views here.


class MyProfilViewSet(viewsets.ModelViewSet):
	queryset = MyProfile.objects.all()
	serializer_class = MyProfileSerializer
