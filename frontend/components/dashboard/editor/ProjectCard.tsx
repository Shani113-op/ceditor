type Project = {
    title: string;
    budget: string;
    description: string;
};

export default function ProjectCard({
    title,
    budget,
    description,
}: Project) {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
            <div className="mb-3">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between mt-4">
                <span className="font-medium text-green-600">
                    {budget}
                </span>

                <button className="text-sm bg-black text-white px-4 py-1 rounded-lg hover:opacity-90">
                    Apply
                </button>
            </div>
        </div>
    );
}
