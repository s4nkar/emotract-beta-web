from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main.urls', namespace='main')),
    path('api/v1/user/', include('admin_api.urls', namespace='admin_api')),
    path('api/v1/admin/', include('user_api.urls', namespace='user_api')),
]
