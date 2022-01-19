import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
import pickle

df = pd.read_csv('Resources\great_lakes_1.csv')


from sklearn.preprocessing import LabelEncoder

le=LabelEncoder()
db = df

db["region"]=le.fit_transform(df["region"])
db["type"]=le.fit_transform(df["type"])
db["laundry_options"]=le.fit_transform(df["laundry_options"])
db["parking_options"]=le.fit_transform(df["parking_options"])

x=db.drop(columns=["price"])
y=db["price"]

from sklearn.preprocessing import StandardScaler
scalar=StandardScaler()
x_scaled=scalar.fit_transform(x)

from sklearn.model_selection import train_test_split
x_train,x_test,y_train,y_test = train_test_split(x_scaled,y,test_size = 0.30,random_state=470)


from sklearn.ensemble import RandomForestRegressor
ran = RandomForestRegressor(n_estimators=90)

ran.fit(x_train,y_train)

pickle.dump(ran,open('model.pkl','wb'))




