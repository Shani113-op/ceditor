export default function EditorStats() {
    const stats = [
        { title: "Total Proposals", value: 18 },
        { title: "Active Jobs", value: 3 },
        { title: "Total Earnings", value: "$2,450" },
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
