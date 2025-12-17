export interface WorkMetadata {
    name: string;
}

export interface WorkSourceGit {
    type: 'git';
    author: string;
    repo: string;
}

export interface WorkSourceMarkdown {
    type: 'markdown';
}

export type Work = WorkMetadata & (WorkSourceGit | WorkSourceMarkdown);
