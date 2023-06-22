# Generated by Django 4.2.1 on 2023-06-22 22:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0007_job_deadline'),
    ]

    operations = [
        migrations.RenameField(
            model_name='application',
            old_name='similarity',
            new_name='cv_similarity',
        ),
        migrations.AddField(
            model_name='application',
            name='letter_similarity',
            field=models.FloatField(blank=True, default=None, null=True),
        ),
    ]