/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4qg1qmun",
    "name": "hardware",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  // remove
  collection.schema.removeField("4qg1qmun")

  return dao.saveCollection(collection)
})
