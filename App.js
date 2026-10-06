import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const [likes, setLikes] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={require('./assets/icon.png')} style={styles.avatar} />
        <Text style={styles.name}>Namgay Lhazin Choden</Text>
        <Text style={styles.subtitle}>BE Information Technology · Year 3</Text>
        <Text style={styles.bio}>I like to do nothing at all. Not the essence of slacking off but just being at the brink of non-existence until I am being percieved. I'd like to build an online pantry where it also works as a kitchen buddy where it fetches recipes for you</Text>

        <View style={styles.likesRow}>
          <Ionicons name="heart" size={22} color="#d64545" />
          <Text style={styles.likesText}>{likes} likes</Text>
        </View>

        {/* Task 3: only drawn when likes is 10 or more */}
        {likes >= 10 && <Text style={styles.popular}>You're popular!</Text>}

        <View style={styles.row}>
          {/* Task 4: style is a function that receives `pressed` */}
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={() => setLikes(likes + 1)}
          >
            <Ionicons name="arrow-up" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Upvote</Text>
          </Pressable>

          {/* Task 1: Math.max stops the count going below 0 */}
          <Pressable
            style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            onPress={() => setLikes(Math.max(0, likes - 1))}
          >
            <Ionicons name="arrow-down" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Downvote</Text>
          </Pressable>

          {/* Task 2: Reset button, different colour, same icon-and-label layout */}
          <Pressable
            style={({ pressed }) => [styles.button, styles.resetButton, pressed && styles.pressed]}
            onPress={() => setLikes(0)}
          >
            <Ionicons name="refresh" size={22} color="#fff" />
            <Text style={styles.buttonLabel}>Reset</Text>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
  },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#666', marginTop: 4 },
  bio: { fontSize: 15, textAlign: 'center', marginTop: 12, lineHeight: 22 },
  likesRow: { flexDirection: 'row', alignItems: 'center', gap: 6, marginTop: 20 },
  likesText: { fontSize: 18 },
  popular: { fontSize: 16, fontWeight: '600', color: '#2f9e44', marginTop: 8 },
  row: { flexDirection: 'row', gap: 12, marginTop: 12 },
  button: {
    backgroundColor: '#2f6fed',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    minWidth: 84,
  },
  resetButton: { backgroundColor: '#e8590c' }, // listed after `button`, so it overrides the blue
  pressed: { opacity: 0.6 },
  buttonLabel: { color: '#fff', fontSize: 12, fontWeight: '600', marginTop: 2 },
});