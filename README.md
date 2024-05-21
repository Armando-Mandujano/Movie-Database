# Cartelera de Películas en React

## Descripción del Proyecto
Este proyecto es una aplicación web desarrollada con React que muestra una cartelera de películas utilizando Tailwind CSS. La aplicación permite a los usuarios explorar películas populares, ver detalles como sinopsis, calificaciones, y más. Es ideal para cinéfilos que desean mantenerse al día con los últimos estrenos o descubrir nuevos títulos.

## Características
- **Visualización de películas populares**: Muestra una lista de las películas más actuales y populares.
- **Detalles de películas**: Al hacer clic en una película, los usuarios pueden ver información detallada como la sinopsis, el elenco, la calificación de usuarios, y más.
- **Diseño Responsivo**: Adecuado para dispositivos móviles y de escritorio, gracias a Tailwind CSS.

## Tecnologías Utilizadas
- **React**: Utilizado para construir la interfaz de usuario.
- **Tailwind CSS**: Para el diseño responsivo y estilización personalizada.
- **Movie Database API**: Para obtener datos en tiempo real de películas.

## Cómo empezar
Para poner en marcha este proyecto en tu máquina local, sigue estos pasos:


## Clonar el repositorio
```bash
git clone https://github.com/Armando-Mandujano/Movie-Database
```

# Ir al directorio del proyecto
```bash
cd Movie-Database
```

## Instalar dependencias
```bash
yarn install
```

## Iniciar el servidor de desarrollo
```bash
yarn start
```

## Configuración de la API Key

Para que la aplicación funcione correctamente, necesitas una clave API de The Movie Database (TMDb). Sigue estos pasos para configurar tu clave API:

### Obtención de la API Key
- 1. Visita [The Movie Database API](https://developer.themoviedb.org/) y regístrate o inicia sesión.
- 2. Navega a la sección de configuración de tu cuenta y solicita una API key.
- 3. Completa los detalles requeridos para obtener tu clave API.

### Configuración de la API Key en el proyecto
Una vez que tengas tu clave API, necesitarás configurarla en tu entorno de desarrollo local:

- 1. Crea un archivo en la raíz de tu proyecto llamado `.env`.
- 2. Dentro del archivo `.env`, añade la siguiente línea reemplazando `tu_clave_api` con la clave API que obtuviste
- 3. Guarda los cambios en el archivo `.env`. Este archivo no debe ser subido a tu repositorio Git para evitar exponer tu clave API. Asegúrate de que `.env` está listado en tu `.gitignore`.

Al iniciar tu aplicación con `yarn start`, React automáticamente cargará las variables de entorno definidas en el archivo `.env`, permitiendo que tu aplicación acceda a la API de The Movie Database con la clave configurada.


## Despliegue en Vercel

El proyecto está desplegado y accesible públicamente a través de Vercel, lo que permite visualizar la aplicación en acción sin necesidad de configurar el entorno localmente. Puedes visitar la versión desplegada en el siguiente enlace:

[Cartelera de Películas - Vercel Deployment](https://movie-database-tan-psi.vercel.app/)
