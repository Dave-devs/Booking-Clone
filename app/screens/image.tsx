import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/150',
];

const App = () => {
    const rows = [
        images.slice(0, 2),  // Top row (2 images)
        images.slice(2, 5),  // Bottom row (3 images)
    ];

    return (
        <FlatList
            data={rows}
            renderItem={({ item, index }) => (
                <View style={styles.row}>
                    {item.map((imageUri, imgIndex) => (
                        <View
                            key={imgIndex}
                            style={[
                                styles.column,
                                item.length === 2 ? styles.twoColumn : styles.threeColumn,
                                { width: width / (item.length === 2 ? 2 : 3) - 10 },
                            ]}
                        >
                            <Image source={{ uri: imageUri }} style={styles.image} />
                            {index === 1 && imgIndex === item.length - 1 && (
                                <View style={styles.overlay}>
                                    <Text style={styles.overlayText}>+40</Text>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    column: {
        position: 'relative',
        height: 150,  // Adjust height as needed
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    overlayText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    twoColumn: {
        width: width / 2 - 10,  // Adjust width for 2 columns
    },
    threeColumn: {
        width: width / 3 - 10,  // Adjust width for 3 columns
    },
});

export default App;
