# Create folder
mkdir frontend
cd frontend

# Initialize project
npm init -y

# Add .gitignore
touch .gitignore
echo "logs" >> .gitignore
echo "*.log" >> .gitignore
echo "npm-debug.log*" >> .gitignore
echo "yarn-debug.log*" >> .gitignore
echo "yarn-error.log*" >> .gitignore
echo "lerna-debug.log*" >> .gitignore
echo "report.[0-9]*.[0-9]*.[0-9]*.[0-9]*.json" >> .gitignore
echo "pids" >> .gitignore
echo "*.pid" >> .gitignore
echo "*.seed" >> .gitignore
echo "*.pid.lock" >> .gitignore
echo "lib-cov" >> .gitignore
echo "coverage" >> .gitignore
echo "*.lcov" >> .gitignore
echo ".nyc_output" >> .gitignore
echo ".grunt" >> .gitignore
echo "bower_components" >> .gitignore
echo ".lock-wscript" >> .gitignore
echo "build/Release" >> .gitignore
echo "node_modules/" >> .gitignore
echo "jspm_packages/" >> .gitignore
echo "typings/" >> .gitignore
echo "*.tsbuildinfo" >> .gitignore
echo ".npm" >> .gitignore
echo ".eslintcache" >> .gitignore
echo ".rpt2_cache/" >> .gitignore
echo ".rts2_cache_cjs/" >> .gitignore
echo ".rts2_cache_es/" >> .gitignore
echo ".rts2_cache_umd/" >> .gitignore
echo ".node_repl_history" >> .gitignore
echo "*.tgz" >> .gitignore
echo ".yarn-integrity" >> .gitignore
echo ".env" >> .gitignore
echo ".env.test" >> .gitignore
echo ".cache" >> .gitignore
echo ".next" >> .gitignore
echo ".nuxt" >> .gitignore
echo "dist" >> .gitignore
echo ".cache/" >> .gitignore
echo ".vuepress/dist" >> .gitignore
echo ".serverless/" >> .gitignore
echo ".fusebox/" >> .gitignore
echo ".dynamodb/" >> .gitignore
echo ".tern-port" >> .gitignore

# Add packages
yarn add react
yarn add react-dom
yarn add react-router-dom
yarn add react-scripts

# Add typescript packages
yarn add -D typescript
yarn add -D @types/react
yarn add -D @types/react-dom
yarn add -D @types/react-router-dom

# Add prettier package
yarn add prettier

# Add prettier config file
touch .prettierrc

# Add eslint package
yarn add eslint

# Add eslint-prettier package
yarn add eslint-config-prettier
yarn add eslint-plugin-prettier

# Add typescript eslint helper package
yarn add -D @typescript-eslint/eslint-plugin
yarn add -D @typescript-eslint/parser

# Add eslint config file
touch .eslintrc.js
echo 'module.exports = {' >> .eslintrc.js
echo '  parser: "@typescript-eslint/parser",' >> .eslintrc.js
echo '  parserOptions: {' >> .eslintrc.js
echo '    sourceType: "module",' >> .eslintrc.js
echo '    ecmaFeatures: {' >> .eslintrc.js
echo '      jsx: true,' >> .eslintrc.js
echo '    },' >> .eslintrc.js
echo '  },' >> .eslintrc.js
echo '  settings: {' >> .eslintrc.js
echo '    react: {' >> .eslintrc.js
echo '      version: "detect",' >> .eslintrc.js
echo '    },' >> .eslintrc.js
echo '  },' >> .eslintrc.js
echo '  extends: [' >> .eslintrc.js
echo '    "plugin:react/recommended",' >> .eslintrc.js
echo '    "plugin:@typescript-eslint/recommended",' >> .eslintrc.js
echo '    "plugin:prettier/recommended",' >> .eslintrc.js
echo '  ],' >> .eslintrc.js
echo '  rules: {' >> .eslintrc.js
echo '    "prettier/prettier": 0' >> .eslintrc.js
echo '  }' >> .eslintrc.js
echo '};' >> .eslintrc.js

# Add eslintignore file
touch .eslintignore
echo 'node_modules/*' >> .eslintignore
echo 'dist/*' >> .eslintignore
echo 'asset/* ' >> .eslintignore

# Add precommit hook packages
yarn add husky
yarn add lint-staged

# Add lint-staged config file
touch .lintstagedrc.json
echo '{' >> .lintstagedrc.json
echo '  "src/**/*.{js,ts,tsx}": ["eslint --fix"],' >> .lintstagedrc.json
echo '  "src/**": ["prettier --write ."]' >> .lintstagedrc.json
echo '}' >> .lintstagedrc.json

# Add husky config file
mkdir .husky
touch .husky/.gitignore
touch .husky/pre-commit
echo '#!/bin/sh' >> .husky/pre-commit
echo '. "$(dirname "$0")/_/husky.sh"' >> .husky/pre-commit
echo '' >> .husky/pre-commit
echo 'npx lint-staged && echo "[Husky] pre-commit"' >> .husky/pre-commit

# Add craco packages
yarn add @craco/craco
yarn add -D craco-alias

# Add craco config file
touch craco.config.js
echo 'module.exports = {' >> craco.config.js
echo '  plugins: [' >> craco.config.js
echo '    {' >> craco.config.js
echo '      plugin: require("craco-alias"),' >> craco.config.js
echo '      options: {' >> craco.config.js
echo '        source: "tsconfig",' >> craco.config.js
echo '        baseUrl: ".",' >> craco.config.js
echo '        tsConfigPath: "tsconfig.paths.json",' >> craco.config.js
echo '        debug: false,' >> craco.config.js
echo '      },' >> craco.config.js
echo '    },' >> craco.config.js
echo '  ],' >> craco.config.js
echo '};' >> craco.config.js

# Add typescript config file
touch tsconfig.json
echo '{' >> tsconfig.json
echo '  "extends": "./tsconfig.paths.json",' >> tsconfig.json
echo '  "compilerOptions": {' >> tsconfig.json
echo '    "target": "es5",' >> tsconfig.json
echo '    "module": "esnext",' >> tsconfig.json
echo '    "jsx": "react-jsx",' >> tsconfig.json
echo '    "outDir": "dist",' >> tsconfig.json
echo '    "strict": true,' >> tsconfig.json
echo '    "esModuleInterop": true,' >> tsconfig.json
echo '    "skipLibCheck": true,' >> tsconfig.json
echo '    "forceConsistentCasingInFileNames": true,' >> tsconfig.json
echo '    "declaration": true,' >> tsconfig.json
echo '    "lib": ["dom", "dom.iterable", "esnext"],' >> tsconfig.json
echo '    "allowJs": true,' >> tsconfig.json
echo '    "allowSyntheticDefaultImports": true,' >> tsconfig.json
echo '    "noFallthroughCasesInSwitch": true,' >> tsconfig.json
echo '    "moduleResolution": "node",' >> tsconfig.json
echo '    "resolveJsonModule": true,' >> tsconfig.json
echo '    "isolatedModules": true,' >> tsconfig.json
echo '    "noEmit": true' >> tsconfig.json
echo '  },' >> tsconfig.json
echo '  "include": ["src", "craco.config.js"],' >> tsconfig.json
echo '  "exclude": ["node_modules", "dist"]' >> tsconfig.json
echo '}' >> tsconfig.json

# Add tyupescript path alias file
touch tsconfig.paths.json
echo '{' >> tsconfig.paths.json
echo '  "compilerOptions": {' >> tsconfig.paths.json
echo '    "baseUrl": ".",' >> tsconfig.paths.json
echo '    "paths": {' >> tsconfig.paths.json
echo '      "@src/*": ["src/*"],' >> tsconfig.paths.json
echo '      "@apis/*": ["src/apis/*"],' >> tsconfig.paths.json
echo '      "@common/*": ["src/common/*"],' >> tsconfig.paths.json
echo '      "@components/*": ["src/components/*"],' >> tsconfig.paths.json
echo '      "@hooks/*": ["src/hooks/*"],' >> tsconfig.paths.json
echo '      "@layouts/*": ["src/layouts/*"],' >> tsconfig.paths.json
echo '      "@pages/*": ["src/pages/*"],' >> tsconfig.paths.json
echo '      "@store/*": ["src/store/*"]' >> tsconfig.paths.json
echo '    }' >> tsconfig.paths.json
echo '  }' >> tsconfig.paths.json
echo '}' >> tsconfig.paths.json

# Add environment package
yarn add dotenv

# Add environment sample format file
touch .env.sample

# Add public folder
mkdir public

# Add public/index.html file
touch public/index.html
echo '<!DOCTYPE html>' >> public/index.html
echo '<html lang="en">' >> public/index.html
echo '  <head>' >> public/index.html
echo '    <meta charset="utf-8" />' >> public/index.html
echo '    <meta' >> public/index.html
echo '      name="viewport"' >> public/index.html
echo '      content="width=device-width, initial-scale=1, shrink-to-fit=no"' >> public/index.html
echo '    />' >> public/index.html
echo '    <meta name="theme-color" content="#000000" />' >> public/index.html
echo '    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />' >> public/index.html
echo '    <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />' >> public/index.html
echo '    <title>React App</title>' >> public/index.html
echo '  </head>' >> public/index.html
echo '  <body>' >> public/index.html
echo '    <noscript> You need to enable JavaScript to run this app. </noscript>' >> public/index.html
echo '    <div id="root"></div>' >> public/index.html
echo '  </body>' >> public/index.html
echo '</html>' >> public/index.html

# Add public/manifest.json file
touch public/manifest.json
echo '{' >> public/manifest.json
echo '  "short_name": "React App",' >> public/manifest.json
echo '  "name": "Create React App Sample",' >> public/manifest.json
echo '  "icons": [' >> public/manifest.json
echo '    {' >> public/manifest.json
echo '      "src": "favicon.ico",' >> public/manifest.json
echo '      "sizes": "64x64 32x32 24x24 16x16",' >> public/manifest.json
echo '      "type": "image/x-icon"' >> public/manifest.json
echo '    }' >> public/manifest.json
echo '  ],' >> public/manifest.json
echo '  "start_url": "./index.html",' >> public/manifest.json
echo '  "display": "standalone",' >> public/manifest.json
echo '  "theme_color": "#000000",' >> public/manifest.json
echo '  "background_color": "#ffffff"' >> public/manifest.json
echo '}' >> public/manifest.json

# Add package.json script
sed '7,1000d' package.json >> packagesample.json
echo '    "start": "craco start",' >> packagesample.json
echo '    "build": "craco build",' >> packagesample.json
echo '    "test": "craco test",' >> packagesample.json
echo '    "lint": "eslint \"**/*.{js,ts,tsx}\" --fix",' >> packagesample.json
echo '    "predeploy": "yarn build",' >> packagesample.json
echo '    "deploy": "gh-pages -d build",' >> packagesample.json
echo '    "tsc": "rm -rf dist && tsc --project ./tsconfig.dist.json",' >> packagesample.json
echo '    "prepare": "husky install"' >> packagesample.json
sed '1,7d' package.json >> packagesample.json
mv packagesample.json package.json

# Add project folders
mkdir src
mkdir src/apis
mkdir src/common
mkdir src/components
mkdir src/hooks
mkdir src/layouts
mkdir src/pages
mkdir src/store

# Add react-app-env.d.ts file
touch src/react-app-env.d.ts
echo '/// <reference types="react-scripts" />' >> src/react-app-env.d.ts

# Add src/index.tsx file
touch src/index.tsx
echo 'import React from "react";' >> src/index.tsx
echo 'import ReactDOM from "react-dom";' >> src/index.tsx
echo 'import App from "./App";' >> src/index.tsx
echo '' >> src/index.tsx
echo 'ReactDOM.render(' >> src/index.tsx
echo '  <React.StrictMode>' >> src/index.tsx
echo '    <App />' >> src/index.tsx
echo '  </React.StrictMode>,' >> src/index.tsx
echo '  document.getElementById("root")' >> src/index.tsx
echo ');' >> src/index.tsx

# Add src/App.tsx file
touch src/App.tsx
echo 'import React, { ReactElement } from "react";' >> src/App.tsx
echo 'import { Route, HashRouter } from "react-router-dom";' >> src/App.tsx
echo 'import dotenv from "dotenv";' >> src/App.tsx
echo 'dotenv.config();' >> src/App.tsx
echo '' >> src/App.tsx
echo 'const repository = "template-react";' >> src/App.tsx
echo '' >> src/App.tsx
echo 'export default function App(): ReactElement {' >> src/App.tsx
echo '  return (' >> src/App.tsx
echo '    <HashRouter basename={repository}>' >> src/App.tsx
echo '      <Route exact path="/" component={() => <>Home</>} />' >> src/App.tsx
echo '      <Route path="/login" component={() => <>Login</>} />' >> src/App.tsx
echo '    </HashRouter>' >> src/App.tsx
echo '  );' >> src/App.tsx
echo '}' >> src/App.tsx
