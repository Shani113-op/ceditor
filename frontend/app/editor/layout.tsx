import EditorSidebar from "@/components/layout/EditorSidebar";

export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex min-h-screen bg-background text-textPrimary">

            {/* Sidebar */}
            <aside className="hidden w-64 border-r border-border bg-surface md:block">
                <EditorSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-6">
                {children}
            </main>

        </div>
    );
}