# Intelligent Transportation System: Optimal Routing and a Novel OBD Data Logging System
![](/Poster.jpg)

## Problem Statement
The number of vehicles (cars) has increased as with the demand of population over the years, which contributed to the multiple harmful and unexpected factors on the roads due to the sudden malfunction/failure occurrences in vehicles including accidents, injuries, faults, etc. To avoid such risks, a concept long used in the aircraft industry has now been implemented in automobiles and has been introduced as “Automated Self-Diagnostic Mechanism”, which deals with the prognostics to anticipate vehicle malfunctions expected in the future.

## Proposed Solution
“Automated Self-Diagnostic Mechanism”, which deals with the prognostics to anticipate vehiclemalfunctions expected in the future. The purpose of our pitched project is that the data will be fetched from the Vehicle On-Board Diagnostics (OBD) through the Raspberry Pi microprocessor, then the data will be dispatched to the ML/DL Algorithms for Training and Testing purposes. The algorithms makes the Model capable to predict the expected failures of vehicle that may occur in future on behalf of the previous OBD data, and categorize them into "GO ITEMS" (can be delayed for maintenance) and "NO-GO ITEMS" (cannot be delayed for maintenance) and if the fault cannot be delayed, it will schedule an appointment from vehicle’s approved vendors.

## Libraries Needed
```
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import requests
from google.colab import files
import io
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score
from sklearn.neighbors import KNeighborsClassifier
```

## Heatmap
![](/Poster.jpg)

## Graph
![](/Poster.jpg)

## Correlation Matrix
![](/Poster.jpg)
