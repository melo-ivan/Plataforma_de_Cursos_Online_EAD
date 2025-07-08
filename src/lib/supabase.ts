import { createClient } from '@supabase/supabase-js';

// Configuração do Supabase (será configurado depois)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Mock data para desenvolvimento
export const mockUsers = [
  {
    id: '1',
    email: 'admin@eduplatform.com',
    full_name: 'Admin User',
    role: 'admin',
    avatar_url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'instructor@eduplatform.com',
    full_name: 'John Smith',
    role: 'instructor',
    avatar_url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '3',
    email: 'student@eduplatform.com',
    full_name: 'Maria Silva',
    role: 'student',
    avatar_url: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
];

export const mockCourses = [
  {
    id: '1',
    title: 'Complete React Development Course',
    description: 'Master React from basics to advanced concepts including hooks, context, and modern patterns.',
    price: 99.99,
    thumbnail_url: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
    instructor_id: '2',
    instructor: mockUsers[1],
    category: 'programming',
    level: 'intermediate',
    duration: 1200, // 20 hours
    rating: 4.8,
    students_count: 1250,
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z',
    is_published: true
  },
  {
    id: '2',
    title: 'UI/UX Design Fundamentals',
    description: 'Learn the principles of user interface and user experience design with practical projects.',
    price: 79.99,
    thumbnail_url: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
    instructor_id: '2',
    instructor: mockUsers[1],
    category: 'design',
    level: 'beginner',
    duration: 900, // 15 hours
    rating: 4.6,
    students_count: 890,
    created_at: '2024-01-10T00:00:00Z',
    updated_at: '2024-01-10T00:00:00Z',
    is_published: true
  },
  {
    id: '3',
    title: 'Digital Marketing Mastery',
    description: 'Complete guide to digital marketing including SEO, social media, and content marketing.',
    price: 129.99,
    thumbnail_url: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
    instructor_id: '2',
    instructor: mockUsers[1],
    category: 'marketing',
    level: 'intermediate',
    duration: 1500, // 25 hours
    rating: 4.9,
    students_count: 2100,
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-05T00:00:00Z',
    is_published: true
  },
  {
    id: '4',
    title: 'Python for Data Science',
    description: 'Learn Python programming specifically for data analysis and machine learning applications.',
    price: 149.99,
    thumbnail_url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
    instructor_id: '2',
    instructor: mockUsers[1],
    category: 'data-science',
    level: 'advanced',
    duration: 1800, // 30 hours
    rating: 4.7,
    students_count: 750,
    created_at: '2024-01-20T00:00:00Z',
    updated_at: '2024-01-20T00:00:00Z',
    is_published: true
  },
  {
    id: '5',
    title: 'Business Strategy Essentials',
    description: 'Fundamental concepts of business strategy and management for entrepreneurs and professionals.',
    price: 89.99,
    thumbnail_url: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
    instructor_id: '2',
    instructor: mockUsers[1],
    category: 'business',
    level: 'beginner',
    duration: 600, // 10 hours
    rating: 4.5,
    students_count: 1500,
    created_at: '2024-01-12T00:00:00Z',
    updated_at: '2024-01-12T00:00:00Z',
    is_published: true
  },
  {
    id: '6',
    title: 'Advanced JavaScript Concepts',
    description: 'Deep dive into advanced JavaScript topics including closures, prototypes, and async programming.',
    price: 0, // Free course
    thumbnail_url: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=1',
    instructor_id: '2',
    instructor: mockUsers[1],
    category: 'programming',
    level: 'advanced',
    duration: 800, // 13.3 hours
    rating: 4.9,
    students_count: 3200,
    created_at: '2024-01-08T00:00:00Z',
    updated_at: '2024-01-08T00:00:00Z',
    is_published: true
  }
];

// Auth helpers com mock data
export const auth = {
  signUp: async (email: string, password: string, userData: any) => {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Simular criação de usuário
    const newUser = {
      id: Date.now().toString(),
      email,
      full_name: userData.full_name,
      role: userData.role,
      avatar_url: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    };
    
    // Salvar no localStorage para persistência
    const users = JSON.parse(localStorage.getItem('ead_users') || '[]');
    users.push(newUser);
    localStorage.setItem('ead_users', JSON.stringify(users));
    localStorage.setItem('ead_current_user', JSON.stringify(newUser));
    
    return { data: { user: newUser }, error: null };
  },

  signIn: async (email: string, password: string) => {
    // Simular delay de rede
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Verificar usuários mock primeiro
    const mockUser = mockUsers.find(user => user.email === email);
    if (mockUser) {
      localStorage.setItem('ead_current_user', JSON.stringify(mockUser));
      return { data: { user: mockUser }, error: null };
    }
    
    // Verificar usuários registrados
    const users = JSON.parse(localStorage.getItem('ead_users') || '[]');
    const user = users.find((u: any) => u.email === email);
    
    if (user) {
      localStorage.setItem('ead_current_user', JSON.stringify(user));
      return { data: { user }, error: null };
    }
    
    return { data: null, error: { message: 'Invalid credentials' } };
  },

  signOut: async () => {
    localStorage.removeItem('ead_current_user');
    return { error: null };
  },

  getCurrentUser: async () => {
    const userStr = localStorage.getItem('ead_current_user');
    return userStr ? JSON.parse(userStr) : null;
  },

  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    // Simular listener de mudança de estado
    return {
      data: {
        subscription: {
          unsubscribe: () => {}
        }
      }
    };
  },
};