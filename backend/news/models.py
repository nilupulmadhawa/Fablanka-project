from django.db import models

# Create your models here.

class News(models.Model):
    title = models.CharField(max_length=255)
    summery = models.TextField()
    content = models.TextField()
    image = models.ImageField(null=True)
    status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


    #created / Insert / Add - Post
    #Retrieve / Fectch - Get
    #updated / Edit - Put
    #Delete / Remove - Delete
