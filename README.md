## Dogstudio Next Starter

## Getting Started

### WordPress Setup (Optional; Skip to Cloning the project)
1. Download & Install Bitnami-Wordpress
This failed because of some complication with Mac OSX Big Sur

2. Download & install “Local” from WP Engine instad

https://wpengine.com/local/#download

3. Create a dummy site name ‘foobar’ on Local and run it with default settings.

http://foobar.local/

4. Once the default site is running, now Login with your WP Credentials to the CMS 

http://foobar.local/wp-admin

5. Visit Plugin Section and Install a plugin Called GraphQL

6. After installation, make sure you have GraphQL IDE to create/test GraphQL Queries.

7. Create .env.local file and add 

<!-- WORDPRESS_GRAPHQL_ENDPOINT="http://foobar.local/graphql" -->
WP_URL = "http://foobar.local/graphql"

### Clone the project

```bash
git clone git@github.com:Keshavdulal/dogstudio-next-starter.git
```

### Package Installation and Running the local server
```bash
cd dogstudio-next-starter
npm i
npm run dev
```