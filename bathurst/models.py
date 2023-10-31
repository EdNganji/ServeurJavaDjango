from django.db import models

class Capteurs(models.Model):
    
    Temperature = models.DecimalField(max_digits=5, decimal_places = 2, default=0)
    Humidite = models.IntegerField(default = 0)
    DatEnvoi = models.DateField(auto_now_add=True)
    HeurEnvoi = models.TimeField(auto_now=True)
     
    
