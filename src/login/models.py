from django.db import models

class UserInfo(models.Model):
    email = models.CharField(max_length=20)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=10)
    is_manager = models.BooleanField(default=0)
