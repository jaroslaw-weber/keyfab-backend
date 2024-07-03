/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2598uqcfh4txrbe")

  collection.name = "keyboard_layout"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2598uqcfh4txrbe")

  collection.name = "keyboard_layouts"

  return dao.saveCollection(collection)
})
