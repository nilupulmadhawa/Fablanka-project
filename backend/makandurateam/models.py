from django.db import models

# Create your models here.

class makandurateam(models.Model):
    id = models.TextField(primary_key=True)
    name_member = models.CharField(max_length=100)
    image_member = models.TextField()
