/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("2598uqcfh4txrbe");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "2598uqcfh4txrbe",
    "created": "2024-07-02 08:35:58.763Z",
    "updated": "2024-07-02 08:42:38.319Z",
    "name": "key_label_layout",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zdjz4w1a",
        "name": "user_id",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "wxlqirh9",
        "name": "layout",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
