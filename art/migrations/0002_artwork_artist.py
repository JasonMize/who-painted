# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('art', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='artwork',
            name='artist',
            field=models.ForeignKey(null=True, to='art.Artist', blank=True),
        ),
    ]
