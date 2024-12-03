from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password
from personal_info.serializers import PersonalInfoSerializer

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    personal_data = PersonalInfoSerializer()

    class Meta:
        model = User
        fields = ('username', 'email', 'password',
                  'is_active', 'personal_data')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        instance.username = validated_data.get('username', instance.username)
        instance.email = validated_data.get('email', instance.email)
        instance.password = make_password(
            validated_data.get('password', instance.password))
        instance.save()
        return instance
