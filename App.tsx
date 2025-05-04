import { PaperProvider } from 'react-native-paper';

import Application from './src/navigators/Application.tsx';
import { FavoritesProvider } from './src/hooks/useFavorites.tsx';

export default function App() {
  return (
    <FavoritesProvider>
      <PaperProvider>
        <Application />
      </PaperProvider>
    </FavoritesProvider>
  );
}
