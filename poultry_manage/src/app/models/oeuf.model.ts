enum Qualite {
    'bon' = 'bon',
    'mauvais' = 'mauvais'
}

export interface Oeuf {
    id: number;
    date: String;
    qualite: Qualite;
}