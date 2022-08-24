# Generated by Django 4.0.5 on 2022-08-24 18:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pastevent', '0002_pastevent_image_project_m'),
    ]

    operations = [
        migrations.AddField(
            model_name='pastevent',
            name='status',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='pastevent',
            name='content_pastevent',
            field=models.JSONField(),
        ),
        migrations.AlterField(
            model_name='pastevent',
            name='image_project_m',
            field=models.TextField(),
        ),
    ]
