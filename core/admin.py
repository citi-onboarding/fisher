from django.contrib import admin
from .models import (
    AboutUs,
    MVV,
    Depoimento,
    Servico
)
# Register your models here.
admin.site.register(AboutUs)
admin.site.register(MVV)
admin.site.register(Depoimento)
admin.site.register(Servico)