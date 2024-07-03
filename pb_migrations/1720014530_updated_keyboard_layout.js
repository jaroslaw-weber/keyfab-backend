/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  collection.viewRule = "@request.auth.id = created_by || public = true"
  collection.createRule = ""
  collection.updateRule = "@request.auth.id = created_by"
  collection.deleteRule = "@request.auth.id = created_by"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("pmgpnxiv624t7ul")

  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
