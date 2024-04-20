from django.urls import path, include
from app.views import index

urlpatterns = [
    path('', index),  # Route the root URL to the index view
    path('api/process-inputs/', include('app.urls')),  # Include app-level URLs
]
