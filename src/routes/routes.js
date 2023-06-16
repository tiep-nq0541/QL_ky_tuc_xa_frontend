import config from '~/config';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import RoomManager from '~/pages/RoomManager';
import EditRoom from '~/pages/EditRoom';
import CreateRoom from '~/pages/CreateRoom';
import StudentManager from '~/pages/StudentManager';
import EditStudent from '~/pages/EditStudent';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.roomManager, component: RoomManager },
    { path: config.routes.editRoom, component: EditRoom },
    { path: config.routes.createRoom, component: CreateRoom },
    { path: config.routes.studentManager, component: StudentManager },
    { path: config.routes.editStudent, component: EditStudent },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
