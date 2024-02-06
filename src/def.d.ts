interface Route {
    name: string;
    path: string;
}

interface Post {
    title: string;
    description: string;
    pubDate: string;
    tags?: string[];
}
