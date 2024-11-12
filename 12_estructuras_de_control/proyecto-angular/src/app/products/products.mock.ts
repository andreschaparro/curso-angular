// Un mock es una estructura de datos falsa para poder hacer una página de muestra

export const productsList: Product[] = [
    { id: 1, name: 'Lavandina', price: 10, description: 'Botella de 1 Litro' },
    { id: 2, name: 'Detergente', price: 5, description: 'Dura 120 lavados' },
    { id: 3, name: 'Limpia Vidrios', price: 7, description: 'Tus vidrios transparentes' },
    { id: 4, name: 'Quita Grasa', price: 8 },
    { id: 5, name: 'Perfumina', price: 2, description: 'El olor a campo mas realista' }
]

// Hay que tipar los objetos
export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}