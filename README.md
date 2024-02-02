# BilgeAdam Fashion Products - Detailed Project Overview

## Installation

- **Install Dependancies:**

      yarn install

  This command installs the project dependencies.

- **Development Server:**

        yarn run dev

  This command starts the development server. Open http://localhost:3000 in your browser to view the application.

- **Build:**

        yarn run build

  This command builds the production-ready version of the application.

- **Start:**:

        yarn start

  This command starts the production server to serve the built application.

- **Testing:**

        yarn test


  This command runs the tests for your project.

## Project Core Structure

### Components

### Routes

- **/productList:**
  - Renders the ProductList component.
  - Displays a list of products with responsive design.
  - Implements filtering and sorting functionalities.
- **/statistics:**
  - Renders the Statistics component.
  - Presents brand-related statistical information based on specific questions.

#### ProductList

- Displays a list of fashion products.
- Handles filtering and sorting functionalities.
- Utilizes the `useGetComputedData` hook for computing and sorting data.
- Uses custom UI components (ResultCounts, SearchBox, SortBox) for improved user interaction.
- Implements responsive design, including a drawer for mobile filtering.

#### Statistics

- Presents statistical information about the product data.
- Leverages the `useGetStatistics` hook to calculate brand-related statistics.
- Displays the information in a structured format using the StatisticItem component.

#### Custom UI Components

- PropButton, TextButton, CollapseListItem:
  - Designed for flexibility and reusability.
  - Follows Material-UI styling conventions for consistency.

### Hooks

#### useGetComputedData

- Responsible for computing and sorting product data based on applied filters and sorting parameters.
- Utilizes `useMemo` to efficiently compute data only when dependencies (data, filters, sorts) change.
- Filters products based on price and size criteria.
- Sorts the filtered products based on sorting parameters.

#### useGetStatistics

- Calculates statistical information about the product data.
- Determines brands with the most affordable products, the largest variety of sizes, and the lowest average price for a specific size.
- Uses `useMemo` to optimize calculations and reduce unnecessary recomputations.

### Modules

#### FetchAndEnsureData (DataProvider)

- Ensures data fetching and provides a context for sharing data.
- Fetches product data using the Axios instance configured in axios.js.
- Utilizes React context to share data across components.
- Handles loading and error states during data fetching.

#### Axios Configuration (axios.js)

- Configures an Axios instance for modularity and ease of configuration.
- Handles data fetching from the provided URL.

## Detailed Development Process

### 1. Initialization and Data Fetching

- Application starts with the initialization of the Next.js project.
- Axios is configured in axios.js to fetch data from the provided JSON URL (fid-task-4-ffront-products.json).
- Used environment variables (`NEXT_PUBLIC_DATA_URL` and `NEXT_PUBLIC_CORS_PROXY`) to store sensitive information like API URLs and CORS proxy, separating configuration from the codebase for security and easy configuration changes.
- The FetchAndEnsureData module ensures data fetching, and the fetched data is made available globally through React context.

### 2. ProductList Component

#### Data Processing

- The ProductList component uses the `useGetComputedData` hook for data processing.
- The hook computes and sorts product data based on applied filters and sorting parameters.
- It efficiently filters products based on price and size criteria and sorts the filtered products.

#### Responsive Design

- The component is designed with responsive layouts for various screen sizes.
- Utilizes custom UI components (ResultCounts, SearchBox, SortBox) for improved user interaction.
- Implements a filtering drawer for mobile devices to enhance user accessibility.

#### Filtering and Sorting

- Provides functionality to filter products by size and sort by price.
- User interactions trigger the corresponding functions for filtering and sorting.

#### Rendering

- Renders the product list based on the processed data.
- Displays the list with a responsive design, adapting to different device widths.

### 3. Statistics Component

#### Data Calculation

- The Statistics component utilizes the `useGetStatistics` hook for statistical calculations.
- Computes information about brands with the most affordable products, the largest variety of sizes, and the lowest average price for size "32".

#### Rendering

- Displays the calculated statistical information in a structured format.
- Uses custom UI components (StatisticItem) for presentation.

### 4. Custom UI Components

- PropButton, TextButton, CollapseListItem:
  - Designed for flexibility and reusability.
  - Follows Material-UI styling conventions for consistency.
  - Used across the application to maintain a consistent visual appeal.

### 5. Testing

- Comprehensive unit tests using Jest and React Testing Library.
- Covers edge cases, such as empty data scenarios and specific filter combinations.
- Integration tests to ensure different parts of the application work seamlessly.

### 6. Styling and UI/UX

- Applies styles using Material-UI conventions.
- Ensures a consistent and visually appealing design across the application.
- Prioritizes responsive design for a seamless user experience on various devices.

### Algorithms Used

#### 1. useGetComputedData Hook

**Objective:** Compute and sort product data based on filters and sorting parameters.

- Utilizes `useMemo` to optimize computation and recompute only on relevant changes.
- Filters products based on specified price and size criteria.
- Sorts the filtered products based on user-selected sorting parameters.

#### 2. useGetStatistics Hook

**Objective:** Calculate brand-related statistical information.

- Determines brands with the most affordable products, the largest variety of sizes, and the lowest average price for a specific size.
- Uses `useMemo` to optimize calculations and reduce unnecessary recomputations.
