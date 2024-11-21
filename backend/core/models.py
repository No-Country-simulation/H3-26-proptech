from django.db import models
from django.contrib.auth import get_user_model
from django.contrib.auth.models import Group

User = get_user_model()

# Create your models here.


class Personal_Info(models.Model):
    user_id = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='personal_info')
    DNI = models.CharField(max_length=20)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    contact_email = models.EmailField()
    contact_phone = models.CharField(max_length=20)
    additional_phone = models.CharField(max_length=20)
    address_id = models.ForeignKey('Address', on_delete=models.CASCADE)
    role_id = models.ForeignKey('Role', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    financial_info_id = models.ForeignKey(
        'Financial_Info', on_delete=models.CASCADE)
    credit_simulation_id = models.ForeignKey(
        'Credit_Simulation', on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.contact_email}"

    class Meta:
        db_table = 'personal_info'


class Address(models.Model):
    street = models.CharField(max_length=100)
    house_number = models.CharField(max_length=10)
    apartment_number = models.CharField(max_length=10)
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=20)
    user_id = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='address')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.address}, {self.city}, {self.state}, {self.country}, {self.postal_code}"

    class Meta:
        db_table = 'address'


class Role(models.Model):
    name = models.CharField(max_length=50)
    group_id = models.ForeignKey(Group, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.name}"

    class Meta:
        db_table = 'role'


class Financial_Info(models.Model):
    # evaluation_id = models.ForeignKey('Evaluation', on_delete=models.CASCADE)
    guarantee_id = models.ForeignKey(User, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.evaluation_id}"

    class Meta:
        db_table = 'financial_info'


class Credit_Simulation(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.evaluation_id}"

    class Meta:
        db_table = 'credit_simulation'
