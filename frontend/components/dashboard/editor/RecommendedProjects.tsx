import ProjectCard from "./ProjectCard";

export default function RecommendedProjects() {
    const projects = [
        {
            id: 1,
            title: "YouTube Vlog Editing",
            budget: "$150",
            description:
                "Looking for an editor for weekly YouTube vlogs with cinematic style.",
        },
        {
            id: 2,
            title: "Gaming Shorts",
            budget: "$80",
            description:
                "Need fast-paced short form gaming content editor for TikTok and Reels.",
        },
        {
            id: 3,
            title: "Podcast Editing",
            budget: "$200",
            description:
                "Professional podcast audio and video editing required.",
        },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">
                Recommended Projects
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        budget={project.budget}
                        description={project.description}
                    />
                ))}
            </div>
        </div>
    );
}
