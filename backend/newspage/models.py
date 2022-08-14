from email.mime import image
from importlib.resources import contents
from pyexpat import model
from turtle import title
from django.db import models

# Create your models here.

class newspage(models.Model):
    title = models.CharField(max_length=200)
    summery = models.TextField()
    content = models.TextField()
    image =models.TextField()
    status = models.BooleanField(default=True)