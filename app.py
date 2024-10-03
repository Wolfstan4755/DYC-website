from flask import Flask, render_template

app = Flask(__name__)

@app.route('/ThePlaceofinformation')
def home():
    return '''
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
        <link rel="stylesheet" href="{{ url_for('static', filename='styles.css') }}">
    </head>
    <body>
        <h1>Information Of Our Lady and Our Lord </h1>
        <p>Our Lady Wish it at fatima that your family is consacrated to the two hearts of Jesus and Mary.</p>
        <p1>The Promisis If you pray the rosary </p1>
        <h2>Imparted to Saint Dominic and Blessed Alan</h2>




    </body>
    </html>
    '''

if __name__ == "__main__":
    app.run(debug=True)
