import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { colors } from "../ui/colors";
import { IMusicData, musicData } from "../utils/data";

type Props = {
  selectedTrack: number | null;
  scrollX: Animated.Value;
  flatListRef: React.MutableRefObject<FlatList | null>;
};

const { width } = Dimensions.get("window");

const MusicTracksSlider = ({ selectedTrack, scrollX, flatListRef }: Props) => {
  const renderMusicTracks = ({ item }: { item: IMusicData }) => {
    return (
      <Animated.View style={styles.musicTrackContainer}>
        <View style={[styles.musicTrackBox, styles.elevation]}>
          <Image
            source={{ uri: item.albumCover.uri }}
            style={styles.albumCover}
          />
          <View style={styles.artistContainer}>
            <Text style={styles.songName}>{item.title}</Text>
            <Text style={styles.artistName}>{item.artist}</Text>
          </View>
        </View>
      </Animated.View>
    );
  };
  return (
    <Animated.FlatList
      ref={flatListRef}
      data={musicData}
      renderItem={renderMusicTracks}
      keyExtractor={(item) => item.id}
      initialScrollIndex={selectedTrack}
      onScrollToIndexFailed={(info) => info.index}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
    />
  );
};

const styles = StyleSheet.create({
  musicTrackContainer: {
    width: width,
    maxHeight: "90%",
    justifyContent: "center",
    alignItems: "center",
  },

  musicTrackBox: {
    gap: 20,
    width: width,
    height: 350,
  },
  albumCover: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },

  elevation: {
    elevation: 5,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
  },

  artistContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  songName: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  artistName: {
    color: colors.grey,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default MusicTracksSlider;
