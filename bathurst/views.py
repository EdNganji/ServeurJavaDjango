from django.shortcuts import render
import re
from django.http import HttpResponse
from bathurst.models import Capteurs


def home(request):
    #actu = Capteurs.objects.get(id=max(id))
    actu = Capteurs.objects.last()
    return render(request, "bathurst/index.html", {'actu': actu})

def historique(request):
    hist = Capteurs.objects.all().order_by('-id')[:20]
    return render(request, "bathurst/historique.html", 
                  {'hist': hist})


