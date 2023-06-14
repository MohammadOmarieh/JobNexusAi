# Generated by Django 3.2.8 on 2023-06-14 08:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app1', '0002_blog_company_country_joblocationtype_jobtype_seeker_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='job',
            old_name='jobTile',
            new_name='title',
        ),
        migrations.AlterField(
            model_name='application',
            name='coverLetter',
            field=models.FileField(blank=True, null=True, upload_to='static/coverLetter'),
        ),
        migrations.AlterField(
            model_name='application',
            name='cv',
            field=models.FileField(blank=True, null=True, upload_to='static/cv'),
        ),
        migrations.AlterField(
            model_name='recruiter',
            name='profilePicture',
            field=models.ImageField(blank=True, null=True, upload_to='static/recruiter_images'),
        ),
        migrations.AlterField(
            model_name='seeker',
            name='profilePicture',
            field=models.ImageField(blank=True, null=True, upload_to='static/seeker_images'),
        ),
    ]
