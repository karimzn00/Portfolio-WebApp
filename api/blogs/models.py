from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField

# Create your models here.
class Blog(models.Model):
	id = models.AutoField(auto_created=True, primary_key=True, verbose_name='ID')
	title = models.CharField(max_length = 100)
	date = models.DateField()
	description = models.CharField(max_length = 200)
	content = RichTextUploadingField()