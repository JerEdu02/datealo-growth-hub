
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, BarChart3, Users, TrendingUp, Target, Clock, Lightbulb, CreditCard, GraduationCap, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startup: "",
    problem: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "¡Gracias por tu interés!",
      description: "Nos pondremos en contacto contigo pronto para agendar tu diagnóstico gratuito.",
    });
    setFormData({ name: "", email: "", startup: "", problem: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Video */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transformamos tu <span className="text-blue-600">data</span> en decisiones que hacen <span className="text-blue-600">crecer</span> tu startup
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Análisis de datos y dashboards personalizados para startups que quieren tomar decisiones de negocio con claridad, sin necesidad de un equipo técnico.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
                  Diagnóstico Gratuito
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Ver Casos de Uso
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-xl p-1 shadow-2xl">
                <div className="bg-gray-800 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-white text-sm">Video explicativo próximamente</p>
                  <p className="text-gray-400 text-xs mt-2">Descubre cómo Datealo transforma datos en decisiones</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Todo lo que necesitas para crecer con datos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtén claridad sobre tus métricas más importantes y toma decisiones que impulsen el crecimiento de tu startup
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Visualiza tus métricas clave
                </h3>
                <p className="text-gray-600">
                  Activación, retención, CAC, LTV y todas las métricas que importan para tu negocio en dashboards claros y accionables.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Sin equipo técnico
                </h3>
                <p className="text-gray-600">
                  Toma decisiones basadas en datos sin necesidad de contratar un data scientist o equipo de analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Acompañamiento personalizado
                </h3>
                <p className="text-gray-600">
                  Recibe insights y recomendaciones específicas para tu industria y modelo de negocio.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                ¿Te suena familiar?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>Tienes datos dispersos</strong> en diferentes herramientas y no sabes qué significan realmente.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>Tomas decisiones a ciegas</strong> porque no tienes visibilidad de tus métricas de crecimiento.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>No tienes presupuesto</strong> para contratar un equipo de datos o un data scientist.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 text-lg">
                    <strong>Pierdes oportunidades</strong> porque no identificas a tiempo problemas en tu funnel.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Nosotros lo resolvemos
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Unificamos todos tus datos</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Dashboards claros y accionables</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Solución accesible para startups</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Insights automáticos y alertas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Qué entregamos exactamente
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un sistema completo de análisis diseñado específicamente para las necesidades de tu startup
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Dashboard Ejecutivo
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Vista general de KPIs principales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Métricas de crecimiento y tendencias
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Alertas automáticas de cambios críticos
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Análisis de Funnel
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Seguimiento de conversiones paso a paso
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Identificación de puntos de fuga
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Recomendaciones de optimización
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Análisis de Cohortes
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Retención de usuarios por período
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    LTV y valor por cohorte
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Predicciones de comportamiento
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Reportes Automáticos
                </h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Reportes semanales automáticos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Insights y recomendaciones
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Acompañamiento mensual personalizado
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Metrics Examples */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Métricas que te ayudamos a visualizar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ejemplos reales de lo que podrás ver y entender sobre tu negocio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">23%</div>
              <div className="text-gray-600 text-sm mb-1">Tasa de Activación</div>
              <div className="text-xs text-green-500">↑ +5% vs mes anterior</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$142</div>
              <div className="text-gray-600 text-sm mb-1">CAC Promedio</div>
              <div className="text-xs text-red-500">↑ +$12 vs mes anterior</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">$890</div>
              <div className="text-gray-600 text-sm mb-1">LTV Promedio</div>
              <div className="text-xs text-green-500">↑ +$67 vs mes anterior</div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">67%</div>
              <div className="text-gray-600 text-sm mb-1">Retención 30 días</div>
              <div className="text-xs text-green-500">↑ +3% vs mes anterior</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Casos prácticos: cómo ayudamos a startups como la tuya
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo hemos transformado datos en crecimiento real para founders como tú
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Track&Flow - SaaS */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Track&Flow</h3>
                    <p className="text-sm text-gray-500">SaaS - Project Management</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Problema inicial:</h4>
                    <p className="text-red-700 text-sm">No entendían por qué los usuarios se registraban pero no activaban su cuenta.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Qué hicimos:</h4>
                    <p className="text-blue-700 text-sm">Mapeamos el funnel de activación completo e identificamos los puntos de fricción críticos.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Resultado:</h4>
                    <p className="text-green-700 text-sm font-medium">✅ Duplicó tasa de activación del 12% al 24%</p>
                    <p className="text-green-700 text-sm font-medium">✅ Redujo CAC en 40%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ProntoCredito - Fintech */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">ProntoCredito</h3>
                    <p className="text-sm text-gray-500">Fintech - Microcréditos</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Problema inicial:</h4>
                    <p className="text-red-700 text-sm">Sin claridad en su funnel de conversión y ROI por canal de marketing.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Qué hicimos:</h4>
                    <p className="text-blue-700 text-sm">Creamos dashboards de atribución y análisis de performance por canal.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Resultado:</h4>
                    <p className="text-green-700 text-sm font-medium">✅ Aumentó ROI en marketing 70%</p>
                    <p className="text-green-700 text-sm font-medium">✅ Optimizó presupuesto entre canales</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mentory - Edtech */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Mentory</h3>
                    <p className="text-sm text-gray-500">Edtech - Cursos Online</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Problema inicial:</h4>
                    <p className="text-red-700 text-sm">Alto abandono en cursos sin saber en qué momento exacto perdían estudiantes.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-808 mb-2">Qué hicimos:</h4>
                    <p className="text-blue-700 text-sm">Implementamos tracking de engagement por lección y alertas de riesgo de abandono.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Resultado:</h4>
                    <p className="text-green-700 text-sm font-medium">✅ Completion rate pasó de 37% a 65%</p>
                    <p className="text-green-700 text-sm font-medium">✅ Redujo churn estudiantil en 45%</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* TiendaWow - E-commerce */}
            <Card className="border-2 border-gray-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">TiendaWow</h3>
                    <p className="text-sm text-gray-500">E-commerce - Retail Online</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Problema inicial:</h4>
                    <p className="text-red-700 text-sm">Sin métricas de recompra ni claridad sobre el comportamiento post-compra.</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Qué hicimos:</h4>
                    <p className="text-blue-700 text-sm">Desarrollamos análisis de cohortes y sistemas de retención personalizada.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Resultado:</h4>
                    <p className="text-green-700 text-sm font-medium">✅ Duplicó tasa de recompra a 30 días</p>
                    <p className="text-green-700 text-sm font-medium">✅ Aumentó LTV promedio en 85%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Agenda tu diagnóstico gratuito
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Cuéntanos sobre tu startup y te mostraremos cómo Datealo puede ayudarte a crecer con datos
            </p>
          </div>
          
          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="startup" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre de tu startup *
                  </label>
                  <Input
                    id="startup"
                    name="startup"
                    type="text"
                    required
                    value={formData.startup}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                
                <div>
                  <label htmlFor="problem" className="block text-sm font-medium text-gray-700 mb-2">
                    ¿Cuál es tu principal problema con los datos? *
                  </label>
                  <Textarea
                    id="problem"
                    name="problem"
                    required
                    value={formData.problem}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full"
                    placeholder="Cuéntanos qué te impide tomar mejores decisiones con tus datos..."
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Agendar Diagnóstico Gratuito
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Datealo</h3>
          <p className="text-gray-400 mb-8">
            Transformamos tu data en decisiones que hacen crecer tu startup
          </p>
          <div className="text-gray-500 text-sm">
            © 2024 Datealo. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
