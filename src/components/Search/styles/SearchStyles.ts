import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  search: {
    position: 'relative',
    backgroundColor: '#ffffff',
    width: 360,
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 15,
    elevation: 5,
  },
  container: {
    position: 'relative',
    zIndex: 100,
  },
  resultsContainer: {
    position: 'absolute',
    top: 70,
    left: 16,
    right: 16,
    maxHeight: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  resultItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  resultText: {
    fontSize: 16,
  },
  noResultsText: {
    padding: 12,
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  sectionHeader: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f5f5f5',
    fontWeight: 'bold',
    color: '#333',
  },
});