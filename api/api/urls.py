"""api URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from users import views as userview
from project import views as projectviews
from blogs import views as blogviews
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token



router = routers.DefaultRouter()
router.register(r'users', userview.UserViewSet)
router.register(r'groups', userview.GroupViewSet)
router.register(r'project', projectviews.ProjectsViewSet)
router.register(r'blogs', blogviews.BlogsViewSet)

urlpatterns = [
	path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path(r'api-auth/', obtain_jwt_token),
    path(r'refresh-token/', refresh_jwt_token),]
