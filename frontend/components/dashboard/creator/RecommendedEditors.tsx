import EditorCard from "./EditorCard";

export default function RecommendedEditors() {
    const editors = [
        {
            id: 1,
            name: "John Doe",
            skills: "YouTube Editing, Shorts",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Sarah Lee",
            skills: "Podcast Editing",
            rating: 4.6,
        },
        {
            id: 3,
            name: "Michael Ray",
            skills: "Gaming Videos",
            rating: 4.9,
        },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">
                Recommended Editors
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {editors.map((editor) => (
                    <EditorCard
                        key={editor.id}
                        name={editor.name}
                        skills={editor.skills}
                        rating={editor.rating}
                    />
                ))}
            </div>
        </div>
    );
}
