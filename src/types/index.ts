export interface User {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  role: 'admin' | 'instructor' | 'student';
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  price: number;
  thumbnail_url: string;
  instructor_id: string;
  instructor: User;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  rating: number;
  students_count: number;
  created_at: string;
  updated_at: string;
  is_published: boolean;
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  description: string;
  video_url: string;
  duration: number; // in minutes
  order: number;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  student_id: string;
  course_id: string;
  enrolled_at: string;
  completed_at?: string;
  progress: number; // 0-100
  certificate_url?: string;
}

export interface Payment {
  id: string;
  student_id: string;
  course_id: string;
  amount: number;
  stripe_payment_id: string;
  status: 'pending' | 'completed' | 'failed';
  created_at: string;
}

export interface LessonProgress {
  id: string;
  enrollment_id: string;
  lesson_id: string;
  completed: boolean;
  watched_duration: number; // in seconds
  created_at: string;
  updated_at: string;
}

export interface Review {
  id: string;
  course_id: string;
  student_id: string;
  student: User;
  rating: number;
  comment: string;
  created_at: string;
}