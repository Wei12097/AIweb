from django.shortcuts import render, redirect

# Create your views here.
def login(request):
    way = request.method
    if way == 'GET':
        return render(request, 'login.html')

    email = request.POST.get('email')
    password = request.POST.get('password')
    if email == '123@qq.com' and password == '123':
        return redirect('/user')
    return render(request, 'login.html', {"error_msg":"password is incorrect"})

def edit(request):
    return render(request, 'editor.html')

def main_ui(request):
    return render(request, 'main.html')

def user(request):
    return render(request, 'user.html')

def operate(request):
    return render(request, 'operate.html')

def register(request):
    return render(request, 'register.html')