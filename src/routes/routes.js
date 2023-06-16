import config from '~/config';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';
import RoomManager from '~/pages/RoomManager';
import EditRoom from '~/pages/EditRoom';
import CreateRoom from '~/pages/CreateRoom';
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
    { path: config.routes.roomManager, component: RoomManager },
    { path: config.routes.edit, component: EditRoom },
    { path: config.routes.createRoom, component: CreateRoom },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
