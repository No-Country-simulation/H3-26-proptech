from django.urls import path

# Imports from apps views
from users.views import UserList, UserDetail

# Urls for the API endpoints
urlpatterns = [
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
]
