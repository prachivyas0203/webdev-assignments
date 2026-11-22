from flask import Flask, request, jsonify
import json

app = Flask(__name__)

@app.route('/add')
def add_word():
    english = request.args.get('en')
    finnish = request.args.get('fi')

    if not english or not finnish:
        return jsonify({"error": "Both en and fi parameters are required"}), 400

    with open('dictionary.json', 'r', encoding='utf-8') as file:
        dictionary = json.load(file)

    dictionary[english.lower()] = finnish

    with open('dictionary.json', 'w', encoding='utf-8') as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=2)

    return jsonify({
        "English": english,
        "Finnish": finnish
    })

if __name__ == '__main__':
    app.run(port=3000)