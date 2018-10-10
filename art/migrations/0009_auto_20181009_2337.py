# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('art', '0008_artwork_description'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProgress',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
            ],
        ),
        migrations.CreateModel(
            name='UserRole',
            fields=[
                ('id', models.AutoField(serialize=False, primary_key=True, auto_created=True, verbose_name='ID')),
            ],
        ),
        migrations.RemoveField(
            model_name='userartpack',
            name='artPack',
        ),
        migrations.RemoveField(
            model_name='userartpack',
            name='user',
        ),
        migrations.RemoveField(
            model_name='userlevel',
            name='level',
        ),
        migrations.RemoveField(
            model_name='userlevel',
            name='user',
        ),
        migrations.RemoveField(
            model_name='artwork',
            name='artPack',
        ),
        migrations.RemoveField(
            model_name='artwork',
            name='artist',
        ),
        migrations.RemoveField(
            model_name='level',
            name='artPack',
        ),
        migrations.AddField(
            model_name='artist',
            name='artwork',
            field=models.ManyToManyField(null=True, blank=True, to='art.Artwork'),
        ),
        migrations.AddField(
            model_name='artpack',
            name='artwork',
            field=models.ManyToManyField(to='art.Artwork'),
        ),
        migrations.AddField(
            model_name='artpack',
            name='isPrivate',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='artpack',
            name='level',
            field=models.ManyToManyField(to='art.Level'),
        ),
        migrations.AddField(
            model_name='artpack',
            name='owner',
            field=models.ForeignKey(null=True, to=settings.AUTH_USER_MODEL, blank=True),
        ),
        migrations.DeleteModel(
            name='UserArtPack',
        ),
        migrations.DeleteModel(
            name='UserLevel',
        ),
        migrations.AddField(
            model_name='userprogress',
            name='artpack',
            field=models.ForeignKey(null=True, to='art.Artwork', blank=True),
        ),
        migrations.AddField(
            model_name='userprogress',
            name='level',
            field=models.ForeignKey(null=True, to='art.Level', blank=True),
        ),
        migrations.AddField(
            model_name='userprogress',
            name='user',
            field=models.ForeignKey(null=True, to=settings.AUTH_USER_MODEL, blank=True),
        ),
    ]
