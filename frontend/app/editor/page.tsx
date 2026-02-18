import EditorWelcome from "@/components/dashboard/editor/EditorWelcome";
import EditorStats from "@/components/dashboard/editor/EditorStats";
import RecommendedProjects from "@/components/dashboard/editor/RecommendedProjects";

export default function EditorDashboard() {
    return (
        <div className="space-y-8">
            <EditorWelcome />
            <EditorStats />
            <RecommendedProjects />
        </div>
    );
}
