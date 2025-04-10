import Application from '@/navigators/Application';
import { PaperProvider } from 'react-native-paper';
import { FavoritesProvider } from '@/hooks/useFavorites';

export default function App() {
  return (
    <FavoritesProvider>
      <PaperProvider>
        <Application />
      </PaperProvider>
    </FavoritesProvider>
  );
}
