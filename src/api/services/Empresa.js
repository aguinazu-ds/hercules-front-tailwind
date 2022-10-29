import client from '../client';

const getAll = (rutEmpresa) => client.get(`/${rutEmpresa}/empresas/listaempresasv2`);

const getAllMutuales = (rutEmpresa) => client.get(`/${rutEmpresa}/empresas/listamutuales`)

const Empresas = {
    getAll,
    getAllMutuales
};

export default Empresas;