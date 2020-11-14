from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import permissions
from blogs.models import Blog
from blogs.serializers import BlogsSerializer





# Create your views here.
class BlogsViewSet(viewsets.ModelViewSet):
	queryset = Blog.objects.all()
	serializer_class = BlogsSerializer

