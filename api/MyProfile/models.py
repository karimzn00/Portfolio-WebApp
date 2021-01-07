from django.db import models
from django.conf.global_settings import LANGUAGES

# Create your models here.


class socialMedia(models.Model):
	name = models.CharField(max_length = 100, choices = (('link', 'linkdin'), ('link','twitter'), ('link','github')))
	url = models.CharField(max_length = 100)




class Language(models.Model):
	name = models.CharField(max_length = 100)

class Skill(models.Model):
	name = models.CharField(max_length = 100)


class MyProfile(models.Model):
	id = 1
	name = models.CharField(max_length = 100)
	country = models.CharField(max_length = 100)
	job = models.CharField(max_length = 100)
	email = models.CharField(max_length = 100)
	language = models.ForeignKey(Language, models.CASCADE)
	biography =models.TextField()
	skill = models.ForeignKey(Skill, models.CASCADE)
	social_media = models.ForeignKey(socialMedia, models.CASCADE)
	image = models.ImageField(upload_to ='uploads/') 
	quote = models.CharField(max_length = 300)

