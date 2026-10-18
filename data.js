// DATOS DEL MENÚ - Edita esto para cada cliente
const menuData = [
    {
        id: 1,
        name: "Hamburguesa Clásica",
        description: "Carne de res 150g, lechuga, tomate, cebolla y salsa especial",
        price: 89,
        category: "hamburguesas",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
        available: true
    },
    {
        id: 2,
        name: "Hamburguesa Doble Queso",
        description: "Doble carne, doble queso cheddar, tocino y salsa BBQ",
        price: 129,
        category: "hamburguesas",
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=400",
        available: true
    },
    {
        id: 3,
        name: "Hamburguesa Vegana",
        description: "Proteína vegetal, aguacate, espinaca y salsa de chipotle",
        price: 109,
        category: "hamburguesas",
        image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400",
        available: true
    },
    {
        id: 4,
        name: "Papas Francesas",
        description: "Crujientes papas con sal de mar",
        price: 45,
        category: "snacks",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400",
        available: true
    },
    {
        id: 5,
        name: "Aros de Cebolla",
        description: "6 piezas de aros de cebolla empanizados",
        price: 55,
        category: "snacks",
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400",
        available: true
    },
    {
        id: 6,
        name: "Refresco",
        description: "Coca-Cola, Sprite o Fanta 355ml",
        price: 25,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400",
        available: true
    },
    {
        id: 7,
        name: "Agua de Sabor",
        description: "Jamaica, horchata o limón 500ml",
        price: 35,
        category: "bebidas",
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400",
        available: true
    }
];

// FUNCIÓN PARA RENDERIZAR EL MENÚ
function renderMenu(category = 'todos') {
    const menuGrid = document.getElementById('menu-grid');
    menuGrid.innerHTML = '';

    const filteredItems = category === 'todos' 
        ? menuData 
        : menuData.filter(item => item.category === category);

    filteredItems.forEach(item => {
        if (!item.available) return; // No mostrar si no está disponible

        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <div class="menu-item-content">
                <span class="menu-item-category">${item.category}</span>
                <h3 class="menu-item-name">${item.name}</h3>
                <p class="menu-item-description">${item.description}</p>
                <div class="menu-item-footer">
                    <span class="menu-item-price">$${item.price}</span>
                    <a href="https://wa.me/5215512345678?text=Hola,%20quiero%20pedir:%20${encodeURIComponent(item.name)}" 
                       class="order-btn" 
                       target="_blank">
                        Pedir
                    </a>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// FUNCIÓN PARA FILTRAR POR CATEGORÍA
document.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remover clase active de todos los botones
        document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
        // Agregar clase active al botón clickeado
        e.target.classList.add('active');
        // Renderizar menú con la categoría seleccionada
        renderMenu(e.target.dataset.category);
    });
});

// Renderizar menú al cargar la página
renderMenu();