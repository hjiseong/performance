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
