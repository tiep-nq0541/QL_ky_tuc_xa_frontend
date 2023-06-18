// obj routes đến các đường dẫn 
const routes = {
    home: '/',
    following: '/following',
    profile: '/:nickname',
    upload: '/upload',
    search: '/search',
    live: '/live',
    roomManager: '/admin/quan-ly-phong',
    editRoom: '/admin/quan-ly-phong/:id/edit',
    createRoom: '/admin/quan-ly-phong/create',
    studentManager: '/admin/quan-ly-sinh-vien',
    editStudent: '/admin/quan-ly-sinh-vien/:id/edit',
    infoRoom: '/admin/quan-ly-phong/:id',
};

export default routes;
