from django.db import models

class InputData(models.Model):
    input1 = models.CharField(max_length=100)
    input2 = models.CharField(max_length=100)
    input3 = models.CharField(max_length=100)
    input4 = models.CharField(max_length=100)

    def __str__(self):
        return f'InputData: {self.input1}, {self.input2}, {self.input3}, {self.input4}'
