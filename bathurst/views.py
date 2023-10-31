from django.shortcuts import render
import re
from django.http import HttpResponse


def home(request):
   
    return render(request, "bathurst/index.html")

def historique(request):
   
    return render(request, "bathurst/historique.html")


