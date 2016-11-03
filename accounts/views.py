
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.models import User
from rest_framework.generics import RetrieveAPIView
from rest_framework.permissions import IsAuthenticated

from .forms import UserRegistrationForm
from .serializers import CurrentUserSerializer

def register(request):
    if request.method == "POST":
        form = UserRegistrationForm(request.POST)

        if form.is_valid():
            new_user = form.save(commit=False)
            new_user.set_password(form.cleaned_data["password"])

            new_user.save()
            messages.success(request, 'User created!')

            return redirect('accounts:login')
    else:
        form = UserRegistrationForm()

    return render(request, "accounts/register.html", {'form':form})


class CurrentUserDetails(RetrieveAPIView):
    model = User
    serializer_class = CurrentUserSerializer
    permission_classes = (IsAuthenticated, )
    
    def get_object(self):
        return self.request.user 

