# Generated by Django 3.2.20 on 2023-10-13 06:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('home', '0001_load_initial_data'),
    ]

    operations = [
        migrations.CreateModel(
            name='Cdrer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('retyye', models.BigIntegerField()),
                ('yrueie', models.BigIntegerField()),
            ],
        ),
    ]
