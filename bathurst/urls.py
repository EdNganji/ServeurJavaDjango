from django.urls import path
from bathurst import views

urlpatterns = [
    path('',views.home, name='home'),
    path('historique/',views.historique, name='historique'),
    
]