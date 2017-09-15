const Chance = require('chance');

const chance = new Chance();

class BukuService {
    getAll() {
        const data = [];
        for (let i=0; i<100; i++) {
            const buku = Buku();
            buku['id'] = i+1;
            data.push(buku);
        }
        return data;
    }

    getByID(id) {
        const data = this.getAll();
        console.log(data, id);

        const result = data.filter((buku) => {
            return buku.id = id;
        })
    }
}


const Buku = () => {
    return {
        id: 0,
        judul: chance.sentence(),
        penulis: chance.name()
    }
}

module.exports = BukuService;