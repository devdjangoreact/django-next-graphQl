
from django.urls.conf import include
from django.views.decorators.csrf import csrf_exempt
from graphene_file_upload.django import FileUploadGraphQLView
from graphene_django.views import GraphQLView
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    # path('', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    path('graphql/', FileUploadGraphQLView.as_view(graphiql=True)),
    path('charts/', include('charts.urls')),
    # path('', csrf_exempt(GraphQLView.as_view(graphiql=True))),
    # path("", TemplateView.as_view(template_name="index.html"),  name=""),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
