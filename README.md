Hola mundo en near con AssemblyScript
==================

Introducción a Habitar
==================

Habitar es un contrato inteligente que permite verificar la identidad de los dueños de propiedades inmuebles. Debido a que la tecnología blockchain permite validar esa propiedad para que no sea posible una falsificaciín de documentos de propiedad o una alteración anormal del valor del inmueble. 
las funcionalidades principales del contrato son:

1. Crear una propiedad (inmueble)
2. Obtener el propietaerio del inmueble
3. Eliminar dicha propiedad
4. Comprar la propiedad
5. Crear propiedades para arrendar
6. Arrendar una propiedad

 
 
 1. print "Hello world" 
 2. print "Hello " + $USER
 

👨‍💻 Instalación en local
===========

Para correr este proyecto en local debes seguir los siguientes pasos:

Paso 1: Pre - Requisitos
------------------------------

1. Asegúrese de haber instalado [Node.js] ≥ 12 ((recomendamos usar [nvm])
2. Asegúrese de haber instalado yarn: `npm install -g yarn`
3. Instalar dependencias: `yarn install`
4. Crear un test near account [NEAR test account]
5. Instalar el NEAR CLI globally: [near-cli] es una interfaz de linea de comando (CLI) para interacturar con NEAR blockchain

    yarn install --global near-cli

Step 2: Configura tu NEAR CLI
-------------------------------

Configura tu near-cli para autorizar su cuenta de prueba creada recientemente:

    near login
    
Step 3: Clonar Repositorio
-------------------------------    

Este comando nos permite clonar el repositorio de nuestro proyecto 

```bash
git clone https://github.com/noemk2/holamundo_as.git
```

Una vez que hayas descargado el repositorio, asegurate de ejecutar los comandos dentro del repositorio descargado. Puedes hacerlo con
```bash
cd holamundo_as/
```

Step 4: Realiza el BUILD para implementación de desarrollo de contrato inteligente 
------------------------------------------------------------------------------------

Instale el gestor de dependencia de Node.js dentro del repositorio

```bash
npm install
```

Cree el código de contrato inteligente e implemente el servidor de desarrollo local: 
```bash
yarn deploy:dev
```
Consulte` package.json` para obtener una lista completa de `scripts` que puede ejecutar con` yarn`). Este script le devuelve un contrato inteligente provisional
implementado (guárdelo para
usarlo más tarde)


¡Felicitaciones, ahora tendrá un entorno de desarrollo local ejecutándose en NEAR TestNet!


✏️ Explorando los métodos del contrato inteligente 
--------------------------------------------
los siguientes comandos permiten ejecutar el contrato y realizar cambios en él:

Para Linux :
comando para crear una propiedad

```bash
near call <your deployed contract> createHouse '{"price": number, "description": string, "location": string, "rooms": number, "toilets": number, "size": number}' --account-id <username>.testnet --deposit amount
```

comando para crear una propiedad para alquiler

```bash
near call <your deployed contract> createHouse '{"initialCost":number, "price": number, "description": string, "location": string, "rooms": number, "toilets": number, "size": number}' --account-id <username>.testnet --deposit amount
```

comando para obtener la cantidad de casas registradas

```bash
near call <your deployed contract> getHouses --account-id <username>.testnet
```

comando para obtener el listado de casas registradas

```bash
near call <your deployed contract> getNumHouses --account-id <username>.testnet
```

comando para obtener la cantidad de casas registradas destinadas al alquiler

```bash
near call <your deployed contract> getNumHousesRent --account-id <username>.testnet
```

comando para obtener el listado de casas registradas destinadas al alquiler

```bash
near call <your deployed contract> getHousesRent --account-id <username>.testnet
```

🤖 Test 
==================

Las pruebas son parte del desarrollo, luego, para ejecutar las pruebas en el contrato inteligente , debe ejecutar el siguiente comando:

    yarn test


==============================================

  [create-near-app]: https://github.com/near/create-near-app
  [Node.js]: https://nodejs.org/en/download/package-manager/
  [NEAR accounts]: https://docs.near.org/docs/concepts/account
  [NEAR Wallet]: https://wallet.testnet.near.org/
  [near-cli]: https://github.com/near/near-cli
  [NEAR test account]: https://docs.near.org/docs/develop/basics/create-account#creating-a-testnet-account
  [nvm]: https://github.com/nvm-sh/nvm
  [UX/UI]: https://www.figma.com/proto/GqP5EF5zRZRvAv3HoaSsuN/uniwap?node-id=39%3A2300&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=39%3A2300&hide-ui=1
  [UX/UI]: https://www.figma.com/proto/0dZLC0WI1eVsfjeKu3T8J8/Garant%C3%ADzame?node-id=2%3A8&scaling=scale-down-width&page-id=0%3A1&starting-point-node-id=2%3A8
