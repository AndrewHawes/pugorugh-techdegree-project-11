from django.urls import path, register_converter
from rest_framework.authtoken.views import obtain_auth_token

from pugorugh import converters, views

register_converter(converters.SignedIntConverter, "sint")
register_converter(converters.StatusConverter, "status")


# API endpoints
urlpatterns = [
    path("api/user/", views.UserRegisterView.as_view(), name="register-user"),
    path("api/user/login/", obtain_auth_token, name="login-user"),
    path("api/user/preferences/", views.SetPrefView.as_view()),
    path("api/dog/new/", views.CreateDogView.as_view()),
    path("api/dog/delete/<int:pk>", views.DeleteDogView.as_view()),
    path("api/dog/hide/<int:pk>", views.HideDogView.as_view()),
    path("api/dog/<status:status>/<int:pk>", views.SetStatusView.as_view()),
    path("api/dog/prev/<status:status>/<int:pk>", views.PrevStatusView.as_view()),
    path("api/dog/next/<status:status>/<int:pk>", views.NextStatusView.as_view()),
]
