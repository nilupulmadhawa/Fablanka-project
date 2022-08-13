from django.db import models

# Create your models here.

class PastEvent(models.Model):
    title_pastevent = models.CharField(max_length=200)
    summery_pastevent = models.TextField()
    content_pastevent = models.TextField()
    image_project_m = models.ImageField(null=True)