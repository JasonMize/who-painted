from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand
import os

# in command line: python manage.py makesuper
# creates a super user with environment variables set on elastic beanstalk
class Command(BaseCommand):
    def handle(self, *args, **options):
        AWS_SUPERUSER_NAME = os.environ['AWS_SUPERUSER_NAME']
        AWS_SUPERUSER_EMAIL = os.environ['AWS_SUPERUSER_EMAIL']
        AWS_SUPERUSER_PASS = os.environ['AWS_SUPERUSER_PASS']
        User = get_user_model()
        if not User.objects.filter(username="AWS_SUPERUSER_NAME").exists():
            User.objects.create_superuser("AWS_SUPERUSER_NAME", "AWS_SUPERUSER_EMAIL", "AWS_SUPERUSER_PASS")