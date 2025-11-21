export function Footer() {
    return (
        <footer className="bg-muted/50 py-12 mt-20">
            <div className="container mx-auto px-6 text-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Hussain Burhanuddin. All rights reserved.
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                    Built with Next.js, Tailwind CSS, and Framer Motion.
                </p>
            </div>
        </footer>
    );
}
