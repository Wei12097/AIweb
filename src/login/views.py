from django.shortcuts import render


# Create your views here.
def login(request):
    return render(request, 'login.html')

def edit(request):
    return render(request, 'editor.html')

def main_ui(request):
    return render(request, 'main_ui.html')