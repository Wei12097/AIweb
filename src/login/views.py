from django.shortcuts import render

# Create your views here.
def login(request):
    return render(request, 'login.html')

def edit(request):
    return render(request, 'editor.html')

def main_ui(request):
    return render(request, 'main.html')

def user(request):
    return render(request, 'user.html')

def operate(request):
    return render(request, 'operate.html')