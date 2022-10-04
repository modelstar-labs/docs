# Getting started

In just a few minutes you can deploy Python functions to your Data Warehouses/Lakehouses and run them as SQL functions. The transformations are all done withing your data platform itself. Let's wait no more, and get started.

# Quickstart

Quickstart
It’s easy to get started with Greppo.

Install Greppo¶
First install the Greppo python package using your python installation,

pip install greppo
Setup the project
Create a new dir for your Greppo project, and create a new script,

mkdir my-greppo-app
cd my-greppo-app
touch app.py

Create a new file app.py that will setup the user script,

touch app.py

Populate script with a simple app to get started with,

from greppo import app
import numpy as np

x = app.number(name="x", value=3)

print('Numbers list: ', np.ones(10) \* x)

This script creates a single input x that the user can interact with and the script generates a list of the current number value with a list size of 10,

Run app
Run the app and you’re on your way building a geospatial app in seconds!

greppo serve app.py
