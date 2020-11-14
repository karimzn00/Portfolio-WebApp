from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from project.models import Project
from project.serializers import ProjectSerializer
# Create your views here.
class ProjectsViewSet(viewsets.ModelViewSet):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer
