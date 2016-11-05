# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('art', '0007_level_userartpack_userlevel'),
    ]

    operations = [
        migrations.AddField(
            model_name='artwork',
            name='description',
            field=models.TextField(null=True, blank=True),
        ),
    ]
