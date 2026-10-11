const name = "Rio Achyar";

function tambah(satu, dua){
    return satu + dua;
}

class Name {

};

// export alias tidak best practice
// export {name as name, tambah as tambah, Name as Name}

export {name, tambah, Name}; // nanti alias nya di kasih pas import