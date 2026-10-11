export const namaDepan = "Bedugul";
export const namaTengah = "bin";
export const namaBelakang = "Pitt";

export function hi(name) {
    console.info(`${name}`);
}

export class Say{
    constructor(name){
        this.name = name;
    }

    sapa(name) {
        console.info(`halo ${name}, gw ${this.name}`);
    }
}