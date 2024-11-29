from rest_framework import serializers
from core.models import Personal_Info


class PersonalInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personal_Info
        fields = '__all__'
        extra_kwargs = {'user_id': {'read_only': True}}

    def create(self, validated_data):
        return Personal_Info.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.DNI = validated_data.get('DNI', instance.DNI)
        instance.first_name = validated_data.get(
            'first_name', instance.first_name)
        instance.last_name = validated_data.get(
            'last_name', instance.last_name)
        instance.contact_email = validated_data.get(
            'contact_email', instance.contact_email)
        instance.contact_phone = validated_data.get(
            'contact_phone', instance.contact_phone)
        instance.additional_phone = validated_data.get(
            'additional_phone', instance.additional_phone)
        instance.address_id = validated_data.get(
            'address_id', instance.address_id)
        instance.role_id = validated_data.get('role_id', instance.role_id)
        instance.save()
        return instance
