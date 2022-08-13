from asyncio.windows_events import NULL
from email.mime import image
from django.db import models

# Create your models here.
class projectmakandura(models.Model):
    title_project_m = models.CharField(max_length=200)
    summery_project_m = models.TextField()
    content_project_m = models.TextField()
    image_project_m = models.CharField(null=True)