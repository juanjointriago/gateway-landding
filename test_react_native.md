Evaluación Técnica: React Testing Library, Programación y DevOps
Sección 1: React Testing Library (RTL)
Pregunta 1: Métodos de espera en RTL

Pregunta: ¿Cuál es el método correcto para esperar a que aparezca un elemento en React Testing Library?

Opciones:

screen.waitForElement()

screen.findByRole()

screen.getByRole()

screen.queryByRole()

Respuesta correcta: screen.waitForElement()

Justificación:

Referencia: React Testing Library Documentation - Async Methods

waitForElement() es el método específico diseñado para esperar elementos asincrónicos, aunque está deprecado en favor de waitFor y findBy* queries

Los métodos findBy* son la alternativa moderna recomendada para operaciones asíncronas

Pregunta 2: Función render() en RTL

Pregunta: ¿Cuál es el propósito principal de la función render() en React Testing Library?

Opciones:

Renderizar componentes en el DOM virtual para testing

Crear snapshots de componentes

Simular eventos de usuario

Generar mocks automáticos

Respuesta correcta: Renderizar componentes en el DOM virtual para testing

Justificación:

Referencia: React Testing Library API - render method

render() es la función fundamental que monta componentes React en un DOM de testing (jsdom)

Proporciona acceso a queries para interactuar con elementos renderizados

Es el punto de entrada para todos los tests de componentes

Pregunta 3: Simulación de eventos click

Pregunta: ¿Cómo simular un evento click en un botón usando React Testing Library?

Opciones:

fireEvent.click(button)

userEvent.click(button)

button.click()

screen.click(button)

Respuesta correcta: fireEvent.click(button)

Justificación:

Referencia: React Testing Library - FireEvent API

fireEvent.click() es el método estándar para simular eventos DOM

userEvent es una alternativa más moderna que simula interacciones más realistas

Ambos son válidos, pero fireEvent es más directo para eventos simples

Pregunta 4: Propósito de fireEvent

Pregunta: ¿Cuál es el propósito de fireEvent en React Testing Library?

Opciones:

Simular eventos de usuario en elementos DOM

Crear elementos DOM dinámicamente

Validar el estado de componentes

Generar datos de prueba

Respuesta correcta: Simular eventos de usuario en elementos DOM

Justificación:

Referencia: React Testing Library - Events

fireEvent permite disparar eventos DOM sintéticos (click, change, submit, etc.)

Esencial para testing de interacciones usuario-componente

Complementa las queries para testing completo de comportamiento

Sección 2: Mock Service Worker (MSW)
Pregunta 5: Mocking de API requests

Pregunta: ¿Cómo mockear requests de API usando Mock Service Worker?

Opciones:

setupServer

mockApi

apiMock

serverMock

Respuesta correcta: setupServer

Justificación:

Referencia: MSW Documentation - Node.js Integration

setupServer es la función principal de MSW para entornos Node.js (testing)

Intercepta requests HTTP a nivel de red sin modificar el código de la aplicación

Proporciona mocking más realista que los mocks tradicionales

import { setupServer } from 'msw/node'
import { rest } from 'msw'

const server = setupServer(
  rest.get('/api/users', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]))
  })
)

Pregunta 6: Simulación de errores en MSW

Pregunta: ¿Cómo simular una respuesta de error usando MSW?

Opciones:

HttpResponse.error()

response.error()

mockError()

server.error()

Respuesta correcta: HttpResponse.error()

Justificación:

Referencia: MSW Documentation - Error Responses

HttpResponse.error() simula errores de red (network errors)

Para errores HTTP específicos se usa HttpResponse.json(data, { status: 500 })

Permite testing completo de manejo de errores en la aplicación

Pregunta 7: Iniciar servidor mock

Pregunta: ¿Qué método se usa para iniciar el servidor mock en MSW?

Opciones:

server.listen()

server.start()

server.init()

server.run()

Respuesta correcta: server.listen()

Justificación:

Referencia: MSW Documentation - Server Lifecycle

server.listen() inicia la interceptación de requests

Típicamente se llama en beforeAll() en tests

Se complementa con server.close() para cleanup

Pregunta 8: Reset de handlers en MSW

Pregunta: ¿Cómo resetear los handlers del servidor mock?

Opciones:

server.resetHandlers()

server.reset()

server.clear()

server.restart()

Respuesta correcta: server.resetHandlers()

Justificación:

Referencia: MSW Documentation - Runtime Handler Management

resetHandlers() restaura los handlers originales definidos en setupServer()

Útil para limpiar handlers temporales añadidos durante tests específicos

Mantiene el estado limpio entre tests

Pregunta 9: Simulación de cambios en input

Pregunta: ¿Cómo simular un cambio en un campo de input?

Opciones:

fireEvent.change()

fireEvent.input()

fireEvent.type()

fireEvent.update()

Respuesta correcta: fireEvent.change()

Justificación:

Referencia: React Testing Library - FireEvent API

fireEvent.change() simula el evento change en elementos de formulario

Requiere pasar el elemento y el objeto event con target.value

Es el método estándar para testing de inputs controlados

fireEvent.change(input, { target: { value: 'new value' } })

Pregunta 10: Verificación de botón deshabilitado

Pregunta: ¿Cómo verificar si un botón está deshabilitado?

Opciones:

expect(screen.getByRole('button')).toBeDisabled()

expect(screen.getByRole('button')).toHaveAttribute('disabled')

expect(screen.getByRole('button')).not.toBeEnabled()

Todas las anteriores

Respuesta correcta: expect(screen.getByRole('button')).toBeDisabled()

Justificación:

Referencia: Jest-DOM Matchers Documentation

toBeDisabled() es el matcher más semántico y directo

Verifica tanto el atributo disabled como la propiedad DOM

Proporciona mejores mensajes de error en caso de fallo

Pregunta 11: Esperar renderizado de heading

Pregunta: ¿Cómo esperar a que se renderice un heading en el DOM?

Opciones:

screen.findByRole('heading')

screen.waitForElement('heading')

screen.getByRole('heading')

screen.queryByRole('heading')

Respuesta correcta: screen.findByRole('heading')

Justificación:

Referencia: React Testing Library - Async Queries

findByRole() combina getByRole() con waitFor() internamente

Retorna una Promise que resuelve cuando el elemento aparece

Es la forma moderna y recomendada para elementos asincrónicos

Sección 3: Git y Control de Versiones
Pregunta 12: Git reflog

Pregunta: ¿Para qué se utiliza git reflog?

Opciones:

Mostrar el log de referencias y acciones en el repositorio

Crear un nuevo branch

Fusionar branches

Eliminar commits

Respuesta correcta: Mostrar el log de referencias y acciones en el repositorio

Justificación:

Referencia: Git Documentation - git-reflog

git reflog muestra un historial de todas las acciones que han movido HEAD

Incluye commits, checkouts, resets, merges, etc.

Útil para recuperar commits "perdidos" después de operaciones destructivas

Pregunta 13: Git pull vs git fetch

Pregunta: ¿Cuál es la diferencia entre git pull y git fetch?

Opciones:

git pull descarga y fusiona, git fetch solo descarga

git pull es más rápido que git fetch

No hay diferencia

git fetch descarga y fusiona, git pull solo descarga

Respuesta correcta: git pull descarga y fusiona, git fetch solo descarga

Justificación:

Referencia: Git Documentation - git-pull, git-fetch

git fetch descarga cambios del remoto sin modificar el working directory

git pull = git fetch + git merge (o git rebase con --rebase)

git fetch es más seguro para revisar cambios antes de integrarlos

Pregunta 14: Git rebase interactivo

Pregunta: ¿Es válido usar git rebase -i HEAD~3?

Opciones:

Sí, para rebase interactivo de los últimos 3 commits

No, la sintaxis es incorrecta

Solo funciona en branches específicos

Requiere permisos especiales

Respuesta correcta: Sí, para rebase interactivo de los últimos 3 commits

Justificación:

Referencia: Git Documentation - git-rebase

-i activa el modo interactivo

HEAD~3 especifica los últimos 3 commits desde HEAD

Permite reordenar, editar, combinar o eliminar commits

Herramienta poderosa para limpiar historial antes de push

Pregunta 15: Crear y cambiar a branch

Pregunta: ¿Qué hace git checkout -b <branch_name>?

Opciones:

Crea un nuevo branch y cambia a él

Solo crea un nuevo branch

Solo cambia a un branch existente

Elimina un branch

Respuesta correcta: Crea un nuevo branch y cambia a él

Justificación:

Referencia: Git Documentation - git-checkout

-b flag crea un nuevo branch basado en el commit actual

Inmediatamente cambia el HEAD al nuevo branch

Equivale a git branch <name> + git checkout <name>

En Git moderno se prefiere git switch -c <name>

Pregunta 16: Force push seguro

Pregunta: ¿Cuál es el comando correcto para forzar el push de una rama feature, pero solo si no has sobrescrito trabajo de otra persona?

Opciones:

git push -u origin

git push --force

git push --force-with-lease

git push --all

Respuesta correcta: git push --force-with-lease

Justificación:

Referencia: Git Documentation - git-push

--force-with-lease verifica que el remoto no haya cambiado desde tu último fetch

Más seguro que --force porque protege contra sobrescribir trabajo de otros

Falla si alguien más hizo push, requiriendo que hagas pull primero

Ideal después de rebase en branches compartidos

Sección 4: Patrones de Diseño
Pregunta 17: Proxy vs Decorator

Pregunta: ¿Cuál es la diferencia entre los patrones Proxy y Decorator?

Opciones:

Proxy controla acceso, Decorator añade funcionalidad

Son el mismo patrón

Proxy añade funcionalidad, Decorator controla acceso

No hay diferencia práctica

Respuesta correcta: Proxy controla acceso, Decorator añade funcionalidad

Justificación:

Referencia: Gang of Four - Design Patterns

Proxy: Controla acceso a un objeto (lazy loading, caching, security)

Decorator: Añade responsabilidades dinámicamente sin alterar estructura

Ambos usan composición pero con propósitos diferentes

Proxy mantiene la misma interfaz, Decorator puede extenderla

Diagrama Proxy:

Client → Proxy → RealSubject
         ↓
    Control de acceso


Diagrama Decorator:

Client → ConcreteDecorator → BaseDecorator → Component
         ↓
    Funcionalidad adicional

Pregunta 18: Factory Method vs Abstract Factory

Pregunta: ¿Cuál es la diferencia entre Factory Method y Abstract Factory?

Opciones:

Factory Method crea un tipo, Abstract Factory crea familias

Son idénticos

Abstract Factory es más simple

Factory Method es obsoleto

Respuesta correcta: Factory Method crea un tipo, Abstract Factory crea familias

Justificación:

Referencia: Gang of Four - Design Patterns

Factory Method: Crea objetos de un solo tipo con subclases decidiendo la clase concreta

Abstract Factory: Crea familias de objetos relacionados sin especificar clases concretas

Factory Method usa herencia, Abstract Factory usa composición

Abstract Factory es más complejo pero más flexible para familias de productos

Sección 5: Principios SOLID y Clean Code
Pregunta 19: Inversión de Dependencias (DIP)

Pregunta: Explique detalladamente el concepto de "Inversión de Dependencia" (Dependency Inversion Principle) en el contexto de los patrones de diseño SOLID.

Opciones:

La Inversión de Dependencia consiste en que las clases de alto nivel dependan de clases de bajo nivel, y se puede aplicar utilizando interfaces en lugar de clases concretas.

La Inversión de Dependencia consiste en que las clases de bajo nivel no deben depender directamente de las clases de alto nivel, sino de abstracciones. Esto se puede lograr definiendo clases concretas que las clases de alto nivel heredan.

La Inversión de Dependencia consiste en que las clases de alto nivel no deben depender directamente de las clases de bajo nivel, sino de abstracciones. Esto se puede lograr definiendo interfaces que las clases de bajo nivel implementan.

La Inversión de Dependencia consiste en que las clases de bajo nivel dependan de clases de alto nivel, y se puede aplicar utilizando clases concretas en lugar de interfaces.

Respuesta correcta: La Inversión de Dependencia consiste en que las clases de alto nivel no deben depender directamente de las clases de bajo nivel, sino de abstracciones. Esto se puede lograr definiendo interfaces que las clases de bajo nivel implementan.

Justificación:

Referencia: Robert C. Martin - Clean Architecture, SOLID Principles

Principio DIP: Los módulos de alto nivel NO deben depender de módulos de bajo nivel. Ambos deben depender de abstracciones

Las abstracciones NO deben depender de detalles. Los detalles deben depender de abstracciones

Facilita testing, mantenimiento y extensibilidad del código

Ejemplo:

// ❌ Violación del DIP
class OrderService {
  constructor() {
    this.emailSender = new EmailSender(); // dependencia directa
  }
}

// ✅ Aplicando DIP
interface NotificationSender {
  send(message: string): void;
}

class OrderService {
  constructor(private notifier: NotificationSender) {} // depende de abstracción
}

class EmailSender implements NotificationSender {
  send(message: string) { /* implementación */ }
}

Pregunta 20: Patrón Facade

Pregunta: ¿Cuál es el propósito del patrón de diseño "Facade"?

Opciones:

Proporciona una interfaz unificada para un conjunto de interfaces en un subsistema.

Permite definir nuevas operaciones sin cambiar las clases de los elementos en las que opera.

Define una dependencia uno-a-muchos entre objetos, de manera que cuando un objeto cambia de estado, todos sus dependientes son notificados y actualizados automáticamente.

Respuesta correcta: Proporciona una interfaz unificada para un conjunto de interfaces en un subsistema.

Justificación:

Referencia: Gang of Four - Design Patterns

Patrón Facade: Proporciona una interfaz simplificada para acceder a un subsistema complejo

Oculta la complejidad interna y expone solo las operaciones necesarias

Reduce el acoplamiento entre cliente y subsistema

Ejemplo:

// Subsistema complejo
class CPU { start() { /* ... */ } }
class Memory { load() { /* ... */ } }
class HardDrive { read() { /* ... */ } }

// Facade - interfaz unificada
class ComputerFacade {
  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }
  
  startComputer() {
    this.cpu.start();
    this.memory.load();
    this.hardDrive.read();
  }
}

Pregunta 21: Code Smells

Pregunta: ¿Qué es un código "smell" en Clean Code?

Opciones:

Un fragmento de código altamente eficiente.

Una práctica recomendada en la escritura de código.

Un indicador de que puede haber un problema en el diseño del código, como redundancia, complejidad excesiva o falta de modularidad.

Una métrica utilizada para evaluar la calidad del código.

Respuesta correcta: Un indicador de que puede haber un problema en el diseño del código, como redundancia, complejidad excesiva o falta de modularidad.

Justificación:

Referencia: Martin Fowler - Refactoring, Robert C. Martin - Clean Code

Code Smell: Señal de advertencia que indica posibles problemas de diseño

No es un error, sino un síntoma de que el código podría ser difícil de mantener

Requiere refactoring para mejorar la calidad sin cambiar funcionalidad

Ejemplos comunes:

// Code smell: Método muy largo
function processOrder(order) {
  // 100+ líneas de código...
}

// Code smell: Clase con demasiadas responsabilidades
class User {
  login() { /* ... */ }
  sendEmail() { /* ... */ }
  calculateTaxes() { /* ... */ }
  generateReport() { /* ... */ }
}

Pregunta 22: Principio LSP

Pregunta: ¿Cuál de los siguientes principios de diseño SOLID aborda el acoplamiento entre clases?

Opciones:

LSP

ISP

DIP

SRP

Respuesta correcta: LSP

Justificación:

Referencia: Barbara Liskov - Liskov Substitution Principle

LSP (Liskov Substitution Principle): Los objetos de una clase derivada deben poder reemplazar a los objetos de la clase base sin alterar el funcionamiento

Aborda específicamente el acoplamiento en jerarquías de herencia

Asegura que las subclases mantengan el contrato de la clase base

Ejemplo:

// ✅ Cumple LSP
class Bird {
  fly() { return "flying"; }
}

class Eagle extends Bird {
  fly() { return "soaring high"; } // comportamiento compatible
}

// ❌ Viola LSP
class Penguin extends Bird {
  fly() { throw new Error("Can't fly"); } // rompe el contrato
}

Pregunta 23: Clean Architecture

Pregunta: ¿Cuál es el principio fundamental de Clean Architecture?

Opciones:

La arquitectura debe centrarse en la eficiencia y la velocidad de ejecución del código.

La arquitectura debe estar altamente acoplada para maximizar el rendimiento del sistema.

La arquitectura debe permitir que la lógica de negocios sea independiente de los detalles de implementación y de las tecnologías utilizadas.

La arquitectura debe priorizar la modularidad y la reutilización del código.

Respuesta correcta: La arquitectura debe permitir que la lógica de negocios sea independiente de los detalles de implementación y de las tecnologías utilizadas.

Justificación:

Referencia: Robert C. Martin - Clean Architecture

Principio fundamental: Independencia de la lógica de negocio de frameworks, bases de datos, UI, etc.

La regla de dependencia: las capas internas no deben conocer las capas externas

Permite testabilidad, flexibilidad y mantenibilidad

Estructura:

┌─────────────────────────────────────┐
│        Frameworks & Drivers         │ ← Capa externa
├─────────────────────────────────────┤
│     Interface Adapters (UI/DB)     │
├─────────────────────────────────────┤
│      Application Business Rules    │
├─────────────────────────────────────┤
│    Enterprise Business Rules       │ ← Capa interna
└─────────────────────────────────────┘

Pregunta 24: Principio Tell, Don't Ask

Pregunta: ¿Cuál es el propósito del principio de diseño "Tell, Don't Ask" en Clean Code?

Opciones:

Maximizar la cohesión de una clase al agrupar métodos relacionados.

Evitar el uso de variables de instancia en una clase.

Minimizar la cantidad de métodos públicos en una clase.

Promover el encapsulamiento y reducir la dependencia entre objetos al requerir que los objetos soliciten información en lugar de acceder a los datos de otros objetos directamente.

Respuesta correcta: Promover el encapsulamiento y reducir la dependencia entre objetos al requerir que los objetos soliciten información en lugar de acceder a los datos de otros objetos directamente.

Justificación:

Referencia: Pragmatic Programmer, Clean Code principles

Tell, Don't Ask: Los objetos deben decir a otros qué hacer, no preguntar por su estado

Promueve encapsulamiento y reduce acoplamiento

La lógica permanece en el objeto responsable

Ejemplo:

// ❌ Violación - "Ask"
if (user.getAge() >= 18 && user.hasValidLicense()) {
  user.setCanDrive(true);
}

// ✅ Aplicando "Tell, Don't Ask"
user.enableDrivingIfEligible();

Sección 6: DevOps y Containerización
Pregunta 25: Docker vs Kubernetes

Pregunta: ¿Cuál es la principal diferencia entre Docker y Kubernetes?

Opciones:

Docker se centra en la seguridad de los contenedores, mientras que Kubernetes se enfoca en la escalabilidad de las aplicaciones.

Docker es una plataforma de orquestación de contenedores, mientras que Kubernetes es una herramienta para crear imágenes de contenedores.

Docker es un servicio de almacenamiento en la nube, mientras que Kubernetes es una plataforma para el despliegue de aplicaciones.

Docker es una plataforma para la creación y ejecución de contenedores, mientras que Kubernetes es una plataforma de orquestación para la gestión de múltiples contenedores.

Respuesta correcta: Docker es una plataforma para la creación y ejecución de contenedores, mientras que Kubernetes es una plataforma de orquestación para la gestión de múltiples contenedores.

Justificación:

Referencia: Docker Documentation, Kubernetes Documentation

Docker: Plataforma de containerización para crear, empaquetar y ejecutar aplicaciones

Kubernetes: Plataforma de orquestación que gestiona, escala y administra múltiples contenedores

Docker construye contenedores, Kubernetes los orquesta en clusters

Pregunta 26: Pipeline CI/CD

Pregunta: ¿Cuál es el propósito de un pipeline de CI/CD en el contexto de DevOps?

Opciones:

Automatizar la entrega continua de código a través de pruebas, integración y despliegue automatizados.

Monitorizar el rendimiento de los contenedores Docker en producción.

Definir la infraestructura como código utilizando herramientas de automatización.

Realizar pruebas manuales de integración de código.

Respuesta correcta: Automatizar la entrega continua de código a través de pruebas, integración y despliegue automatizados.

Justificación:

Referencia: DevOps practices, CI/CD best practices

CI/CD Pipeline: Automatiza el flujo completo desde código fuente hasta producción

CI: Integración continua con pruebas automáticas

CD: Despliegue continuo/entrega continua automatizada

Reduce errores manuales y acelera time-to-market

Pregunta 27: Canary Deployment

Pregunta: ¿Qué es una estrategia de despliegue "canary" en el contexto de DevOps?

Opciones:

Una técnica para mantener dos versiones de software en producción simultáneamente.

Una técnica que implica lanzar una pequeña parte de una nueva versión de software a un subconjunto de usuarios para evaluar su comportamiento en un entorno de producción real.

Una técnica para enviar cambios de código directamente a producción sin pruebas previas.

Una técnica para revertir inmediatamente los cambios de código en caso de fallos en la producción.

Respuesta correcta: Una técnica que implica lanzar una pequeña parte de una nueva versión de software a un subconjunto de usuarios para evaluar su comportamiento en un entorno de producción real.

Justificación:

Referencia: DevOps deployment strategies, Blue-Green vs Canary deployments

Canary Deployment: Exposición gradual de nueva versión a porcentaje pequeño de usuarios

Permite detectar problemas con impacto mínimo antes del despliegue completo

Estrategia de reducción de riesgo en despliegues

Flujo típico:

Versión Actual (95%) ←→ Load Balancer ←→ Versión Nueva (5%)
                           ↓
                   Monitoreo y métricas
                           ↓
         Si OK → Incrementar gradualmente
         Si problemas → Rollback inmediato

Pregunta 28: Docker Swarm vs Kubernetes

Pregunta: ¿Cuál es el propósito de Docker Swarm en comparación con Kubernetes?

Opciones:

Kubernetes se centra en la seguridad de los contenedores, mientras que Docker Swarm se enfoca en la escalabilidad de las aplicaciones.

Kubernetes es una herramienta para la gestión de clústeres de contenedores Docker en múltiples máquinas.

Docker Swarm es una herramienta para orquestar y gestionar clústeres de contenedores Docker en múltiples máquinas.

Docker Swarm es una plataforma para la creación de imágenes de contenedores Docker.

Respuesta correcta: Docker Swarm es una herramienta para orquestar y gestionar clústeres de contenedores Docker en múltiples máquinas.

Justificación:

Referencia: Docker Swarm Documentation, Kubernetes vs Docker Swarm comparison

Docker Swarm: Herramienta nativa de Docker para orquestación de contenedores

Kubernetes: Plataforma más robusta y completa con mayor ecosistema

Ambos orquestan contenedores, pero Kubernetes ofrece más funcionalidades empresariales

Sección 7: Algoritmos y Estructuras de Datos
Pregunta 29: Análisis de complejidad temporal

Pregunta: Analiza el siguiente fragmento de código y determina su complejidad temporal:

function A(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < i * i; j++) {
      if (j % i === 0) {
        for (let k = 0; k < j; k++) {
          console.log('Hello');
        }
      }
    }
  }
}


Opciones:

O(n^3)

O(n log n)

O(n^5)

O(n^2)

Respuesta correcta: O(n^5)

Justificación:
Análisis paso a paso:

Primer bucle: i va de 0 a n → O(n)

Segundo bucle: j va de i a i² → O(i²) iteraciones

Tercer bucle: k va de 0 a j → O(j) = O(i²) iteraciones

Condición: j % i === 0 se cumple aproximadamente i veces

Cálculo de complejidad:

Para cada i: O(i²) × O(i²) = O(i⁴)

Sumando para todos los i de 1 a n: Σ(i⁴) = O(n⁵)

Referencia: Introduction to Algorithms (CLRS) - Asymptotic Analysis

Pregunta 30: Operaciones eficientes en Stack

Pregunta: ¿Cuál es la forma más eficiente de obtener tanto el elemento superior como el inferior de una pila (stack) en una única operación?

Opciones:

Usar peek() para el elemento superior y stack[0] para el inferior.

Usar pop() para obtener el elemento superior y luego iterar a través de los elementos restantes para encontrar el inferior.

Clonar la pila, usar pop() en el clon para el elemento superior y shift() para el inferior.

Convertir la pila en un array y luego acceder al primer y último elemento.

Respuesta correcta: Usar peek() para el elemento superior y stack[0] para el inferior.

Justificación:

Referencia: Data Structures and Algorithms - Stack Operations

peek(): Operación estándar O(1) que retorna el top sin eliminarlo

stack[0]: Acceso directo O(1) al bottom si está implementado como array

Ambos accesos son independientes y eficientes sin operaciones destructivas

Ejemplo:

class Stack {
  constructor() {
    this.items = [];
  }
  
  peek() {
    return this.items[this.items.length - 1]; // Top - O(1)
  }
  
  getBottom() {
    return this.items[0]; // Bottom - O(1)
  }
}

Sección 8: Microservicios y Autenticación
Pregunta 31: JWT vs Sesiones tradicionales

Pregunta: En un entorno de microservicios, ¿cuál es una ventaja clave de usar JSON Web Tokens (JWT) sobre las sesiones tradicionales?

Opciones:

Las sesiones son más rápidas porque los datos se almacenan en el servidor.

Los JWT son sin estado (stateless), lo que elimina la necesidad de una sesión compartida entre servicios.

Los JWT son más seguros porque están encriptados por defecto.

Los JWT pueden almacenar más datos que las sesiones.

Respuesta correcta: Los JWT son sin estado (stateless), lo que elimina la necesidad de una sesión compartida entre servicios.

Justificación:

Referencia: RFC 7519 - JSON Web Token, Microservices patterns

JWT: Stateless - toda la información está en el token

Sesiones tradicionales: Stateful - requieren almacenamiento compartido

En microservicios, JWT permite que cada servicio valide tokens independientemente

Elimina la necesidad de sincronización entre servicios

Sección 9: JavaScript y TypeScript
Pregunta 32: Lexical Scoping en JavaScript

Pregunta: ¿Qué imprimirá en la consola el siguiente código de JavaScript?

var x = 10;
function foo() { console.log(x); }
function bar() {
  var x = 20;
  foo();
}
bar(foo);


Opciones:

10

20

ReferenceError

undefined

Respuesta correcta: 10

Justificación:
Análisis del Lexical Scoping:

x = 10 (variable global)

foo() se define en el scope global donde x = 10

Cuando foo() se ejecuta dentro de bar(), mantiene su scope léxico original

foo() NO ve la variable local x = 20 de bar()

foo() accede a la variable global x = 10

Referencia: ECMAScript Specification - Lexical Environment, JavaScript: The Definitive Guide

Pregunta 33: TypeScript Generics para Higher-Order Functions

Pregunta: Estás creando una función memoize personalizada en TypeScript. ¿Cuál es la firma de tipo correcta para esta función de orden superior (higher-order function)?

Opciones:

function memoize<T extends (...args: any[]) => any>(fn: T): T { ... }

function memoize(fn: Function): Function { ... }

function memoize<T>(fn: T): T { ... }

function memoize(fn: (...args: any[]) => any): (...args: any[]) => any { ... }

Respuesta correcta: function memoize<T extends (...args: any[]) => any>(fn: T): T { ... }

Justificación:

Referencia: TypeScript Handbook - Generics, Advanced Types

T extends (...args: any[]) => any: Constraint que asegura T es una función

(fn: T): T: Preserva el tipo exacto de la función original

Permite type safety completo manteniendo la firma original

Ejemplo:

function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map();
  return ((...args: any[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

Sección 10: CSS y Frontend
Pregunta 34: CSS resize property

Pregunta: ¿Qué sucede cuando aplicas resize: both; a un elemento div que tiene overflow: visible; por defecto?

Opciones:

El div se podrá redimensionar tanto horizontal como verticalmente.

El div solo se podrá redimensionar verticalmente.

El div solo se podrá redimensionar horizontalmente.

El div no se podrá redimensionar.

Respuesta correcta: El div se podrá redimensionar tanto horizontal como verticalmente.

Justificación:

Referencia: CSS Specification - resize property

resize: both: Permite redimensionamiento en ambas direcciones

Aunque overflow: visible no es la configuración típica, los navegadores modernos permiten la funcionalidad

El usuario verá controles de redimensionamiento (generalmente en la esquina inferior derecha)

Sección 11: React Patterns y State Management
Pregunta 35: Drag and Drop eficiente

Pregunta: Al implementar la clasificación de arrastrar y soltar (drag and drop) en una lista, ¿cuál es el enfoque más eficiente para actualizar el estado de la lista?

Opciones:

En cada evento dragOver, eliminar el elemento de su posición original e insertarlo en la nueva posición.

Clonar toda la lista en onDragStart y reemplazar la lista original en onDrop.

Usar referencias (refs) para manipular directamente el DOM y luego sincronizar el estado en onDrop.

Almacenar el índice del elemento que se está arrastrando en onDragStart y actualizar la lista en onDrop.

Respuesta correcta: Almacenar el índice del elemento que se está arrastrando en onDragStart y actualizar la lista en onDrop.

Justificación:

Referencia: React Performance Best Practices, Drag and Drop patterns

Enfoque más eficiente: Solo almacena el índice y actualiza una vez al final

Evita manipulaciones innecesarias del DOM durante el arrastre

Una sola re-renderización al finalizar la operación

Implementación:

const [draggedIndex, setDraggedIndex] = useState(null);

const handleDragStart = (index) => {
  setDraggedIndex(index); // Solo almacena índice
};

const handleDrop = (dropIndex) => {
  const newItems = [...items];
  const draggedItem = newItems[draggedIndex];
  newItems.splice(draggedIndex, 1);
  newItems.splice(dropIndex, 0, draggedItem);
  setItems(newItems); // Una sola actualización
};

Pregunta 36: State Management en Kanban Board

Pregunta: En la creación de un tablero Kanban en React, ¿qué estrategia de gestión de estado es la más adecuada para manejar el arrastre de tareas entre diferentes columnas?

Opciones:

Usar una biblioteca de gestión de estado externa como Redux, incluso para un tablero Kanban simple.

Un único estado useState en el componente del tablero que contiene todas las columnas y tareas.

Almacenar el estado de las tareas en el estado local (useState) de cada componente de columna individual.

useReducer combinado con Context para proporcionar el estado y la función de despacho (dispatch) a los componentes de la columna.

Respuesta correcta: Un único estado useState en el componente del tablero que contiene todas las columnas y tareas.

Justificación:

Referencia: React State Management patterns, Component Design principles

Estado centralizado: Facilita el drag & drop entre columnas

Mejor rendimiento: Evita prop drilling y múltiples re-renders

Simplicidad: Para un Kanban básico, useState es suficiente

Estructura recomendada:

const [boardState, setBoardState] = useState({
  todo: [{ id: 1, title: "Task 1" }],
  inProgress: [{ id: 2, title: "Task 2" }],
  done: [{ id: 3, title: "Task 3" }]
});

const moveTask = (taskId, fromColumn, toColumn) => {
  setBoardState(prev => {
    // Una sola actualización para mover entre columnas
  });
};

Conclusión

Esta evaluación técnica abarca conceptos fundamentales en:

Testing: React Testing Library, MSW para mocking

Control de versiones: Git workflows y comandos avanzados

Arquitectura: Patrones de diseño, SOLID, Clean Architecture

DevOps: Docker, Kubernetes, CI/CD, deployment strategies

Algoritmos: Análisis de complejidad, estructuras de datos

Frontend: JavaScript, TypeScript, CSS, React patterns

Backend: Microservicios, autenticación, JWT

Los conceptos evaluados son esenciales para el desarrollo de software moderno y reflejan las mejores prácticas de la industria.