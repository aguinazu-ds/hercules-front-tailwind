import http from "../http-common";

const getAll = (rutEmpresa) => {
    return http.get(`/${rutEmpresa}/empresas/listaempresasv2`);
};

const EmpresaService = {
    getAll,
};

export default EmpresaService;