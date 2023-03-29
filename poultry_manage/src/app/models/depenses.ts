export interface Depense{
    id : number;
    libelle : string;
    montant : number;
    date : string;
}

export interface PageDepense{
    size : number,
    currentPage : number,
    totalPage : number,
    depenseTotalParPage : Depense[]
}