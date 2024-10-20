const connectDB = (storeName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('Database', 1);

        request.onupgradeneeded = function () {
            const db = request.result;

            // Corrected the way of checking if object store exists
            if (!db.objectStoreNames.contains(storeName)) {
                db.createObjectStore(storeName, { keyPath: 'id', autoIncrement: true });
                console.log(`Object store '${storeName}' created.`);
            }
        };

        request.onsuccess = function () {
            console.log("Database connected successfully.");
            resolve(request.result);
        };

        request.onerror = function (event) {
            console.log("Error connecting to DB", event);
            reject(event);
        };
    })
};

export const addData = (storeName, data) => {
    const request = indexedDB.open("Database", 1);

    request.onsuccess = function (event) {
        const db = event.target.result;

        // Start transaction and add data to the store
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);

        const addRequest = store.add({ value: data });

        addRequest.onsuccess = function () {
            console.log("Data added successfully");
        };

        addRequest.onerror = function () {
            console.error("Failed to add data");
        };
    };

    request.onerror = function (event) {
        console.error("Failed to open database:", event);
    };
};

export const getAll = (storeName) => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('Database', 1);

        request.onsuccess = function () {
            const db = request.result;
            const transaction = db.transaction(storeName);
            const users = transaction.objectStore(storeName);
            const res = users.getAll();
            res.onsuccess = () =>{
                resolve(res.result)
            }

        }

        request.onerror = function () {
            reject("Error");
        }
    })
}

export default connectDB;
