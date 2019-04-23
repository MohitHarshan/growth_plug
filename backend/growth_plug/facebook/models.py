from django.db import models

# Create your models here.
class Facebook(models.Model):
    name = models.CharField(max_length=120)
    about = models.CharField(max_length=120)
