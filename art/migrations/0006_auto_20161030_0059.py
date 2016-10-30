# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('art', '0005_artpack'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='artpack',
            name='painting',
        ),
        migrations.AddField(
            model_name='artwork',
            name='artPack',
            field=models.ForeignKey(null=True, blank=True, to='art.ArtPack'),
        ),
    ]
