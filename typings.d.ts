interface Board {
    columns: Map<TypeColumn, Column>
}

type TypeColumn = "todo" | "inprogress" | "done";

interface Column {
    id: TypeColumn;
    todos: Todo[];
}

interface Todo extends Models.Document {
    $id: string;
    $createAt: string;
    title: string;
    status: string;
    image?: Image;
}

interface Image {
    bucketId: string;
    fileId: string;
}
