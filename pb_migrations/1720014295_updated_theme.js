/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y7ut2eln55wtg59")

  collection.name = "keyboard_theme"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("y7ut2eln55wtg59")

  collection.name = "theme"

  return dao.saveCollection(collection)
})
