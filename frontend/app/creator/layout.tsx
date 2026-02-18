import EditorSidebar from "@/components/layout/EditorSidebar";

export default function EditorLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background text-textPrimary flex">

            {/* Sidebar */}
            <aside className="w-64 hidden md:block border-r border-border bg-surface">
                <EditorSidebar />
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6 overflow-y-auto">
                {children}
            </main>

        </div>
    );
}
