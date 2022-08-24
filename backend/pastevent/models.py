from email.mime import image
from importlib.resources import contents
from pyexpat import model
from turtle import title
from django.db import models
from django.contrib.postgres.fields import JSONField

# Create your models here.

class PastEvent(models.Model):
    title_pastevent = models.CharField(max_length=200)
    summery_pastevent = models.TextField()
    content_pastevent = models.JSONField()
    image_project_m = models.TextField()
    status = models.BooleanField(default=True)