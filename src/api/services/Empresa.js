import client from '../client';

const getAll = (rutEmpresa) => client.get(`/${rutEmpresa}/empresas/listaempresasv2`);

const Empresas = {
    getAll,
};

export default Empresas;