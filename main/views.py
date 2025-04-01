from django.shortcuts import render

def main(request):
    return render(request, "index.html")


def demoV1(request):
    return render(request, "v1.html")


def demoV3(request):
    return render(request, "v3.html")