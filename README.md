# 🗺️ Phoenix Maps App 🚀

¡Bienvenido a la aplicación **Phoenix Maps App**! Este proyecto es una potente y visualmente atractiva herramienta desarrollada con Angular y **Mapbox GL JS** que te permite interactuar con un globo terráqueo dinámico, añadir marcadores personalizados y explorar ubicaciones específicas con detalles geográficos.

Esta aplicación demuestra habilidades avanzadas en el desarrollo frontend, incluyendo el consumo de APIs de mapas, la manipulación de datos geoespaciales, la gestión de eventos de usuario en un entorno 3D, y la creación de interfaces de usuario interactivas.

## ✨ Características Principales

La aplicación se organiza en un menú de hamburguesa con tres categorías principales, cada una ofreciendo una experiencia única de interacción con el mapa:

### 1. 🌍 Explorar el Globo Terráqueo

Esta sección te permite una inmersión completa en el mundo con funcionalidades de navegación avanzadas:

* **Niveles de Zoom (1-19):** Experimenta un rango de zoom de 19 niveles, desde una vista completa del planeta en el espacio hasta las calles más detalladas de las ciudades.
* **Control de Zoom Versátil:**
    * **Zoom Táctil:** Interacción intuitiva para hacer zoom con gestos táctiles (o con la rueda del ratón).
    * **Panel de Zoom con Rango:** Un input de tipo `range` en la parte inferior derecha permite un control preciso del zoom (niveles 1-19).
    * **Botones de Zoom Rápido:** Botones de aumento (`+`) y disminución (`-`) del zoom, junto con la brújula, ubicados en la **parte superior derecha** de la interfaz.
* **Coordenadas en Tiempo Real:** Un display en formato JSON en la parte inferior derecha muestra la latitud y longitud exactas del centro del mapa en tiempo real.
* **Brújula y Re-centrado:** Un botón de brújula en la **parte superior derecha** que, al pulsarlo, centra la vista del mapa hacia el norte.
* **Modo de Exploración Pura:** Un botón dedicado para poner el globo terráqueo en pantalla completa, ocultando la interfaz para una experiencia de exploración puramente táctil e inmersiva.

### 2. 📍 Marcadores Personalizados

En esta categoría, puedes interactuar directamente con el mapa añadiendo y gestionando marcadores:

* **Colocación de Marcadores:** Mientras exploras el mundo, puedes colocar marcadores en cualquier ubicación deseada en el mapa.
* **Marcadores con Información Detallada:** Cada marcador:
    * Tiene un **color diferente que se genera aleatoriamente**.
    * Indica el **nombre exacto del lugar** donde fue colocado.
    * Cuando se pulsa sobre un marcador en el mapa, aparece un recuadro interactivo que muestra:
        * Nombre de la calle
        * Código postal
        * Localidad/Comunidad Autónoma
        * País
* **Lista de Marcadores:** Los marcadores colocados se listan en una pequeña caja en la **parte superior izquierda** de la interfaz.
* **Navegación Rápida:** Al hacer clic en un marcador de la lista (en la cajita), el mapa te llevará directamente a esa ubicación, y el marcador correspondiente en el mapa mostrará su recuadro de información.
* **Eliminación de Marcadores:** Pulsando **dos veces** sobre un marcador en el mapa, este será eliminado.

### 3. 🏡 Simulación de Ventas de Inmuebles

Esta sección simula una aplicación de bienes raíces, mostrando propiedades en el mapa:

* **Ubicación de Inmuebles:** Muestra la ubicación geográfica precisa de varios inmuebles en el mapa.
* **Visualización de Detalles:** Se presenta una interfaz con el nombre de la casa, una breve descripción y **tres etiquetas (`badges`)** con información clave de la propiedad (ej., tipo, características, etc.).
* **Solo Visual:** Es importante destacar que esta sección es una **simulación puramente visual** de inmuebles y sus ubicaciones en el mapa.

## 🛠️ Tecnologías Utilizadas

### Frontend:

* [**Angular**](https://angular.io/) - Framework robusto para la construcción de la interfaz de usuario.
* [**Mapbox GL JS**](https://docs.mapbox.com/mapbox-gl-js/api/) - Biblioteca de JavaScript para mapas interactivos y personalizados basados en vectores.
* [**RxJS**](https://rxjs.dev/) - Para la gestión de flujos de datos asíncronos y la manipulación de eventos del mapa.
* **API de Mapbox:** Consumo de la API de Mapbox para geocodificación inversa, geolocalización y datos de mapas.

---

## 🚀 Cómo Ejecutar el Proyecto

Para poner en marcha la aplicación **Phoenix Maps App** en tu entorno local, sigue estos pasos:

### Requisitos Previos

* Node.js (versión 18 o superior)
* npm o Yarn
* **Clave de API de Mapbox:** Necesitarás una clave de acceso pública de Mapbox. Regístrate en [Mapbox](https://www.mapbox.com/) para obtenerla.

### Pasos

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/Jose-designer-23/phoenix-maps-app.git](https://github.com/Jose-designer-23/phoenix-maps-app.git)
    cd phoenix-maps-app
    ```

2.  **Configurar la clave de API de Mapbox:**
    * Dentro de la carpeta `src/environments/` (o donde tengas tus variables de entorno), abre el archivo `environment.ts` (y/o `environment.prod.ts` si la tienes).
    * Añade tu clave de API de Mapbox obtenida en los requisitos previos. Por ejemplo:
        ```typescript
        export const environment = {
          production: false,
          mapbox_key: 'TU_CLAVE_DE_API_MAPBOX_AQUI' // <--- Inserta tu clave aquí
        };
        ```
        (El nombre de la variable `mapbox_key` puede variar según cómo la hayas implementado en tu código).

3.  **Instalar dependencias:**
    ```bash
    npm install
    # o si usas Yarn
    # yarn install
    ```

4.  **Iniciar la aplicación:**
    ```bash
    ng serve
    ```

5.  **Acceder a la Aplicación:**
    Abre tu navegador y ve a `http://localhost:4200/`. La aplicación se recargará automáticamente cada vez que modifiques los archivos fuente.

---

## 💻 Comandos de Desarrollo (Angular CLI)

Esta sección proporciona una referencia rápida a los comandos más comunes de Angular CLI.

* **Arrancar el Servidor de Desarrollo:**
    ```bash
    ng serve
    ```
* **Generar Componentes, Servicios, etc.:**
    ```bash
    ng generate component nombre-del-componente
    ng generate service services/mi-servicio
    # Para ver una lista completa de esquemas: ng generate --help
    ```
* **Construir el Proyecto para Producción:**
    ```bash
    ng build
    ```
* **Ejecutar Pruebas Unitarias:**
    ```bash
    ng test
    ```
