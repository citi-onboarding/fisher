from django.contrib import admin
from .models import (
    AboutUs,
    MVV,
    Depoimento
)
# Register your models here.
admin.site.register(AboutUs)
admin.site.register(MVV)
admin.site.register(Depoimento)