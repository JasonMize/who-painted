
from django.shortcuts import render, redirect
from django.contrib import messages

from .forms import UserRegistrationForm

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

