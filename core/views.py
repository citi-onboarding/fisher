from django.shortcuts import render
from django.views.generic import TemplateView
from .models import (
    AboutUs,
    MVV,
)

# Create your views here.
def home_view(request):
    if request.method == "POST":
        print("POST")
    else:
        context = getContext()
        return render(request, "home.html", context)


def getContext():
    aboutUs = AboutUs.objects.all()
    mvv = MVV.objects.all()
    aboutUsContext = None
    mvvContext = None


    if len(mvv) != 0:
        mvvContext = mvv[0]
    
    if len(aboutUs) != 0:
        aboutUsContext = aboutUs[0]

    return {'mvv': mvvContext, 'aboutUs': aboutUsContext}

    


    
    
