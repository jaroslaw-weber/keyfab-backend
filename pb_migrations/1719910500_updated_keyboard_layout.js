/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nuxzdhf8",
    "name": "public",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  // remove
  collection.schema.removeField("nuxzdhf8")

  return dao.saveCollection(collection)
})
