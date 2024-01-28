# Steps to a maybe successful React repo

1. Manage NodeJS environments with nvm
    > Windows: https://winget.run/pkg/CoreyButler/NVMforWindows

    > MacOs: https://formulae.brew.sh/formula/nvm

    > https://github.com/nvm-sh/nvm#installing-and-updating
2. Use PNPM instead of npm
    > ```npm install -g pnpm```
    
    a. Then run ```pnpm setup``` and restart vs code or shell session

    b. Set up a pnpm-workspace.yaml file and a package.json with ```pnpm init```
3. Set up healthy typescript eslint and prettier configurations

    a. Run ```pnpm install --save-dev eslint-config-prettier``` to remove built-in prettier configurations

    b. Set up prettierrc and ignore files

    c. Set up root eslintrc. Extend project eslintrc files from this.

4. Define a set of recommended vs code extensions for the workspace
    > https://code.visualstudio.com/docs/editor/extension-marketplace#_workspace-recommended-extensions

    > esbenp.prettier-vscode

    > dbaeumer.vscode-eslint

    > yoavbls.pretty-ts-errors

    > ms-vscode.vscode-typescript-next

    > ms-playwright.playwright

    > Firefox users: firefox-devtools.vscode-firefox-debug

    > eamodio.gitlens

    > dsznajder.es7-react-js-snippets

    > planbcoding.vscode-react-refactor

    > wix.vscode-import-cost

    > burkeholland.simple-react-snippets

5. Define a workspace tsconfig then extend it in each project

6. Use pnpm create vite to create react projects. Use pnpm init for libraries.

    a. Ensure vite config is at the root of the repo and is piped into commands (```vite run --config ../../vite.config.js```)

6. Install vitest ontop of jest configs for each project with tests

7. For React projects with tests, install testing-library/react ```pnpm install --save-dev @testing-library/react```

    a. In addition, build a common wrapper at our root to render localization, theming, etc (test-utils.tsx)
