from django.http import JsonResponse
import pandas as pd
import os
from sklearn.linear_model import LinearRegression
from django.http import HttpResponse

def index(request):
    return HttpResponse("Welcome to the root URL!")

csv_file_path = 'D:\\New folder\\MOBILE.csv'

if os.path.exists(csv_file_path):
    d = pd.read_csv(csv_file_path)
else:
    print(f"CSV file '{csv_file_path}' not found.")


def process_inputs(request):
    if request.method == 'POST':
        input1 = float(request.POST.get('input1'))
        input2 = float(request.POST.get('input2'))
        input3 = float(request.POST.get('input3'))
        input4 = float(request.POST.get('input4'))

        x = d.iloc[:, :-1]
        y = d.iloc[:, -1]

        rg = LinearRegression()
        rg.fit(x, y)

        out = rg.predict([[input1, input2, input3, input4]])  # Pass input as a 2D array

        # Your processing logic here
        # For demonstration purposes, just concatenate inputs
        output = f'Output : {out[0]}'

        return JsonResponse({'output': output})
    return JsonResponse({'error': 'Only POST requests are supported'}, status=405)
