import { Home, Clients, Category, Facture, Login, Mark, Payment, Products, Providers, Register } from '../components/pages/index'

export const routes = {
    auth: [
        {
            path: "/",
            element: Home
        },
        {
            path: "/clients",
            element: Clients
        },
        {
            path: "/category",
            element: Category
        },
        {
            path: "/facture",
            element: Facture
        },
        {
            path: "/providers",
            element: Providers
        },
        {
            path: "/mark",
            element: Mark
        },
        {
            path: "/payment",
            element: Payment
        },
        {
            path: "/products",
            element: Products
        },
        {
            path: '/login',
            element: Login
        },
        {
            path: '/register',
            element: Register
        },
    ],
    root: [
        {
            path: '/',
            element: Login
        },
        {
            path: '/register',
            element: Register
        },
    ]
}