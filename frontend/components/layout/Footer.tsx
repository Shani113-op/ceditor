import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-surface border-t border-border mt-16">
            <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-textMuted">

                {/* Brand */}
                <div>
                    <h3 className="text-lg font-semibold text-textPrimary mb-3">
                        CreatorEditor
                    </h3>
                    <p className="text-sm">
                        Hire professional editors. Pay safely. Release when satisfied.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 className="text-textPrimary font-medium mb-3">Platform</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/projects" className="hover:text-textPrimary">
                                Browse Projects
                            </Link>
                        </li>
                        <li>
                            <Link href="/editor" className="hover:text-textPrimary">
                                For Editors
                            </Link>
                        </li>
                        <li>
                            <Link href="/creator" className="hover:text-textPrimary">
                                For Creators
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Legal */}
                <div>
                    <h4 className="text-textPrimary font-medium mb-3">Legal</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="#" className="hover:text-textPrimary">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:text-textPrimary">
                                Terms of Service
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-border text-center py-4 text-sm text-textMuted">
                © {new Date().getFullYear()} CreatorEditor. All rights reserved.
            </div>
        </footer>
    );
}
