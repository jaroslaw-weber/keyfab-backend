/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  collection.name = "keyboard_layout"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  collection.name = "hardware_layout"

  return dao.saveCollection(collection)
})
