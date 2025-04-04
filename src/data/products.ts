export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  rating: number;
  section: 'girls' | 'boys' | 'figures';
}

export const products: Product[] = [
  {
    id: '1',
    name: "Princess Castle Playset",
    price: 39.99,
    category: "Playsets",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=60",
    description: "A magical castle playset with multiple rooms and accessories",
    rating: 4.5,
    section: 'girls'
  },
  {
    id: '2',
    name: "Rainbow Art Studio",
    price: 24.99,
    category: "Arts & Crafts",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=60",
    description: "Complete art studio set with colors and supplies",
    rating: 4.8,
    section: 'girls'
  },
  {
    id: '3',
    name: "Robot Explorer X2000",
    price: 34.99,
    category: "Robots",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&auto=format&fit=crop&q=60",
    description: "Interactive robot with lights and sounds",
    rating: 4.7,
    section: 'boys'
  },
  {
    id: '4',
    name: "Super Hero Action Pack",
    price: 29.99,
    category: "Action Figures",
    image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=800&auto=format&fit=crop&q=60",
    description: "Collection of superhero action figures",
    rating: 4.6,
    section: 'figures'
  },
  {
    id: '5',
    name: "Building Blocks Set",
    price: 24.99,
    category: "Construction",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&auto=format&fit=crop&q=60",
    description: "Creative building blocks for endless possibilities",
    rating: 4.9,
    section: 'boys'
  },
  {
    id: '6',
    name: "Space Explorer Kit",
    price: 39.99,
    category: "Science",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&auto=format&fit=crop&q=60",
    description: "Educational space exploration kit",
    rating: 4.4,
    section: 'boys'
  },
  {
    id: '7',
    name: "Magical Unicorn Plush",
    price: 19.99,
    category: "Plush Toys",
    image: "https://images.unsplash.com/photo-1563901935883-cb61f5d49be4?w=800&auto=format&fit=crop&q=60",
    description: "Soft and cuddly unicorn plush toy",
    rating: 4.8,
    section: 'girls'
  },
  {
    id: '8',
    name: "Science Explorer Kit",
    price: 29.99,
    category: "Educational",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=60",
    description: "Complete science kit for young explorers",
    rating: 4.7,
    section: 'girls'
  },
  {
    id: '9',
    name: "Superhero Collection",
    price: 19.99,
    category: "Superheroes",
    image: "https://images.unsplash.com/photo-1559535332-db9971090158?w=800&auto=format&fit=crop&q=60",
    description: "Collection of popular superhero figures",
    rating: 4.6,
    section: 'figures'
  },
  {
    id: '10',
    name: "Space Warriors Set",
    price: 24.99,
    category: "Sci-Fi",
    image: "https://images.unsplash.com/photo-1517853026755-80654f60e907?w=800&auto=format&fit=crop&q=60",
    description: "Futuristic space warrior action figures",
    rating: 4.5,
    section: 'figures'
  }
];

export const featuredProducts = [
  {
    id: '11',
    name: "Super Deluxe Robot Kit",
    price: 59.99,
    discountedPrice: 39.99,
    category: "Featured",
    image: "https://images.unsplash.com/photo-1535378620166-273708d44e4c?w=800&auto=format&fit=crop&q=60",
    description: "Advanced robot building kit",
    rating: 4.9,
    section: 'boys'
  },
  {
    id: '12',
    name: "Princess Dream Castle",
    price: 79.99,
    discountedPrice: 49.99,
    category: "Best Seller",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&auto=format&fit=crop&q=60",
    description: "Deluxe princess castle playset",
    rating: 4.8,
    section: 'girls'
  },
  {
    id: '13',
    name: "Dinosaur Adventure Set",
    price: 44.99,
    discountedPrice: 29.99,
    category: "New Arrival",
    image: "https://images.unsplash.com/photo-1516981879613-9f5da904015f?w=800&auto=format&fit=crop&q=60",
    description: "Complete dinosaur figure collection",
    rating: 4.7,
    section: 'figures'
  },
  {
    id: '14',
    name: "Ultimate Superhero Collection",
    price: 89.99,
    discountedPrice: 59.99,
    category: "Limited Edition",
    image: "https://images.unsplash.com/photo-1608889825205-eebdb9fc5806?w=800&auto=format&fit=crop&q=60",
    description: "Premium superhero action figures set",
    rating: 4.9,
    section: 'figures'
  }
];

export const getProductsBySection = (section: 'girls' | 'boys' | 'figures') => {
  return products.filter(product => product.section === section);
};

export const searchProducts = (query: string) => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm)
  );
};