from lease_wizard import app
import os
import pdfGen
from flask import send_from_directory, request, jsonify, send_file
import pymongo

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
    return jsonify("Connection to database")


# updates the current lease
@app.route('/lease', methods=['PATCH', 'GET'])
def update_lease():
    # returns current lease in database
    if request.method == 'GET':

        cursor = collection.find({})

        all_leases = []
        for lease in cursor:
            lease['_id'] = str(lease['_id'])
            all_leases.append(lease)

        return jsonify(all_leases)

    # updates current lease by merging with request body
    if request.method == 'PATCH':
        # parses input body into json
        body = request.json

        lease = collection.find_one_and_update(
            {}, {'$set': body}, {'upsert': True})

        # issues json serializing the _id value of lease
        return jsonify("Done")


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
        print("GENERATING")
        pdfGen.main()
        root_dir = os.path.dirname(os.getcwd())
        return send_from_directory(os.path.join(root_dir, 'server', 'lease_wizard', 'pdf'), "destination.pdf", as_attachment=True), 200
    except FileNotFoundError:
        return "File not found", 404
