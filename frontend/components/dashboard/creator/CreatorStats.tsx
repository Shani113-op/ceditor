export default function CreatorStats() {
    const stats = [
        { title: "Total Projects", value: 12 },
        { title: "Active Projects", value: 4 },
        { title: "Pending Proposals", value: 9 },
    ];

    return (
        <div className="grid md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-sm border"
                >
                    <p className="text-gray-500 text-sm">{stat.title}</p>
                    <h2 className="text-2xl font-bold mt-2">{stat.value}</h2>
                </div>
            ))}
        </div>
    );
}
