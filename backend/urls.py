from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework.authtoken import views


urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("pugorugh.urls")),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("api-token-auth/", views.obtain_auth_token),
    # path("", TemplateView.as_view(template_name="index.html"))
    # re_path("^", TemplateView.as_view(template_name="index.html")),
]
if not settings.DEBUG:
    urlpatterns += [path("", TemplateView.as_view(template_name="index.html"))]

if settings.DEBUG:  # pragma: no cover
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
