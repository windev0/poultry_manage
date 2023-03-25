enum Qualite {
    'bon' = 'bon',
    'mauvais' = 'mauvais'
}

export interface Oeuf {
    id: number;
    date: String;
    qualite: Qualite;
}

export interface PageOeuf{
    oeufs : Oeuf[];
    page : number;
    size : number;
    totalPages : number;
}