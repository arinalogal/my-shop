import { createRouter, createWebHistory } from 'vue-router';
import { useAuth } from '@/composables';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: () => import('@/pages/index.vue'),
        meta: {
            auth: false,
            title: 'Главная'
        }
    },
    {
        name: 'SignIn',
        path: '/auth/sign-in',
        component: () => import('@/pages/auth/sign-in.vue'),
        meta: {
            auth: false
        }
    },
    {
        name: 'SignUp',
        path: '/auth/sign-up',
        component: () => import('@/pages/auth/sign-up.vue'),
        meta: {
            auth: false
        }
    },
    {
        name: 'Search',
        path: '/hits',
        component: () => import('@/pages/search.vue'),
        meta: {
            auth: false,
            title: 'Хиты'
        }
    },
    {
        name: 'Catalog',
        path: '/catalog',
        component: () => import('@/pages/catalog/index.vue'),
        meta: {
            auth: false,
            title: 'Каталог'
        }
    },
    {
        name: 'CatalogCategory',
        path: '/catalog/:category',
        component: () => import('@/pages/catalog/category.vue'),
        meta: {
            auth: false
        }
    },
    {
        name: 'CatalogDetail',
        path: '/catalog/:category/:id',
        component: () => import('@/pages/catalog/id.vue'),
        meta: {
            auth: false
        }
    },
    {
        name: 'delivery',
        path: '/delivery',
        component: () => import('@/pages/cart.vue'),
        meta: {
            auth: false,
            title: 'Доставка'
        }
    },
    {
        name: 'Ordering',
        path: '/ordering',
        component: () => import('@/pages/ordering.vue'),
        meta: {
            auth: false
        }
    },
    {
        name: 'Profile',
        path: '/profile',
        component: () => import('@/pages/profile/index.vue'),
        meta: {
            auth: true
        }
    },
    {
        name: 'ProductAdd',
        path: '/profile/add-product',
        component: () => import('@/pages/profile/add-product.vue'),
        meta: {
            auth: true
        }
    },
    {
        name: 'MyProducts',
        path: '/profile/products',
        component: () => import('@/pages/profile/products.vue'),
        meta: {
            auth: true
        }
    },
    {
        name: 'Favorites',
        path: '/profile/favorites',
        component: () => import('@/pages/profile/favorites.vue'),
        meta: {
            auth: true
        }
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});

const { isAuth } = useAuth();

router.beforeEach((to) => {
    const hasAuth = to.meta.auth;
    const title = to.meta.title;

    document.title = title || 'Наш магазин';

    if (hasAuth && !isAuth.value) {
        router.push('/auth/sign-in');

        return false;
    }
});