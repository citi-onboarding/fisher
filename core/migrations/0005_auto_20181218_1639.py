# Generated by Django 2.1.4 on 2018-12-18 16:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_auto_20181218_1630'),
    ]

    operations = [
        migrations.AlterField(
            model_name='aboutus',
            name='image',
            field=models.ImageField(null=True, upload_to='aboutUs/', verbose_name='Imagem do Sobre nós'),
        ),
        migrations.AlterField(
            model_name='depoimento',
            name='image',
            field=models.ImageField(null=True, upload_to='depoimentos/', verbose_name='Foto Autor'),
        ),
    ]