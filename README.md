# prac

- Nextjs
- TypeScript
- Apollo Client
- React-testing-library
- Next-page-tester
- Tailwind CSS
- Mock Service Worker(MSW)

1.  Nextjs Project 新規作成

    1-1. yarn install 

    ```
    npm install --global yarn
    ```

    ```
    yarn --version
    ```

    1-2. create-next-app

    ```
    npx create-next-app --ts .
    ```

    1-3. Apollo Client + heroicons + cross-fetch のインストール

    ```
    yarn add @apollo/client graphql @apollo/react-hooks cross-fetch @heroicons/react
    ```

    1-4. React-Testing-Library + MSW + next-page-tester のインストール

    ```
    yarn add -D msw next-page-tester jest @testing-library/react @types/jest @testing-library/jest-dom @testing-library/dom babel-jest @babel/core @testing-library/user-event jest-css-modules
    ```

    1-5. Project folder 直下に".babelrc"ファイルを作成して下記設定を追加

    ```
    touch .babelrc
    ```

    ```
    {
        "presets": ["next/babel"]
    }
    ```

    1-6. package.json に jest の設定を追記

    ```
     "jest": {
        "testPathIgnorePatterns": [
            "<rootDir>/.next/",
            "<rootDir>/node_modules/"
        ],
        "moduleNameMapper": {
            "\\.(css)$": "<rootDir>/node_modules/jest-css-modules"
        }
    }
    ```

    1-7. package.json に test script を追記

    ```
    "scripts": {
    ...
    "test": "jest --env=jsdom --verbose"
    },
    ```

    1-8. prettier の設定 : settings で Require Config + Format On Save にチェック

    ```
    touch .prettierrc
    ```

    ```
    {
    "singleQuote": true,
    "semi": false
    }
    ```

2.  Tailwind CSS の導入
    2-1. 必要 module のインストール
    ```
    yarn add tailwindcss@latest postcss@latest autoprefixer@latest
    ```

    2-2. tailwind.config.js, postcss.config.js の生成

    ```
    npx tailwindcss init -p
    ```

    2-3. tailwind.config.js の purge 設定追加
    ```
    module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
    darkMode: false,
    theme: {
    extend: {},
    },
    variants: {
    extend: {},
    },
    plugins: [],
    }
    ```

    2-4. globals.css の編集

    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

3.  Test 動作確認

    3-1. **tests**フォルダと Home.test.tsx ファイルの作成

    ```
    import { render, screen } from '@testing-library/react'
    import '@testing-library/jest-dom/extend-expect'
    import Home from '../pages/index'

    it('Should render title text', () => {
        render(<Home />)
        expect(screen.getByText('Next.js!')).toBeInTheDocument()
    })
    ```

    3-2. yarn test -> テストが PASS するか確認

        ```
        PASS **tests**/Home.test.tsx
        ✓ Should render hello text (20 ms)

        Test Suites: 1 passed, 1 total
        Tests: 1 passed, 1 total
        Snapshots: 0 total
        Time: 1.728 s, estimated 2 s
        ```

4.  GraphQL codegen

    4-1. install modules + init
    ```
    yarn add -D @graphql-codegen/cli
    ```

    ```
    yarn graphql-codegen init
    ```

    ```
    yarn
    ```

    ```
    yarn add -D @graphql-codegen/typescript
    ```
    
    4-2. add queries in queries/queries.ts file

    4-3. generate types automatically
    ```
    yarn gen-types
    ```
