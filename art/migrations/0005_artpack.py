# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('art', '0004_auto_20161024_1947'),
    ]

    operations = [
        migrations.CreateModel(
            name='ArtPack',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, primary_key=True, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('painting', models.ForeignKey(to='art.Artwork', blank=True, null=True)),
            ],
        ),
    ]
