from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView


# Imports from apps views
from users.views import UserList, UserDetail
from personal_info.views import PersonalInfoList, PersonalInfoDetail

# Urls for the API endpoints
urlpatterns = [
    # JWT Tokens endpoints
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # DRF Spectacular endpoints
    path('schema/', SpectacularAPIView.as_view(), name='schema'),
    # Optional UI:
    path('schema/swagger-ui/',
         SpectacularSwaggerView.as_view(url_name='schema'), name='swagger-ui'),
    path('schema/redoc/', SpectacularRedocView.as_view(url_name='schema'), name='redoc'),
    # Users endpoints
    path('users/', UserList.as_view()),
    path('users/<int:pk>/', UserDetail.as_view()),
    # Personal info endpoints
    path('info/', PersonalInfoList.as_view()),
    path('info/<int:pk>/', PersonalInfoDetail.as_view()),
]
