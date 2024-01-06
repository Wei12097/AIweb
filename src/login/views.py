from django.shortcuts import render, redirect, HttpResponse
import os
from .models import UserInfo

# Create your views here.
def login(request):
    way = request.method
    if way == 'GET':
        return render(request, 'login.html')

    email = request.POST.get('email')
    password = request.POST.get('password')
    user = UserInfo.objects.filter(email=email)
    if not user:
        return render(request, 'login.html', {"error_msg": "account is not available"})
    if password == user[0].password:
        return redirect('/user')
    return render(request, 'login.html', {"error_msg": "password is incorrect"})


def edit(request):
    return render(request, 'editor.html')


def main_ui(request):
    return render(request, 'main.html')


def user(request):
    return render(request, 'user.html')


def operate(request):
    if request.method == 'GET':
        return render(request, 'operate.html')
    # return render(request, 'editor.html')
    pic = request.FILES.get('pic')
    print("上传的是：", pic.name)
    filename = f"login/static/img/{pic.name}"
    with open(filename, "wb") as f:
        for chunk in pic.chunks():
            f.write(chunk)
    return HttpResponse("接收文件： " + "成功")


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    email = request.POST.get('email')
    password = request.POST.get('password')
    username = request.POST.get('name')
    UserInfo.objects.create(email=email, password = password, name=username)
    return redirect('/login')
