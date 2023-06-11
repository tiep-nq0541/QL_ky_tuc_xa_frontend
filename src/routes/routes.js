import config from '~/config';

import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Search from '~/pages/Search';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.search, component: Search },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
