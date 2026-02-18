type Editor = {
    name: string;
    skills: string;
    rating: number;
};

export default function EditorCard({ name, skills, rating }: Editor) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
            <div className="mb-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-500 text-sm">{skills}</p>
            </div>

            <div className="flex items-center justify-between">
                <span className="text-yellow-500 font-medium">
                    ⭐ {rating}
                </span>

                <button className="text-sm bg-black text-white px-4 py-1 rounded-lg hover:opacity-90">
                    View Profile
                </button>
            </div>
        </div>
    );
}
