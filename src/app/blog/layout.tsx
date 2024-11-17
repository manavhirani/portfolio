export default function BlogLayout({    
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="p-12">
            {children}
        </div>
    );
}