// AddProject.js
export default function AddProject(){
    return(
        <div className="flex">
            <aside className="w-1/4">
                {/* Contenido de tu barra lateral */}
            </aside>
            <div className="container ml-auto">
                <input placeholder="Title" />
                <input placeholder="Description" />
                <button>Submit</button>
            </div>
        </div>
    );
}
