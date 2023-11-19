interface Route {
    name: string;
    path: string;
}

interface Social {
    platform: string;
    username: string;
    href: string;
    iconPack?: string;
    color?: string;
}

interface Post {
    title: string;
    description: string;
    publishedAt: string;
    tags?: string[];
}
