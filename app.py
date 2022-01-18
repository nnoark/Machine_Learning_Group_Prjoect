from flask import Flask, render_template, request, redirect, url_for


app = Flask(__name__)


@app.route('/')
def index():     
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def states(): 
    states=request.form.get("state")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def type(): 
    type=request.form.get("type")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def sqft(): 
    sqft=request.form.get("sqft")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def bedroom(): 
    bedroom=request.form.get("bedroom")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def bathroom(): 
    bathroom=request.form.get("bathroom")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def cats(): 
    cats=request.form.get("cats")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def dogs(): 
    dogs=request.form.get("dogs")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def smoking(): 
    smoking=request.form.get("smoking")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def wheelchair(): 
    wheelchair=request.form.get("wheelchair")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def electric(): 
    electric=request.form.get("electric")
    return render_template('index.html')


@app.route('/', methods=['GET', 'POST'])
def laundry(): 
    laundry=request.form.get("laundry")
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)