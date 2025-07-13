# 🗺️ Phoenix Maps App 🚀

Welcome to the **Phoenix Maps App**! This project is a powerful and visually appealing tool developed with Angular and **Mapbox GL JS** that allows you to interact with a dynamic globe, add custom markers, and explore specific geographical locations with detailed information.

This application demonstrates advanced frontend development skills, including consuming map APIs, manipulating geospatial data, handling user events in a 3D environment, and creating interactive user interfaces.

## ✨ Key Features

The application is organized into a hamburger menu with three main categories, each offering a unique map interaction experience:

### 1. 🌍 Explore the Globe

This section provides a complete immersion into the world with advanced navigation functionalities:

* **Zoom Levels (1-19):** Experience a 19-level zoom range, from a complete view of the planet in space to the most detailed city streets.
* **Versatile Zoom Control:**
    * **Touch Zoom:** Intuitive interaction for zooming with touch gestures (or mouse wheel).
    * **Range Zoom Panel:** A `range` input in the bottom right allows precise zoom control (levels 1-19).
    * **Quick Zoom Buttons:** Zoom in (`+`) and zoom out (`-`) buttons, along with the compass, located in the **top right** of the interface.
* **Real-time Coordinates:** A JSON-formatted display in the bottom right shows the exact latitude and longitude of the map's center in real-time.
* **Compass and Re-centering:** A compass button in the **top right** that, when pressed, centers the map view towards North.
* **Pure Exploration Mode:** A dedicated button to make the globe full screen, hiding the interface for a purely tactile and immersive exploration experience.

### 2. 📍 Custom Markers

In this category, you can interact directly with the map by adding and managing markers:

* **Marker Placement:** While exploring the world, you can place markers at any desired location on the map.
* **Markers with Detailed Information:** Each marker:
    * Has a **randomly generated different color**.
    * Indicates the **exact name of the place** where it was placed.
    * When a marker on the map is clicked, an interactive popup appears showing:
        * Street Name
        * Postal Code
        * Locality/Autonomous Community
        * Country
* **Marker List:** Placed markers are listed in a small box in the **top left** of the interface.
* **Quick Navigation:** Clicking a marker in the list (in the box) will take the map directly to that location, and the corresponding marker on the map will display its info popup.
* **Marker Deletion:** Pressing **twice** on a marker on the map will remove it.

### 3. 🏡 Real Estate Sales Simulation

This section simulates a real estate application, displaying properties on the map:

* **Property Location:** Shows the precise geographical location of various properties on the map.
* **Detail Visualization:** An interface is presented with the house's name, a brief description, and **three badges** with key property information (e.g., type, features, etc.).
* **Visual Only:** It's important to note that this section is a **purely visual simulation** of properties and their locations on the map.

## 🛠️ Technologies Used

### Frontend:

* [**Angular**](https://angular.io/) - Robust framework for building the user interface.
* [**Mapbox GL JS**](https://docs.mapbox.com/mapbox-gl-js/api/) - JavaScript library for interactive and customizable vector maps.
* [**RxJS**](https://rxjs.dev/) - For managing asynchronous data streams and map event manipulation.
* **Mapbox API:** Consumption of the Mapbox API for reverse geocoding, geolocation, and map data.

---

## 🚀 How to Run the Project

To get the **Phoenix Maps App** up and running on your local environment, follow these steps:

### Prerequisites

* Node.js (version 18 or higher)
* npm or Yarn
* **Mapbox API Key:** You will need a public Mapbox access token. Register at [Mapbox](https://www.mapbox.com/) to obtain it.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jose-designer-23/phoenix-maps-app.git](https://github.com/Jose-designer-23/phoenix-maps-app.git)
    cd phoenix-maps-app
    ```

2.  **Configure the Mapbox API Key:**
    * Inside the `src/environments/` folder (or wherever your environment variables are located), open the `environment.ts` file (and/or `environment.prod.ts` if applicable).
    * Add your Mapbox API key obtained from the prerequisites. For example:
        ```typescript
        export const environment = {
          production: false,
          mapbox_key: 'YOUR_MAPBOX_API_KEY_HERE' // <--- Insert your key here
        };
        ```
        (The variable name `mapbox_key` may vary depending on your implementation).

3.  **Install dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    # yarn install
    ```

4.  **Start the application:**
    ```bash
    ng serve
    ```

5.  **Access the Application:**
    Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## 💻 Development Commands (Angular CLI)

This section provides a quick reference to the most common Angular CLI commands.

* **Start the Development Server:**
    ```bash
    ng serve
    ```
* **Generate Components, Services, etc.:**
    ```bash
    ng generate component component-name
    ng generate service services/my-service
    # For a complete list of schematics: ng generate --help
    ```
* **Build the Project for Production:**
    ```bash
    ng build
    ```
* **Run Unit Tests:**
    ```bash
    ng test
    ```
