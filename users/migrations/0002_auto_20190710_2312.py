# Generated by Django 2.2.1 on 2019-07-11 04:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evento',
            name='url',
            field=models.ImageField(upload_to=''),
        ),
    ]
