from django.shortcuts import render, redirect


# Create your views here.

def vue_launch(request):
    return render(request, 'plan_visualiser/plan_visualiser_vue_app.html')

def redirect_to_root(request):
    return redirect('/vue-test/')