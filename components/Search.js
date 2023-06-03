import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';

const SearchableList = () => {
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState(DATA);

  const handleSearch = (text) => {
    setSearch(text);
    const filtered = DATA.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <View>
      <SearchBar
        placeholder="Search..."
        onChangeText={handleSearch}
        value={search}
      />
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.title}</Text>
        )}
      />
    </View>
  );
};

const DATA = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  // Add more data objects as needed
];

export default SearchableList;