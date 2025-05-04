import { TextInput } from 'react-native-paper';
import { useState, useEffect, useRef } from 'react';
import { styles } from '@/components/Search/styles/SearchStyles';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/navigators/types';
import { RecipeTypes } from '@/screens/MainScreen/types/RecipeTypes';
import { Keyboard, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type SearchProps = {
  recipes: RecipeTypes[];
};

export default function Search({ recipes }: SearchProps) {
  const [text, setText] = useState<string>('');
  const [showResults, setShowResults] = useState(false);
  const [filteredRecipes, setFilteredRecipes] = useState<RecipeTypes[]>([]);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const searchRef = useRef(null);

  useEffect(() => {
    if (text.length > 0) {
      const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredRecipes(filtered);
    } else {
      setFilteredRecipes([]);
    }
  }, [text, recipes]);

  const handleRecipeSelect = (recipe: RecipeTypes) => {
    setText('');
    navigation.navigate('RecipeDetailScreen', { recipe });
  };

  useEffect(() => {
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setShowResults(false);
        Keyboard.dismiss();
      }
    );

    return () => {
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleOutsidePress = () => {
    setShowResults(false);
    Keyboard.dismiss();
  };

  const handleInputFocus = () => {
    setShowResults(true);
  };

  return (
    <TouchableWithoutFeedback onPress={handleOutsidePress}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => {}}>
          <View>
            <TextInput
              ref={searchRef}
              value={text}
              onChangeText={setText}
              onFocus={handleInputFocus}
              style={styles.search}
              placeholder="Поиск рецепта"
              placeholderTextColor="#888"
              underlineColor="transparent"
              activeUnderlineColor="transparent"
              cursorColor="#000000"
              mode={'flat'}
              left={<TextInput.Icon icon="magnify" />}
            />
            {showResults && text.length > 0 && (
              <View style={styles.resultsContainer}>
                <ScrollView
                  keyboardShouldPersistTaps="handled"
                  scrollEnabled={false}
                  nestedScrollEnabled
                >
                  {filteredRecipes.map(item => (
                    <TouchableOpacity
                      key={item.id.toString()}
                      style={styles.resultItem}
                      onPress={() => {
                        handleRecipeSelect(item);
                        setShowResults(false);
                      }}
                    >
                      <Text style={styles.resultText}>{item.name}</Text>
                    </TouchableOpacity>
                  ))}
                  {filteredRecipes.length === 0 && (
                    <Text style={styles.noResultsText}>Ничего не найдено</Text>
                  )}
                </ScrollView>
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
}
