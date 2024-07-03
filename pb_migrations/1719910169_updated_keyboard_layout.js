/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m6hmhznr",
    "name": "layers",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  // remove
  collection.schema.removeField("m6hmhznr")

  return dao.saveCollection(collection)
})
