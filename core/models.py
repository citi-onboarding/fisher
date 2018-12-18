from django.db import models

# Create your models here.
class AboutUs(models.Model):
    category = models.CharField('Categoria', max_length = 30, default='Sobre Nós')
    image = models.ImageField('Imagem do Sobre nós', upload_to='aboutUs/', null=True)
    description = models.TextField('Sobre nós', max_length=700)

    def __str__(self):
        return self.category
    class Meta:
        verbose_name = 'Sobre Nó' 


class MVV(models.Model):
    category = models.CharField('Categoria', max_length = 50, default = 'MVV')
    mission = models.TextField('Missão', max_length = 500, default='')
    vision = models.TextField('Visão', max_length=500, default='')
    values = models.TextField('Valor', max_length=500, default='')

    def __str__(self):
        return self.category
    class Meta:
        verbose_name = 'MVV' 

class Depoimento(models.Model):
    category = models.CharField('Categoria', max_length = 50, default = 'Depoimento')
    autor = models.CharField('Autor', max_length=50, default='')
    conteudo = models.TextField('Conteúdo', max_length = 500, default='')
    image = models.ImageField('Foto Autor', upload_to='depoimentos/', null=True)

    def __str__(self):
        return self.category
    class Meta:
        verbose_name = 'Depoimento'

class Servico(models.Model):
    category = models.CharField('Categoria', max_length = 50, default = 'Serviço')
    titulo = models.CharField('Título', max_length=50, default='')
    conteudo = models.TextField('Conteúdo', max_length = 500, default='')
    image = models.ImageField('Imagem', upload_to='servicos/', null=True)

    def __str__(self):
        return self.category
    class Meta:
        verbose_name = 'Serviço' 