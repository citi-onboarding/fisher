from django.shortcuts import render
from django.views.generic import TemplateView
# Create your views here.
def home_view(request):
    if request.method == "POST":
        print("POST")
    else:
        return render(request, "home.html")

    
    
