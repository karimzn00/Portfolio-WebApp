from django.db import models

# Create your models here.
class Project(models.Model):
 	title = models.CharField(max_length = 100)
 	description = models.CharField(max_length = 200)
 	technology = models.CharField(max_length = 80)
 	image = models.ImageField(upload_to ='uploads/% Y/% m/% d/') 