from django.db import models

# Create your models here.
class AboutUs(models.Model):
    image = models.ImageField('Imagem do Sobre nós', upload_to='aboutUs/', null=True)
    description = models.TextField('Sobre nós', max_length=700)

    def __str__(self):
        return 'Sobre nós'
    class Meta:
        verbose_name = 'Sobre Nós' 
        verbose_name_plural = 'Sobre Nós' 


class MVV(models.Model):
    mission = models.TextField('Missão', max_length = 500, default='')
    vision = models.TextField('Visão', max_length=500, default='')
    values = models.TextField('Valor', max_length=500, default='')

    def __str__(self):
        return 'Missão Visão e Valores'
    class Meta:
        verbose_name = 'MVV' 
        verbose_name_plural = 'MVV' 


class Depoiments(models.Model):
    author = models.CharField('Nome da pessoa', max_length = 50, default = '')
    image = models.ImageField('Imagem da pessoa', upload_to='depoiments/', null=True)
    description = models.TextField('Descrição', max_length=500)

    def __str__(self):
        return self.author
    class Meta:
        verbose_name = 'Depoimento'

class Servico(models.Model):
    title = models.CharField('Título do Serviço', max_length = 50, default = '')
    image = models.ImageField('Imagem do Serviço', upload_to='servicos/', null=True)
    description = models.TextField('Descrição', max_length=500)

    def __str__(self):
        return self.title
    class Meta:
        verbose_name = 'Servico'