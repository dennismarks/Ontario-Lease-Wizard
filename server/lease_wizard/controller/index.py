from lease_wizard import app
import os
from flask import send_from_directory, send_file
from flask_pymongo import PyMongo
from flask import Flask
import pymongo
from flask import request
import json
import datetime

# TODO: make this dynamically chose beteen local and hosted DB URI
mongo = pymongo.MongoClient(
    'mongodb+srv://csc301:csc301@cluster0-bzlks.mongodb.net/test?retryWrites=true&w=majority')
db = mongo["database"]
# leases refers to the leases collection
# can also use mongo.db.leases instead
collection = db["leases"]


# can use for debugging
@app.route('/test')
def test():
    return json.dumps("Connection to database")


# updates the current lease
@app.route('/lease', methods=['PATCH', 'GET'])
def update_lease():

    # returns current lease in database
    if request.method == 'GET':

        cursor = collection.find({})

        all_leases = []
        for lease in cursor:
            temp = {"rent": lease['rent'], "rent_period": lease['rent_period']}
            all_leases.append(temp)

        return json.dumps(all_leases)

    # updates current lease by merging with request body
    if request.method == 'PATCH':
        # parses input body into json
        body = request.json

        lease = collection.find_one_and_update(
            {}, {'$set': body}, {'upsert': True})

        # issues json serializing the _id value of lease
        return json.dumps("nice")




@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


@app.route('/PDF', methods=['GET'])
def pdfUpload():
    try:
        return send_from_directory("../pdf/", 'destination.pdf', as_attachment=True)
    except FileNotFoundError:
        return "File not found", 404
