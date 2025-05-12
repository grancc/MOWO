from django.shortcuts import render

def main(request):
    return render(request, "index.html")


def demoV1(request):
    return render(request, "v1.html")


def demoV3(request):
    return render(request, "v3.html")

def demoV4(request):
    return render(request, "v4.html")

def demoV4_2(request):
    return render(request, "v4_2.html")


def demoV4_3(request):
    return render(request, "v4_3.html")


def article(request, id):
    return render(request, "article.html")


def portfolio(request):
    return render(request, "portfolio.html")


def office(request):
    return render(request, "office.html")