from django.contrib import admin
from .models import (
    AboutUs,
    MVV,
    Depoiments,
    Services
)
# Register your models here.
admin.site.register(AboutUs)
admin.site.register(MVV)
admin.site.register(Depoiments)
admin.site.register(Services)