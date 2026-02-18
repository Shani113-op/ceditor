import CreatorWelcome from "@/components/dashboard/creator/CreatorWelcome";
import CreatorStats from "@/components/dashboard/creator/CreatorStats";
import RecommendedEditors from "@/components/dashboard/creator/RecommendedEditors";

export default function CreatorDashboard() {
    return (
        <div className="space-y-8">
            <CreatorWelcome />
            <CreatorStats />
            <RecommendedEditors />
        </div>
    );
}
