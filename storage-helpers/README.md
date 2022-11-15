# @ce1pers/storage-helpers

Browser storage helpers powered by typescript.

## Installation

##### npm

`npm i @ce1pers/storage-helpers`

##### yarn

`yarn add @ce1pers/storage-helpers`

## Usage

```javascript
// Import helper.
import { useIndexedDatabase } from "@ce1pers/storage-helpers";

useIndexedDatabase({
    databaseName: "custom-database",
    databaseVersion: DATABASE_VERSION,
    onUpgradeneededCallback: (database) => {
        switch (database.version) {
            case 1:
            createObjectStore({
                storeName: `test-store`,
                options: { autoIncrement: true, keyPath: "id" },
                indexOptions: [
                {
                    keyPath: "id",
                    name: "id",
                    options: { unique: true },
                },
                ],
            });

            break;
        }
    },
    onSuccessCallback: async () => {
    const { ok, data, error } = await retrieveRow({
        storeName: "test-store",
    });
    console.log(ok, data, error);
    },
})

```
