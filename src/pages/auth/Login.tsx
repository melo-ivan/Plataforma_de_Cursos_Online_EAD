import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { GraduationCap, Mail, Lock, Eye, EyeOff, User, Shield, BookOpen, TestTube } from 'lucide-react';
import LoadingSpinner from '../../components/common/LoadingSpinner';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showTestAccounts, setShowTestAccounts] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleTestLogin = (testEmail: string) => {
    setEmail(testEmail);
    setPassword('123456');
    setShowTestAccounts(false);
  };

  const testAccounts = [
    {
      email: 'admin@eduplatform.com',
      role: 'Admin',
      icon: Shield,
      color: 'text-red-600'
    },
    {
      email: 'instructor@eduplatform.com',
      role: 'Instrutor',
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      email: 'student@eduplatform.com',
      role: 'Estudante',
      icon: User,
      color: 'text-blue-600'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', color: 'text-blue-500' },
    { name: 'TypeScript', icon: '📘', color: 'text-blue-600' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'text-cyan-500' },
    { name: 'Supabase', icon: '🗄️', color: 'text-green-500' },
    { name: 'Stripe', icon: '💳', color: 'text-purple-500' },
    { name: 'Vite', icon: '⚡', color: 'text-yellow-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center">
            <GraduationCap className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Bem-vindo de volta
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Entre na sua conta para continuar aprendendo
          </p>
        </div>

        {/* Login Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Digite seu email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none relative block w-full px-10 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Digite sua senha"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link to="/forgot-password" className="text-blue-600 hover:text-blue-500 transition-colors">
                Esqueceu sua senha?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <LoadingSpinner size="small" className="border-white border-t-transparent" />
              ) : (
                'Entrar'
              )}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Não tem uma conta?{' '}
              <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium transition-colors">
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </form>

        {/* Test Accounts - Discrete Section */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={() => setShowTestAccounts(!showTestAccounts)}
            className="w-full flex items-center justify-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
          >
            <TestTube className="w-4 h-4 mr-2" />
            Contas de teste para demonstração
          </button>
          
          {showTestAccounts && (
            <div className="mt-4 space-y-2">
              {testAccounts.map((account, index) => (
                <button
                  key={index}
                  onClick={() => handleTestLogin(account.email)}
                  className="w-full flex items-center justify-between p-3 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <div className="flex items-center">
                    <account.icon className={`w-4 h-4 mr-2 ${account.color}`} />
                    <span className="text-gray-700">{account.role}</span>
                  </div>
                  <span className="text-xs text-gray-500">{account.email}</span>
                </button>
              ))}
              <div className="text-xs text-gray-500 text-center mt-2">
                Qualquer senha funciona para contas de teste
              </div>
            </div>
          )}
        </div>

        {/* Technologies Used - Very Discrete */}
        <div className="mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center mb-2">Tecnologias utilizadas:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 text-xs text-gray-400"
                title={tech.name}
              >
                <span>{tech.icon}</span>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;