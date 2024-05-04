const explorer = {
    id: "1",
    name: "root",
    isFolder: true,
    item: [
        {
            id: "2",
            name: "src",
            isFolder: true,
            item: [
                {
                    id: "3",
                    name: "Project",
                    isFolder: false,
                    item: [],
                },
                {
                    id: "4",
                    name: "ProjectFolder2",
                    isFolder: false,
                    item: [],
                },
            ],
        },
        {
            id: "5",
            name: "public",
            isFolder: true,
            item: [
                {
                    id: "6",
                    name: "index.html",
                    isFolder: false,
                    item: [],
                },
                {
                    id: "7",
                    name: "style.css",
                    isFolder: false,
                    item: [],
                },
            ],
        },
        {
            id: "8",
            name: "node_modules",
            isFolder: false,
            item: [],
        },
    ],
};

export default explorer;
