# Generated by Django 4.2.6 on 2023-10-31 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Lectures',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Temperature', models.DecimalField(decimal_places=2, default=0, max_digits=5)),
                ('Humidite', models.IntegerField(default=0)),
            ],
        ),
    ]