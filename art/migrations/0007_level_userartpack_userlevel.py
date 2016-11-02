# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('art', '0006_auto_20161030_0059'),
    ]

    operations = [
        migrations.CreateModel(
            name='Level',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('title', models.CharField(max_length=40)),
                ('artPack', models.ForeignKey(blank=True, null=True, to='art.ArtPack')),
            ],
        ),
        migrations.CreateModel(
            name='UserArtPack',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('artPack', models.ForeignKey(blank=True, null=True, to='art.ArtPack')),
                ('user', models.ForeignKey(blank=True, null=True, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='UserLevel',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('level', models.ForeignKey(blank=True, null=True, to='art.Level')),
                ('user', models.ForeignKey(blank=True, null=True, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
